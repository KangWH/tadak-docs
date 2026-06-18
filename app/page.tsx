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
      <p>표준 두벌식, 세벌식 3-90, 3-91 배열뿐 아니라, 여러 변형 자판들을 지원합니다.</p>
      <ul className="pl-8 my-2 list-disc">
        <li>두벌식 변형 배열: 두줄이, 두겹이를 지원합니다.</li>
        <li>모바일 기기용 배열: 천지인, 천지인 플러스, 단모음, 베가, 나랏글, 모토로라 배열을 지원합니다.</li>
        <li>옛한글 지원 배열: 두벌식 옛한글, 세벌식 3-93, 세벌식 3-2015 옛한글, 신세벌식 P2 옛한글, 세모이 옛한글을 지원합니다.</li>
        <li>갈마들이가 적용된 세벌식 배열: 신세벌식, 수정 신세벌식, 신세벌식 M, 세벌식 3-2015, 신세벌식 P2 등을 지원합니다.</li>
        <li>모아치기가 적용된 세벌식 배열: 세모이, 안마태 소리 글판을 지원합니다.</li>
        <li>기호 확장이 적용된 배열: 세모이, 신세벌식 P2를 지원합니다.</li>
      </ul>
      <p className="text-sm text-gray-500 dark:text-zinc-400">※ 사용하시는 기기에 따라 지원되는 배열이 다를 수 있습니다.</p>
      <h3>배열 사용자화</h3>
      <p>입력기에서 기본 제공하는 배열 외에도, 키보드 데이터 파일을 불러와 원하는 배열의 키보드를 사용할 수 있습니다.</p>
      <p>기존 배열에서 손가락이 꼬이는 문자들의 위치를 조정하거나, 쟈주 사용하는 기호를 추가하여 편리하게 입력할 수 있습니다.</p>
      <h3>한자 변환</h3>
      <p>한글을 한자로 변환합니다. 글자 단위가 아니라 단어 단위로도 변환이 가능합니다.</p>
      <p>Windows의 기본 한글 입력기처럼 한글 자음을 기호로 변환할 수도 있습니다.</p>
      {/* <h3>화상 키보드</h3>
      <p>새로운 배열이 아직 낯설다면 화상 키보드를 화면에 띄우고 자리를 연습하세요.</p>
      <p>낱자의 종류에 따라 색을 다르게 표시해 주어, 세벌식 배열이라도 초성과 종성을 헷갈리지 않고 자리를 익힐 수 있습니다.</p> */}
    </>
  );
}
