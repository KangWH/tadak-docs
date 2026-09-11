import Link from "next/link"
import TableOfContents, {
  type TocConfig,
} from "@/app/components/table-of-contents"

const iosToc: TocConfig = {
  title: "목차",
  items: [
    { title: "시작하기", href: "#시작하기" },
    { title: "기본 사용", href: "#기본-사용" },
    { title: "일반 설정", href: "#일반-설정" },
    { title: "세부 설정", href: "#세부-설정" },
    { title: "앱의 다른 화면", href: "#앱의-다른-화면" },
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

export default function IPhonePage() {
  return (
    <article>
      <h2>iOS 키보드</h2>
      <p>
        타닥은 iPhone·iPad용 한글 키보드입니다. Windows용{" "}
        <a href="http://moogi.new21.org/prg4.html" target="_blank">
          날개셋 한글 입력기
        </a>
        와 비슷한 다양한 자판·편의 기능을 제공합니다.
      </p>
      <p>기본 자판은 <strong>두벌식</strong>이며, 세벌식·신세벌식·로마자 한글·모바일형 자판 등도 골라 쓸 수 있습니다.</p>
      <p>Mac용 설명서는 <Link href="/docs/mac">macOS 입력기</Link>를 참고하세요.</p>

      <div className="my-6 flex flex-col items-center gap-y-2">
        <a
          href="https://apps.apple.com/us/app/%ED%83%80%EB%8B%A5-%ED%95%9C%EA%B8%80-%ED%82%A4%EB%B3%B4%EB%93%9C/id6775452099"
          target="_blank"
          className="px-4 py-2 border border-blue-600 dark:border-blue-500 rounded-md font-semibold transition transition-duration-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white active:opacity-75"
        >
          iOS 버전 다운로드
        </a>
        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">
          iOS/iPadOS 26.0 이상 지원.
        </p>
      </div>

      <TableOfContents toc={iosToc} />

      <h3 id="시작하기">1. 시작하기</h3>
      <ol className="pl-8 my-2 list-decimal space-y-1">
        <li>
          <strong>타닥</strong> 앱을 엽니다.
        </li>
        <li>
          <strong>키보드 설정</strong>을 누르거나,{" "}
          <strong>설정 방법 보기</strong> 안내를 따릅니다.
        </li>
        <li>
          기기 <strong>설정 → 키보드</strong>에서 <strong>타닥</strong>을
          켭니다.
        </li>
        <li>
          모든 기능을 쓰려면 <strong>전체 접근 허용</strong>도 켭니다.
        </li>
      </ol>
      <p>
        이후 아무 앱에서 키보드를 바꾼 뒤 <strong>타닥</strong>을 선택하면
        됩니다.
      </p>
      <p>
        전체 접근을 허용하지 않으면 키보드에서 타닥 앱을 열 수 없습니다. 기능
        키 동작이 <strong>설정 열기</strong>여도 <strong>한자 변환</strong>으로
        바뀌고, 길게 눌렀을 때 나오는 메뉴에서도{" "}
        <strong>키보드 설정...</strong>이 숨겨집니다.
      </p>
      <p>
        앱 안의 <strong>설정 방법 보기</strong>에 단계별 화면 안내가 있습니다.
      </p>

      <h3 id="기본-사용">2. 기본 사용</h3>
      <h4>글자 입력</h4>
      <p>
        키보드에서 <strong>타닥</strong>을 선택한 뒤 평소처럼 입력합니다. 앱{" "}
        <strong>일반 설정 → 키보드</strong>에서 고른 자판에 맞춰
        한글·영문·기호가 입력됩니다.
      </p>

      <h4>한글·영문·기호 전환</h4>
      <ManualTable
        headers={["키", "동작"]}
        rows={[
          ["ABC", "영문 입력으로 전환"],
          ["한글", "한글 입력으로 돌아가기"],
          ["123 또는 .?123", "숫자·기호 키보드"],
          ["#+= / 123", "기호 키보드 안에서 페이지 전환"],
          ["지구본", "시스템에 등록된 다른 키보드로 전환"],
        ]}
      />
      <p>
        기호 입력 중에 스페이스나 Return을 누르면 한글 배열로 돌아갑니다.
        (기본 형태의 자판일 때)
      </p>
      <p>
        <strong>ABC</strong>는 지금 쓰는 한글 자판에 딸린 영문 입력입니다.
        iPad(미니가 아닌 모델)에서 Caps Lock으로 바꾸는 라틴 배열(QWERTY
        등)과는 다릅니다.{" "}
        <a href="#세부-설정">세부 설정</a>을 참고하세요.
      </p>

      <h4>입력란에 따라 달라지는 키</h4>
      <p>
        주소·검색·메일 칸에서는 스페이스 옆에 바로 가기 키가 붙을 수 있습니다.
      </p>
      <ManualTable
        headers={["입력란", "추가되는 키"]}
        rows={[
          ["웹 주소", ".com (길게 누르면 다른 도메인)"],
          ["웹 검색", ".com"],
          ["이메일", "@"],
          ["사용자 이름 등", "@, #"],
        ]}
      />
      <p>
        숫자만 받는 칸에서는 숫자 키패드가 열립니다. 전화 번호·소수점
        입력란도 그에 맞는 키패드가 나옵니다.
      </p>

      <h4>대문자 (Caps Lock)</h4>
      <p>
        <strong>일반 설정</strong>에서 <strong>Caps Lock 활성화</strong>가
        켜져 있어야 합니다. 자판 데이터에서 Caps Lock을 허용하지 않으면
        동작하지 않을 수 있습니다.
      </p>
      <ul className="pl-8 my-2 list-disc space-y-1">
        <li>
          iPhone, iPad (10.5인치 미만 모델), iPad 유동식 키보드: Shift를{" "}
          <strong>빠르게 두 번</strong> 누르면 Caps Lock이 켜집니다. 다시
          Shift를 누르면 해제됩니다.
        </li>
        <li>
          iPad(10.5인치 이상 모델)에서{" "}
          <strong>Caps Lock 키로 로마자-한글 전환</strong>이 꺼져 있으면, Caps
          Lock 키로 대문자를 고정합니다.
        </li>
      </ul>

      <h4>키를 길게 눌러 다른 문자 입력</h4>
      <p>
        글자 키를 <strong>길게 누르면</strong> 그 키에 연결된 다른 문자
        목록(팔레트)이 나타납니다. 손가락을 옮긴 뒤 떼면 그 문자가 입력됩니다.
      </p>
      <ul className="pl-8 my-2 list-disc space-y-1">
        <li>한글 키: 쌍자음·이중모음처럼 같은 키로 바로 넣기 어려운 글자</li>
        <li>영문 키: 악센트 문자 등</li>
        <li>
          <strong>.com</strong> 키: 기기에 추가된 키보드 언어를 바탕으로 한
          다른 도메인
        </li>
      </ul>
      <p>
        삭제 키를 길게 누르면 글자가 연속으로 지워집니다. 속도는{" "}
        <strong>세부 설정 → 연속 삭제 속도</strong>에서 바꿉니다.
      </p>

      <h4>키 휙 넘기기 (iPad)</h4>
      <p>
        <strong>일반 설정</strong>에서{" "}
        <strong>키 휙 넘기기 활성화</strong>가 켜져 있으면, 키를 누른 채로
        밀어 다른 문자를 입력할 수 있습니다. 키 위에 작은 보조 글자가 보이면
        그 방향으로 밀면 됩니다. 길게 눌러 나오는 팔레트와는 별개입니다.
      </p>

      <h4>제스처 자판 (천지인, 단모음 등)</h4>
      <p>
        <strong>제스처</strong> 태그가 있는 자판은 키를 누른 채로
        위·아래·왼쪽·오른쪽으로 밀어 다른 글자를 넣습니다.
        천지인·단모음처럼 키가 적은 모바일형 배열이 여기에 해당합니다.
        가운데를 그대로 떼면 숫자나 기본 글자가 들어갈 수 있습니다.
      </p>

      <h4>커서를 손가락으로 옮기기</h4>
      <p>
        스페이스 바를 <strong>길게 누르면</strong> 트랙패드 모드로 바뀝니다.
        손가락을 좌우로 움직이면 글자 단위로, 위아래로 움직이면 단어 단위로
        커서가 이동합니다. 손가락을 떼면 끝납니다. 손가락을 더 빠르게 움직이면
        커서도 더 빠르게 움직입니다.
      </p>

      <h4>기능 키</h4>
      <p>
        키보드 왼쪽 아래에 있는 기능 키를 <strong>짧게 누르면</strong>{" "}
        <strong>세부 설정 → 기능 키 동작</strong>에서 고른 일을 합니다.
      </p>
      <p>
        기능 키를 <strong>길게 누르면</strong> 메뉴가 열립니다.
      </p>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "키보드 설정...",
            "타닥 앱의 설정 화면으로 이동. 전체 접근 허용이 켜져 있어야 동작",
          ],
          ["한자 변환", "지금 입력한 한글을 한자로 바꿈"],
          ["한 손 키보드 (iPhone, 세로)", "왼쪽 / 양손 / 오른쪽"],
        ]}
      />

      <h4>한자 변환</h4>
      <p>
        기능 키 동작이 <strong>한자 변환</strong>이거나, 기능 키 메뉴에서{" "}
        <strong>한자 변환</strong>을 고르면 후보가 키보드 위쪽에 나타납니다.
      </p>
      <ManualTable
        headers={["동작", "결과"]}
        rows={[
          ["후보를 탭", "그 한자로 바꿈"],
          ["스페이스 또는 Tab", "다음 후보로 이동 (하이라이트)"],
          ["Return", "하이라이트된 후보로 확정"],
          ["기능 키를 다시 누름", "변환 취소"],
        ]}
      />
      <p>
        한자의 훈·음을 함께 보려면 <strong>세부 설정</strong>에서{" "}
        <strong>한자 훈음 표시</strong>를 켜세요.
      </p>

      <h4>텍스트 대치</h4>
      <p>
        키보드 위쪽 제안 칸에는 지금 입력 중인 단어가 따옴표 안에 보일 수
        있습니다. <strong>일반 설정</strong>에서{" "}
        <strong>텍스트 대치</strong>가 켜져 있으면, 기기{" "}
        <strong>설정 → 일반 → 키보드 → 텍스트 대치</strong>에 등록한 바로
        가기가 옆 칸에 나타납니다. 그 칸을 누르면 바꿔 넣습니다.
      </p>

      <h3 id="일반-설정">3. 일반 설정</h3>
      <p>
        타닥 앱의 <strong>일반 설정</strong>에서 다음을 조정할 수 있습니다.
      </p>

      <h4>키보드 활성화</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "키보드 설정",
            "기기 설정 화면으로 이동해 타닥을 켜거나 전체 접근 허용을 설정",
          ],
          ["설정 방법 보기", "활성화 단계를 그림으로 안내"],
        ]}
      />

      <h4>키보드·입력</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "키보드",
            "사용할 자판 선택. 검색·태그 필터, 키보드 불러오기(.tadak 파일), 사용자 자판 삭제",
          ],
          ["텍스트 대치", "시스템 텍스트 대치 반영 여부"],
          ["한 손 키보드 (iPhone)", "끔 / 왼쪽 / 오른쪽"],
        ]}
      />
      <p>
        자판은 두벌식, 세벌식, 네벌식 이상, 복벌식, 로마자, 기타, 기호 등으로
        나뉩니다. 위쪽 태그(갈마들이, 신세벌식, 모바일 최적, 제스처 등)로 걸러
        볼 수 있습니다. 각 항목 오른쪽 정보 단추로 설명·제작자·라이선스를 볼
        수 있습니다. 이 기기를 지원하지 않는 자판은 목록에 나오지 않습니다.
      </p>
      <p>
        QWERTY·드보락 같은 라틴 배열은 이 목록에서 고르는 항목이 아닙니다.
        iPad에서는 <strong>세부 설정</strong>의 Caps Lock 전환으로 씁니다.
      </p>

      <h4>피드백</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          ["문자 미리보기", "키를 누를 때 글자 미리보기"],
          ["햅틱 피드백 (iPhone)", "진동 피드백"],
          ["사운드", "키 입력 소리"],
        ]}
      />

      <h4>기타</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "키 휙 넘기기 활성화 (iPad)",
            "키를 밀어서 다른 문자를 입력",
          ],
          [
            "Caps Lock 활성화",
            "Caps Lock(또는 Shift 두 번 탭)으로 대문자 고정",
          ],
          [
            "「.」 단축키",
            "스페이스를 두 번 탭하면 마침표와 간격을 차례로 삽입",
          ],
        ]}
      />
      <p>
        화면 아래(또는 위)의 테스트 영역에서 설정을 바로 시험해 볼 수 있습니다.
      </p>

      <h3 id="세부-설정">4. 세부 설정</h3>
      <p>
        타닥 앱의 <strong>세부 설정</strong>에서 다음을 조정할 수 있습니다.
      </p>

      <h4>로마자 전환 (iPad, 미니 제외)</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "Caps Lock 키로 로마자-한글 전환",
            "켜면 Caps Lock 키 레이블이 한/A가 되고, 누를 때마다 한글 자판과 라틴 배열을 바꿈",
          ],
          [
            "라틴 키보드 배열",
            "QWERTY, QWERTZ — 독일어, AZERTY, 드보락, 콜맥, 콜맥-DH",
          ],
        ]}
      />
      <p>
        이 전환은 <strong>ABC</strong> 키로 여는 영문 입력과는 다릅니다. Caps
        Lock으로 바꾼 뒤에는 선택한 라틴 배열 전체가 키보드로 바뀝니다.
      </p>

      <h4>키 표시</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          [
            "상황에 맞는 키 레이블",
            "갈마들이·기호 확장 등에서 현재 상황에 맞는 레이블 표시",
          ],
          ["보조 레이블", "보조 문자 레이블도 함께 표시"],
          [
            "자모 색상 구분",
            "자모 위치에 따라 키 색을 구분. 켜면 레이블 색상 설정에서 두벌식·세벌식·방점 색을 고르거나, 오른쪽 위 프리셋(클래식 / 푸른색 계열 / 붉은색 계열)을 적용. 세벌식 갈마들이용 색(초성-중성, 중성-종성)은 상황에 맞는 키 레이블을 끈 경우에만 쓰임",
          ],
        ]}
      />

      <h4>기능·변환</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[
          ["기능 키 동작", "한자 변환 또는 설정 열기"],
          ["한자 훈음 표시", "한자 후보에 훈·음 표시"],
          [
            "한글 자음을 기호로 변환",
            "ㄱ·ㄴ·ㄷ처럼 자음만 입력한 뒤 한자 변환을 하면, Windows 한글 IME처럼 문장 부호·단위·원문자 후보가 나옴",
          ],
        ]}
      />
      <p>
        <strong>설정 열기</strong>와 기능 키 메뉴의{" "}
        <strong>키보드 설정...</strong>은 <strong>전체 접근 허용</strong>이
        켜져 있어야 동작합니다.
      </p>

      <h4>입력 속도</h4>
      <ManualTable
        headers={["항목", "설명"]}
        rows={[["연속 삭제 속도", "삭제 키를 길게 눌렀을 때 반복 속도"]]}
      />

      <h3 id="앱의-다른-화면">5. 앱의 다른 화면</h3>
      <h4>써 보기</h4>
      <p>
        긴 글을 입력해 자판을 시험하는 화면입니다. 오른쪽 위에서{" "}
        <strong>글꼴...</strong>을 누르면 서체 종류(자동·현대 한글·옛한글),
        두께, 크기, 줄 높이를 바꿀 수 있습니다.{" "}
        <strong>입력 내용 복사</strong>와 <strong>내용 지우기</strong>도
        있습니다.
      </p>

      <h4>정보</h4>
      <p>
        앱·프레임워크 버전, GitHub, 날개셋 한글 입력기 안내, 이용 약관,
        개인정보 처리 방침, 오픈소스 라이선스를 볼 수 있습니다. 각 키보드
        데이터의 라이선스는 키보드 세부 정보 화면에 있습니다.
      </p>

      <h3 id="개인-정보">6. 개인 정보</h3>
      <p>
        iOS·iPadOS는 타사 키보드에 대해 ‘입력 내용에 접근할 수 있다’는
        경고를 띄울 수 있습니다. 이는 운영체제 보안 정책에 따른 안내입니다.
      </p>
      <p>
        타닥은 사용자의 개인 정보를 <strong>수집하지 않으며</strong>, 입력한
        내용을 개발자 서버 등으로 <strong>보내지 않습니다</strong>.
      </p>
      <p>
        앱 <strong>정보</strong>에서 이용 약관과 개인정보 처리 방침을 확인할
        수 있습니다.
      </p>

      <h3 id="문제가-생겼을-때">7. 문제가 생겼을 때</h3>
      <ManualTable
        headers={["증상", "확인할 것"]}
        rows={[
          [
            "키보드 목록에 타닥이 없음",
            "타닥 앱의 키보드 설정 또는 기기 설정 → 키보드에서 타닥 활성화",
          ],
          ["일부 기능이 안 됨", "전체 접근 허용이 켜져 있는지"],
          [
            "「설정 열기」·「키보드 설정...」이 안 됨",
            "전체 접근 허용 여부, 세부 설정 → 기능 키 동작이 「설정 열기」인지. 타닥 앱이 이미 열려 있을 때도 메뉴에서 숨겨질 수 있음",
          ],
          [
            "원하는 자판이 아님",
            "앱 일반 설정 → 키보드에서 자판 선택",
          ],
          [
            ".tadak 파일을 불러올 수 없음",
            "이 기기를 지원하는지, 파일 포맷 버전이 맞는지, 같은 식별자의 자판이 이미 있는지",
          ],
          [
            "Caps Lock이 안 됨",
            "일반 설정 → Caps Lock 활성화, 해당 자판이 Caps Lock을 허용하는지",
          ],
          [
            "Caps Lock이 한/영 전환이 됨 (iPad)",
            "세부 설정 → Caps Lock 키로 로마자-한글 전환을 끄면 대문자 고정으로 돌아감",
          ],
        ]}
      />
      <p>앱 안의 안내 문구와 실제 메뉴 이름이 최신 기준입니다.</p>
    </article>
  )
}
