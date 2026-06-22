export default function MacPage() {
  return (
    <article>
      <h2>macOS 입력기</h2>
      <p>페이지 준비 중입니다.</p>
      <div className="my-6 flex flex-col items-center gap-y-2">
        <a
          href="https://github.com/kangwh/tadak-public/releases"
          target="_blank"
          className="px-4 py-2 border border-blue-600 dark:border-blue-500 rounded-md font-semibold transition-all transition-duration-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white active:opacity-75"
        >macOS 버전 다운로드</a>
        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">macOS 26.0 이상 지원. Intel 칩과 Apple Silicon을 모두 지원합니다.</p>
      </div>
    </article>
  )
}
