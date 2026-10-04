import Keyboard from "@/app/components/keyboard";
import { threeSet2015Layout, threeSet2015OldLayout, threeSet390Layout, threeSet390NoShiftLayout, threeSet391Layout, threeSet393Layout, threeSetD2Layout, threeSetD2OldLayout, threeSetP2Layout, threeSetP3Layout } from "./threeSetKongLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>공병우 세벌식</h2>
      <p>공병우 박사가 1990년과 1991년에 각각 공개한 3-90·3-91 배열과, 이를 바탕으로 파생된 배열을 알아봅니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다.</p>

      <h3>공통적인 특징</h3>
      <p>공병우 세벌식 배열들은 대부분 다음의 특징을 가지고 있습니다.</p>
      <ul>
        <li>숫자 행의 키까지 한글 입력에 사용됩니다. 주로 초성 ㅋ, 중성 ㅑ·ㅖ·ㅛ·ㅠ·ㅢ, 종성 ㅂ·ㅆ·ㅎ이 숫자 행에 배치됩니다.</li>
        <li>중성 ㅒ는 중성 중 유일하게 <code>shift</code>&nbsp;키를 함께 눌러야 입력할 수 있습니다.</li>
        <li>기계식 타자기의 유산으로, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ를 입력하기 위한 중성 ㅗ와 ㅜ 키가 오른손 자리에 따로 있습니다.</li>
        <li>중성 중 ㅏ, ㅔ, ㅗ, ㅜ, ㅡ, ㅣ, 종성 중 ㄱ, ㄴ, ㄹ, ㅁ, ㅂ, ㅅ, ㅆ, ㅇ의 배치는 변하지 않습니다.</li>
        <li>중성-종성 갈마들이가 사용되지 않습니다.</li>
      </ul>
      <p>다만, 2010년대 이후 신세벌식과 비슷한 방식의 중-종성 갈마들이를 도입하려는 시도가 진행되고 있습니다. 기존 공병우 세벌식 배열의 사용 습관을 크게 해치지 않으면서, 드물게 사용되는 종성의 입력을 보다 편리하게 할 수 있습니다. 공병우 세벌식 배열에는 주로 검지와 중지로 누르는 키에만 갈마들이가 적용되고 있습니다.</p>
      
      <h3>세벌식 3-90</h3>
      <Keyboard labelData={threeSet390Layout} />
      <p>1990년에 발표된 세벌식 배열입니다. 자주 사용되는 겹받침은 <code>shift</code> 키를 사용하여 한 타에 입력할 수 있으며, ASCII의 모든 기호를 입력할 수 있습니다.</p>
      <p>기계식 타자기의 작동 방식을 계승하여, 모음 ㅘ, ㅙ, ㅚ를 입력할 때의 ㅗ와 ㅝ, ㅞ, ㅟ를 입력할 때의 ㅜ는 오른손으로 입력하는 것이 정석입니다. 그러나 타닥을 포함한 대부분의 한글 입력기는 왼손으로 입력하는 것도 지원합니다.</p>
      <h3>세벌식 순아래</h3>
      <Keyboard labelData={threeSet390NoShiftLayout} />
      <p>1990년 안종혁이 공개한 배열로, 세벌식 3-90 배열을 바탕으로 모든 낱자를 <code>shift</code> 키 없이 입력할 수 있도록 변형한 배열입니다.</p>
      <h3>세벌식 3-91</h3>
      <Keyboard labelData={threeSet391Layout} />
      <p>1991년에 발표된 세벌식 배열입니다. 3-90과 비교했을 때 모든 겹받침을 한 타로 입력할 수 있지만, 일부 ASCII 기호를 입력할 수 없습니다.</p>
      <p>공개 당시에는 공병우 박사가 공개한 마지막 배열이라는 뜻으로 이름을 ‘세벌식 최종’으로 지었지만, 이후 ‘최후의 세벌식 배열’이라고 혼동되는 경우가 많아 오늘날에는 주로 ‘3-91’로 부릅니다.</p>
      <h3>세벌식 3-93 옛한글</h3>
      <Keyboard labelData={threeSet393Layout} />
      <p>1993년 김경식이 발표한 세벌식 옛한글 배열입니다. 3-90을 바탕으로 옛한글 낱자를 추가하였으며, 숫자와 일부 ASCII 기호를 입력할 수 없습니다.</p>
      <h3>세벌식 3-2015</h3>
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
      <h3>세벌식 3-2015 옛한글</h3>
      <Keyboard labelData={threeSet2015OldLayout} />
      <p>세벌식 3-2015 배열을 바탕으로 옛한글 지원을 추가한 배열입니다. 현대 한글용 배열과 달리 갈마들이가 적용되지 않았으며, 편의성 조합 규칙이나 윗글쇠 겹받침 입력 기능도 지원되지 않습니다.</p>
      <p><a href="https://cafe.daum.net/3bulsik/JMKX/36" target="_blank">자세한 정보 ›</a></p>
      <h3>세벌식 3-P2, 3-P3 (지원 예정)</h3>
      <Keyboard labelData={threeSetP2Layout} />
      <Keyboard labelData={threeSetP3Layout} />
      <p>2015년에 팥알이 발표한 세벌식 배열입니다. 3-90을 바탕으로 <code>ㅐ</code>와 <code>ㅓ</code> 키의 자리가 바뀌었으며, 세벌식 3-2015 배열과 동일한 방식의 갈마들이가 적용되어 있습니다. 3-P2(위쪽)는 숫자가 두 행, 3-P3(아래쪽)은 숫자가 세 행에 걸쳐 배치되어 있습니다. 오른쪽 <code>ㅗ</code>와 <code>ㅜ</code> 키를 사용한 기호 확장 기능이 존재합니다.</p>
      <p>중성 ㅒ는 <code>ㅒ</code> 키를 직접 누르는 것뿐 아니라, <code>ㅣ</code>+<code>ㅐ</code>나 <code>ㅐ</code>+<code>ㅐ</code>로도 입력할 수 있습니다.</p>
      <p><a href="https://pat.im/1128" target="_blank">자세한 정보 ›</a></p>
      <h3>세벌식 3-D2 (지원 예정)</h3>
      <Keyboard labelData={threeSetD2Layout} />
      <p>2021년에 DS1TPT가 발표한 세벌식 배열입니다. 3-90을 바탕으로 갈마들이가 적용된 배열입니다. 갈마들이 작동 방식은 세벌식 3-2015와 동일합니다. <code>Caps lock</code>&nbsp;키를 사용한 기호 확장 기능이 존재합니다.</p>
      <p>중성 ㅒ는 <code>ㅒ</code> 키를 직접 누르는 것뿐 아니라, <code>ㅐ</code>+<code>ㅐ</code>로도 입력할 수 있습니다.</p>
      <p><a href="https://ds1tpt.tistory.com/16" target="_blank">자세한 정보 ›</a></p>
      <h3>세벌식 3-D2 옛한글 (지원 예정)</h3>
      <Keyboard labelData={threeSetD2OldLayout} />
      <p>세벌식 3-D2에 옛한글 입력 기능을 추가한 배열입니다. 거성 방점은 <code style={{fontFamily: 'var(--font-old-hangul)'}}> 〮</code>&nbsp;키를 두 번 눌러 입력합니다.</p>
      <p><a href="https://ds1tpt.tistory.com/16" target="_blank">자세한 정보 ›</a></p>
    </article>
  )
}
