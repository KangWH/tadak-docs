import Link from "next/link";
import Flowchart from "@/app/flowchart";

const overviewFlow = `
  graph LR
    A[refreshLayoutConstraints] --> B[commitLayout]
    B --> C[rebuildKeysIfKeyboardViewSizeChanged]
`;

const normalLayoutFlow = `
  graph TD
    A[viewWillLayoutSubviews] --> B[refreshLayoutConstraints]
    B --> C[super.viewWillLayoutSubviews]
    C --> D{회전 중?}
    D -- 아니오 --> E[commitLayoutIfViewBoundsChanged]
    E --> F{bounds 변경?}
    F -- 예 --> G["commitLayout(updateKeys: false)"]
    D -- 예 --> H[건너뜀]
    I[viewDidLayoutSubviews] --> J[rebuildKeysIfKeyboardViewSizeChanged]
    J --> K{keyboardView 크기 변경?}
    K -- 예 --> L[특수키·레이블·layoutKeys]
`;

const rotationFlow = `
  graph TD
    A[viewWillTransition] --> B["pendingTransitionSize = 목표 size"]
    B --> C["refreshLayoutConstraints(for: size)"]
    C --> D[coordinator.animate]
    D --> E["commitLayout(updateKeys: true)"]
    F[viewWillLayoutSubviews] --> G["refreshLayoutConstraints(for: pendingTransitionSize)"]
    G --> H{isTransitionInProgress?}
    H -- 예 --> I[commitLayoutIfViewBoundsChanged 건너뜀]
`;

const oneHandedFlow = `
  graph LR
    A[메뉴에서 모드 변경] --> B[applyOneHandedModeLayoutChange]
    B --> C[updateOneHandedModeConstraints]
    B --> D["commitLayout(updateKeys: true)"]
`;

export default function LayoutLifecyclePage() {
  return (
    <article>
      <p className="text-sm text-gray-500 dark:text-zinc-400 mb-2">
        <Link href="/docs/develop">개발 문서</Link>
        {" / Tadak-iOSext / 레이아웃 lifecycle"}
      </p>
      <h2>레이아웃 lifecycle</h2>
      <p>
        <strong>Tadak-iOSext</strong>의 소프트웨어 키보드는 Auto Layout으로{" "}
        <code>mainView</code>·<code>keyboardView</code>의 크기를 잡고, 각{" "}
        <code>KeyView</code>는 <code>layoutKeys()</code>로 frame을 직접 지정합니다.
        constraint만 바꾼 뒤 시스템 layout을 기다리면 회전·한 손 모드 전환 시 한
        프레임 늦게 그려지므로, 아래 세 단계로 나누어 즉시 반영합니다.
      </p>

      <h3>세 단계</h3>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={overviewFlow} emphasisNodes={["B"]} />
      </div>
      <dl className="my-4 px-4 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
        <dt>
          <code>refreshLayoutConstraints</code>
        </dt>
        <dd>
          키보드 높이·한 손 모드 margin 등 <strong>constraint constant</strong>만
          갱신합니다. frame은 아직 바뀌지 않습니다.
        </dd>
        <dt>
          <code>commitLayout</code>
        </dt>
        <dd>
          <code>mainView.layoutIfNeeded()</code>로 AL을 즉시 반영하고, 필요하면{" "}
          <code>layoutKeys()</code>로 키 frame까지 갱신합니다.
        </dd>
        <dt>
          <code>rebuildKeysIfKeyboardViewSizeChanged</code>
        </dt>
        <dd>
          <code>viewDidLayoutSubviews</code>에서 <code>keyboardView</code> 크기가
          바뀌었을 때 특수 키·레이블을 포함해 <strong>전체 재구성</strong>합니다.
        </dd>
      </dl>

      <h3>상태 (<code>KeyboardLayoutState</code>)</h3>
      <div className="overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-zinc-600">
              <th className="text-left py-2 pr-4">필드</th>
              <th className="text-left py-2">역할</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200 dark:border-zinc-700">
              <td className="py-2 pr-4 font-mono">lastKeyboardViewSize</td>
              <td className="py-2">
                마지막 <code>layoutKeys()</code> 반영 시점의{" "}
                <code>keyboardView</code> 크기. did 단계 중복 rebuild 방지.
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-zinc-700">
              <td className="py-2 pr-4 font-mono">lastSyncedViewBounds</td>
              <td className="py-2">
                마지막 <code>layoutIfNeeded()</code> 시점의 <code>view.bounds</code>
                . bounds 미변경 시 불필요한 sync 생략.
              </td>
            </tr>
            <tr className="border-b border-gray-200 dark:border-zinc-700">
              <td className="py-2 pr-4 font-mono">pendingTransitionSize</td>
              <td className="py-2">
                회전 중 목표 크기. will 단계가 <strong>이전 bounds</strong>로
                constraint를 덮어쓰지 않게 함.
              </td>
            </tr>
            <tr>
              <td className="py-2 pr-4 font-mono">isTransitionInProgress</td>
              <td className="py-2">
                회전 애니메이션 중 will의 중복 <code>commitLayout</code> 방지.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>시나리오: 평소 layout</h3>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={normalLayoutFlow} emphasisNodes={["B", "G", "J"]} />
      </div>
      <p>
        <code>view.bounds</code>와 <code>keyboardView.bounds</code>는 다릅니다. 한
        손 모드처럼 바깥 크기는 그대로인데 <code>keyboardView</code> 폭만 바뀌는
        경우는 이 경로만으로는 부족합니다.
      </p>

      <h3>시나리오: 회전</h3>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={rotationFlow} emphasisNodes={["C", "E"]} />
      </div>
      <p>
        <code>viewWillTransition</code>에서 <strong>목표 size</strong>로 constraint를
        먼저 계산하고, <code>coordinator.animate</code> 블록 안에서{" "}
        <code>commitLayout(updateKeys: true)</code>를 호출해 AL·키 frame이 회전
        애니메이션과 함께 움직입니다.
      </p>

      <h3>시나리오: 한 손 모드</h3>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={oneHandedFlow} emphasisNodes={["D"]} />
      </div>
      <p>
        메뉴에서 모드를 바꿀 때 <code>applyOneHandedModeLayoutChange()</code>가
        constraint와 키 배치를 즉시 반영합니다.{" "}
        <code>view.bounds</code>는 변하지 않으므로 will/did를 기다리지 않습니다.
      </p>

      <h3>시나리오: 플로팅 ↔ 도킹</h3>
      <p>
        <code>viewWillLayoutSubviews</code> 안에서 키 데이터를 전부 지우고{" "}
        <code>createKeys()</code> 후 <code>invalidateKeyboardLayoutCache()</code>를
        호출합니다. 이후 일반 will/did 흐름으로{" "}
        <code>rebuildKeysIfKeyboardViewSizeChanged()</code>가 반드시 실행됩니다.
      </p>

      <h3>구현 파일</h3>
      <ul className="list-disc my-4 pl-8">
        <li>
          <code>Xcode/Tadak-iOSext/Extensions/KeyboardLayoutLifecycle.swift</code>{" "}
          — lifecycle 메서드·상태
        </li>
        <li>
          <code>Xcode/Tadak-iOSext/KeyboardViewController.swift</code> —{" "}
          <code>layoutKeys()</code>, <code>viewWillLayoutSubviews</code>,{" "}
          <code>viewDidLayoutSubviews</code>
        </li>
      </ul>
    </article>
  );
}
