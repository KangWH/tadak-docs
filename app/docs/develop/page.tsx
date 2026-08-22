import Link from "next/link";
import TableOfContents, {
  type TocConfig,
} from "@/app/components/table-of-contents";

const developToc: TocConfig = {
  title: "목차",
  items: [
    {
      title: "Tadak",
      children: [
        {
          title: "데이터·파이프라인 구조",
          href: "/docs/develop/tadak/architecture",
        },
      ],
    },
    {
      title: "Tadak-iOSext",
      children: [
        {
          title: "레이아웃 lifecycle",
          href: "/docs/develop/ios-ext/layout-lifecycle",
        },
      ],
    },
  ],
};

export default function DevelopPage() {
  return (
    <article>
      <h2>개발 문서</h2>
      <p>
        타닥 저장소의 구현 세부 사항을 정리한 문서입니다. 사용자용 안내는{" "}
        <Link href="/docs/iphone">iOS 입력기</Link>·
        <Link href="/docs/mac">macOS 입력기</Link> 페이지를 참고하세요.
      </p>
      <hr className="my-4 border-t border-gray-300 dark:border-zinc-600" />
      <p>
        문서에 기술된 동작은 <strong>Tadak</strong> 메인 브랜치 기준이며, 리팩터링
        과정에서 코드와 어긋날 수 있습니다. 구현 파일 경로를 함께 표기해 두었으니
        최신 코드를 우선 확인하세요.
      </p>
      <TableOfContents toc={developToc} />
    </article>
  );
}
