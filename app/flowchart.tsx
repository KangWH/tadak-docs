'use client';

import { useEffect, useId, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface FlowchartProps {
  chart: string;
  /** 강조할 노드 ID (예: `B`, `D`) */
  emphasisNodes?: string[];
}

const NODE_CLASS = {
  emphasis: 'emphasis',
  muted: 'muted',
} as const;

const NODE_STYLES = {
  light: {
    emphasis: 'fill:#f4f4f5,stroke:#d4d4d8,stroke-width:1px,color:#18181b',
    muted: 'fill:#ffffff00,stroke:#ffffff00,stroke-width:0px,color:#61616a',
  },
  dark: {
    emphasis: 'fill:#27272a,stroke:#52525b,stroke-width:1px,color:#f4f4f5',
    muted: 'fill:#00000000,stroke:#00000000,stroke-width:0px,color:#a1a1aa',
  },
} as const;

const NODE_THEME_CSS = `
  .node.${NODE_CLASS.emphasis} .nodeLabel,
  .node.${NODE_CLASS.emphasis} span {
    font-weight: 700 !important;
  }
`;

const MERMAID_THEMES = {
  light: {
    darkMode: false,
    background: '#ffffff',
    primaryColor: '#ffffff',
    primaryTextColor: '#18181b',
    primaryBorderColor: '#d4d4d8',
    secondaryColor: '#e4e4e7',
    tertiaryColor: '#fafafa',
    lineColor: '#71717a',
  },
  dark: {
    darkMode: true,
    background: '#0a0a0a',
    primaryColor: '#27272a',
    primaryTextColor: '#f4f4f5',
    primaryBorderColor: '#52525b',
    secondaryColor: '#3f3f46',
    tertiaryColor: '#18181b',
    lineColor: '#a1a1aa',
  },
} as const;

function usePrefersDark() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(media.matches);

    const onChange = (event: MediaQueryListEvent) => setIsDark(event.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return isDark;
}

function extractNodeIds(chart: string): string[] {
  const ids = new Set<string>();
  const pattern = /\b([A-Za-z][A-Za-z0-9]*)\s*(?:\[|\(|\{)/g;

  for (const match of chart.matchAll(pattern)) {
    ids.add(match[1]);
  }

  return [...ids];
}

function applyNodeStyles(chart: string, emphasisNodes: string[], isDark: boolean): string {
  const styles = isDark ? NODE_STYLES.dark : NODE_STYLES.light;
  const emphasisSet = new Set(emphasisNodes);
  const nodeIds = extractNodeIds(chart);

  const emphasis = nodeIds.filter((id) => emphasisSet.has(id)).join(',');
  const muted = nodeIds.filter((id) => !emphasisSet.has(id)).join(',');

  const classDefs = [
    `classDef ${NODE_CLASS.emphasis} ${styles.emphasis}`,
    `classDef ${NODE_CLASS.muted} ${styles.muted}`,
  ].join('\n');

  const classAssignments = [
    emphasis ? `class ${emphasis} ${NODE_CLASS.emphasis}` : '',
    muted ? `class ${muted} ${NODE_CLASS.muted}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  return [chart.trim(), classDefs, classAssignments].filter(Boolean).join('\n');
}

export default function Flowchart({ chart, emphasisNodes = [] }: FlowchartProps) {
  const isDark = usePrefersDark();
  const [svg, setSvg] = useState<string>('');
  const uniqueId = useId().replace(/:/g, '');
  const renderCountRef = useRef(0);
  const emphasisKey = emphasisNodes.join(',');

  useEffect(() => {
    if (isDark === null) return;

    let cancelled = false;
    const dark = isDark;

    async function renderChart() {
      if (!chart.trim()) return;

      renderCountRef.current += 1;
      const renderId = `mermaid-${uniqueId}-${renderCountRef.current}`;

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          securityLevel: 'loose',
          darkMode: dark,
          themeVariables: dark ? MERMAID_THEMES.dark : MERMAID_THEMES.light,
          themeCSS: emphasisNodes.length > 0 ? NODE_THEME_CSS : undefined,
          htmlLabels: true,
          flowchart: {
            useMaxWidth: false,
            curve: 'basis',
            padding: 8,
            nodeSpacing: 20,
            rankSpacing: 40,
          },
          // 다이어그램 타입별로 각자의 `useMaxWidth`를 갖고 있어, flowchart 설정만으로는
          // classDiagram 등 다른 타입에 적용되지 않는다. 기본값(true)이면 SVG가 컨테이너
          // 너비에 맞춰 축소되어(overflow-x-auto가 무의미해짐) 복잡한 다이어그램의 글자가
          // 지나치게 작아지므로, 실제 크기 그대로 그리고 가로 스크롤로 보게 한다.
          class: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
          state: { useMaxWidth: false },
          er: { useMaxWidth: false },
          gantt: { useMaxWidth: false },
          journey: { useMaxWidth: false },
          pie: { useMaxWidth: false },
        });

        const chartSource =
          emphasisNodes.length > 0 ? applyNodeStyles(chart, emphasisNodes, dark) : chart.trim();

        const { svg: renderedSvg } = await mermaid.render(renderId, chartSource);
        if (cancelled) return;

        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid render failure:', error);
        if (cancelled) return;
        setSvg(`<pre class="text-red-500 text-sm p-4 whitespace-pre-wrap">${chart.trim()}</pre>`);
      }
    }

    renderChart();

    return () => {
      cancelled = true;
    };
  }, [chart, emphasisKey, emphasisNodes, uniqueId, isDark]);

  return (
    // 이 컴포넌트는 대부분 `flex items-center`인 래퍼(예: 회색 배경 박스) 안에서 쓰인다.
    // `items-center`가 기본값인 stretch를 덮어써서, 폭 지정이 없는 flex item은
    // 자기 콘텐츠 크기에 맞춰 커지고(shrink-to-fit) 그 위에 있는 overflow-x-auto가
    // 무력화되어 다이어그램이 래퍼 밖으로 그대로 삐져나온다. `w-full`로 항상 부모
    // 폭에 맞추도록 강제해 overflow-x-auto가 실제로 스크롤을 만들게 한다.
    <div className="w-full overflow-x-auto p-4 text-center">
      {svg ? (
        <div className="inline-block" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        <div className="text-gray-400 dark:text-zinc-500 text-sm animate-pulse py-8">로드 중...</div>
      )}
    </div>
  );
}
