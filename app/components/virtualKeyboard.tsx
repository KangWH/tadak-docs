import { Key, KeyLabel, SpecialKey } from "./keyboard";

interface VirtualKeyboardProps {
  keyboardType?: VirtualKeyboardType
  labelData: VirtualKeyLabel[][];
  hideTopLabels?: boolean;
}

export type VirtualKeyContent =
  | { kind: 'label'; labelData: KeyLabel }
  | { kind: 'special'; labelData: SpecialKeyType }
  | { kind: 'empty' }
type SpecialKeyType = 'delete' | 'return' | 'tab' | 'shift' | 'caps' | 'dismiss' | 'emoji' | 'globe'

type VirtualKeyboardType =
  | 'pad13'
  | 'pad11'
  | 'pad9'
  | 'phone'
  | 'keypad'
  | 'keypadWithSyllableBreak'
  | 'tabular'

function getSpecialKeyLabel(type: SpecialKeyType) {
  switch (type) {
  case 'delete': return '⌫'
  case 'return': return '↩'
  case 'tab': return '⇥'
  case 'shift': return '⇧'
  case 'caps': return '⇪'
  case 'dismiss': return '⌄'
  case 'emoji': return '☺'
  case 'globe': return '🌐'
  default: return ''
  }
}

export interface VirtualKeyLabel {
  width?: number;
  content: VirtualKeyContent;
}

export default function VirtualKeyboard(props: VirtualKeyboardProps) {
  const widths = props.labelData.map(row => {
    return row.map(key => key.width ?? 1).reduce((l, r) => l + r, 0)
  })
  const maxWidth = Math.max(...widths)

  let keyboardWidthClass = 'w-80 md:w-100 lg:w-120'
  switch (props.keyboardType) {
  case 'pad13':
    keyboardWidthClass = 'w-136 md:w-170 lg:w-204'
    break
  case 'pad11':
    keyboardWidthClass = 'w-120 md:w-150 lg:w-180'
    break
  case 'pad9':
    keyboardWidthClass = 'w-104 md:w-130 lg:w-156'
    break
  }

  return (
    <div className="-mx-4 -mt-4 p-4 flex flex-row overflow-x-auto">
      <div className={`${keyboardWidthClass} h-44 md:h-55 lg:h-66 p-0.5 lg:p-0.75 bg-gray-200 dark:bg-zinc-700 rounded-lg shadow-lg dark:shadow-white/10 flex`}>
        {(props.keyboardType == 'keypad' || props.keyboardType == 'keypadWithSyllableBreak') ? (
          <div className="flex-1 grid" style={{ gridTemplateRows: `repeat(${props.labelData.length}, 1fr)`, gridTemplateColumns: `repeat(${maxWidth + 2}, 1fr)` }}>
            {props.keyboardType == 'keypad' ? (
              <>
                <SpecialKey widthClass="" label="#123" flexibleSized={true} style={{ gridArea: '1 / 1 / 2 / 2' }} />
                <SpecialKey widthClass="" label="ABC" flexibleSized={true} style={{ gridArea: '2 / 1 / 3 / 2' }} />
                <SpecialKey widthClass="" label="한글" flexibleSized={true} style={{ gridArea: '3 / 1 / 4 / 2' }} />
              </>
            ) : (
              <>
                <SpecialKey widthClass="" label="→" flexibleSized={true} style={{ gridArea: '1 / 1 / 2 / 2' }} />
                <SpecialKey widthClass="" label="#123" flexibleSized={true} style={{ gridArea: '2 / 1 / 3 / 2' }} />
                <SpecialKey widthClass="" label="ABC" flexibleSized={true} style={{ gridArea: '3 / 1 / 4 / 2' }} />
              </>
            )}
            <SpecialKey widthClass="" label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ gridArea: '4 / 1 / 5 / 2' }} />
            <SpecialKey widthClass="" label={getSpecialKeyLabel('delete')} flexibleSized={true} style={{ gridArea: `1 / 5 / 2 / 6` }} />
            <SpecialKey widthClass="" label={getSpecialKeyLabel('return')} flexibleSized={true} style={{ gridArea: `2 / 5 / 4 / 6` }} />
            <SpecialKey widthClass="" label="스페이스" flexibleSized={true} style={{ gridArea: `4 / 5 / 5 / 6` }} />

            <div className="flex flex-col" style={{gridArea: `1 / 2 / ${props.labelData.length + 1} / ${maxWidth + 2}`}}>
              {props.labelData.map((rowData, row) => (
                <div key={row} className="flex-1 flex flex-row">
                  {rowData.map((key, column) => {
                    switch (key.content.kind) {
                      case 'label':
                        return (<Key key={column} labelData={key.content.labelData} hideTopLabels={props.hideTopLabels} flexibleSized={true} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                      case 'special':
                        return (<SpecialKey key={column} label={getSpecialKeyLabel(key.content.labelData)} flexibleSized={true} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                      default:
                      return (<div key={column} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                    }
                  })}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {props.labelData.map((rowData, row) => (
              <div key={row} className="flex-1 flex flex-row">
                {rowData.map((key, column) => {
                  switch (key.content.kind) {
                    case 'label':
                      return (<Key key={column} labelData={key.content.labelData} hideTopLabels={props.hideTopLabels} flexibleSized={true} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                    case 'special':
                      return (<SpecialKey key={column} label={getSpecialKeyLabel(key.content.labelData)} flexibleSized={true} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                    default:
                      return (<div key={column} style={{ flex: `${(key.width ?? 1) / maxWidth} 0 0%` }} />)
                  }
                })}
              </div>
            ))}
            <div className="flex-1 flex flex-row">
              {(props.keyboardType == 'phone' || props.keyboardType == undefined) && (
                <>
                  <SpecialKey widthClass="" label="123" flexibleSized={true} style={{ flex: '1.25 0 0%'}} />
                  <SpecialKey widthClass="" label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: '1.25 0 0%' }} />
                  <SpecialKey widthClass="" label="" flexibleSized={true} style={{ flex: '5 0 0%' }} />
                  <SpecialKey widthClass="" label={getSpecialKeyLabel('return')} flexibleSized={true} style={{ flex: '2.5 0 0%' }} />
                </>
              )}
              {props.keyboardType == 'pad9' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flex: '5.25 0 0%' }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: '1.5 0 0%' }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: '1.5 0 0%' }} />
                </>
              )}
              {props.keyboardType == 'pad11' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label=".?123" flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: '1 0 0%' }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flex: '6.5 0 0%' }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: '1.5 0 0%' }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: '1.5 0 0%' }} />
                </>
              )}
              {props.keyboardType == 'pad13' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: `${4.25/3} 0 0%` }} />
                  <SpecialKey label=".?123" flexibleSized={true} style={{ flex: `${4.25/3} 0 0%` }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: `${4.25/3} 0 0%` }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flex: '6 0 0%' }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: `${4.25/2} 0 0%` }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: `${4.25/2} 0 0%` }} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
