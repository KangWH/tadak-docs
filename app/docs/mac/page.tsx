import Link from "next/link"
import TableOfContents, {
  type TocConfig,
} from "@/app/components/table-of-contents"

const macToc: TocConfig = {
  title: "목차",
  items: [
    { title: "시작하기", href: "#시작하기" },
    { title: "기본 사용", href: "#기본-사용" },
    { title: "한자 변환", href: "#한자-변환" },
    { title: "설정", href: "#설정" },
    { title: "개인 정보", href: "#개인-정보" },
    { title: "문제가 생겼을 때", href: "#문제가-생겼을-때" },
  ],
}

function ManualTable({
  headers,
  rows,
}: {
  headers: [string, string]
  rows: [string, string][]
}) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-gray-300 dark:border-zinc-600">
            <th className="text-left py-2 pr-4">{headers[0]}</th>
            <th className="text-left py-2">{headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([left, right], i) => (
            <tr
              key={left}
              className={
                i < rows.length - 1
                  ? "border-b border-gray-200 dark:border-zinc-700"
                  : undefined
              }
            >
              <td className="py-2 pr-4 align-top">{left}</td>
              <td className="py-2 align-top">{right}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function MacPage() {
  return (
    <article>
      <h2>macOS 입력기</h2>
      <p>
        타닥은 Mac용 한글 입력기입니다. Windows용{" "}
        <a href="http://moogi.new21.org/prg4.html" target="_blank">
          날개셋 한글 입력기
        </a>
        와 비슷한 다양한 자판·편의 기능을 제공합니다.
      </p>
      <p>
        기본 자판은 <strong>두벌식</strong>이며, 세벌식·신세벌식·로마자 한글 등도
        추가해 쓸 수 있습니다.
      </p>
      <p className="text-sm text-gray-500 dark:text-zinc-400">
        타닥은 아직 정식 배포 전 단계일 수 있습니다. 일부 동작이 바뀌거나,
        예기치 않은 문제가 생길 수 있습니다.
      </p>
      <p>
        iPhone·iPad용 설명서는{" "}
        <Link href="/docs/iphone">iOS 입력기</Link>를 참고하세요.
      </p>

      <div className="my-6 flex flex-col items-center gap-y-2">
        <a
          href="https://github.com/kangwh/tadak-public/releases"
          target="_blank"
          className="px-4 py-2 border border-blue-600 dark:border-blue-500 rounded-md font-semibold transition-all transition-duration-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white active:opacity-75"
        >
          macOS 버전 다운로드
        </a>
        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">
          macOS 26.0 이상 지원. Intel 칩과 Apple Silicon을 모두 지원합니다.
        </p>
      </div>

      <TableOfContents toc={macToc} />

      <h3 id="시작하기">1. 시작하기</h3>
      <h4>입력기로 켜기</h4>
      <ol className="pl-8 my-2 list-decimal space-y-1">
        <li>
          타닥을 설치합니다. 입력기 앱은{" "}
          <code>/Library/Input Methods</code>에 두어야 하며, 제공된 설치 안내를
          따르세요.
        </li>
        <li>
          필요하면 Mac을 <strong>재시동</strong>합니다.
        </li>
        <li>
          <strong>시스템 설정 → 키보드 → 입력 소스</strong>에서{" "}
          <strong>타닥</strong>(또는 「한글 입력기」)을 추가합니다.
        </li>
        <li>메뉴 막대나 단축키로 입력 소스를 타닥으로 바꿉니다.</li>
      </ol>
      <p>
        타닥은 일반 앱처럼 Dock에서 실행하는 방식이 아닙니다. 입력 소스로 선택한
        뒤, 어느 앱에서나 글자를 입력하면 됩니다.
      </p>

      <h4>손쉬운 사용 허용 (권장)</h4>
      <p>
        일부 자판(모아치기·일부 세벌식 등)은 키를 <strong>누르는 순간</strong>
        뿐 아니라 <strong>떼는 순간</strong>도 알아야 제대로 동작합니다.
      </p>
      <ol className="pl-8 my-2 list-decimal space-y-1">
        <li>
          <strong>시스템 설정 → 개인정보 보호 및 보안 → 손쉬운 사용</strong>
          으로 이동합니다.
        </li>
        <li>
          목록에서 <strong>한글 입력기</strong>(타닥)를 허용합니다.
        </li>
      </ol>
      <p>
        허용하지 않으면 메뉴에 「키를 떼는 시점 인식 불가」 안내가 나타날 수
        있고, 고급 입력이 필요한 자판이 제대로 동작하지 않을 수 있습니다.
      </p>

      <h3 id="기본-사용">2. 기본 사용</h3>
      <h4>글자 입력</h4>
      <p>
        입력 소스를 타닥으로 둔 뒤 평소처럼 타이핑하면 됩니다. 현재 선택된
        자판(두벌식 등)에 맞춰 한글·영문·기호가 입력됩니다.
      </p>

      <h4>메뉴로 할 수 있는 일</h4>
      <p>
        메뉴 막대 또는 시스템 <strong>입력 메뉴</strong>(입력기 아이콘)에서
        다음을 사용할 수 있습니다.
      </p>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          ["키보드 이름 목록", "활성 자판을 골라 전환"],
          ["한자 변환", "지금 입력한(또는 커서 근처) 한글을 한자로 바꿈"],
          [
            "자동 변환 모드",
            "켜면 입력하면서 한자·숫자 후보를 이어서 고를 수 있음",
          ],
          ["설정", "키보드·단축키·옵션 창 열기"],
          ["화상 키보드 표시", "현재 자판 배열을 화면에 표시"],
        ]}
      />

      <h4>자판 전환 단축키 (기본값)</h4>
      <ManualTable
        headers={["동작", "기본 단축키"]}
        rows={[
          ["직전에 사용한 키보드로 전환", "Shift + Space"],
          ["활성화된 키보드 간 순환", "Option + Shift + Space"],
          ["첫 번째 키보드로 전환", "(없음 — 설정에서 지정)"],
          ["한자 변환", "Option + Return"],
          ["제2변환", "Option + Shift + Return"],
          ["자동 변환 모드 전환", "(없음 — 설정에서 지정)"],
        ]}
      />
      <p>
        단축키는 <strong>설정 → 단축키</strong>에서 바꿀 수 있습니다. 다른
        앱·시스템과 겹치는 조합은 피하세요. 빨간색으로 표시되는 조합은 일부
        앱에서 먹히지 않을 수 있어 권장하지 않습니다.
      </p>
      <p>
        <strong>첫 번째 키보드로 전환</strong>을 지정해 두었는데 이미 첫 번째
        자판을 쓰고 있으면, 두 번째 자판으로 바뀝니다.
      </p>
      <p>
        <strong>제2변환</strong>은 한자 사전이 아니라, 그 자판 데이터에 들어
        있는 변환 규칙을 씁니다. 규칙이 없는 자판에서는 반응이 없을 수 있습니다.
      </p>

      <h4>화상 키보드</h4>
      <p>
        메뉴에서 <strong>화상 키보드 표시</strong>를 열면 현재 자판의 키 배치를
        화면에서 확인할 수 있습니다. 세벌식·신세벌식처럼 익숙하지 않은 배열을
        배울 때 유용합니다.
      </p>

      <h3 id="한자-변환">3. 한자 변환</h3>
      <p>타닥에는 두 가지 변환 방식이 있습니다.</p>

      <h4>수동 변환 (자동 변환 모드가 꺼진 상태)</h4>
      <ol className="pl-8 my-2 list-decimal space-y-1">
        <li>변환할 한글을 입력합니다.</li>
        <li>
          <strong>Option + Return</strong>(또는 메뉴의 「한자 변환」)을
          누릅니다.
        </li>
        <li>후보 창에서 원하는 한자를 고른 뒤 확정합니다.</li>
      </ol>
      <ManualTable
        headers={["키", "동작"]}
        rows={[
          ["↑ / ↓", "이전·다음 후보 (세로쓰기에서는 ← / →)"],
          [
            "← / →, Page Up / Page Down",
            "페이지 이동 (세로쓰기에서는 ↑ / ↓)",
          ],
          ["Space / Shift + Space", "다음·이전 후보"],
          ["1–9", "해당 번호 후보로 바로 확정"],
          ["Return", "현재 후보 확정"],
          ["Tab", "후보 창 접기·펼치기 (페이지가 여러 개일 때)"],
          ["Esc", "취소 (원문 유지)"],
          ["마우스로 클릭", "그 후보 선택"],
        ]}
      />

      <h4>자동 변환 모드</h4>
      <p>
        메뉴에서 <strong>자동 변환 모드</strong>를 켭니다. 한글을 입력하면 후보
        창이 자동으로 나타날 수 있고, 구간을 이어 가며 한자 표기를 고를 수
        있습니다.
      </p>
      <p>
        숫자·기호를 같은 방식으로 바꿀지는 <strong>설정 → 옵션</strong>의 자동
        변환 항목에서 정합니다. 숫자를 포함하면 전각 숫자, 첨자, 한자 숫자 같은
        후보가 함께 나올 수 있고, 원문자·괄호 문자 후보도 따로 켤 수 있습니다.
      </p>
      <ManualTable
        headers={["키", "동작"]}
        rows={[
          ["Tab / Shift + Tab", "다음·이전 후보 (창이 없으면 표시)"],
          ["Option + Tab", "후보 창 접기·펼치기"],
          ["↑ / ↓", "이전·다음 후보"],
          ["← / → (창이 접힌 상태)", "이전·다음 구간으로 이동"],
          ["← / → (창이 펼친 상태)", "페이지 이동"],
          ["Shift + ↑ / ↓", "페이지 이동"],
          ["Return", "지금 고른 내용을 포함해 전체 확정"],
          ["Shift + Return", "현재 구간만 확정하고 다음 구간으로"],
          ["Option + Return", "한자로 바꾸지 않고 원문 그대로 확정"],
          ["Space", "원문 확정 후 스페이스 입력"],
          ["Esc", "취소"],
          ["클릭", "그 후보로 구간을 고르고 다음으로 진행"],
          ["계속 타이핑", "변환을 이어 가며 글자 추가"],
        ]}
      />

      <h3 id="설정">4. 설정</h3>
      <p>
        메뉴에서 <strong>설정</strong>을 엽니다. 창 위에{" "}
        <strong>키보드 / 단축키 / 옵션 / 정보</strong> 탭이 있습니다.
      </p>

      <h4>키보드</h4>
      <ul className="pl-8 my-2 list-disc space-y-1">
        <li>
          지금 쓰는 키보드 목록을 보고, 항목을 드래그해 순서를 바꾸거나
          삭제합니다. 마지막 남은 자판은 삭제할 수 없습니다.
        </li>
        <li>
          <strong>추가...</strong>로 내장 자판을 넣거나,{" "}
          <strong>불러오기...</strong>로 <code>.tadak</code> 키보드 파일을
          가져옵니다.
        </li>
        <li>
          <strong>이름 짧게 표시</strong>를 켜면 메뉴 막대와 트레이 메뉴에 짧은
          이름이 표시됩니다.
        </li>
      </ul>
      <p>
        자판 종류 예: 두벌식, 세벌식(공세벌식·신세벌식 등), 복벌식, 로마자, 기타
        한글, 라틴(QWERTY·드보락·콜맥 등), 기타 외국 문자, 기호 등.
      </p>

      <h4>단축키</h4>
      <p>
        자판 전환·한자 변환·제2변환·자동 변환 모드 전환에 쓸 키 조합을
        지정하거나 해제합니다. 항목을 누른 뒤 원하는 키를 누르면 등록됩니다.
      </p>

      <h4>옵션</h4>
      <ManualTable
        headers={["옵션", "설명"]}
        rows={[
          [
            "Forward Delete(⌦) 키를 눌렀을 때 현재 조합을 먼저 삭제",
            "조합 중인 글자를 먼저 지울지 여부",
          ],
          [
            "한글 자음을 기호로 변환 (Windows 방식)",
            "ㄱ·ㄴ·ㄷ처럼 자음만 입력한 뒤 한자 변환을 하면 문장 부호·단위·원문자 후보가 나옴",
          ],
          ["한자 변환 시 오른쪽부터 탐색", "변환 대상을 오른쪽부터 찾음"],
          [
            "한글 키보드에서 ` 키는 ` 대신 ₩ 입력",
            "원화 기호 입력",
          ],
          [
            "자동 변환 대상에 숫자 포함",
            "자동 변환 세션에 0–9를 넣음 (기본: 켬)",
          ],
          [
            "자동 변환 대상에 기호 포함",
            "자동 변환 세션에 일부 기호를 넣음 (기본: 끔)",
          ],
          [
            "자동 변환에 원문자·괄호 문자 후보 포함",
            "원문자·괄호로 둘러싼 형태의 후보를 넣음 (기본: 끔)",
          ],
        ]}
      />
      <p>
        <strong>초기화</strong>를 누르면 활성 키보드 목록과 불러온 자판 파일,
        단축키가 기본값으로 돌아갑니다. 아래 옵션 토글(원화 기호, 자동 변환
        대상 등)은 그대로 둡니다.
      </p>

      <h4>정보</h4>
      <p>
        버전과 프레임워크 버전을 확인하고, <strong>업데이트 확인</strong>으로
        새 빌드가 있는지 볼 수 있습니다. 확인 시 GitHub에서 버전 정보만
        가져오며, 입력 내용은 보내지 않습니다. 관련 링크와 오픈소스 라이선스도
        이 탭에 있습니다.
      </p>

      <h3 id="개인-정보">5. 개인 정보</h3>
      <p>
        macOS는 타사 입력기에 대해 「입력 내용에 접근할 수 있다」는 경고를 띄울
        수 있습니다. 이는 운영체제 보안 정책에 따른 안내입니다.
      </p>
      <p>
        타닥은 입력한 내용을 개발자 서버 등으로 <strong>보내지 않습니다</strong>
        .
      </p>

      <h3 id="문제가-생겼을-때">6. 문제가 생겼을 때</h3>
      <ManualTable
        headers={["증상", "확인할 것"]}
        rows={[
          [
            "타닥이 입력 소스 목록에 없음",
            "설치가 완료되었는지, Mac을 재시동했는지, 시스템 설정 → 키보드 → 입력 소스에 추가했는지",
          ],
          [
            "세벌식·모아치기 등이 이상함",
            "손쉬운 사용에서 한글 입력기(타닥) 허용 여부",
          ],
          [
            "단축키가 안 먹음",
            "설정 → 단축키 조합이 다른 앱과 겹치지 않는지",
          ],
          [
            "설정이 꼬인 느낌",
            "설정 → 옵션 → 초기화 (키보드 목록·단축키가 기본값으로 돌아감. 옵션 토글은 유지)",
          ],
          [
            "숫자·기호가 자동 변환되지 않음",
            "설정 → 옵션의 자동 변환 대상 포함 여부",
          ],
        ]}
      />
      <p>
        업데이트가 있으면 <strong>설정 → 정보</strong>의 업데이트 안내를
        확인하세요.
      </p>
    </article>
  )
}
