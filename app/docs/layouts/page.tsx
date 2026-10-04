import Link from "next/link";
import Keyboard from "@/app/components/keyboard";
import { twoSetLayout } from "./twoset/twoSetLayouts";
import { threeSet391Layout } from "./threeset/kong/threeSetKongLayouts";

export default function Layouts() {
  return (
    <article>
      <h2>키보드 배열</h2>
      <p>타닥은 다양한 배열을 기본 지원합니다. 이 문서에서는 타닥이 지원하는 다양한 배열을 알아봅니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>

      <h3>두벌식</h3>
      <p><strong>두벌식</strong> 배열은 낱자 키가 자음 한 벌과 모음 한 벌, 이렇게 두 벌로 구성되어 있는 배열을 뜻합니다.</p>
      <div className="h-4"></div>
      <Keyboard labelData={twoSetLayout} />
      <p>위 배열은 가장 대표적인 두벌식 배열로, 대한민국 표준 배열입니다.</p>
      <p>자세한 내용은 <Link href="layouts/twoset">두벌식</Link> 문서를 참조하십시오.</p>

      <h3>세벌식</h3>
      <p><strong>세벌식</strong> 배열은 낱자 키가 자음 두 벌 (초성 한 벌과 종성 한 벌)과 모음 한 벌, 총 세 벌로 구성된 배열을 뜻합니다.</p>
      <div className="h-4"></div>
      <Keyboard labelData={threeSet391Layout} />
      <p>위 배열은 가장 대표적인 세벌식 배열로, 세벌식 3-91 배열입니다.</p>
      <p>자세한 내용은 <Link href="layouts/threeset">세벌식</Link> 문서를 참조하십시오.</p>
    </article>
  )
}
