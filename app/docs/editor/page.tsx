import TableOfContents, {
  type TocConfig,
} from "@/app/components/table-of-contents"

const editorToc: TocConfig = {
  title: "목차",
  items: [
    { title: "소개", href: "/docs/editor/intro" },
    {
      title: "표현식", href: "/docs/editor/expression",
      children: [
        { title: "상수 일람" },
        { title: "연산자 일람" },
        { title: "[부록] BNF 문법", href: "/docs/editor/expression/bnf" },
      ]
    },
    {
      title: "입력 프로세서",
      children: [
        { title: "하드웨어 키보드 설정" },
        { title: "소프트웨어 키보드 설정" },
        { title: "고급 입력 인식 설정" },
      ],
    },
    {
      title: "동작 코드",
      children: [
        { title: "일반 문자" },
        { title: "두벌식·세벌식 한글" },
        { title: "특수 동작" },
        { title: "상태 변경" },
        { title: "키 입력 전달" },
      ],
    },
    {
      title: "출력 프로세서",
      children: [
        { title: "동작 치환" },
        {
          title: "한글 조합",
          children: [
            { title: "낱자 결합" },
            { title: "가상 낱자" },
            { title: "종성 넘겨주기" },
            { title: "결합 축약" },
            { title: "오토마타" },
            { title: "음절 치환" },
            { title: "낱자 치환" },
          ],
        },
        { title: "비한글 조합" },
        { title: "삭제" },
        { title: "타이머" },
        { title: "변환" },
      ],
    },
    {
      title: "기타 기능",
      children: [{ title: "날개셋 한글 입력기 파일 변환" }],
    },
  ],
}

export default function MacPage() {
  return (
    <article>
      <h2>키보드 편집기</h2>
      <p className="text-blue-500">편집기는 현재 개발 중입니다.</p>
      <hr className="my-4 border-t border-gray-300 dark:border-zinc-600" />
      <p><strong>키보드 편집기</strong>를 사용하여 나만의 키보드 배열을 만들거나, 기존의 배열을 더 쓰기 편하게 수정할 수 있습니다.</p>
      <p className="text-center italic">사진을 여기에</p>
      <TableOfContents toc={editorToc} />
    </article>
  )
}
