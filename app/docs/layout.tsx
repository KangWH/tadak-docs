import Image from "next/image";
import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 items-stretch justify-center bg-white font-sans dark:bg-black">
      <header className="flex flex-row justify-between items-baseline bg-gray-50 dark:bg-zinc-900">
        <div className="px-6 py-4 flex flex-row gap-x-4 items-baseline">
          <h1>타닥</h1>
          <Link href="/docs/mac">macOS 입력기</Link>
          <Link href="/docs/iphone">iOS 입력기</Link>
          <Link href="/docs/editor">키보드 편집기</Link>
        </div>
        <div className="p-4 flex flex-row gap-x-4 items-baseline">
          <Link href="/docs/privacy">개인정보처리방침</Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="max-w-200 mx-auto leading-7 px-4">
          {children}
        </div>
      </main>
    </div>
  );
}
