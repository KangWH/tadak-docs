import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-240 mx-auto flex flex-row justify-between items-baseline">
        <div className="px-4 py-4 flex flex-row gap-x-4 items-baseline">
          <h1><Link href="/">타닥</Link></h1>
          <Link href="/docs/mac">macOS 입력기</Link>
          <Link href="/docs/iphone">iOS 입력기</Link>
          <Link href="/docs/editor">키보드 편집기</Link>
        </div>
      </div>
    </header>
  )
}