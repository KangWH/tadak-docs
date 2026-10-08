export type LabelType = 'leading' | 'vowel' | 'trailing' | 'consonant' | 'tone' | 'normal';

export interface KeyLabelEntry {
  label: string;
  labelType?: LabelType;
  requiresOldHangulFont?: boolean;
}

export interface KeyLabel {
  keyCode?: string;
  bottomLabels: KeyLabelEntry[];
  topLabels?: KeyLabelEntry[];
}

interface KeyProps {
  labelData: KeyLabel;
  hideTopLabels?: boolean;
  flexibleSized?: boolean;
  style?: React.CSSProperties;
}

interface KeyboardProps {
  labelData: KeyLabel[][];
}

function labelColorClass(labelType?: LabelType) {
  switch (labelType) {
    case 'leading': return 'text-green-600 dark:text-green-400'
    case 'vowel': return 'text-yellow-700 dark:text-yellow-600'
    case 'trailing': return 'text-red-500 dark:text-rose-500'
    case 'consonant': return 'text-blue-500 dark:text-sky-400'
    case 'tone': return 'text-gray-400 dark:text-zinc-400'
    default: return 'text-black dark:text-white'
  }
}

function LabelRow(props: { labels: KeyLabelEntry[]; textClass: string }) {
  return (
    <p className={`m-0 leading-none lg:leading-5 text-center flex flex-row justify-center ${props.textClass} lg:gap-x-0.5`}>
      {props.labels.length === 0
        ? '\u00A0'
        : props.labels.map((entry, index) => (
            <span
              key={index}
              className={`${labelColorClass(entry.labelType)}${entry.requiresOldHangulFont ? " font-old-hangul" : ""}`}
            >
              {entry.label}
            </span>
          ))}
    </p>
  )
}

export function Key(props: KeyProps) {
  const topLabels = props.labelData.topLabels ?? []
  const bottomLabels = props.labelData.bottomLabels

  const widthClass = props.flexibleSized ? '' : 'w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15'

  return (
    <div className={`p-0.5 lg:p-0.75 ${widthClass} flex transition-[width_height_padding] duration-500`} style={props.style}>
      <div className={`flex-1 flex flex-col justify-center bg-white dark:bg-zinc-900 rounded-lg shadow dark:shadow-white/10`}>
        {(!(props.hideTopLabels ?? false) || topLabels.length > 0) &&
          <LabelRow labels={props.labelData.topLabels ?? []} textClass="text-xs md:text-sm lg:text-base transition-[font-size,line-height] duration-500" />
        }
        <LabelRow labels={bottomLabels} textClass="text-sm md:text-base lg:text-lg transition-[font-size,line-height] duration-500" />
      </div>
    </div>
  )
}

interface SpecialKeyProps {
  widthClass?: string;
  label: string;
  flexibleSized?: boolean;
  style?: React.CSSProperties;
}

export function SpecialKey(props: SpecialKeyProps) {
  const widthClass = props.flexibleSized ? '' : ('h-10 md:h-12 lg:h-15 ' + (props.widthClass ?? 'w-10 md:w-12 lg:w-15'))

  return (
    <div className={`p-0.5 lg:p-0.75 ${widthClass} flex transition-[width_height_padding] duration-500`} style={props.style}>
      <div className={`flex-1 flex flex-col justify-center bg-white dark:bg-zinc-900 rounded-lg shadow dark:shadow-white/10`}>
        <p className="m-0 leading-none text-center text-xs md:text-base lg:text-lg select-none transition-[font-size,line-height] duration-500">{props.label}</p>
      </div>
    </div>
  )
}

export default function Keyboard(props: KeyboardProps) {
  return (
    <div className="-mx-4 -mt-4 p-4 flex flex-row overflow-x-auto">
      <div className="p-0.5 lg:p-0.75 bg-gray-200 dark:bg-zinc-700 rounded-lg shadow-lg dark:shadow-white/10">
        <div className="flex flex-row">
          {props.labelData[0].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
          <SpecialKey widthClass="w-15 md:w-18 lg:w-22.5" label="⌫" />
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-15 md:w-18 lg:w-22.5" label="⇥" />
          {props.labelData[1].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-17.5 md:w-21 lg:w-26.25" label="⇪" />
          {props.labelData[2].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
          <SpecialKey widthClass="w-17.5 md:w-21 lg:w-26.25" label="↩" />
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-22.5 md:w-27 lg:w-33.75" label="⇧" />
          {props.labelData[3].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
          <SpecialKey widthClass="w-22.5 md:w-27 lg:w-33.75" label="⇧" />
        </div>
        <div className="flex flex-row">
          <SpecialKey label="fn" />
          <SpecialKey label="⌃" />
          <SpecialKey label="⌥" />
          <SpecialKey widthClass="w-12.5 md:w-15 lg:w-18.75" label="⌘" />
          <SpecialKey widthClass="w-60 md:w-72 lg:w-90" label="" />
          <SpecialKey widthClass="w-15 md:w-18 lg:w-22.5" label="⌘" />
          <SpecialKey widthClass="w-12.5 md:w-15 lg:w-18.75" label="⌥" />
          <SpecialKey widthClass="w-15 md:w-18 lg:w-22.5" label="⌃" />
        </div>
      </div>
    </div>
  )
}
