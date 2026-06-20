import Image from "next/image";
import IMEAppIcon from "@/public/IMEAppIcon.png";

export default function Home() {
  return (
    <>
      <h2>타닥</h2>
      <Image src={IMEAppIcon} width="100" height="100" alt="App icon" className="my-4 mx-auto" />
      <p><strong>타닥</strong>은 macOS와 iOS용 한글 입력기입니다. 김용묵 님께서 개발하신 <a href="http://moogi.new21.org/prg4.html">날개셋 한글 입력기</a>와의 호환을 목표로 개발되어, 자유로운 한글 낱자·음절 조합 메커니즘과 폭넓은 배열 사용자화 기능을 제공합니다.</p>
      <div className="my-6 flex flex-col items-center gap-y-2">
        <a
          href="https://github.com/kangwh/tadak-public/releases"
          target="_blank"
          className="px-4 py-2 border border-blue-600 dark:border-blue-500 rounded-md font-semibold transition-all transition-duration-500 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white active:opacity-75"
        >macOS 버전 다운로드</a>
        <p className="text-center text-sm text-gray-500 dark:text-zinc-400">macOS 26.0 이상 지원. Intel 칩과 Apple Silicon을 모두 지원합니다.</p>
      </div>
      <h3>다양한 배열 지원</h3>
      <p>표준 두벌식, 세벌식 3-90, 3-91 배열뿐 아니라, 여러 종류의 자판들을 지원합니다.</p>
      <ul className="pl-8 my-2 list-disc">
        <li>두벌식 변형 배열: 익히기 쉬운 두벌식 메커니즘을 유지하면서도, 자주 사용하는 겹받침을 빠르게 입력하거나 더 효율적인 배열을 사용할 수 있습니다.</li>
        <li>순아래 배열: Shift 키 없이 편리하게 한글을 입력할 수 있습니다.</li>
        <li>옛한글 배열: 현대 한국어뿐 아니라 중세·근대 국어도 입력할 수 있습니다.</li>
        <li>갈마들이가 적용된 세벌식 배열: 하나의 키로 중성이나 종성을 상황에 맞게 입력할 수 있습니다.</li>
        <li>모아치기가 적용된 세벌식 배열: 동시에 여러 키를 눌렀다 뗌으로써 음절 단위로 한글을 입력합니다.</li>
        <li>기호 확장이 적용된 배열: 문자표를 뒤질 필요 없이, 키를 두세 번 눌러 자주 사용하는는 기호를 빠르게 입력합니다.</li>
      </ul>
      <p className="text-sm text-gray-500 dark:text-zinc-400">※ 사용하시는 기기에 따라 지원되는 배열이 다를 수 있습니다.</p>
      <h3>배열 사용자화</h3>
      <p>입력기에서 기본 제공하는 배열 외에도, 키보드 데이터 파일을 불러와 원하는 배열의 키보드를 사용할 수 있습니다.</p>
      <p>기존 배열에서 손가락이 꼬이는 문자들의 위치를 조정하거나, 쟈주 사용하는 기호를 추가하여 편리하게 입력할 수 있습니다.</p>
      <p>오소리니어·인체공학 키보드와 같은 특수한 형태의 키보드에서도 물리적인 한계에 구애받지 않고, 편한 형태로 배열을 최적화하여 사용해 보세요.</p>
      <h3>한자 변환</h3>
      <p>한글을 한자로 변환합니다. 글자 단위가 아니라 단어 단위로도 변환이 가능합니다.</p>
      <p>Windows의 기본 한글 입력기처럼 한글 자음을 기호로 변환할 수도 있습니다.</p>
      {/* <h3>화상 키보드</h3>
      <p>새로운 배열이 아직 낯설다면 화상 키보드를 화면에 띄우고 자리를 연습하세요.</p>
      <p>낱자의 종류에 따라 색을 다르게 표시해 주어, 세벌식 배열이라도 초성과 종성을 헷갈리지 않고 자리를 익힐 수 있습니다.</p> */}
    </>
  );
}
