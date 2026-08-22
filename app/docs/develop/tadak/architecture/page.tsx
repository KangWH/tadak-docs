import Link from "next/link";
import Flowchart from "@/app/flowchart";

const keyboardDataDiagram = `
classDiagram
    class Keyboard {
        +Metadata metadata
        +Bool supportsOldHangul
        +ProcessorLevel inputProcessorLevel
        +ProcessorLevel outputProcessorLevel
        +InputProcessorData inputProcessorData
        +OutputProcessorData outputProcessorData
    }
    class ProcessorLevel {
        <<enumeration>>
        plain
        basic
        advanced
    }
    class Metadata {
        +String id
        +String name
        +String author
        +Int formatVersion
        +Int dataVersion
        +KeyboardCategory category
        +Set~KeyboardTag~ tags
        +setId(String) Bool
    }
    class KeyboardCategory {
        <<enumeration>>
        twoSet
        threeSet
        moreSet
        dualSet
        romaja
        latin
        otherScript
        symbol
        other
    }
    class KeyboardTag {
        <<enumeration>>
        갈마들이
        모아치기
        공세벌식
        신세벌식
        제주어
        모바일
        제스처
    }

    class InputProcessorData {
        +Dictionary~KeyEvent,KeyEntry~ physicalKeyboardData
        +Dictionary~KeyCode,AdvancedKeyEntry~ advancedPhysicalKeyboardData
        +VirtualKey[] phoneKeyboardData
        +VirtualKey[] padKeyboardData
        +VirtualKey[] miniPadKeyboardData
        +VirtualKey[] largePadKeyboardData
        +VirtualKeyboardType virtualKeyboardType
        +String prefixExpression
        +String postfixExpression
        +HangulCompositionPreservingMode hangulCompositionPreservingMode
        +getVirtualKey(coordinate, deviceType) VirtualKey
        +getLayoutData(deviceType) LayoutData
    }
    class KeyEntry {
        +String actionExpression
        +LabelData labelData
        +PaletteData[] paletteData
        +GestureData[] gestureData
        +Bool onlyDuringComposition
    }
    class AdvancedKeyEntry {
        +String onPressExpression
        +String onReleaseExpression
    }
    class VirtualKey {
        +VirtualKeyData keyData
        +CGFloat width
    }
    class VirtualKeyData {
        <<enumeration>>
        blank
        specialKey
        regularKey
    }
    class LabelData
    class PaletteData
    class GestureData

    class OutputProcessorData {
        +DeleteKeyActions deleteKeyActions
        +TimerAction[] timerActions
        +Dictionary~UInt32,Action~ characterSubstitutionRules
        +LVTRules~Dictionary~ jamoCompositionRules
        +LVTRules~Dictionary~ virtualJamoRules
        +Dictionary~UInt16,ConsonantCarryRule~ consonantCarryRules
        +LVTRules~Dictionary~ compositionSkippingRules
        +Dictionary~UInt16,HangulAutomataRule~ hangulAutomataRules
        +Dictionary~Key,String~ hangulSyllableConversionRules
        +LVTRules~Dictionary~ hangulJamoConversionRules
        +Dictionary~Int,NonHangulAutomataRule~ nonHangulAutomataRules
        +Dictionary~String,ConversionRuleList~ customConversionRules
    }
    class LVTRules~T~ {
        +T leading
        +T vowel
        +T trailing
    }
    class DeleteKeyActions
    class TimerAction
    class JamoCompositionRule
    class ConsonantCarryRule
    class CompositionSkippingRule
    class HangulAutomataRule
    class NonHangulAutomataRule
    class ConversionRule

    Keyboard --> Metadata
    Keyboard --> InputProcessorData
    Keyboard --> OutputProcessorData
    Keyboard --> ProcessorLevel
    Metadata --> KeyboardCategory
    Metadata --> KeyboardTag

    InputProcessorData --> KeyEntry
    InputProcessorData --> AdvancedKeyEntry
    InputProcessorData --> VirtualKey
    VirtualKey --> VirtualKeyData
    KeyEntry --> LabelData
    KeyEntry --> PaletteData
    KeyEntry --> GestureData

    OutputProcessorData --> DeleteKeyActions
    OutputProcessorData --> TimerAction
    OutputProcessorData --> LVTRules
    LVTRules ..> JamoCompositionRule
    LVTRules ..> CompositionSkippingRule
    OutputProcessorData --> ConsonantCarryRule
    OutputProcessorData --> HangulAutomataRule
    OutputProcessorData --> NonHangulAutomataRule
    OutputProcessorData --> ConversionRule
`;

const pipelineDiagram = `
classDiagram
    class KeyboardReceiver {
        -Keyboard keyboard
        -ReceiverOptions options
        -State state
        -TextInputClient client
        -HanjaProvider hanjaProvider
        -InputProcessor inputProcessor
        -OutputProcessor outputProcessor
        -ClientActionProcessor clientActionProcessor
        +physicalKeyPress(KeyEvent) ClientActionProcessorResult
        +physicalKeyRelease(KeyEvent) ClientActionProcessorResult
        +virtualKeyPress(coordinate, deviceType) ClientActionProcessorResult
        +virtualKeyRelease(coordinate, deviceType) ClientActionProcessorResult
        +requestConversion(type) ClientActionProcessorResult
        +replaceKeyboard(Keyboard)
        +getLayoutData(deviceType) LayoutData
    }
    class ReceiverOptions {
        +Bool deleteCompositionFirstOnForwardDelete
        +Bool searchConversionTargetFromRight
        +Bool graveAsWonSymbol
        +Bool enablePeriodShortcut
    }

    class InputProcessor {
        -ProcessorLevel level
        -InputProcessorData data
        -State state
        -InputProcessorOptions options
        +handleKeyPress(KeyEvent) InputProcessorResult
        +handleKeyRelease(KeyEvent) InputProcessorResult
    }
    class InputProcessorResult {
        +Action action
        +Bool needsToCommit
    }

    class OutputProcessor {
        +ProcessorLevel level
        +OutputProcessorData data
        +State state
        +HanjaProvider hanjaProvider
        +OutputProcessorOptions options
        +process(Action) OutputProcessorResult
    }
    class OutputProcessorResult {
        +PostAction_List actions
    }
    class PostAction {
        <<enumeration>>
        insertText
        showBuffer
        startConversion
        deleteLeft
        deleteRight
    }

    class ClientActionProcessor {
        +TextInputClient client
        +State state
        +processPostActions(actions) ClientActionProcessorResult
        +stopComposition(commit)
    }
    class ClientActionProcessorResult {
        <<enumeration>>
        done
        deleteLeft
        deleteRight
        disableCommit
        startConversion
    }

    class State {
        +HangulHistoryEntry_List hangulHistory
        +ExpressionEnvironment environment
        +KeyCode_Set pressedKeys
        +VirtualKeyCoordinate_Set pressedVirtualKeys
        +addHangulHistory(state, input, buffer)
        +clearHangulHistory()
    }
    class HangulHistoryEntry {
        +UInt16 state
        +JamoKey_List input
        +JamoKey_List buffer
    }

    class Action {
        <<enumeration>>
        noop
        normalCharacter
        twoSetHangul
        threeSetHangul
        specialAction
    }

    class TextInputClient {
        <<interface>>
        insertText()
        deleteBackward()
        getLeftHangul()
        getRightHangul()
    }
    class HanjaProvider {
        <<interface>>
        getCandidates(hangul) ConversionRule_List
    }

    KeyboardReceiver --> Keyboard
    KeyboardReceiver --> ReceiverOptions
    KeyboardReceiver --> State
    KeyboardReceiver --> InputProcessor
    KeyboardReceiver --> OutputProcessor
    KeyboardReceiver --> ClientActionProcessor
    KeyboardReceiver ..> TextInputClient
    KeyboardReceiver ..> HanjaProvider

    InputProcessor --> State
    InputProcessor ..> InputProcessorResult
    InputProcessorResult --> Action

    OutputProcessor --> State
    OutputProcessor ..> HanjaProvider
    OutputProcessor ..> OutputProcessorResult
    OutputProcessorResult --> PostAction
    OutputProcessor ..> Action

    ClientActionProcessor --> State
    ClientActionProcessor ..> TextInputClient
    ClientActionProcessor ..> PostAction
    ClientActionProcessor ..> ClientActionProcessorResult

    State --> HangulHistoryEntry
`;

export default function TadakArchitecturePage() {
  return (
    <article>
      <p className="text-sm text-gray-500 dark:text-zinc-400 mb-2">
        <Link href="/docs/develop">개발 문서</Link>
        {" / Tadak / 데이터·파이프라인 구조"}
      </p>
      <h2>Tadak 데이터·파이프라인 구조</h2>
      <p>
        <strong>Tadak</strong>(공유 프레임워크)의 핵심은 <code>Keyboard</code>{" "}
        데이터 모델과, 이를 소비해 실제 입력을 처리하는{" "}
        <code>KeyboardReceiver</code> 파이프라인입니다. macOS·iOS 등 플랫폼
        계층은 이 두 구조를 감싸는 얇은 어댑터에 가까우므로, 이 문서에서는
        해당 두 가지만 클래스 다이어그램으로 정리합니다.
      </p>

      <h3>1. 키보드 데이터 구조 (<code>Keyboard</code>)</h3>
      <p>
        <code>Keyboard</code>는 순수 데이터 컨테이너로, <code>Metadata</code>
        (이름·저작자·분류 등)와 <code>InputProcessorData</code>(무엇을 눌렀을
        때 어떤 표현식이 실행되는지, 가상 키보드를 어떻게 그리는지),{" "}
        <code>OutputProcessorData</code>(자모 결합·삭제·치환 규칙)를
        소유합니다.
      </p>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={keyboardDataDiagram} />
      </div>
      <p className="text-sm text-gray-500 dark:text-zinc-400">
        다이어그램의 <code>VirtualKey[]</code>는 실제로는 행·열로 구성된 2차원
        배열(<code>[[VirtualKey]]</code>)이며, <code>OutputProcessorData</code>
        의 여러 규칙 테이블은 초성·중성·종성별로 나뉘어 있는 경우가 많아 이를
        표현하는 제네릭 컨테이너 <code>LVTRules&lt;T&gt;</code>가 반복적으로
        사용됩니다.
      </p>

      <h3>2. 파이프라인 구조 (<code>KeyboardReceiver</code>)</h3>
      <p>
        <code>KeyboardReceiver</code>는 <code>Keyboard</code>(데이터),{" "}
        <code>State</code>(런타임 상태), 그리고 <code>InputProcessor</code>·
        <code>OutputProcessor</code>·<code>ClientActionProcessor</code> 세
        개의 Processor(로직)를 모두 소유하는 단일 오케스트레이터입니다. 세
        Processor는 서로를 모르며, <code>KeyboardReceiver</code>가 순서대로
        호출하고 결과를 다음 단계로 전달합니다.
      </p>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart chart={pipelineDiagram} />
      </div>

      <h3>흐름 요약</h3>
      <div className="my-4 flex flex-col items-center bg-gray-50 dark:bg-zinc-900 rounded-lg">
        <Flowchart
          chart={`
graph LR
    A["KeyEvent / 좌표"] --> B["InputProcessor.handleKeyPress"]
    B --> C["Action"]
    C --> D["OutputProcessor.process"]
    D --> E["[PostAction]"]
    E --> F["ClientActionProcessor.processPostActions"]
    F --> G["TextInputClient (실제 텍스트 반영)"]
`}
          emphasisNodes={["C", "E"]}
        />
      </div>
      <dl className="my-4 px-4 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3">
        <dt>
          <code>State</code>
        </dt>
        <dd>
          세 Processor와 <code>KeyboardReceiver</code>가 공유하는 단일
          인스턴스로, 한글 조합 히스토리·눌린 키·타이머 등 파이프라인 전체의
          &ldquo;현재 순간&rdquo;을 담습니다.
        </dd>
        <dt>
          <code>TextInputClient</code> / <code>HanjaProvider</code>
        </dt>
        <dd>
          파이프라인이 플랫폼(macOS의 IMK, iOS의{" "}
          <code>UITextDocumentProxy</code> 등) 구현체와 분리되도록 하는 유일한
          프로토콜 경계입니다.
        </dd>
      </dl>

      <h3>구현 파일</h3>
      <ul className="list-disc my-4 pl-8">
        <li>
          <code>Xcode/Tadak/Pipeline/Keyboard.swift</code>,{" "}
          <code>Metadata.swift</code> — 키보드 정의·메타데이터
        </li>
        <li>
          <code>Xcode/Tadak/Pipeline/InputProcessorData/</code>,{" "}
          <code>OutputProcessorData/</code> — 입력·출력 규칙 데이터
        </li>
        <li>
          <code>Xcode/Tadak/Pipeline/Processor/KeyboardReceiver.swift</code> —
          파이프라인 오케스트레이터
        </li>
        <li>
          <code>Xcode/Tadak/Pipeline/Processor/InputProcessor.swift</code>,{" "}
          <code>OutputProcessor.swift</code>,{" "}
          <code>ClientActionProcessor.swift</code> — 입력·출력·클라이언트 반영
          로직
        </li>
        <li>
          <code>Xcode/Tadak/Pipeline/State.swift</code> — 파이프라인 공유
          런타임 상태
        </li>
        <li>
          <code>Xcode/Tadak/Pipeline/TextInputClient.swift</code>,{" "}
          <code>HanjaProvider.swift</code> — 플랫폼 분리 경계 프로토콜
        </li>
      </ul>
    </article>
  );
}
