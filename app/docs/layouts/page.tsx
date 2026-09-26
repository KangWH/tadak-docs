import Keyboard from "@/app/components/keyboard";
import { twoSetLayout, twoSetOldLayout, dujulELayout, dugyeobELayout } from "./twoSetLayouts";
import { threeSet390Layout, threeSet390NoShiftLayout, threeSet391Layout, threeSet393Layout, threeSet2015Layout, threeSet2015OldLayout, threeSetP2Layout, threeSetP3Layout, threeSetD2Layout, shinThreeSetLayout, shinThreeSet2003Layout, shinThreeSetMLayout, shinThreeSetMJejuLayout, shinThreeSetP2Layout, shinThreeSetP2OldLayout, shinThreeSetHSLayout, chamShinThreeSetLayout, chamShinThreeSetDLayout, threeSetD2OldLayout, shinThreeSet2015Layout } from "./threeSetLayouts";
import { threeSetAhnmataeLayout, threeSetSemoELayout, threeSetSemoEOldLayout } from "./chordedThreeSetLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>키보드 배열</h2>
      <p>타닥은 다양한 배열을 기본 지원합니다. 이 문서에서는 타닥이 지원하는 다양한 배열을 알아봅니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>
      <h3>두벌식</h3>
      <p><strong>두벌식</strong> 배열은 낱자 키가 자음 한 벌과 모음 한 벌, 이렇게 두 벌로 구성되어 있는 배열을 뜻합니다.</p>
      <p>자음 키 한 벌이 초성과 종성을 입력하는 데 모두 사용되기 때문에, 배열을 익히기 쉽고 적은 수의 키로도 한국어를 입력할 수 있습니다.</p>
      <p>초성과 중성을 입력한 상태에서 자음 키를 누르면 우선 종성으로 입력되고, 이후에 모음 키가 눌리면 그 종성이 다음 글자의 초성으로 변하는(예: ‘한’ → ‘하나’) ‘도깨비불 현상’이 나타납니다.</p>
      <h4>두벌식 표준</h4>
      <Keyboard labelData={twoSetLayout} />
      <p>대한민국 표준(KS X 5002)으로 지정된 배열입니다. 왼손에 자음, 오른손에 모음이 배치되어 있으며, 행별로 낱자가 규칙적으로 배치되어 있어 배열을 익히기 쉽습니다.</p>
      <h4>두벌식 옛한글</h4>
      <Keyboard labelData={twoSetOldLayout} />
      <p>두벌식 표준 배열을 바탕으로, 옛한글 낱자와 방점을 입력할 수 있도록 변형한 배열입니다. 한 글자의 종성과 다음 글자의 초성을 구분해야 하는 경우에는 <code>❖</code>를 눌러 현재 음절 조합을 강제로 종료합니다.</p>
      <h4>두줄이 (두벌식 줄맞춤 e)</h4>
      <Keyboard labelData={dujulELayout} />
      <p>신세기가 2026년에 공개한 두벌식 배열로, 낱자가 더 효율적으로 배치되어 있습니다. 자주 사용되는 자음인 ㅆ은 <code>shift</code>를 사용하지 않고 입력할 수 있습니다.</p>
      <p><a href="https://blog.naver.com/eekdland/224252538464" target="_blank">자세한 정보 ›</a></p>
      <h4>두겹이 (두벌식 겹받침 e)</h4>
      <Keyboard labelData={dugyeobELayout} />
      <p>신세기가 2026년에 공개한 두벌식 배열입니다. 두벌식 표준 배열에서 오른손의 <code>ㅑ</code>, <code>ㅓ</code>, <code>ㅏ</code>, <code>ㅣ</code> 키에 자주 쓰이는 겹받침을 배치한 배열입니다. 초성과 중성을 입력한 상태에서 이 네 키는 겹받침을 입력하는 데 사용됩니다.</p>
      <p><a href="https://blog.naver.com/eekdland/224142632310" target="_blank">자세한 정보 ›</a></p>
      <h3>공병우 세벌식</h3>
      <p><strong>세벌식</strong> 배열은 낱자 키가 자음 두 벌 (초성 한 벌과 종성 한 벌), 모음 두 벌로 구성된 배열을 뜻합니다. 초성을 입력할 때와 종성을 입력할 때 다른 키를 사용하기 때문에 도깨비불 현상이 나타나지 않습니다.</p>
      <p>세벌식 배열에는 다양한 종류가 존재하며, 대표적인 배열은 공병우 박사가 개발한 세벌식 3-90과 3-91입니다. 이 두 배열을 기반으로 개선 및 변형된 배열을 통틀어 흔히 <strong>공병우 세벌식</strong> 배열이라고 부릅니다.</p>
      <h4>세벌식 3-90</h4>
      <Keyboard labelData={threeSet390Layout} />
      <p>1990년에 발표된 세벌식 배열입니다. 자주 사용되는 겹받침은 <code>shift</code> 키를 사용하여 한 타에 입력할 수 있으며, ASCII의 모든 기호를 입력할 수 있습니다.</p>
      <p>기계식 타자기의 작동 방식을 계승하여, 모음 ㅘ, ㅙ, ㅚ를 입력할 때의 ㅗ와 ㅝ, ㅞ, ㅟ를 입력할 때의 ㅜ는 오른손으로 입력하는 것이 정석입니다. 그러나 타닥을 포함한 대부분의 한글 입력기는 왼손으로 입력하는 것도 지원합니다.</p>
      <h4>세벌식 순아래</h4>
      <Keyboard labelData={threeSet390NoShiftLayout} />
      <p>1990년 안종혁이 공개한 배열로, 세벌식 3-90 배열을 바탕으로 모든 낱자를 <code>shift</code> 키 없이 입력할 수 있도록 변형한 배열입니다.</p>
      <h4>세벌식 3-91</h4>
      <Keyboard labelData={threeSet391Layout} />
      <p>1991년에 발표된 세벌식 배열입니다. 3-90과 비교했을 때 모든 겹받침을 한 타로 입력할 수 있지만, 일부 ASCII 기호를 입력할 수 없습니다.</p>
      <h4>세벌식 3-93 옛한글</h4>
      <Keyboard labelData={threeSet393Layout} />
      <p>1993년 김경식이 발표한 세벌식 옛한글 배열입니다. 3-90을 바탕으로 옛한글 낱자를 추가하였으며, 숫자와 일부 ASCII 기호를 입력할 수 없습니다.</p>
      <h4>세벌식 3-2015</h4>
      <Keyboard labelData={threeSet2015Layout} />
      <p>2015년에 소인배가 발표한 세벌식 배열입니다. 3-90을 바탕으로 갈마들이를 적용하여 <code>shift</code> 키의 사용을 줄였습니다.</p>
      <p>중성이 입력되지 않은 상태에서는 <code>ㅕㅈ</code>, <code>ㅓㅊ</code>, <code>ㅣㅎ</code>, <code>ㅏㅍ</code>, <code>ㅔㅌ</code>, <code>ㅗㅋ</code> 키가 중성을 입력하며, 중성이 입력된 상태에서는 종성을 입력합니다. 갈마들이가 적용되어 있으므로, 신광조 세벌식 배열들과 마찬가지로 오른손으로 ㅗ, ㅜ를 입력해야만 ㅘ, ㅚ, ㅝ, ㅞ, ㅟ를 조합할 수 있습니다.</p>
      <p>편리한 입력을 위해, 다음의 추가 조합 규칙이 지원됩니다.</p>
      <ul>
        <li>쌍자음 초성과 종성 ㄲ은 기존 세벌식 배열처럼 홑자음을 연타하여 입력하는 것이 정석이나, 인접한 키를 함께 눌러 연타 없이 입력하는 방식도 지원합니다. (예: ㄸ = <code>ㄷ</code>+<code>ㅁ</code> = <code>ㅁ</code>+<code>ㄷ</code>)</li>
        <li>모음 ㅒ는 <code>ㅒ</code> 키를 직접 누르는 것뿐 아니라 <code>ㅣ</code>+<code>ㅐ</code>로도 입력할 수 있습니다.</li>
        <li>겹받침은 구성 낱자를 역순으로 누르거나, 윗글쇠로도 입력할 수 있습니다.</li>
      </ul>
      <p><a href="https://sebeol.org/3-2015.html" target="_blank">자세한 정보 ›</a></p>
      <h4>세벌식 3-2015 옛한글</h4>
      <Keyboard labelData={threeSet2015OldLayout} />
      <p>세벌식 3-2015 배열을 바탕으로 옛한글 지원을 추가한 배열입니다. 현대 한글용 배열과 달리 갈마들이가 적용되지 않았으며, 편의성 조합 규칙이나 윗글쇠 겹받침 입력 기능도 지원되지 않습니다.</p>
      <p><a href="https://cafe.daum.net/3bulsik/JMKX/36" target="_blank">자세한 정보 ›</a></p>
      <h4>세벌식 3-P2, 3-P3 (지원 예정)</h4>
      <Keyboard labelData={threeSetP2Layout} />
      <Keyboard labelData={threeSetP3Layout} />
      <p>2015년에 팥알이 발표한 세벌식 배열입니다. 3-90을 바탕으로 <code>ㅐ</code>와 <code>ㅓ</code> 키의 자리가 바뀌었으며, 세벌식 3-2015 배열과 동일한 방식의 갈마들이가 적용되어 있습니다. 3-P2(위쪽)는 숫자가 두 행, 3-P3(아래쪽)은 숫자가 세 행에 걸쳐 배치되어 있습니다. 오른쪽 <code>ㅗ</code>와 <code>ㅜ</code> 키를 사용한 기호 확장 기능이 존재합니다.</p>
      <p>중성 ㅒ는 <code>ㅒ</code> 키를 직접 누르는 것뿐 아니라, <code>ㅣ</code>+<code>ㅐ</code>나 <code>ㅐ</code>+<code>ㅐ</code>로도 입력할 수 있습니다.</p>
      <p><a href="https://pat.im/1128" target="_blank">자세한 정보 ›</a></p>
      <h4>세벌식 3-D2 (지원 예정)</h4>
      <Keyboard labelData={threeSetD2Layout} />
      <p>2021년에 DS1TPT가 발표한 세벌식 배열입니다. 3-90을 바탕으로 갈마들이가 적용된 배열입니다. 갈마들이 작동 방식은 세벌식 3-2015와 동일합니다. <code>Caps lock</code>&nbsp;키를 사용한 기호 확장 기능이 존재합니다.</p>
      <p>중성 ㅒ는 <code>ㅒ</code> 키를 직접 누르는 것뿐 아니라, <code>ㅐ</code>+<code>ㅐ</code>로도 입력할 수 있습니다.</p>
      <p><a href="https://ds1tpt.tistory.com/16" target="_blank">자세한 정보 ›</a></p>
      <h4>세벌식 3-D2 옛한글 (지원 예정)</h4>
      <Keyboard labelData={threeSetD2OldLayout} />
      <p>세벌식 3-D2에 옛한글 입력 기능을 추가한 배열입니다. 거성 방점은 <code style={{fontFamily: 'var(--font-old-hangul)'}}> 〮</code>&nbsp;키를 두 번 눌러 입력합니다.</p>
      <p><a href="https://ds1tpt.tistory.com/16" target="_blank">자세한 정보 ›</a></p>
      <h3>신광조 세벌식</h3>
      <p>공병우 세벌식 배열은 숫자 행에 있는 키에도 한글 낱자가 배치되어 있기에 한글을 입력하기 어렵고, 숫자를 입력하는 것도 불편하다는 단점이 있습니다. 신광조는 이를 해결하기 위해 갈마들이를 도입한 신세벌식 배열을 제안하였습니다. 신세벌식을 기반으로 한 변형 배열도 다양하게 개발되었으며, 이들을 통틀어 흔히 <strong>신광조 세벌식</strong> 배열이라고 부릅니다.</p>
      <h4>신세벌식</h4>
      <Keyboard labelData={shinThreeSetLayout} />
      <p>1995년에 최초로 발표된 신세벌식 배열입니다. 왼손 키 전체에 갈마들이를 적용하여, 중성을 입력할 차례에는 중성이, 그 외에는 종성이 입력됩니다. 덕분에 세벌식 배열이지만 숫자 행을 사용하지 않고도 모든 한글 낱자를 입력할 수 있습니다. 중성을 단독으로 입력하고자 할 때에는 왼손 키를 <code>shift</code> 키와 함께 누르면 됩니다.</p>
      <p>왼손 전체에 갈마들이가 적용되어 있기에, 중성 ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ를 입력하려면 초성을 입력한 후 오른손 자리에 있는 <code>ㅋㅗ</code>, <code>ㅍㅗ</code>, <code>ㅁㅜ</code>, <code>ㅊㅜ</code> 키를 눌러야 합니다.</p>
      <h4>수정 신세벌식</h4>
      <Keyboard labelData={shinThreeSet2003Layout} />
      <p>2003년 박경남이 발표한 신세벌식 배열입니다. 신세벌식 원안을 바탕으로 중성과 종성의 배치를 개선하였으며, 윗글쇠의 빈 자리에 문장 부호가 추가되었습니다.</p>
      <h4>신세벌식 2015 (지원 예정)</h4>
      <Keyboard labelData={shinThreeSet2015Layout} />
      <p>2015년 소인배가 공개한 신세벌식 배열입니다. 다른 신세벌식 배열과는 달리 종성의 배치가 신세벌식 원안과 크게 다르며, 한글 조합 중이 아닐 때 왼손의 키는 중성을 입력합니다.</p>
      <h4>신세벌식 M</h4>
      <Keyboard labelData={shinThreeSetMLayout} />
      <Keyboard labelData={shinThreeSetMJejuLayout} />
      <p>2015년 메탈리쟈가 공개한 신세벌식 배열입니다. 신세벌식 2015와 마찬가지로, 한글 조합 중이 아닐 때 왼손의 키는 중성을 입력합니다. 현대 한글 전용 배열(위쪽)과 다르게, 제주어 지원 배열(아래쪽)은 초성을 입력한 뒤 <code>ㅁㆍ</code> 키와 <code>ㄹᆢ</code> 키로 각각 아래아와 쌍아래아를 입력할 수 있습니다.</p>
      <p><a href="https://cafe.daum.net/3bulsik/JMKX/77" target="_blank">자세한 정보 ›</a></p>
      <h4>신세벌식 P2</h4>
      <Keyboard labelData={shinThreeSetP2Layout} />
      <Keyboard labelData={shinThreeSetP2OldLayout} />
      <p>2018년 팥알이 발표한 신세벌식 배열입니다. 위쪽은 현대 한글 배열(제주어 입력 지원)이며, 아래쪽은 옛한글 배열입니다. 중성 ㅐ, ㅓ, ㅕ의 배치가 다른 배열과 다른 것이 특징입니다.</p>
      <p>초성&nbsp;<code>ㅇ</code>+<code>ㄱ</code>, <code>ㅇ</code>+<code>ㅈ</code>, <code>ㅇ</code>+<code>ㅂ</code> 키를 눌러 기호 확장 기능을 사용할 수 있습니다.</p>
      <p>옛한글 배열에서는 갈마들이 배열 특성상 일부 겹낱자를 조합할 때 <code>shift</code> 키를 눌러야 하며, 현대 한글에 사용되지 않는 자음자는 기본 낱자를 조합하여 입력합니다(예: 초성&nbsp;ㆁ = 초성&nbsp;ㄱ+ㅇ).</p>
      <p><a href="https://pat.im/1136" target="_blank">자세한 정보 ›</a></p>
      <h4>신세벌식 HS (지원 예정)</h4>
      <Keyboard labelData={shinThreeSetHSLayout} />
      <p>2023년 공개된 신세벌식 배열입니다. 신세벌식 P2 배열을 바탕으로 모음의 배치를 공병우 배열과 동일하게 되돌리고, 한글을 더 편리하게 입력할 수 있도록 개선한 배열입니다. 초성 ㅋ과 ㅌ의 위치가 특징적입니다.</p>
      <p><a href="https://m.blog.naver.com/PostView.naver?blogId=starload5993&logNo=223039276796&navType=by" target="_blank">자세한 정보 ›</a></p>
      <h4>참신세벌식, 참신세벌식D (지원 예정)</h4>
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
      <h3>모아치기 세벌식</h3>
      <p>기존의 배열은 모두 낱자 키를 한 번에 하나씩만 누르도록 설계되어 있었습니다. 그러나 여러 키를 동시에 누르고 손가락을 뗄 때 한글 음절이 완성되도록 설계된 <strong>모아치기 세벌식</strong> 배열도 등장하였습니다. 동시 키 입력을 지원하는 키보드가 필요하다는 제약이 있지만, 모아치기 배열을 사용하면 타자 속도를 훨씬 높일 수 있다는 장점이 있습니다.</p>
      <p>모아치기 배열 특성상, 낱자를 조합할 때 구성 낱자가 입력된 순서는 중요하지 않습니다.</p>
      <h4>세모이 (세벌식 모아치기 e)</h4>
      <Keyboard labelData={threeSetSemoELayout} />
      <p>신세기가 공병우 세벌식 배열을 바탕으로 만든 모아치기 배열입니다.</p>
      <p>낱자를 입력하는 기본 규칙은 다음과 같습니다.</p>
      <ul>
        <li>키를 단독으로 눌러 입력할 수 있는 10개의 초성 외에, 거센소리 4개는 초성 ㅎ과 ㄱ·ㄷ·ㅂ·ㅈ을 함께 눌러 입력할 수 있으며, 된소리 5개는 초성 ㅇ과 ㄱ·ㄷ·ㅂ·ㅅ·ㅈ을 함께 눌러 입력할 수 있습니다.</li>
        <li>중성·종성 키는 단독으로 누를 경우 왼쪽의 낱자가 입력되며, 중성 shift나 종성 shift 키와 함께 누르면 오른쪽 낱자가 입력됩니다. <code>종⇧</code>&nbsp;키는 다른 종성 키와의 조합 없이 단독으로 사용하면 종성 ㅆ을 입력합니다.</li>
        <li>중성 ㅐ, ㅟ, ㅞ, ㅢ와 종성 ㄼ, ㄽ, ㅄ은 낱자를 이루는 각 키를 동시에 눌러 입력합니다. (예: ㅐ = <code>ㅏ</code>+<code>ㅣ</code>, ㄼ = <code>ㄹ</code>+<code>ㅂ</code>)</li>
        <li>
          <p>몇 가지 종성은 다음의 규칙에 따라 입력합니다.</p>
          <ul>
            <li>ㄱ = <code>ㄹ</code>+<code>ㅇ</code> (입력 편의를 위한 규칙) ― 중성이 ㅒ, ㅓ, ㅕ, ㅝ인 경우 <code>ㄱ</code> 대신 <code>ㄹ</code>+<code>ㅇ</code>이 편리할 수 있습니다.</li>
            <li>ㄲ = <code>ㄱ</code>+<code>ㅇ</code> = <code>종⇧</code>+<code>ㄹ</code>+<code>ㅅ</code> (입력 편의를 위한 규칙)</li>
            <li>ㄳ = <code>ㄱ</code>+<code>ㅅ</code> = <code>종⇧</code>+<code>ㄱ</code>+<code>ㅁ</code> (입력 편의를 위한 규칙)</li>
            <li>ㄵ = <code>ㄴ</code>+<code>ㄹ</code>(ㅈ)</li>
            <li>ㄶ = <code>ㄴ</code>+<code>ㅇ</code>(ㅀ)</li>
            <li>ㄺ = <code>ㄱ</code>+<code>ㄹ</code> = <code>ㄱ</code>+<code>ㅁ</code> (입력 편의를 위한 규칙) ― 일반적으로 <code>ㄱ</code>+<code>ㄹ</code>보다 <code>ㄱ</code>+<code>ㅁ</code>이 더 편리합니다.</li>
            <li>ㄻ = <code>ㄹ</code>+<code>ㅁ</code> = <code>종⇧</code>+<code>ㅂ</code>+<code>ㅅ</code> (입력 편의를 위한 규칙) ― 일반적으로 <code>ㄹ</code>+<code>ㅁ</code>보다 <code>종⇧</code>+<code>ㅂ</code>+<code>ㅅ</code>이 더 편리합니다.</li>
            <li>ㄾ = <code>ㅁ</code>(ㄷ)+<code>ㅇ</code>(ㅀ)</li>
            <li>ㄿ = <code>ㅂ</code>(ㅍ)+<code>ㅇ</code>(ㅀ)</li>
            <li>ㅋ = <code>종⇧</code>+<code>ㄹ</code>+<code>ㅇ</code> (입력 편의를 위한 규칙) ― 중성이 ㅒ, ㅓ, ㅕ, ㅝ인 경우 <code>종⇧</code>+<code>ㄱ</code>보다 <code>종⇧</code>+<code>ㄹ</code>+<code>ㅇ</code>이 편리할 수 있습니다.</li>
            <li>ㅌ = <code>ㄴ</code>(ㅎ)+<code>ㅁ</code>(ㄷ) = <code>종⇧</code>+<code>ㄹ</code>+<code>ㅂ</code> (입력 편의를 위한 규칙) ― 중성이 ㅒ, ㅓ, ㅕ, ㅝ인 경우 <code>ㄴ</code>+<code>ㅁ</code>보다 <code>종⇧</code>+<code>ㄹ</code>+<code>ㅂ</code>이 편리할 수 있습니다.</li>
          </ul>
        </li>
      </ul>
      <p>음절이 조합되지 않는 키 조합을 눌러 약어를 입력할 수 있습니다. 예를 들어, 초성&nbsp;<code>ㅎ</code>과 종성&nbsp;<code>ㄴ</code>을 동시에 누르면 ‘한국’이 입력되며, 초성&nbsp;<code>ㅁ</code>, 초성&nbsp;<code>ㅈ</code>, 중성&nbsp;<code>ㅔ</code>를 동시에 누르면 ‘문제’가 입력됩니다. 세모이 배열은 약 1,000여 개의 약어를 지원합니다.</p>
      <p><code>기호</code>+<code>※</code>, <code>기호</code>+<code>·</code>, <code>기호</code>+<code>:</code> 키를 눌러 총 6개 레이어의 기호 확장 기능을 사용할 수 있습니다.</p>
      <p><a href="https://blog.naver.com/eekdland/220526834927" target="_blank">자세한 정보 ›</a></p>
      <h4>세모이 (세벌식 모아치기 e) 옛한글</h4>
      <Keyboard labelData={threeSetSemoEOldLayout} />
      <p>세모이 배열의 옛한글 지원 버전입니다. 모아치기 배열 특성상 모든 옛한글 낱자의 조합을 지원하지는 않으나, 자주 사용되는 낱자는 조합이 가능합니다. 현대 한글 배열과 달리, 옛한글 배열은 약어 기능을 지원하지 않습니다.</p>
      <p>초성&nbsp;<code>ㄴ</code>, 중성&nbsp;<code>ㆎ</code>, 종성&nbsp;<code>ㅭ</code> 키는 각각 옛한글 확장 키로 사용됩니다. 옛한글 확장 키와 다른 키를 함께 누르면 위 배열에서 가장 오른쪽에 있는 옛한글 낱자를 입력할 수 있습니다.</p>
      <p><a href="https://blog.naver.com/eekdland/220526834927" target="_blank">자세한 정보 ›</a></p>
      <h4>안마태 소리 글판</h4>
      <Keyboard labelData={threeSetAhnmataeLayout} />
      <p>안마태 신부가 개발한 배열로, 왼쪽 위에는 초성, 오른쪽 위에는 중성, 아래쪽에는 종성 키가 배치되어 있는 배열입니다.</p>
      <p>낱자를 입력하는 기본 규칙은 다음과 같습니다.</p>
      <ul>
        <li>초성과 종성의 경우, 거센소리는 예삿소리 낱자와 <code>ㅎ</code> 키를 함께 눌러 조합합니다(예: ㅌ = <code>ㄷ</code>+<code>ㅎ</code>). 된소리는 예삿소리 낱자와 오른쪽 키를 함께 눌러 조합합니다(예: ㄲ = <code>ㄱ</code>+<code>ㅇ</code>).</li>
        <li>초성의 거센소리는 예삿소리 낱자와 그 위쪽 키를 동시에 눌러 입력할 수도 있습니다(예: ㅊ = <code>ㅅ</code>+<code>ㅈ</code>).</li>
        <li>중성의 경우, 바로 입력할 수 없는 중성은 각 구성 낱자를 동시에 눌러 조합합니다(예: ㅐ = <code>ㅏ</code>+<code>ㅣ</code>, ㅞ = <code>ㅜ</code>+<code>ㅓ</code>+<code>ㅣ</code>).</li>
        <li>겹받침은 각 구성 낱자를 동시에 눌러 조합합니다(예: ㅄ = <code>ㅂ</code>+<code>ㅅ</code>).</li>
      </ul>
    </article>
  )
}
