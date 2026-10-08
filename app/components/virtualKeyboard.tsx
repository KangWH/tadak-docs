import { Key, KeyLabel, SpecialKey } from "./keyboard";

interface VirtualKeyboardProps {
  keyboardType?: VirtualKeyboardType
  labelData: VirtualKeyLabel[][];
  hideTopLabels?: boolean;
  narrowTopRow?: boolean;
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

  const isPhoneLayout = ['keypad', 'keypadWithSyllableBreak', 'phone', undefined].includes(props.keyboardType)

  let keyboardWidthClass = 'w-80 md:w-96 lg:w-120'
  let keyboardHeightClass = 'h-40 md:h-48 lg:h-60'
  switch (props.keyboardType) {
  case 'pad13':
    // base width * 14.5, base height * 4.75
    keyboardWidthClass = 'w-145 md:w-174 lg:w-217.5'
    keyboardHeightClass = 'h-47.5 md:h-57 lg:h-71.25'
    break
  case 'pad11':
    // base width * 12.5, base height * 4
    keyboardWidthClass = 'w-125 md:w-156.25 lg:w-187.5'
    break
  case 'pad9':
    // base width * 11.25, base height * 4
    keyboardWidthClass = 'w-112.5 md:w-135 lg:w-168.75'
    break
  }

  let topRowMatrix = <div className={`${props.narrowTopRow ? 'flex-0.75' : 'flex-1'} flex flex-row`}>
    {props.labelData[0].map((key, column) => {
      switch (key.content.kind) {
        case 'label':
          return (<Key key={column} labelData={key.content.labelData} hideTopLabels={props.hideTopLabels} flexibleSized={true} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
        case 'special':
          return (<SpecialKey key={column} label={getSpecialKeyLabel(key.content.labelData)} flexibleSized={true} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
        default:
          return (<div key={column} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
      }
    })}
  </div>

  let mainKeyMatrix = props.labelData.map((rowData, row) => row > 0 && (
    <div key={row} className="flex-1 flex flex-row">
      {rowData.map((key, column) => {
        switch (key.content.kind) {
          case 'label':
            return (<Key key={column} labelData={key.content.labelData} hideTopLabels={props.hideTopLabels} flexibleSized={true} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
          case 'special':
            return (<SpecialKey key={column} label={getSpecialKeyLabel(key.content.labelData)} flexibleSized={true} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
          default:
            return (<div key={column} style={{ flex: `0 0 ${(key.width ?? 1) / maxWidth * 100}%` }} />)
        }
      })}
    </div>
  ))

  return (
    <div className="-mx-4 -mt-4 p-4 flex flex-row overflow-x-auto">
      <div className={`${keyboardWidthClass} ${keyboardHeightClass} p-0.5 lg:p-0.75 bg-gray-200 dark:bg-zinc-700 rounded-lg shadow-lg dark:shadow-white/10 flex transition-[width_height_padding] duration-500`}>
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
              {topRowMatrix}
              {mainKeyMatrix}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col">
            {topRowMatrix}
            {mainKeyMatrix}
            <div className="flex-1 flex flex-row">
              {(props.keyboardType == 'phone' || props.keyboardType == undefined) && (
                <>
                  <SpecialKey widthClass="" label="123" flexibleSized={true} style={{ flex: '0 0 12.5%'}} />
                  <SpecialKey widthClass="" label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: '0 0 12.5%' }} />
                  <SpecialKey widthClass="" label="" flexibleSized={true} style={{ flexGrow: 1 }} />
                  <SpecialKey widthClass="" label={getSpecialKeyLabel('return')} flexibleSized={true} style={{ flex: '0 0 25%' }} />
                </>
              )}
              {props.keyboardType == 'pad9' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: `0 0 ${1/11.25 * 100}%` }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: `0 0 ${1/11.25 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: `0 0 ${1/11.25 * 100}%` }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flexGrow: 1 }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: `0 0 ${1.5/11.25 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: `0 0 ${1.5/11.25 * 100}%` }} />
                </>
              )}
              {props.keyboardType == 'pad11' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: `0 0 ${1/12.5 * 100}%` }} />
                  <SpecialKey label=".?123" flexibleSized={true} style={{ flex: `0 0 ${1/12.5 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: `0 0 ${1/12.5 * 100}%` }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flexGrow: 1 }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: `0 0 ${1.5/12.5 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: `0 0 ${1.5/12.5 * 100}%` }} />
                </>
              )}
              {props.keyboardType == 'pad13' && (
                <>
                  <SpecialKey label={getSpecialKeyLabel('globe')} flexibleSized={true} style={{ flex: `0 0 ${4.25/3/14.5 * 100}%` }} />
                  <SpecialKey label=".?123" flexibleSized={true} style={{ flex: `0 0 ${4.25/3/14.5 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('emoji')} flexibleSized={true} style={{ flex: `0 0 ${4.25/3/14.5 * 100}%` }} />
                  <SpecialKey label="" flexibleSized={true} style={{ flexGrow: 1 }} />
                  <SpecialKey label="123" flexibleSized={true} style={{ flex: `0 0 ${4.25/2/14.5 * 100}%` }} />
                  <SpecialKey label={getSpecialKeyLabel('dismiss')} flexibleSized={true} style={{ flex: `0 0 ${4.25/2/14.5 * 100}%` }} />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
