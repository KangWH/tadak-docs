import Keyboard from "@/app/components/keyboard";
import { chamShinThreeSetDLayout, chamShinThreeSetLayout, shinThreeSet2003Layout, shinThreeSet2015Layout, shinThreeSetHSLayout, shinThreeSetLayout, shinThreeSetMJejuLayout, shinThreeSetMLayout, shinThreeSetP2Layout, shinThreeSetP2OldLayout } from "./threeSetShinLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>신광조 세벌식</h2>
      <p>신광조가 개발한 신세벌식 배열과, 이를 바탕으로 파생된 여러 신광조 세벌식 배열을 알아봅니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>

      <h3>공통적인 특징</h3>
      <p>신광조 세벌식 배열들은 대부분 다음의 특징을 가지고 있습니다.</p>
      <ul>
        <li>초성의 배치는 공병우 세벌식 배열과 동일합니다. 다만 초성 ㅋ은 빗금 자리에 있습니다.</li>
        <li>왼손 키 전체에 중-종성 갈마들이가 적용되어 있습니다.</li>
        <li>오른손 키 일부가 조합용 중성을 입력하는 데 사용됩니다. 이 또한 갈마들이가 적용되어, 평소에는 초성이 입력되며, 초성이 입력되고 중성이 입력되지 않은 상태에서만 조합용 중성이 입력됩니다. 조합용 종성을 입력한 경우에는 왼손 키를 눌러도 중성이 입력됩니다.</li>
        <li>한글 낱자가 숫자 행을 침범하지 않기에, 숫자와 기호 배열이 크게 변형되지 않습니다.</li>
        <li>중성 ㅏ·ㅐ·ㅓ·ㅔ·ㅕ·ㅗ·ㅜ·ㅡ·ㅣ, 종성 ㄱ·ㄴ·ㄹ·ㅁ·ㅂ·ㅅ·ㅇ의 위치는 공병우 세벌식 배열과 비슷하며, 신광조 세벌식 배열 간에도 거의 비슷합니다.</li>
        <li>종성 ㅆ 외의 겹받침을 한 번에 입력하는 키가 없습니다.</li>
      </ul>

      <h3>신세벌식</h3>
      <Keyboard labelData={shinThreeSetLayout} />
      <p>1995년에 최초로 발표된 신세벌식 배열입니다. 왼손 키 전체에 갈마들이를 적용하여, 중성을 입력할 차례에는 중성이, 그 외에는 종성이 입력됩니다. 덕분에 세벌식 배열이지만 숫자 행을 사용하지 않고도 모든 한글 낱자를 입력할 수 있습니다. 중성을 단독으로 입력하고자 할 때에는 왼손 키를 <code>shift</code> 키와 함께 누르면 됩니다.</p>
      <p>왼손 전체에 갈마들이가 적용되어 있기에, 중성 ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ를 입력하려면 초성을 입력한 후 오른손 자리에 있는 <code>ㅋㅗ</code>, <code>ㅍㅗ</code>, <code>ㅁㅜ</code>, <code>ㅊㅜ</code> 키를 눌러야 합니다.</p>
      <h3>수정 신세벌식</h3>
      <Keyboard labelData={shinThreeSet2003Layout} />
      <p>2003년 박경남이 발표한 신세벌식 배열입니다. 신세벌식 원안을 바탕으로 중성과 종성의 배치를 개선하였으며, 윗글쇠의 빈 자리에 문장 부호가 추가되었습니다.</p>
      <h3>신세벌식 2015 (지원 예정)</h3>
      <Keyboard labelData={shinThreeSet2015Layout} />
      <p>2015년 소인배가 공개한 신세벌식 배열입니다. 다른 신세벌식 배열과는 달리 종성의 배치가 신세벌식 원안과 크게 다르며, 한글 조합 중이 아닐 때 왼손의 키는 중성을 입력합니다.</p>
      <h3>신세벌식 M</h3>
      <Keyboard labelData={shinThreeSetMLayout} />
      <Keyboard labelData={shinThreeSetMJejuLayout} />
      <p>2015년 메탈리쟈가 공개한 신세벌식 배열입니다. 신세벌식 2015와 마찬가지로, 한글 조합 중이 아닐 때 왼손의 키는 중성을 입력합니다. 현대 한글 전용 배열(위쪽)과 다르게, 제주어 지원 배열(아래쪽)은 초성을 입력한 뒤 <code>ㅁㆍ</code> 키와 <code>ㄹᆢ</code> 키로 각각 아래아와 쌍아래아를 입력할 수 있습니다.</p>
      <p><a href="https://cafe.daum.net/3bulsik/JMKX/77" target="_blank">자세한 정보 ›</a></p>
      <h3>신세벌식 P2</h3>
      <Keyboard labelData={shinThreeSetP2Layout} />
      <Keyboard labelData={shinThreeSetP2OldLayout} />
      <p>2018년 팥알이 발표한 신세벌식 배열입니다. 위쪽은 현대 한글 배열(제주어 입력 지원)이며, 아래쪽은 옛한글 배열입니다. 중성 ㅐ, ㅓ, ㅕ의 배치가 다른 배열과 다른 것이 특징입니다.</p>
      <p>초성&nbsp;<code>ㅇ</code>+<code>ㄱ</code>, <code>ㅇ</code>+<code>ㅈ</code>, <code>ㅇ</code>+<code>ㅂ</code> 키를 눌러 기호 확장 기능을 사용할 수 있습니다.</p>
      <p>옛한글 배열에서는 갈마들이 배열 특성상 일부 겹낱자를 조합할 때 <code>shift</code> 키를 눌러야 하며, 현대 한글에 사용되지 않는 자음자는 기본 낱자를 조합하여 입력합니다(예: 초성&nbsp;ㆁ = 초성&nbsp;ㄱ+ㅇ).</p>
      <p><a href="https://pat.im/1136" target="_blank">자세한 정보 ›</a></p>
      <h3>신세벌식 HS (지원 예정)</h3>
      <Keyboard labelData={shinThreeSetHSLayout} />
      <p>2023년 공개된 신세벌식 배열입니다. 신세벌식 P2 배열을 바탕으로 모음의 배치를 공병우 배열과 동일하게 되돌리고, 한글을 더 편리하게 입력할 수 있도록 개선한 배열입니다. 초성 ㅋ과 ㅌ의 위치가 특징적입니다.</p>
      <p><a href="https://m.blog.naver.com/PostView.naver?blogId=starload5993&logNo=223039276796&navType=by" target="_blank">자세한 정보 ›</a></p>
      <h3>참신세벌식, 참신세벌식D (지원 예정)</h3>
      <Keyboard labelData={chamShinThreeSetLayout} />
      <Keyboard labelData={chamShinThreeSetDLayout} />
      <p>기존 신세벌식 배열의 낱자 배치를 기반으로 하지 않고, 낱자 배치를 새롭게 설계한 배열입니다. 기존의 신세벌식 배열과 마찬가지로 오른손으로 초성을, 왼손으로 중·종성을 입력합니다. 참신세벌식(위쪽)은 숫자 행에 한글 낱자 키가 배치되지 않았지만, 참신세벌식D(아래쪽)는 왼손 검지의 부담을 줄이기 위하여 종성 3개를 숫자 행에 배치하였습니다.</p>
      <ul>
        <li>쌍자음 초성은 <code>ㅇ</code>을 입력한 뒤 홑자음을 조합하거나, 홑자음 키를 연타하여 입력합니다.</li>
        <li>참신세벌식 배열에서 종성 ㅋ을 입력해야 하는 경우, 종성&nbsp;<code>ㅋ</code> 키 대신 종성 <code>ㄱ</code>+<code>ㅁ</code> 조합을 사용하는 것을 권장합니다.</li>
        <li>
          <p>일부 겹받침은 다음 조합으로 입력하는 것이 더 효율적입니다.</p>
          <ul>
            <li>ㄳ = <code>ㄱ</code>+<code>ㅆ</code></li>
            <li>ㄵ = <code>ㄱ</code>+<code>ㄴ</code></li>
            <li>ㄶ = <code>ㅇ</code>+<code>ㄴ</code></li>
            <li>ㄼ = <code>ㄴ</code>+<code>ㅁ</code></li>
            <li>ㄽ = <code>ㄹ</code>+<code>ㅆ</code></li>
            <li>ㄿ = <code>ㅇ</code>+<code>ㅁ</code></li>
            <li>ㅀ = <code>ㅇ</code>+<code>ㄹ</code></li>
          </ul>
        </li>
        <li>현재 상태에서 갈마들이가 적용된 키의 다른 문자를 입력해야 하는 경우(예: 초성 ㄱ·ㄷ·ㄹ·ㅂ·ㅅ·ㅈ·ㅋ를 반복 입력하는 경우, 참신세벌식D에서 종성 없는 음절을 입력한 뒤 숫자 2, 3, 4를 입력하는 경우), <code>❖</code>&nbsp;키로 현재 음절의 조합을 중단한 후 입력할 수 있습니다.</li>
      </ul>
      <p><a href="https://cafe.daum.net/3bulsik/JMKX/147" target="_blank">자세한 정보 ›</a></p>
    </article>
  )
}
