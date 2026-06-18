import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-zinc-200 text-sm">
      <div className="max-w-240 mx-auto mt-4 mb-8 px-4 flex flex-col gap-y-2">
        <div className="flex flex-row gap-x-4">
          <strong>타닥</strong>
          <Link href="/terms">이용 약관 및 면책 조항</Link>
          <Link href="/privacy">개인정보 처리 방침</Link>
        </div>
        <p>Copyright 2026 강우현. All rights reserved.</p>
      </div>
    </footer>
  )
}
