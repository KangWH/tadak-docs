export type LabelType = 'leading' | 'vowel' | 'trailing' | 'consonant' | 'tone' | 'normal';

export interface KeyLabelEntry {
  label: string;
  labelType: LabelType;
  requiresOldHangulFont?: boolean;
}

export interface KeyLabel {
  keyCode: string;
  bottomLabels: KeyLabelEntry[];
  topLabels: KeyLabelEntry[];
}

interface KeyProps {
  labelData: KeyLabel;
}

interface KeyboardProps {
  labelData: KeyLabel[][];
}

function labelColorClass(labelType: LabelType) {
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
    <p className={`m-0 leading-tight text-center flex flex-row justify-center ${props.textClass} gap-x-0.5`}>
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

function Key(props: KeyProps) {
  return (
    <div className="m-0.5 lg:m-0.75 w-9 h-9 md:w-11 md:h-11 lg:w-13.5 lg:h-13.5 flex flex-col justify-center bg-white dark:bg-zinc-900 rounded-lg shadow dark:shadow-white/10 transition-all">
      <LabelRow labels={props.labelData.topLabels} textClass="text-xs md:text-sm lg:text-base" />
      <LabelRow labels={props.labelData.bottomLabels} textClass="text-sm md:text-base lg:text-lg" />
    </div>
  )
}

interface SpecialKeyProps {
  widthClass?: string;
  label: string;
}

function SpecialKey(props: SpecialKeyProps) {
  return (
    <div className={`m-0.5 lg:m-0.75 ${props.widthClass ?? 'w-9 md:w-11 lg:w-13.5'} h-9 md:h-11 lg:h-13.5 flex flex-col justify-center bg-white dark:bg-zinc-900 rounded-lg shadow dark:shadow-white/10 transition-all`}>
      <p className="m-0 leading-tight text-center text-xs md:text-base lg:text-lg select-none">{props.label}</p>
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
          <SpecialKey widthClass="w-14 md:w-17 lg:w-21" label="⌫" />
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-14 md:w-17 lg:w-21" label="⇥" />
          {props.labelData[1].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-16.5 md:w-20 lg:w-24.75" label="⇪" />
          {props.labelData[2].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
          <SpecialKey widthClass="w-16.5 md:w-20 lg:w-24.75" label="↩" />
        </div>
        <div className="flex flex-row">
          <SpecialKey widthClass="w-21.5 md:w-26 lg:w-32.25" label="⇧" />
          {props.labelData[3].map(key => (
            <Key key={key.keyCode} labelData={key} />
          ))}
          <SpecialKey widthClass="w-21.5 md:w-26 lg:w-32.25" label="⇧" />
        </div>
        <div className="flex flex-row">
          <SpecialKey label="fn" />
          <SpecialKey label="⌃" />
          <SpecialKey label="⌥" />
          <SpecialKey widthClass="w-11.5 md:w-14 lg:w-17.25" label="⌘" />
          <SpecialKey widthClass="w-59 md:w-71 lg:w-88.5" label="" />
          <SpecialKey widthClass="w-14 md:w-17 lg:w-21" label="⌘" />
          <SpecialKey widthClass="w-11.5 md:w-14 lg:w-17.25" label="⌥" />
          <SpecialKey widthClass="w-14 md:w-17 lg:w-21" label="⌃" />
        </div>
      </div>
    </div>
  )
}
