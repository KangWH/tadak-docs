import Keyboard from "@/app/components/keyboard";
import { threeSetAhnmataeLayout, threeSetSemoELayout, threeSetSemoEOldLayout } from "./chordedThreeSetLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>모아치기 세벌식</h2>
      <p>모아치기 세벌식 배열, 즉 안마태 소리 글판과 세모이 배열을 알아봅니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>

      <h3>공통적인 특징</h3>
      <p>모아치기 배열은 한 번에 여러 키를 동시에 눌러 한 글자를 완성하는 방식을 사용합니다. 따라서 초성과 중성, 종성을 입력하는 데 사용되는 키가 명확하게 구분되어 있습니다.</p>
      <p>일반적인 키보드에서 낱자를 입력하는 데 사용할 수 있는 키는 30여 개이고, 한글은 기본자만 따져도 초성 14개, 중성 10개, 종성 14개로 총 38개이므로, 모든 낱자를 키에 하나씩 대응하는 것은 어렵습니다. 따라서 여러 키의 조합으로 다른 낱자를 만드는 방식을 사용합니다. 이때 모아치기 배열에서는 함께 누른 키들의 입력 순서는 중요하지 않습니다.</p>

      <h3>안마태 소리 글판</h3>
      <Keyboard labelData={threeSetAhnmataeLayout} />
      <p>안마태 신부가 개발한 배열로, 왼쪽 위에는 초성, 오른쪽 위에는 중성, 아래쪽에는 종성 키가 배치되어 있는 배열입니다.</p>
      <p>낱자를 입력하는 기본 규칙은 다음과 같습니다.</p>
      <ul>
        <li>초성과 종성의 경우, 거센소리는 예삿소리 낱자와 <code>ㅎ</code> 키를 함께 눌러 조합합니다(예: ㅌ = <code>ㄷ</code>+<code>ㅎ</code>). 된소리는 예삿소리 낱자와 오른쪽 키를 함께 눌러 조합합니다(예: ㄲ = <code>ㄱ</code>+<code>ㅇ</code>).</li>
        <li>초성의 거센소리는 예삿소리 낱자와 그 위쪽 키를 동시에 눌러 입력할 수도 있습니다(예: ㅊ = <code>ㅅ</code>+<code>ㅈ</code>).</li>
        <li>중성의 경우, 바로 입력할 수 없는 중성은 각 구성 낱자를 동시에 눌러 조합합니다(예: ㅐ = <code>ㅏ</code>+<code>ㅣ</code>, ㅞ = <code>ㅜ</code>+<code>ㅓ</code>+<code>ㅣ</code>).</li>
        <li>겹받침은 각 구성 낱자를 동시에 눌러 조합합니다(예: ㅄ = <code>ㅂ</code>+<code>ㅅ</code>).</li>
      </ul>

      <h3>세모이 (세벌식 모아치기 e)</h3>
      <Keyboard labelData={threeSetSemoELayout} />
      <p>신세기가 공병우 세벌식 배열을 바탕으로 만든 모아치기 배열입니다.</p>
      <p>낱자를 입력하는 기본 규칙은 다음과 같습니다.</p>
      <ul>
        <li>키를 단독으로 눌러 입력할 수 있는 10개의 초성 외에, 거센소리 4개는 초성 <code>ㅎ</code>과 <code>ㄱ</code>·<code>ㄷ</code>·<code>ㅂ</code>·<code>ㅈ</code>을 함께 눌러 입력할 수 있으며, 된소리 5개는 초성 <code>ㅇ</code>과 <code>ㄱ</code>·<code>ㄷ</code>·<code>ㅂ</code>·<code>ㅅ</code>·<code>ㅈ</code>을 함께 눌러 입력할 수 있습니다.</li>
        <li>
          <p>중성·종성 키는 단독으로 누를 경우 왼쪽의 낱자가 입력되며, <code>중⇧</code>나 <code>종⇧</code> 키와 함께 누르면 오른쪽 낱자가 입력됩니다.</p>
          <ul>
            <li><code>중⇧</code>&nbsp;키는 <code>ㅗ</code>&nbsp;키와 동일한 역할을 합니다. 단, 중성 ㅑ는 <code>중⇧</code>+<code>ㅡ</code>로만 입력할 수 있습니다.</li>
            <li><code>종⇧</code>&nbsp;키는 다른 종성 키와의 조합 없이 단독으로 사용하면 종성 ㅆ을 입력합니다.</li>
          </ul>
        </li>
        <li>중성 ㅐ, ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ와 종성 ㄼ, ㄽ, ㅄ은 낱자를 이루는 각 키를 동시에 눌러 입력합니다(예: ㅐ = <code>ㅏ</code>+<code>ㅣ</code>, ㄼ = <code>ㄹ</code>+<code>ㅂ</code>). 중성 ㅘ, ㅙ, ㅚ, ㅝ는 <code>ㅗ</code>·<code>ㅜ</code> 대신 <code>중⇧</code>를 눌러서도 입력할 수 있습니다.</li>
        <li>
          <p>중성 ㅛ와 ㅟ는 다음의 규칙으로도 조합할 수 있습니다.</p>
          <ul>
            <li>ㅛ = <code>ㅏ</code>+<code>ㅓ</code></li>
            <li>ㅟ = <code>ㅔ</code>+<code>ㅣ</code></li>
          </ul>
        </li>
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
            <li>(ㅆ = <code>ㅅ</code>+<code>ㅇ</code>) ― <code>종⇧</code>키를 사용하는 것이 더 편리합니다.</li>
            <li>ㅋ = <code>종⇧</code>+<code>ㄹ</code>+<code>ㅇ</code> (입력 편의를 위한 규칙) ― 중성이 ㅒ, ㅓ, ㅕ, ㅝ인 경우 <code>종⇧</code>+<code>ㄱ</code>보다 <code>종⇧</code>+<code>ㄹ</code>+<code>ㅇ</code>이 편리할 수 있습니다.</li>
            <li>ㅌ = <code>ㄴ</code>(ㅎ)+<code>ㅁ</code>(ㄷ) = <code>종⇧</code>+<code>ㄹ</code>+<code>ㅂ</code> (입력 편의를 위한 규칙) ― 중성이 ㅒ, ㅓ, ㅕ, ㅝ인 경우 <code>ㄴ</code>+<code>ㅁ</code>보다 <code>종⇧</code>+<code>ㄹ</code>+<code>ㅂ</code>이 편리할 수 있습니다.</li>
          </ul>
        </li>
      </ul>
      <p>정상적인 현대 한글 음절이 만들어지지 않는 키 조합으로 약어를 입력할 수 있습니다. 예를 들어, 초성&nbsp;<code>ㅎ</code>과 종성&nbsp;<code>ㄴ</code>을 동시에 누르면 ‘한국’이 입력되며, 초성&nbsp;<code>ㅁ</code>, 초성&nbsp;<code>ㅈ</code>, 중성&nbsp;<code>ㅔ</code>를 동시에 누르면 ‘문제’가 입력됩니다. 세모이 배열은 약 1,000여 개의 약어를 지원합니다.</p>
      <p><code>기호</code>+<code>※</code>, <code>기호</code>+<code>·</code>, <code>기호</code>+<code>:</code> 키를 눌러 총 6개 레이어의 기호 확장 기능을 사용할 수 있습니다.</p>
      <p><a href="https://blog.naver.com/eekdland/220526834927" target="_blank">자세한 정보 ›</a></p>

      <h3>세모이 (세벌식 모아치기 e) 옛한글</h3>
      <Keyboard labelData={threeSetSemoEOldLayout} />
      <p>세모이 배열의 옛한글 지원 버전입니다. 모아치기 배열 특성상 모든 옛한글 낱자의 조합을 지원하지는 않으나, 자주 사용되는 낱자는 조합이 가능합니다. 현대 한글 배열과 달리, 옛한글 배열은 약어 기능을 지원하지 않습니다.</p>
      <p>현대 한글 배열의 입력법에 더하여, 다음의 조합으로 옛한글 낱자를 입력할 수 있습니다.</p>
      <ul>
        <li>초성&nbsp;<code>ㄴ</code>, 중성&nbsp;<code>ㆎ</code>, 종성&nbsp;<code>ㅭ</code> 키는 각각 옛한글 확장 키로 사용됩니다. 옛한글 확장 키와 다른 키를 함께 누르면 위 배열에서 가장 오른쪽에 있는 옛한글 낱자를 입력할 수 있습니다.</li>
        <li>
          <p>초성&nbsp;<code>ㅿ</code> 키와 <code>ㅄ</code> 키와 <code>ㅅ</code>, <code>ㅈ</code>, <code>ㆀ</code>(ㅊ 대체/쌍자음)을 조합하면 각각 치두음과 정치음을 입력할 수 있습니다.</p>
          <ul>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄼᅠ</span> = <code>ㅅ</code>+<code>ㅿ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄽᅠ</span> = <code>ㅅ</code>+<code>ㆀ</code>+<code>ㅿ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄾᅠ</span> = <code>ㅅ</code>+<code>ㅄ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄿᅠ</span> = <code>ㅅ</code>+<code>ㆀ</code>+<code>ㅄ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅐᅠ</span> = <code>ㅈ</code>+<code>ㅄ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅏᅠ</span> = <code>ㅈ</code>+<code>ㆀ</code>+<code>ㅿ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅐᅠ</span> = <code>ㅈ</code>+<code>ㅄ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅑᅠ</span> = <code>ㅈ</code>+<code>ㆀ</code>+<code>ㅄ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅔᅠ</span> = <code>ㆀ</code>+<code>ㅿ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅕᅠ</span> = <code>ㆀ</code>+<code>ㅄ</code></li>
          </ul>
        </li>
        <li>
          <p>초성&nbsp;<code>ㆀ</code> 키와 다른 초성을 조합하면 각자 병서나 ㅇ계 합용 병서 초성을 입력할 수 있습니다.</p>
          <ul>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅁᅠ</span> = <code>ㄱ</code>+<code>ㆀ</code></li>
            <li>ㅥ = <code>ㄴ</code>+<code>ㆀ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅂᅠ</span> = <code>ㄷ</code>+<code>ㆀ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄙᅠ</span> = <code>ㄹ</code>+<code>ㆀ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅄᅠ</span> = <code>ㅂ</code>+<code>ㆀ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅅᅠ</span> = <code>ㅅ</code>+<code>ㆀ</code></li>
            <li>ㆅ = <code>ㅎ</code>+<code>ㆀ</code></li>
          </ul>
        </li>
        <li>
          <p>다음 초성은 구성 낱자 키를 동시에 눌러 입력할 수 있습니다.</p>
          <ul>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄗᅠ</span>, <span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅞᅠ</span>, <span style={{fontFamily: 'var(--font-old-hangul)'}}>ꥢᅠ</span>, <span style={{fontFamily: 'var(--font-old-hangul)'}}>ꥣᅠ</span></li>
            <li>ㄺ, ㄻ, ㄼ, <span style={{fontFamily: 'var(--font-old-hangul)'}}>ꥭᅠ</span>, ㅀ</li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ꥰᅠ</span>, ㅮ</li>
            <li>ㅲ, ㅳ, (ㅄ), ㅶ</li>
            <li>ㅴ, ㅵ ― <code>ㅄ</code>&nbsp;키와 <code>ㄱ</code> 또는 <code>ㄷ</code> 키를 동시에 누르면 됩니다.</li>
            <li>ㅺ, <span style={{fontFamily: 'var(--font-old-hangul)'}}>ᄱᅠ</span></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ꥶᅠ</span></li>
          </ul>
        </li>
        <li>
          <p>추가로 다음 초성을 조합하여 입력할 수 있습니다.</p>
          <ul>
            <li>ㅹ = <code>ㄴ</code>+<code>ㅂ</code>+<code>ㅇ</code></li>
            <li>ㅼ = <code>ㅅ</code>+<code>ㄹ</code></li>
            <li>ㅽ = <code>ㅅ</code>+<code>ㅎ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅊᅠ</span> = <code>ㅇ</code>+<code>ㅎ</code></li>
          </ul>
        </li>
        <li>
          <p>중성은 다음과 같이 조합하여 입력할 수 있습니다. 현대 한글을 입력할 때와 마찬가지로 (한 가지 예외를 제외하면) <code>중⇧</code>&nbsp;키는 <code>ㅗ</code>&nbsp;키와 동일한 역할을 합니다.</p>
          <ul>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᅶ</span> = <code>ㅏ</code>+<code>ㆉ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᅷ</span> = <code>ㅏ</code>+<code>ㆌ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᅾ</span> = <code>ㅕ</code>+<code>ㅜ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᆀ</span> = <code>ㆉ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟힰ</span> = <code>ㅡ</code>+<code>ㅕ</code></li>
            <li>ㆇ = <code>ㆉ</code>+<code>ㅓ</code></li>
            <li>ㆈ = <code>ㆉ</code>+<code>ㅕ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᆉ</span> = <code>ㅜ</code>+<code>ㅏ</code></li>
            <li>ㆊ = <code>ㆌ</code>+<code>ㅕ</code></li>
            <li>ㆋ = <code>ㆌ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟힻ</span> = <code>ㅡ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟힼ</span> = <code>ㅡ</code>+<code>ㅗ</code> ― <code>중⇧</code>+<code>ㅡ</code>로는 조합할 수 없습니다.</li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᆕ</span> = <code>ㅡ</code>+<code>ㅜ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᆘ</span> = <code>ㅏ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟힾ</span> = <code>ㅕ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟힿ</span> = <code>ㅓ</code>+<code>ㅔ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟퟀ</span> = <code>ㅣ</code>+<code>ㅔ</code>+<code>ㅗ</code> = <code>ㅣ</code>+<code>ㅜ</code>+<code>ㅗ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟퟄ</span> = <code>ㅓ</code>+<code>ㅕ</code></li>
            <li>ㆍ = <code>ㅡ</code>+<code>ㅏ</code></li>
            <li>ㆎ = <code>ㅡ</code>+<code>ㅏ</code>+<code>ㅣ</code> ― <code>ㆎ</code>&nbsp;키를 누르는 것이 힘든 경우 키 조합을 대신 사용할 수 있습니다.</li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᆢ</span> = <code>ㅡ</code>+<code>ㅓ</code></li>
          </ul>
        </li>
        <li>
          <p>종성은 다음 조합을 입력할 수 있습니다.</p>
          <ul>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᅠᇺ</span> = <code>ㄱ</code>+<code>ㄴ</code></li>
            <li><span style={{fontFamily: 'var(--font-old-hangul)'}}>ᅟᅠᇻ</span> = <code>ㄱ</code>+<code>ㅂ</code></li>
            <li>ㅧ = <code>ㄴ</code>+<code>ㅅ</code></li>
            <li>ㅨ = <code>ㄴ</code>+<code>ㅿ</code></li>
            <li>ㅩ = <code>ㄽ</code>+<code>ㄱ</code></li>
            <li>ㅬ = <code>ㄹ</code>+<code>ㅿ</code></li>
            <li>ㅫ = <code>ㄽ</code>+<code>ㅂ</code></li>
            <li>ㅮ = <code>ㅁ</code>+<code>ㅂ</code></li>
            <li>ㅯ = <code>ㅁ</code>+<code>ㅅ</code></li>
            <li>ㅰ = <code>ㅁ</code>+<code>ㅿ</code></li>
            <li>ㆂ = <code>ㆁ</code>+<code>ㅅ</code></li>
            <li>ㆃ = <code>ㆁ</code>+<code>ㅿ</code></li>
          </ul>
        </li>
      </ul>
      <p><a href="https://blog.naver.com/eekdland/220526834927" target="_blank">자세한 정보 ›</a></p>
    </article>
  )
}
