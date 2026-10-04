import Keyboard from "@/app/components/keyboard";
import { twoSetLayout, twoSetOldLayout, dujulELayout, dugyeobELayout } from "./twoSetLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>두벌식</h2>
      <p><strong>두벌식</strong> 배열은 낱자 키가 자음 한 벌과 모음 한 벌, 이렇게 두 벌로 구성되어 있는 배열을 뜻합니다.</p>
      <p>자음 키 한 벌이 초성과 종성을 입력하는 데 모두 사용되기 때문에, 배열을 익히기 쉽고 적은 수의 키로도 한국어를 입력할 수 있습니다.</p>
      <p>초성과 중성을 입력한 상태에서 자음 키를 누르면 우선 종성으로 입력되고, 이후에 모음 키가 눌리면 그 종성이 다음 글자의 초성으로 변하는(예: ‘한’ → ‘하나’) ‘도깨비불 현상’이 나타납니다.</p>
      <p>대부분의 배열에서 자음 기본자 14자와 모음 기본자 14자, 그리고 ㅐ와 ㅔ를 바로 입력할 수 있습니다. 쌍자음은 <code>shift</code>&nbsp;키를 누른 채로 대응하는 홑자음 키를 눌러 입력하고, ㅒ와 ㅖ는 <code>shift</code>&nbsp;키를 누른 채로 각각 ㅐ와 ㅔ를 눌러 입력하며, 나머지 모음과 겹받침은 낱자를 구성하는 키를 순서대로 눌러 입력합니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>
      <h3>두벌식 표준</h3>
      <Keyboard labelData={twoSetLayout} />
      <p>대한민국 표준(KS X 5002)으로 지정된 배열입니다. 왼손에 자음, 오른손에 모음이 배치되어 있으며, 행별로 낱자가 규칙적으로 배치되어 있어 배열을 익히기 쉽습니다.</p>
      <h3>두벌식 옛한글</h3>
      <Keyboard labelData={twoSetOldLayout} />
      <p>두벌식 표준 배열을 바탕으로, 옛한글 낱자와 방점을 입력할 수 있도록 변형한 배열입니다. 한 글자의 종성과 다음 글자의 초성을 구분해야 하는 경우에는 <code>❖</code>를 눌러 현재 음절 조합을 강제로 종료합니다.</p>
      <h3>두줄이 (두벌식 줄맞춤 e)</h3>
      <Keyboard labelData={dujulELayout} />
      <p>신세기가 2026년에 공개한 두벌식 배열로, 낱자가 더 효율적으로 배치되어 있습니다. 자주 사용되는 자음인 ㅆ은 <code>shift</code>를 사용하지 않고 입력할 수 있습니다.</p>
      <p><a href="https://blog.naver.com/eekdland/224252538464" target="_blank">자세한 정보 ›</a></p>
      <h3>두겹이 (두벌식 겹받침 e)</h3>
      <Keyboard labelData={dugyeobELayout} />
      <p>신세기가 2026년에 공개한 두벌식 배열입니다. 두벌식 표준 배열에서 오른손의 <code>ㅑ</code>, <code>ㅓ</code>, <code>ㅏ</code>, <code>ㅣ</code> 키에 자주 쓰이는 겹받침을 배치한 배열입니다. 초성과 중성을 입력한 상태에서 이 네 키는 겹받침을 입력하는 데 사용됩니다.</p>
      <p><a href="https://blog.naver.com/eekdland/224142632310" target="_blank">자세한 정보 ›</a></p>
    </article>
  )
}
