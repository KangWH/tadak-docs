import Link from "next/link";

export default function Body() {
  return (
    <article>
      <h2>상수 일람</h2>
      <p><Link href="/docs/editor/expression">표현식</Link>에서 사용할 수 있는 <strong>상수</strong>들과 실제 값의 목록입니다. 모든 값은 16진수로 표현하였으며, 가독성을 위해 4자리씩 끊어 표기하였습니다.</p>

      <h3>최상위 16비트: 동작 구분</h3>
      <p>최상위 16비트는 동작의 종류를 구분하는 데 사용됩니다. 최상위 16비트의 값이 0인 경우는 최하위 32비트의 값을 유니코드로 해석했을 때의 문자를 입력합니다.</p>
      <dl className="my-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt><code>H3</code></dt>
        <dd><code>0001 0000 0000 0000</code><br />세벌식 한글 낱자를 나타냅니다.</dd>
        <dt><code>H2</code></dt>
        <dd><code>0002 0000 0000 0000</code><br />두벌식 한글 낱자를 나타냅니다.</dd>
        <dt><code>C0</code></dt>
        <dd><code>0003 0000 0000 0000</code><br />특수 동작을 나타냅니다.</dd>
        <dt><code>A3</code></dt>
        <dd><code>0005 0000 0000 0000</code><br />다중 문자를 나타냅니다.</dd>
        <dt><code>H21</code></dt>
        <dd><code>0006 0000 0000 0000</code><br />중성-종성-초성 순으로 처리하는 세벌식 한글 낱자를 나타냅니다.</dd>
        <dt><code>H12</code></dt>
        <dd><code>0007 0000 0000 0000</code><br />종성-초성-중성 순으로 처리하는 세벌식 한글 낱자를 나타냅니다.</dd>
        <dt><code>C1</code></dt>
        <dd><code>0008 0000 0000 0000</code><br />오토마타 상태 전환을 나타냅니다.</dd>
        <dt><code>KY</code></dt>
        <dd><code>0009 0000 0000 0000</code><br />키 입력 전달을 나타냅니다.</dd>
        <dt><code>H2J</code></dt>
        <dd><code>0010 0000 0000 0000</code><br />종성 지향 두벌식 한글 낱자를 나타냅니다.</dd>
      </dl>

                  <h3>상위 17~32비트: 한글 종성</h3>
      <p>한글 낱자 중 종성을 지정할 때 사용하는 상수는 상위 17~32비트를 사용합니다. 맨 앞에 언더스코어&nbsp;<code>_</code>가 붙으며, 그 뒤에 낱자에 대응하는 로마자를 이어 씁니다.</p>
      <p className="text-sm">주의: 유니코드 한글에는 초성에만, 또는 종성에만 쓰이는 낱자가 있습니다. 초성·종성 상수는 이 제한과 관계없이 같은 로마자 표기로 양쪽 모두에 코드가 부여되어 있으므로, 아래 일람에 있다고 해서 어느 쪽에서나 사용할 수 있는 것은 아닙니다. 해당 위치에 없는 낱자의 코드를 사용하면 조합 결과가 올바르게 출력되지 않습니다.</p>
      <dl className="my-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt><code>_G</code></dt>
        <dd><code>0000 0001 0000 0000</code><br />종성 ㄱ.</dd>
        <dt><code>_GG</code></dt>
        <dd><code>0000 0002 0000 0000</code><br />종성 ㄲ (ㄱ+ㄱ).</dd>
        <dt><code>_GN</code></dt>
        <dd><code>0000 0003 0000 0000</code><br />종성 ᅟᅠᇺ (ㄱ+ㄴ).</dd>
        <dt><code>_GD</code></dt>
        <dd><code>0000 0004 0000 0000</code><br />종성 ᅚᅠ (ㄱ+ㄷ).</dd>
        <dt><code>_GR</code></dt>
        <dd><code>0000 0005 0000 0000</code><br />종성 ᅟᅠᇃ (ㄱ+ㄹ).</dd>
        <dt><code>_GB</code></dt>
        <dd><code>0000 0006 0000 0000</code><br />종성 ᅟᅠᇻ (ㄱ+ㅂ).</dd>
        <dt><code>_GS</code></dt>
        <dd><code>0000 0007 0000 0000</code><br />종성 ㄳ (ㄱ+ㅅ).</dd>
        <dt><code>_GSG</code></dt>
        <dd><code>0000 0008 0000 0000</code><br />종성 ᅟᅠᇄ (ㄱ+ㅅ+ㄱ).</dd>
        <dt><code>_GC</code></dt>
        <dd><code>0000 0009 0000 0000</code><br />종성 ᅟᅠᇼ (ㄱ+ㅊ).</dd>
        <dt><code>_GK</code></dt>
        <dd><code>0000 000A 0000 0000</code><br />종성 ᅟᅠᇽ (ㄱ+ㅋ).</dd>
        <dt><code>_GH</code></dt>
        <dd><code>0000 000B 0000 0000</code><br />종성 ᅟᅠᇾ (ㄱ+ㅎ).</dd>
        <dt><code>_N</code></dt>
        <dd><code>0000 000C 0000 0000</code><br />종성 ㄴ.</dd>
        <dt><code>_NG</code></dt>
        <dd><code>0000 000D 0000 0000</code><br />종성 ᅟᅠᇅ (ㄴ+ㄱ).</dd>
        <dt><code>_NN</code></dt>
        <dd><code>0000 000E 0000 0000</code><br />종성 ㅥ (ㄴ+ㄴ).</dd>
        <dt><code>_ND</code></dt>
        <dd><code>0000 000F 0000 0000</code><br />종성 ㅦ (ㄴ+ㄷ).</dd>
        <dt><code>_NR</code></dt>
        <dd><code>0000 0010 0000 0000</code><br />종성 ᅟᅠퟋ (ㄴ+ㄹ).</dd>
        <dt><code>_NB</code></dt>
        <dd><code>0000 0011 0000 0000</code><br />종성 ᄖᅠ (ㄴ+ㅂ).</dd>
        <dt><code>_NS</code></dt>
        <dd><code>0000 0012 0000 0000</code><br />종성 ㅧ (ㄴ+ㅅ).</dd>
        <dt><code>_NZ</code></dt>
        <dd><code>0000 0013 0000 0000</code><br />종성 ㅨ (ㄴ+ㅿ).</dd>
        <dt><code>_NJ</code></dt>
        <dd><code>0000 0014 0000 0000</code><br />종성 ㄵ (ㄴ+ㅈ).</dd>
        <dt><code>_NC</code></dt>
        <dd><code>0000 0015 0000 0000</code><br />종성 ᅟᅠퟌ (ㄴ+ㅊ).</dd>
        <dt><code>_NT</code></dt>
        <dd><code>0000 0016 0000 0000</code><br />종성 ᅟᅠᇉ (ㄴ+ㅌ).</dd>
        <dt><code>_NH</code></dt>
        <dd><code>0000 0017 0000 0000</code><br />종성 ㄶ (ㄴ+ㅎ).</dd>
        <dt><code>_D</code></dt>
        <dd><code>0000 0018 0000 0000</code><br />종성 ㄷ.</dd>
        <dt><code>_DG</code></dt>
        <dd><code>0000 0019 0000 0000</code><br />종성 ᅟᅠᇊ (ㄷ+ㄱ).</dd>
        <dt><code>_DD</code></dt>
        <dd><code>0000 001A 0000 0000</code><br />종성 ㄸ (ㄷ+ㄷ).</dd>
        <dt><code>_DDB</code></dt>
        <dd><code>0000 001B 0000 0000</code><br />종성 ᅟᅠퟎ (ㄷ+ㄷ+ㅂ).</dd>
        <dt><code>_DR</code></dt>
        <dd><code>0000 001C 0000 0000</code><br />종성 ᅟᅠᇋ (ㄷ+ㄹ).</dd>
        <dt><code>_DM</code></dt>
        <dd><code>0000 001D 0000 0000</code><br />종성 ꥠᅠ (ㄷ+ㅁ).</dd>
        <dt><code>_DB</code></dt>
        <dd><code>0000 001E 0000 0000</code><br />종성 ᅟᅠퟏ (ㄷ+ㅂ).</dd>
        <dt><code>_DS</code></dt>
        <dd><code>0000 001F 0000 0000</code><br />종성 ᅟᅠퟐ (ㄷ+ㅅ).</dd>
        <dt><code>_DSG</code></dt>
        <dd><code>0000 0020 0000 0000</code><br />종성 ᅟᅠퟑ (ㄷ+ㅅ+ㄱ).</dd>
        <dt><code>_DJ</code></dt>
        <dd><code>0000 0021 0000 0000</code><br />종성 ᅟᅠퟒ (ㄷ+ㅈ).</dd>
        <dt><code>_DC</code></dt>
        <dd><code>0000 0022 0000 0000</code><br />종성 ᅟᅠퟓ (ㄷ+ㅊ).</dd>
        <dt><code>_DT</code></dt>
        <dd><code>0000 0023 0000 0000</code><br />종성 ᅟᅠퟔ (ㄷ+ㅌ).</dd>
        <dt><code>_R</code></dt>
        <dd><code>0000 0024 0000 0000</code><br />종성 ㄹ.</dd>
        <dt><code>_RG</code></dt>
        <dd><code>0000 0025 0000 0000</code><br />종성 ㄺ (ㄹ+ㄱ).</dd>
        <dt><code>_RGG</code></dt>
        <dd><code>0000 0026 0000 0000</code><br />종성 ᅟᅠퟕ (ㄹ+ㄱ+ㄱ).</dd>
        <dt><code>_RGS</code></dt>
        <dd><code>0000 0027 0000 0000</code><br />종성 ㅩ (ㄹ+ㄱ+ㅅ).</dd>
        <dt><code>_RGH</code></dt>
        <dd><code>0000 0028 0000 0000</code><br />종성 ᅟᅠퟖ (ㄹ+ㄱ+ㅎ).</dd>
        <dt><code>_RN</code></dt>
        <dd><code>0000 0029 0000 0000</code><br />종성 ᅟᅠᇍ (ㄹ+ㄴ).</dd>
        <dt><code>_RD</code></dt>
        <dd><code>0000 002A 0000 0000</code><br />종성 ㅪ (ㄹ+ㄷ).</dd>
        <dt><code>_RDD</code></dt>
        <dd><code>0000 002B 0000 0000</code><br />종성 ꥧᅠ (ㄹ+ㄷ+ㄷ).</dd>
        <dt><code>_RDH</code></dt>
        <dd><code>0000 002C 0000 0000</code><br />종성 ᅟᅠᇏ (ㄹ+ㄷ+ㅎ).</dd>
        <dt><code>_RR</code></dt>
        <dd><code>0000 002D 0000 0000</code><br />종성 ᅟᅠᇐ (ㄹ+ㄹ).</dd>
        <dt><code>_RRK</code></dt>
        <dd><code>0000 002E 0000 0000</code><br />종성 ᅟᅠퟗ (ㄹ+ㄹ+ㅋ).</dd>
        <dt><code>_RM</code></dt>
        <dd><code>0000 002F 0000 0000</code><br />종성 ㄻ (ㄹ+ㅁ).</dd>
        <dt><code>_RMG</code></dt>
        <dd><code>0000 0030 0000 0000</code><br />종성 ᅟᅠᇑ (ㄹ+ㅁ+ㄱ).</dd>
        <dt><code>_RMS</code></dt>
        <dd><code>0000 0031 0000 0000</code><br />종성 ᅟᅠᇒ (ㄹ+ㅁ+ㅅ).</dd>
        <dt><code>_RMH</code></dt>
        <dd><code>0000 0032 0000 0000</code><br />종성 ᅟᅠퟘ (ㄹ+ㅁ+ㅎ).</dd>
        <dt><code>_RB</code></dt>
        <dd><code>0000 0033 0000 0000</code><br />종성 ㄼ (ㄹ+ㅂ).</dd>
        <dt><code>_RBD</code></dt>
        <dd><code>0000 0034 0000 0000</code><br />종성 ᅟᅠퟙ (ㄹ+ㅂ+ㄷ).</dd>
        <dt><code>_RBB</code></dt>
        <dd><code>0000 0035 0000 0000</code><br />종성 ꥪᅠ (ㄹ+ㅂ+ㅂ).</dd>
        <dt><code>_RBS</code></dt>
        <dd><code>0000 0036 0000 0000</code><br />종성 ㅫ (ㄹ+ㅂ+ㅅ).</dd>
        <dt><code>_RBP</code></dt>
        <dd><code>0000 0037 0000 0000</code><br />종성 ᅟᅠퟚ (ㄹ+ㅂ+ㅍ).</dd>
        <dt><code>_RBH</code></dt>
        <dd><code>0000 0038 0000 0000</code><br />종성 ᅟᅠᇔ (ㄹ+ㅂ+ㅎ).</dd>
        <dt><code>_RBQ</code></dt>
        <dd><code>0000 0039 0000 0000</code><br />종성 ᅟᅠᇕ (ㄹ+ㅂ+ㅇ).</dd>
        <dt><code>_RS</code></dt>
        <dd><code>0000 003A 0000 0000</code><br />종성 ㄽ (ㄹ+ㅅ).</dd>
        <dt><code>_RSS</code></dt>
        <dd><code>0000 003B 0000 0000</code><br />종성 ᅟᅠᇖ (ㄹ+ㅅ+ㅅ).</dd>
        <dt><code>_RZ</code></dt>
        <dd><code>0000 003C 0000 0000</code><br />종성 ㅬ (ㄹ+ㅿ).</dd>
        <dt><code>_RV</code></dt>
        <dd><code>0000 003D 0000 0000</code><br />종성 ᅟᅠퟛ (ㄹ+ㆁ).</dd>
        <dt><code>_RJ</code></dt>
        <dd><code>0000 003E 0000 0000</code><br />종성 ꥭᅠ (ㄹ+ㅈ).</dd>
        <dt><code>_RK</code></dt>
        <dd><code>0000 003F 0000 0000</code><br />종성 ᅟᅠᇘ (ㄹ+ㅋ).</dd>
        <dt><code>_RT</code></dt>
        <dd><code>0000 0040 0000 0000</code><br />종성 ㄾ (ㄹ+ㅌ).</dd>
        <dt><code>_RP</code></dt>
        <dd><code>0000 0041 0000 0000</code><br />종성 ㄿ (ㄹ+ㅍ).</dd>
        <dt><code>_RH</code></dt>
        <dd><code>0000 0042 0000 0000</code><br />종성 ㅀ (ㄹ+ㅎ).</dd>
        <dt><code>_RX</code></dt>
        <dd><code>0000 0043 0000 0000</code><br />종성 ㅭ (ㄹ+ㆆ).</dd>
        <dt><code>_RXH</code></dt>
        <dd><code>0000 0044 0000 0000</code><br />종성 ᅟᅠퟜ (ㄹ+ㆆ+ㅎ).</dd>
        <dt><code>_RQ</code></dt>
        <dd><code>0000 0045 0000 0000</code><br />종성 ᅟᅠퟝ (ㄹ+ㅇ).</dd>
        <dt><code>_M</code></dt>
        <dd><code>0000 0046 0000 0000</code><br />종성 ㅁ.</dd>
        <dt><code>_MG</code></dt>
        <dd><code>0000 0047 0000 0000</code><br />종성 ᅟᅠᇚ (ㅁ+ㄱ).</dd>
        <dt><code>_MN</code></dt>
        <dd><code>0000 0048 0000 0000</code><br />종성 ᅟᅠퟞ (ㅁ+ㄴ).</dd>
        <dt><code>_MNN</code></dt>
        <dd><code>0000 0049 0000 0000</code><br />종성 ᅟᅠퟟ (ㅁ+ㄴ+ㄴ).</dd>
        <dt><code>_MD</code></dt>
        <dd><code>0000 004A 0000 0000</code><br />종성 ꥰᅠ (ㅁ+ㄷ).</dd>
        <dt><code>_MR</code></dt>
        <dd><code>0000 004B 0000 0000</code><br />종성 ᅟᅠᇛ (ㅁ+ㄹ).</dd>
        <dt><code>_MM</code></dt>
        <dd><code>0000 004C 0000 0000</code><br />종성 ᅟᅠퟠ (ㅁ+ㅁ).</dd>
        <dt><code>_MB</code></dt>
        <dd><code>0000 004D 0000 0000</code><br />종성 ㅮ (ㅁ+ㅂ).</dd>
        <dt><code>_MBS</code></dt>
        <dd><code>0000 004E 0000 0000</code><br />종성 ᅟᅠퟡ (ㅁ+ㅂ+ㅅ).</dd>
        <dt><code>_MS</code></dt>
        <dd><code>0000 004F 0000 0000</code><br />종성 ㅯ (ㅁ+ㅅ).</dd>
        <dt><code>_MSS</code></dt>
        <dd><code>0000 0050 0000 0000</code><br />종성 ᅟᅠᇞ (ㅁ+ㅅ+ㅅ).</dd>
        <dt><code>_MZ</code></dt>
        <dd><code>0000 0051 0000 0000</code><br />종성 ㅰ (ㅁ+ㅿ).</dd>
        <dt><code>_MJ</code></dt>
        <dd><code>0000 0052 0000 0000</code><br />종성 ᅟᅠퟢ (ㅁ+ㅈ).</dd>
        <dt><code>_MC</code></dt>
        <dd><code>0000 0053 0000 0000</code><br />종성 ᅟᅠᇠ (ㅁ+ㅊ).</dd>
        <dt><code>_MH</code></dt>
        <dd><code>0000 0054 0000 0000</code><br />종성 ᅟᅠᇡ (ㅁ+ㅎ).</dd>
        <dt><code>_MQ</code></dt>
        <dd><code>0000 0055 0000 0000</code><br />종성 ㅱ (ㅁ+ㅇ).</dd>
        <dt><code>_B</code></dt>
        <dd><code>0000 0056 0000 0000</code><br />종성 ㅂ.</dd>
        <dt><code>_BG</code></dt>
        <dd><code>0000 0057 0000 0000</code><br />종성 ᄞᅠ (ㅂ+ㄱ).</dd>
        <dt><code>_BN</code></dt>
        <dd><code>0000 0058 0000 0000</code><br />종성 ᄟᅠ (ㅂ+ㄴ).</dd>
        <dt><code>_BD</code></dt>
        <dd><code>0000 0059 0000 0000</code><br />종성 ㅳ (ㅂ+ㄷ).</dd>
        <dt><code>_BR</code></dt>
        <dd><code>0000 005A 0000 0000</code><br />종성 ᅟᅠᇣ (ㅂ+ㄹ).</dd>
        <dt><code>_BRP</code></dt>
        <dd><code>0000 005B 0000 0000</code><br />종성 ᅟᅠퟤ (ㅂ+ㄹ+ㅍ).</dd>
        <dt><code>_BM</code></dt>
        <dd><code>0000 005C 0000 0000</code><br />종성 ᅟᅠퟥ (ㅂ+ㅁ).</dd>
        <dt><code>_BB</code></dt>
        <dd><code>0000 005D 0000 0000</code><br />종성 ㅃ (ㅂ+ㅂ).</dd>
        <dt><code>_BS</code></dt>
        <dd><code>0000 005E 0000 0000</code><br />종성 ㅄ (ㅂ+ㅅ).</dd>
        <dt><code>_BSG</code></dt>
        <dd><code>0000 005F 0000 0000</code><br />종성 ᄢᅠ (ㅂ+ㅅ+ㄱ).</dd>
        <dt><code>_BSD</code></dt>
        <dd><code>0000 0060 0000 0000</code><br />종성 ㅵ (ㅂ+ㅅ+ㄷ).</dd>
        <dt><code>_BSB</code></dt>
        <dd><code>0000 0061 0000 0000</code><br />종성 ᄤᅠ (ㅂ+ㅅ+ㅂ).</dd>
        <dt><code>_BSS</code></dt>
        <dd><code>0000 0062 0000 0000</code><br />종성 ᄥᅠ (ㅂ+ㅅ+ㅅ).</dd>
        <dt><code>_BSJ</code></dt>
        <dd><code>0000 0063 0000 0000</code><br />종성 ᄦᅠ (ㅂ+ㅅ+ㅈ).</dd>
        <dt><code>_BST</code></dt>
        <dd><code>0000 0064 0000 0000</code><br />종성 ꥲᅠ (ㅂ+ㅅ+ㅌ).</dd>
        <dt><code>_BJ</code></dt>
        <dd><code>0000 0065 0000 0000</code><br />종성 ㅶ (ㅂ+ㅈ).</dd>
        <dt><code>_BC</code></dt>
        <dd><code>0000 0066 0000 0000</code><br />종성 ᅟᅠퟩ (ㅂ+ㅊ).</dd>
        <dt><code>_BK</code></dt>
        <dd><code>0000 0067 0000 0000</code><br />종성 ꥳᅠ (ㅂ+ㅋ).</dd>
        <dt><code>_BT</code></dt>
        <dd><code>0000 0068 0000 0000</code><br />종성 ᄩᅠ (ㅂ+ㅌ).</dd>
        <dt><code>_BP</code></dt>
        <dd><code>0000 0069 0000 0000</code><br />종성 ᅟᅠᇤ (ㅂ+ㅍ).</dd>
        <dt><code>_BH</code></dt>
        <dd><code>0000 006A 0000 0000</code><br />종성 ᅟᅠᇥ (ㅂ+ㅎ).</dd>
        <dt><code>_BQ</code></dt>
        <dd><code>0000 006B 0000 0000</code><br />종성 ㅸ (ㅂ+ㅇ).</dd>
        <dt><code>_BBQ</code></dt>
        <dd><code>0000 006C 0000 0000</code><br />종성 ᄬᅠ (ㅂ+ㅂ+ㅇ).</dd>
        <dt><code>_S</code></dt>
        <dd><code>0000 006D 0000 0000</code><br />종성 ㅅ.</dd>
        <dt><code>_SG</code></dt>
        <dd><code>0000 006E 0000 0000</code><br />종성 ㅺ (ㅅ+ㄱ).</dd>
        <dt><code>_SN</code></dt>
        <dd><code>0000 006F 0000 0000</code><br />종성 ᄮᅠ (ㅅ+ㄴ).</dd>
        <dt><code>_SD</code></dt>
        <dd><code>0000 0070 0000 0000</code><br />종성 ㅼ (ㅅ+ㄷ).</dd>
        <dt><code>_SR</code></dt>
        <dd><code>0000 0071 0000 0000</code><br />종성 ᅟᅠᇩ (ㅅ+ㄹ).</dd>
        <dt><code>_SM</code></dt>
        <dd><code>0000 0072 0000 0000</code><br />종성 ᅟᅠퟪ (ㅅ+ㅁ).</dd>
        <dt><code>_SB</code></dt>
        <dd><code>0000 0073 0000 0000</code><br />종성 ㅽ (ㅅ+ㅂ).</dd>
        <dt><code>_SBG</code></dt>
        <dd><code>0000 0074 0000 0000</code><br />종성 ᄳᅠ (ㅅ+ㅂ+ㄱ).</dd>
        <dt><code>_SBQ</code></dt>
        <dd><code>0000 0075 0000 0000</code><br />종성 ᅟᅠퟫ (ㅅ+ㅂ+ㅇ).</dd>
        <dt><code>_SS</code></dt>
        <dd><code>0000 0076 0000 0000</code><br />종성 ㅆ (ㅅ+ㅅ).</dd>
        <dt><code>_SSG</code></dt>
        <dd><code>0000 0077 0000 0000</code><br />종성 ᅟᅠퟬ (ㅅ+ㅅ+ㄱ).</dd>
        <dt><code>_SSD</code></dt>
        <dd><code>0000 0078 0000 0000</code><br />종성 ᅟᅠퟭ (ㅅ+ㅅ+ㄷ).</dd>
        <dt><code>_SSB</code></dt>
        <dd><code>0000 0079 0000 0000</code><br />종성 ꥵᅠ (ㅅ+ㅅ+ㅂ).</dd>
        <dt><code>_SSS</code></dt>
        <dd><code>0000 007A 0000 0000</code><br />종성 ᄴᅠ (ㅅ+ㅅ+ㅅ).</dd>
        <dt><code>_SZ</code></dt>
        <dd><code>0000 007B 0000 0000</code><br />종성 ᅟᅠퟮ (ㅅ+ㅿ).</dd>
        <dt><code>_SQ</code></dt>
        <dd><code>0000 007C 0000 0000</code><br />종성 ᄵᅠ (ㅅ+ㅇ).</dd>
        <dt><code>_SJ</code></dt>
        <dd><code>0000 007D 0000 0000</code><br />종성 ㅾ (ㅅ+ㅈ).</dd>
        <dt><code>_SC</code></dt>
        <dd><code>0000 007E 0000 0000</code><br />종성 ᅟᅠퟰ (ㅅ+ㅊ).</dd>
        <dt><code>_SK</code></dt>
        <dd><code>0000 007F 0000 0000</code><br />종성 ᄸᅠ (ㅅ+ㅋ).</dd>
        <dt><code>_ST</code></dt>
        <dd><code>0000 0080 0000 0000</code><br />종성 ᅟᅠퟱ (ㅅ+ㅌ).</dd>
        <dt><code>_SP</code></dt>
        <dd><code>0000 0081 0000 0000</code><br />종성 ᄺᅠ (ㅅ+ㅍ).</dd>
        <dt><code>_SH</code></dt>
        <dd><code>0000 0082 0000 0000</code><br />종성 ᅟᅠퟲ (ㅅ+ㅎ).</dd>
        <dt><code>_wS</code></dt>
        <dd><code>0000 0083 0000 0000</code><br />종성 ᄼᅠ.</dd>
        <dt><code>_wSS</code></dt>
        <dd><code>0000 0084 0000 0000</code><br />종성 ᄽᅠ.</dd>
        <dt><code>_Sw</code></dt>
        <dd><code>0000 0085 0000 0000</code><br />종성 ᄾᅠ.</dd>
        <dt><code>_SSw</code></dt>
        <dd><code>0000 0086 0000 0000</code><br />종성 ᄿᅠ.</dd>
        <dt><code>_Z</code></dt>
        <dd><code>0000 0087 0000 0000</code><br />종성 ㅿ.</dd>
        <dt><code>_ZB</code></dt>
        <dd><code>0000 0088 0000 0000</code><br />종성 ᅟᅠퟳ (ㅿ+ㅂ).</dd>
        <dt><code>_ZBQ</code></dt>
        <dd><code>0000 0089 0000 0000</code><br />종성 ᅟᅠퟴ (ㅿ+ㅂ+ㅇ).</dd>
        <dt><code>_Q</code></dt>
        <dd><code>0000 008A 0000 0000</code><br />종성 ㅇ.</dd>
        <dt><code>_QG</code></dt>
        <dd><code>0000 008B 0000 0000</code><br />종성 ᅁᅠ (ㅇ+ㄱ).</dd>
        <dt><code>_QD</code></dt>
        <dd><code>0000 008C 0000 0000</code><br />종성 ᅂᅠ (ㅇ+ㄷ).</dd>
        <dt><code>_QR</code></dt>
        <dd><code>0000 008D 0000 0000</code><br />종성 ꥶᅠ (ㅇ+ㄹ).</dd>
        <dt><code>_QM</code></dt>
        <dd><code>0000 008E 0000 0000</code><br />종성 ᅃᅠ (ㅇ+ㅁ).</dd>
        <dt><code>_QB</code></dt>
        <dd><code>0000 008F 0000 0000</code><br />종성 ᅄᅠ (ㅇ+ㅂ).</dd>
        <dt><code>_QS</code></dt>
        <dd><code>0000 0090 0000 0000</code><br />종성 ᅅᅠ (ㅇ+ㅅ).</dd>
        <dt><code>_QZ</code></dt>
        <dd><code>0000 0091 0000 0000</code><br />종성 ᅆᅠ (ㅇ+ㅿ).</dd>
        <dt><code>_QQ</code></dt>
        <dd><code>0000 0092 0000 0000</code><br />종성 ᅇᅠ (ㅇ+ㅇ).</dd>
        <dt><code>_QJ</code></dt>
        <dd><code>0000 0093 0000 0000</code><br />종성 ᅈᅠ (ㅇ+ㅈ).</dd>
        <dt><code>_QC</code></dt>
        <dd><code>0000 0094 0000 0000</code><br />종성 ᅉᅠ (ㅇ+ㅊ).</dd>
        <dt><code>_QT</code></dt>
        <dd><code>0000 0095 0000 0000</code><br />종성 ᅊᅠ (ㅇ+ㅌ).</dd>
        <dt><code>_QP</code></dt>
        <dd><code>0000 0096 0000 0000</code><br />종성 ᅋᅠ (ㅇ+ㅍ).</dd>
        <dt><code>_QH</code></dt>
        <dd><code>0000 0097 0000 0000</code><br />종성 ꥷᅠ (ㅇ+ㅎ).</dd>
        <dt><code>_V</code></dt>
        <dd><code>0000 0098 0000 0000</code><br />종성 ㆁ.</dd>
        <dt><code>_VG</code></dt>
        <dd><code>0000 0099 0000 0000</code><br />종성 ᅟᅠᇬ (ㆁ+ㄱ).</dd>
        <dt><code>_VGG</code></dt>
        <dd><code>0000 009A 0000 0000</code><br />종성 ᅟᅠᇭ (ㆁ+ㄱ+ㄱ).</dd>
        <dt><code>_VM</code></dt>
        <dd><code>0000 009B 0000 0000</code><br />종성 ᅟᅠퟵ (ㆁ+ㅁ).</dd>
        <dt><code>_VS</code></dt>
        <dd><code>0000 009C 0000 0000</code><br />종성 ㆂ (ㆁ+ㅅ).</dd>
        <dt><code>_VZ</code></dt>
        <dd><code>0000 009D 0000 0000</code><br />종성 ㆃ (ㆁ+ㅿ).</dd>
        <dt><code>_VV</code></dt>
        <dd><code>0000 009E 0000 0000</code><br />종성 ᅟᅠᇮ (ㆁ+ㆁ).</dd>
        <dt><code>_VK</code></dt>
        <dd><code>0000 009F 0000 0000</code><br />종성 ᅟᅠᇯ (ㆁ+ㅋ).</dd>
        <dt><code>_VH</code></dt>
        <dd><code>0000 00A0 0000 0000</code><br />종성 ᅟᅠퟶ (ㆁ+ㅎ).</dd>
        <dt><code>_J</code></dt>
        <dd><code>0000 00A1 0000 0000</code><br />종성 ㅈ.</dd>
        <dt><code>_JB</code></dt>
        <dd><code>0000 00A2 0000 0000</code><br />종성 ᅟᅠퟷ (ㅈ+ㅂ).</dd>
        <dt><code>_JBB</code></dt>
        <dd><code>0000 00A3 0000 0000</code><br />종성 ᅟᅠퟸ (ㅈ+ㅂ+ㅂ).</dd>
        <dt><code>_JQ</code></dt>
        <dd><code>0000 00A4 0000 0000</code><br />종성 ᅍᅠ (ㅈ+ㅇ).</dd>
        <dt><code>_JJ</code></dt>
        <dd><code>0000 00A5 0000 0000</code><br />종성 ㅉ (ㅈ+ㅈ).</dd>
        <dt><code>_JJH</code></dt>
        <dd><code>0000 00A6 0000 0000</code><br />종성 ꥸᅠ (ㅈ+ㅈ+ㅎ).</dd>
        <dt><code>_wJ</code></dt>
        <dd><code>0000 00A7 0000 0000</code><br />종성 ᅎᅠ.</dd>
        <dt><code>_wJJ</code></dt>
        <dd><code>0000 00A8 0000 0000</code><br />종성 ᅏᅠ.</dd>
        <dt><code>_Jw</code></dt>
        <dd><code>0000 00A9 0000 0000</code><br />종성 ᅐᅠ.</dd>
        <dt><code>_JJw</code></dt>
        <dd><code>0000 00AA 0000 0000</code><br />종성 ᅑᅠ.</dd>
        <dt><code>_C</code></dt>
        <dd><code>0000 00AB 0000 0000</code><br />종성 ㅊ.</dd>
        <dt><code>_CK</code></dt>
        <dd><code>0000 00AC 0000 0000</code><br />종성 ᅒᅠ (ㅊ+ㅋ).</dd>
        <dt><code>_CH</code></dt>
        <dd><code>0000 00AD 0000 0000</code><br />종성 ᅓᅠ (ㅊ+ㅎ).</dd>
        <dt><code>_wC</code></dt>
        <dd><code>0000 00AE 0000 0000</code><br />종성 ᅔᅠ.</dd>
        <dt><code>_Cw</code></dt>
        <dd><code>0000 00AF 0000 0000</code><br />종성 ᅕᅠ.</dd>
        <dt><code>_K</code></dt>
        <dd><code>0000 00B0 0000 0000</code><br />종성 ㅋ.</dd>
        <dt><code>_T</code></dt>
        <dd><code>0000 00B1 0000 0000</code><br />종성 ㅌ.</dd>
        <dt><code>_TT</code></dt>
        <dd><code>0000 00B2 0000 0000</code><br />종성 ꥹᅠ (ㅌ+ㅌ).</dd>
        <dt><code>_P</code></dt>
        <dd><code>0000 00B3 0000 0000</code><br />종성 ㅍ.</dd>
        <dt><code>_PB</code></dt>
        <dd><code>0000 00B4 0000 0000</code><br />종성 ᅟᅠᇳ (ㅍ+ㅂ).</dd>
        <dt><code>_PS</code></dt>
        <dd><code>0000 00B5 0000 0000</code><br />종성 ᅟᅠퟺ (ㅍ+ㅅ).</dd>
        <dt><code>_PT</code></dt>
        <dd><code>0000 00B6 0000 0000</code><br />종성 ᅟᅠퟻ (ㅍ+ㅌ).</dd>
        <dt><code>_PH</code></dt>
        <dd><code>0000 00B7 0000 0000</code><br />종성 ꥺᅠ (ㅍ+ㅎ).</dd>
        <dt><code>_PQ</code></dt>
        <dd><code>0000 00B8 0000 0000</code><br />종성 ㆄ (ㅍ+ㅇ).</dd>
        <dt><code>_H</code></dt>
        <dd><code>0000 00B9 0000 0000</code><br />종성 ㅎ.</dd>
        <dt><code>_HN</code></dt>
        <dd><code>0000 00BA 0000 0000</code><br />종성 ᅟᅠᇵ (ㅎ+ㄴ).</dd>
        <dt><code>_HR</code></dt>
        <dd><code>0000 00BB 0000 0000</code><br />종성 ᅟᅠᇶ (ㅎ+ㄹ).</dd>
        <dt><code>_HM</code></dt>
        <dd><code>0000 00BC 0000 0000</code><br />종성 ᅟᅠᇷ (ㅎ+ㅁ).</dd>
        <dt><code>_HB</code></dt>
        <dd><code>0000 00BD 0000 0000</code><br />종성 ᅟᅠᇸ (ㅎ+ㅂ).</dd>
        <dt><code>_HS</code></dt>
        <dd><code>0000 00BE 0000 0000</code><br />종성 ꥻᅠ (ㅎ+ㅅ).</dd>
        <dt><code>_HH</code></dt>
        <dd><code>0000 00BF 0000 0000</code><br />종성 ᅘᅠ (ㅎ+ㅎ).</dd>
        <dt><code>_X</code></dt>
        <dd><code>0000 00C0 0000 0000</code><br />종성 ㆆ.</dd>
        <dt><code>_XX</code></dt>
        <dd><code>0000 00C1 0000 0000</code><br />종성 ꥼᅠ (ㆆ+ㆆ).</dd>
      </dl>

      <h3>상위 33~48비트: 한글 중성</h3>
      <p>한글 낱자 중 중성을 지정할 때 사용하는 상수는 상위 33~48비트를 사용합니다. 기본 규칙은 낱자에 대응하는 로마자를 이어쓰며, 로마자 한 글자로 끝나는 경우 맨 뒤에 언더스코어&nbsp;<code>_</code>를 덧붙이는 것입니다. 단, ㅐ, ㅒ, ㅘ, ㅙ, ㅞ, ㅟ는 별도의 표현을 사용합니다.</p>

      <dl className="my-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt><code>A_</code></dt>
        <dd><code>0000 0000 0001 0000</code><br />중성 ㅏ.</dd>
        <dt><code>AO</code></dt>
        <dd><code>0000 0000 0002 0000</code><br />중성 ᅟᅶ (ㅏ+ㅗ).</dd>
        <dt><code>AU</code></dt>
        <dd><code>0000 0000 0003 0000</code><br />중성 ᅟᅷ (ㅏ+ㅡ).</dd>
        <dt><code>AEU</code></dt>
        <dd><code>0000 0000 0004 0000</code><br />중성 ᅟᆣ (ㅏ+ㅓ+ㅣ+ㅡ).</dd>
        <dt><code>AE</code></dt>
        <dd><code>0000 0000 0005 0000</code><br />중성 ㅐ (ㅏ+ㅣ).</dd>
        <dt><code>YA</code></dt>
        <dd><code>0000 0000 0006 0000</code><br />중성 ㅑ.</dd>
        <dt><code>YAO</code></dt>
        <dd><code>0000 0000 0007 0000</code><br />중성 ᅟᅸ (ㅑ+ㅗ).</dd>
        <dt><code>YAYO</code></dt>
        <dd><code>0000 0000 0008 0000</code><br />중성 ᅟᅹ (ㅑ+ㅛ).</dd>
        <dt><code>YAU</code></dt>
        <dd><code>0000 0000 0009 0000</code><br />중성 ᅟᆤ (ㅑ+ㅡ).</dd>
        <dt><code>YAE</code></dt>
        <dd><code>0000 0000 000A 0000</code><br />중성 ㅒ (ㅑ+ㅣ).</dd>
        <dt><code>EO</code></dt>
        <dd><code>0000 0000 000B 0000</code><br />중성 ㅓ.</dd>
        <dt><code>EOO</code></dt>
        <dd><code>0000 0000 000C 0000</code><br />중성 ᅟᅺ (ㅓ+ㅗ).</dd>
        <dt><code>EOU</code></dt>
        <dd><code>0000 0000 000D 0000</code><br />중성 ᅟᅻ (ㅓ+ㅡ).</dd>
        <dt><code>EOEU</code></dt>
        <dd><code>0000 0000 000E 0000</code><br />중성 ᅟᅼ (ㅓ+ㅡ).</dd>
        <dt><code>E_</code></dt>
        <dd><code>0000 0000 000F 0000</code><br />중성 ㅔ (ㅓ+ㅣ).</dd>
        <dt><code>YEO</code></dt>
        <dd><code>0000 0000 0010 0000</code><br />중성 ㅕ.</dd>
        <dt><code>YEOYA</code></dt>
        <dd><code>0000 0000 0011 0000</code><br />중성 ᅟᆥ (ㅕ+ㅑ).</dd>
        <dt><code>YEOO</code></dt>
        <dd><code>0000 0000 0012 0000</code><br />중성 ᅟᅽ (ㅕ+ㅗ).</dd>
        <dt><code>YEOU</code></dt>
        <dd><code>0000 0000 0013 0000</code><br />중성 ᅟᅾ (ㅕ+ㅡ).</dd>
        <dt><code>YE</code></dt>
        <dd><code>0000 0000 0014 0000</code><br />중성 ㅖ (ㅕ+ㅣ).</dd>
        <dt><code>O_</code></dt>
        <dd><code>0000 0000 0015 0000</code><br />중성 ㅗ.</dd>
        <dt><code>WA</code></dt>
        <dd><code>0000 0000 0016 0000</code><br />중성 ㅘ (ㅗ+ㅏ).</dd>
        <dt><code>WAE</code></dt>
        <dd><code>0000 0000 0017 0000</code><br />중성 ㅙ (ㅗ+ㅏ+ㅣ).</dd>
        <dt><code>OYA</code></dt>
        <dd><code>0000 0000 0018 0000</code><br />중성 ᅟᆦ (ㅗ+ㅑ).</dd>
        <dt><code>OYAE</code></dt>
        <dd><code>0000 0000 0019 0000</code><br />중성 ᅟᆧ (ㅗ+ㅑ+ㅣ).</dd>
        <dt><code>OEO</code></dt>
        <dd><code>0000 0000 001A 0000</code><br />중성 ᅟᅿ (ㅗ+ㅓ).</dd>
        <dt><code>OE</code></dt>
        <dd><code>0000 0000 001B 0000</code><br />중성 ᅟᆀ (ㅗ+ㅓ+ㅣ).</dd>
        <dt><code>OYEO</code></dt>
        <dd><code>0000 0000 001C 0000</code><br />중성 ᅟힰ (ㅗ+ㅕ).</dd>
        <dt><code>OYE</code></dt>
        <dd><code>0000 0000 001D 0000</code><br />중성 ᅟᆁ (ㅗ+ㅕ+ㅣ).</dd>
        <dt><code>OO</code></dt>
        <dd><code>0000 0000 001E 0000</code><br />중성 ᅟᆂ (ㅗ+ㅗ).</dd>
        <dt><code>OOI</code></dt>
        <dd><code>0000 0000 001F 0000</code><br />중성 ᅟힱ (ㅗ+ㅗ+ㅣ).</dd>
        <dt><code>OU</code></dt>
        <dd><code>0000 0000 0020 0000</code><br />중성 ᅟᆃ (ㅗ+ㅡ).</dd>
        <dt><code>OI</code></dt>
        <dd><code>0000 0000 0021 0000</code><br />중성 ㅚ (ㅗ+ㅣ).</dd>
        <dt><code>YO</code></dt>
        <dd><code>0000 0000 0022 0000</code><br />중성 ㅛ.</dd>
        <dt><code>YOA</code></dt>
        <dd><code>0000 0000 0023 0000</code><br />중성 ᅟힲ (ㅛ+ㅏ).</dd>
        <dt><code>YOAE</code></dt>
        <dd><code>0000 0000 0024 0000</code><br />중성 ᅟힳ (ㅛ+ㅏ+ㅣ).</dd>
        <dt><code>YOYA</code></dt>
        <dd><code>0000 0000 0025 0000</code><br />중성 ㆇ (ㅛ+ㅑ).</dd>
        <dt><code>YOYAE</code></dt>
        <dd><code>0000 0000 0026 0000</code><br />중성 ㆈ (ㅛ+ㅑ+ㅣ).</dd>
        <dt><code>YOEO</code></dt>
        <dd><code>0000 0000 0027 0000</code><br />중성 ᅟힴ (ㅛ+ㅓ).</dd>
        <dt><code>YOYEO</code></dt>
        <dd><code>0000 0000 0028 0000</code><br />중성 ᅟᆆ (ㅛ+ㅕ).</dd>
        <dt><code>YOO</code></dt>
        <dd><code>0000 0000 0029 0000</code><br />중성 ᅟᆇ (ㅛ+ㅗ).</dd>
        <dt><code>YOI</code></dt>
        <dd><code>0000 0000 002A 0000</code><br />중성 ㆉ (ㅛ+ㅣ).</dd>
        <dt><code>U_</code></dt>
        <dd><code>0000 0000 002B 0000</code><br />중성 ㅜ.</dd>
        <dt><code>UA</code></dt>
        <dd><code>0000 0000 002C 0000</code><br />중성 ᅟᆉ (ㅜ+ㅏ).</dd>
        <dt><code>UAE</code></dt>
        <dd><code>0000 0000 002D 0000</code><br />중성 ᅟᆊ (ㅜ+ㅏ+ㅣ).</dd>
        <dt><code>UEO</code></dt>
        <dd><code>0000 0000 002E 0000</code><br />중성 ㅝ (ㅜ+ㅓ).</dd>
        <dt><code>UEOEU</code></dt>
        <dd><code>0000 0000 002F 0000</code><br />중성 ᅟᆋ (ㅜ+ㅓ+ㅡ).</dd>
        <dt><code>WE</code></dt>
        <dd><code>0000 0000 0030 0000</code><br />중성 ㅞ (ㅜ+ㅓ+ㅣ).</dd>
        <dt><code>UYEO</code></dt>
        <dd><code>0000 0000 0031 0000</code><br />중성 ᅟힵ (ㅜ+ㅕ).</dd>
        <dt><code>UYE</code></dt>
        <dd><code>0000 0000 0032 0000</code><br />중성 ᅟᆌ (ㅜ+ㅕ+ㅣ).</dd>
        <dt><code>UU</code></dt>
        <dd><code>0000 0000 0033 0000</code><br />중성 ᅟᆍ (ㅜ+ㅡ).</dd>
        <dt><code>WI</code></dt>
        <dd><code>0000 0000 0034 0000</code><br />중성 ㅟ (ㅜ+ㅣ).</dd>
        <dt><code>UII</code></dt>
        <dd><code>0000 0000 0035 0000</code><br />중성 ᅟힶ (ㅜ+ㅣ+ㅣ).</dd>
        <dt><code>YU</code></dt>
        <dd><code>0000 0000 0036 0000</code><br />중성 ㅠ.</dd>
        <dt><code>YUA</code></dt>
        <dd><code>0000 0000 0037 0000</code><br />중성 ᅟᆎ (ㅠ+ㅏ).</dd>
        <dt><code>YUAE</code></dt>
        <dd><code>0000 0000 0038 0000</code><br />중성 ᅟힷ (ㅠ+ㅏ+ㅣ).</dd>
        <dt><code>YUEO</code></dt>
        <dd><code>0000 0000 0039 0000</code><br />중성 ᅟᆏ (ㅠ+ㅓ).</dd>
        <dt><code>YUE</code></dt>
        <dd><code>0000 0000 003A 0000</code><br />중성 ᅟᆐ (ㅠ+ㅓ+ㅣ).</dd>
        <dt><code>YUYEO</code></dt>
        <dd><code>0000 0000 003B 0000</code><br />중성 ㆊ (ㅠ+ㅕ).</dd>
        <dt><code>YUYE</code></dt>
        <dd><code>0000 0000 003C 0000</code><br />중성 ㆋ (ㅠ+ㅕ+ㅣ).</dd>
        <dt><code>YUO</code></dt>
        <dd><code>0000 0000 003D 0000</code><br />중성 ᅟힸ (ㅠ+ㅗ).</dd>
        <dt><code>YUU</code></dt>
        <dd><code>0000 0000 003E 0000</code><br />중성 ᅟᆓ (ㅠ+ㅡ).</dd>
        <dt><code>YUI</code></dt>
        <dd><code>0000 0000 003F 0000</code><br />중성 ㆌ (ㅠ+ㅣ).</dd>
        <dt><code>EU</code></dt>
        <dd><code>0000 0000 0040 0000</code><br />중성 ㅡ.</dd>
        <dt><code>EUA</code></dt>
        <dd><code>0000 0000 0041 0000</code><br />중성 ᅟힹ (ㅓ+ㅣ+ㅡ+ㅏ).</dd>
        <dt><code>EUEO</code></dt>
        <dd><code>0000 0000 0042 0000</code><br />중성 ᅟힺ (ㅓ+ㅣ+ㅜ+ㅓ).</dd>
        <dt><code>EUE</code></dt>
        <dd><code>0000 0000 0043 0000</code><br />중성 ᅟힻ (ㅓ+ㅣ+ㅡ+ㅓ+ㅣ).</dd>
        <dt><code>EUO</code></dt>
        <dd><code>0000 0000 0044 0000</code><br />중성 ᅟힼ (ㅓ+ㅣ+ㅡ+ㅗ).</dd>
        <dt><code>EUU</code></dt>
        <dd><code>0000 0000 0045 0000</code><br />중성 ᅟᆕ (ㅓ+ㅣ+ㅡ+ㅡ).</dd>
        <dt><code>EUEU</code></dt>
        <dd><code>0000 0000 0046 0000</code><br />중성 ᅟᆖ (ㅡ+ㅡ).</dd>
        <dt><code>EUI</code></dt>
        <dd><code>0000 0000 0047 0000</code><br />중성 ㅢ (ㅓ+ㅣ+ㅡ+ㅣ).</dd>
        <dt><code>EUIU</code></dt>
        <dd><code>0000 0000 0048 0000</code><br />중성 ᅟᆗ (ㅓ+ㅣ+ㅡ+ㅣ+ㅡ).</dd>
        <dt><code>I_</code></dt>
        <dd><code>0000 0000 0049 0000</code><br />중성 ㅣ.</dd>
        <dt><code>IA</code></dt>
        <dd><code>0000 0000 004A 0000</code><br />중성 ᅟᆘ (ㅣ+ㅏ).</dd>
        <dt><code>IYA</code></dt>
        <dd><code>0000 0000 004B 0000</code><br />중성 ᅟᆙ (ㅣ+ㅑ).</dd>
        <dt><code>IYAO</code></dt>
        <dd><code>0000 0000 004C 0000</code><br />중성 ᅟힽ (ㅣ+ㅑ+ㅗ).</dd>
        <dt><code>IYAE</code></dt>
        <dd><code>0000 0000 004D 0000</code><br />중성 ᅟힾ (ㅣ+ㅑ+ㅣ).</dd>
        <dt><code>IYEO</code></dt>
        <dd><code>0000 0000 004E 0000</code><br />중성 ᅟힿ (ㅣ+ㅕ).</dd>
        <dt><code>IYE</code></dt>
        <dd><code>0000 0000 004F 0000</code><br />중성 ᅟퟀ (ㅣ+ㅕ+ㅣ).</dd>
        <dt><code>IO</code></dt>
        <dd><code>0000 0000 0050 0000</code><br />중성 ᅟᆚ (ㅣ+ㅗ).</dd>
        <dt><code>IOI</code></dt>
        <dd><code>0000 0000 0051 0000</code><br />중성 ᅟퟁ (ㅣ+ㅗ+ㅣ).</dd>
        <dt><code>IYO</code></dt>
        <dd><code>0000 0000 0052 0000</code><br />중성 ᅟퟂ (ㅣ+ㅛ).</dd>
        <dt><code>IU</code></dt>
        <dd><code>0000 0000 0053 0000</code><br />중성 ᅟᆛ (ㅣ+ㅡ).</dd>
        <dt><code>IYU</code></dt>
        <dd><code>0000 0000 0054 0000</code><br />중성 ᅟퟃ (ㅣ+ㅠ).</dd>
        <dt><code>IEU</code></dt>
        <dd><code>0000 0000 0055 0000</code><br />중성 ᅟᆜ (ㅣ+ㅡ).</dd>
        <dt><code>II</code></dt>
        <dd><code>0000 0000 0056 0000</code><br />중성 ᅟퟄ (ㅣ+ㅣ).</dd>
        <dt><code>IF</code></dt>
        <dd><code>0000 0000 0057 0000</code><br />중성 ᅟᆝ (ㅣ+ㆍ).</dd>
        <dt><code>F_</code></dt>
        <dd><code>0000 0000 0058 0000</code><br />중성 ㆍ.</dd>
        <dt><code>FA</code></dt>
        <dd><code>0000 0000 0059 0000</code><br />중성 ᅟퟅ (ㆍ+ㅏ).</dd>
        <dt><code>FEO</code></dt>
        <dd><code>0000 0000 005A 0000</code><br />중성 ᅟᆟ (ㆍ+ㅓ).</dd>
        <dt><code>FE</code></dt>
        <dd><code>0000 0000 005B 0000</code><br />중성 ᅟퟆ (ㆍ+ㅓ+ㅣ).</dd>
        <dt><code>FU</code></dt>
        <dd><code>0000 0000 005C 0000</code><br />중성 ᅟᆠ (ㆍ+ㅡ).</dd>
        <dt><code>FI</code></dt>
        <dd><code>0000 0000 005D 0000</code><br />중성 ㆎ (ㆍ+ㅣ).</dd>
        <dt><code>FF</code></dt>
        <dd><code>0000 0000 005E 0000</code><br />중성 ᅟᆢ (ㆍ+ㆍ).</dd>
      </dl>

      <h3>상위 49~64비트: 한글 초성</h3>
      <p>한글 낱자 중 초성을 지정할 때 사용하는 상수는 상위 49~64비트를 사용합니다. 기본 규칙은 낱자에 대응하는 로마자를 이어쓰는 것이며, 로마자 한 글자로 끝나는 경우엔 맨 뒤에 언더스코어&nbsp;<code>_</code>를 덧붙입니다. 치두음은 맨 앞에 <code>w</code>를, 정치음은 맨 뒤에 <code>w</code>를 덧붙입니다.</p>

      <dl className="my-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <dt><code>G_</code></dt>
        <dd><code>0000 0000 0000 0001</code><br />초성 ㄱ.</dd>
        <dt><code>GG</code></dt>
        <dd><code>0000 0000 0000 0002</code><br />초성 ㄲ (ㄱ+ㄱ).</dd>
        <dt><code>GN</code></dt>
        <dd><code>0000 0000 0000 0003</code><br />초성 ᅟᅠᇺ (ㄱ+ㄴ).</dd>
        <dt><code>GD</code></dt>
        <dd><code>0000 0000 0000 0004</code><br />초성 ᅚᅠ (ㄱ+ㄷ).</dd>
        <dt><code>GR</code></dt>
        <dd><code>0000 0000 0000 0005</code><br />초성 ᅟᅠᇃ (ㄱ+ㄹ).</dd>
        <dt><code>GB</code></dt>
        <dd><code>0000 0000 0000 0006</code><br />초성 ᅟᅠᇻ (ㄱ+ㅂ).</dd>
        <dt><code>GS</code></dt>
        <dd><code>0000 0000 0000 0007</code><br />초성 ᅟᅠᆪ (ㄱ+ㅅ).</dd>
        <dt><code>GSG</code></dt>
        <dd><code>0000 0000 0000 0008</code><br />초성 ᅟᅠᇄ (ㄱ+ㅅ+ㄱ).</dd>
        <dt><code>GC</code></dt>
        <dd><code>0000 0000 0000 0009</code><br />초성 ᅟᅠᇼ (ㄱ+ㅊ).</dd>
        <dt><code>GK</code></dt>
        <dd><code>0000 0000 0000 000A</code><br />초성 ᅟᅠᇽ (ㄱ+ㅋ).</dd>
        <dt><code>GH</code></dt>
        <dd><code>0000 0000 0000 000B</code><br />초성 ᅟᅠᇾ (ㄱ+ㅎ).</dd>
        <dt><code>N_</code></dt>
        <dd><code>0000 0000 0000 000C</code><br />초성 ㄴ.</dd>
        <dt><code>NG</code></dt>
        <dd><code>0000 0000 0000 000D</code><br />초성 ᄓᅠ (ㄴ+ㄱ).</dd>
        <dt><code>NN</code></dt>
        <dd><code>0000 0000 0000 000E</code><br />초성 ㅥ (ㄴ+ㄴ).</dd>
        <dt><code>ND</code></dt>
        <dd><code>0000 0000 0000 000F</code><br />초성 ㅦ (ㄴ+ㄷ).</dd>
        <dt><code>NR</code></dt>
        <dd><code>0000 0000 0000 0010</code><br />초성 ᅟᅠퟋ (ㄴ+ㄹ).</dd>
        <dt><code>NB</code></dt>
        <dd><code>0000 0000 0000 0011</code><br />초성 ᄖᅠ (ㄴ+ㅂ).</dd>
        <dt><code>NS</code></dt>
        <dd><code>0000 0000 0000 0012</code><br />초성 ㅧ (ㄴ+ㅅ).</dd>
        <dt><code>NZ</code></dt>
        <dd><code>0000 0000 0000 0013</code><br />초성 ᅟᅠᇈ (ㄴ+ㅿ).</dd>
        <dt><code>NJ</code></dt>
        <dd><code>0000 0000 0000 0014</code><br />초성 ㄵ (ㄴ+ㅈ).</dd>
        <dt><code>NC</code></dt>
        <dd><code>0000 0000 0000 0015</code><br />초성 ᅟᅠퟌ (ㄴ+ㅊ).</dd>
        <dt><code>NT</code></dt>
        <dd><code>0000 0000 0000 0016</code><br />초성 ᅟᅠᇉ (ㄴ+ㅌ).</dd>
        <dt><code>NH</code></dt>
        <dd><code>0000 0000 0000 0017</code><br />초성 ㄶ (ㄴ+ㅎ).</dd>
        <dt><code>D_</code></dt>
        <dd><code>0000 0000 0000 0018</code><br />초성 ㄷ.</dd>
        <dt><code>DG</code></dt>
        <dd><code>0000 0000 0000 0019</code><br />초성 ᄗᅠ (ㄷ+ㄱ).</dd>
        <dt><code>DD</code></dt>
        <dd><code>0000 0000 0000 001A</code><br />초성 ㄸ (ㄷ+ㄷ).</dd>
        <dt><code>DDB</code></dt>
        <dd><code>0000 0000 0000 001B</code><br />초성 ᅟᅠퟎ (ㄷ+ㄷ+ㅂ).</dd>
        <dt><code>DR</code></dt>
        <dd><code>0000 0000 0000 001C</code><br />초성 ᅞᅠ (ㄷ+ㄹ).</dd>
        <dt><code>DM</code></dt>
        <dd><code>0000 0000 0000 001D</code><br />초성 ꥠᅠ (ㄷ+ㅁ).</dd>
        <dt><code>DB</code></dt>
        <dd><code>0000 0000 0000 001E</code><br />초성 ꥡᅠ (ㄷ+ㅂ).</dd>
        <dt><code>DS</code></dt>
        <dd><code>0000 0000 0000 001F</code><br />초성 ꥢᅠ (ㄷ+ㅅ).</dd>
        <dt><code>DSG</code></dt>
        <dd><code>0000 0000 0000 0020</code><br />초성 ᅟᅠퟑ (ㄷ+ㅅ+ㄱ).</dd>
        <dt><code>DJ</code></dt>
        <dd><code>0000 0000 0000 0021</code><br />초성 ꥣᅠ (ㄷ+ㅈ).</dd>
        <dt><code>DC</code></dt>
        <dd><code>0000 0000 0000 0022</code><br />초성 ᅟᅠퟓ (ㄷ+ㅊ).</dd>
        <dt><code>DT</code></dt>
        <dd><code>0000 0000 0000 0023</code><br />초성 ᅟᅠퟔ (ㄷ+ㅌ).</dd>
        <dt><code>R_</code></dt>
        <dd><code>0000 0000 0000 0024</code><br />초성 ㄹ.</dd>
        <dt><code>RG</code></dt>
        <dd><code>0000 0000 0000 0025</code><br />초성 ㄺ (ㄹ+ㄱ).</dd>
        <dt><code>RGG</code></dt>
        <dd><code>0000 0000 0000 0026</code><br />초성 ꥥᅠ (ㄹ+ㄱ+ㄱ).</dd>
        <dt><code>RGS</code></dt>
        <dd><code>0000 0000 0000 0027</code><br />초성 ᅟᅠᇌ (ㄹ+ㄱ+ㅅ).</dd>
        <dt><code>RGH</code></dt>
        <dd><code>0000 0000 0000 0028</code><br />초성 ᅟᅠퟖ (ㄹ+ㄱ+ㅎ).</dd>
        <dt><code>RN</code></dt>
        <dd><code>0000 0000 0000 0029</code><br />초성 ᄘᅠ (ㄹ+ㄴ).</dd>
        <dt><code>RD</code></dt>
        <dd><code>0000 0000 0000 002A</code><br />초성 ㅪ (ㄹ+ㄷ).</dd>
        <dt><code>RDD</code></dt>
        <dd><code>0000 0000 0000 002B</code><br />초성 ꥧᅠ (ㄹ+ㄷ+ㄷ).</dd>
        <dt><code>RDH</code></dt>
        <dd><code>0000 0000 0000 002C</code><br />초성 ᅟᅠᇏ (ㄹ+ㄷ+ㅎ).</dd>
        <dt><code>RR</code></dt>
        <dd><code>0000 0000 0000 002D</code><br />초성 ᄙᅠ (ㄹ+ㄹ).</dd>
        <dt><code>RRK</code></dt>
        <dd><code>0000 0000 0000 002E</code><br />초성 ᅟᅠퟗ (ㄹ+ㄹ+ㅋ).</dd>
        <dt><code>RM</code></dt>
        <dd><code>0000 0000 0000 002F</code><br />초성 ㄻ (ㄹ+ㅁ).</dd>
        <dt><code>RMG</code></dt>
        <dd><code>0000 0000 0000 0030</code><br />초성 ᅟᅠᇑ (ㄹ+ㅁ+ㄱ).</dd>
        <dt><code>RMS</code></dt>
        <dd><code>0000 0000 0000 0031</code><br />초성 ᅟᅠᇒ (ㄹ+ㅁ+ㅅ).</dd>
        <dt><code>RMH</code></dt>
        <dd><code>0000 0000 0000 0032</code><br />초성 ᅟᅠퟘ (ㄹ+ㅁ+ㅎ).</dd>
        <dt><code>RB</code></dt>
        <dd><code>0000 0000 0000 0033</code><br />초성 ㄼ (ㄹ+ㅂ).</dd>
        <dt><code>RBD</code></dt>
        <dd><code>0000 0000 0000 0034</code><br />초성 ᅟᅠퟙ (ㄹ+ㅂ+ㄷ).</dd>
        <dt><code>RBB</code></dt>
        <dd><code>0000 0000 0000 0035</code><br />초성 ꥪᅠ (ㄹ+ㅂ+ㅂ).</dd>
        <dt><code>RBS</code></dt>
        <dd><code>0000 0000 0000 0036</code><br />초성 ᅟᅠᇓ (ㄹ+ㅂ+ㅅ).</dd>
        <dt><code>RBP</code></dt>
        <dd><code>0000 0000 0000 0037</code><br />초성 ᅟᅠퟚ (ㄹ+ㅂ+ㅍ).</dd>
        <dt><code>RBH</code></dt>
        <dd><code>0000 0000 0000 0038</code><br />초성 ᅟᅠᇔ (ㄹ+ㅂ+ㅎ).</dd>
        <dt><code>RBQ</code></dt>
        <dd><code>0000 0000 0000 0039</code><br />초성 ꥫᅠ (ㄹ+ㅂ+ㅇ).</dd>
        <dt><code>RS</code></dt>
        <dd><code>0000 0000 0000 003A</code><br />초성 ㄽ (ㄹ+ㅅ).</dd>
        <dt><code>RSS</code></dt>
        <dd><code>0000 0000 0000 003B</code><br />초성 ᅟᅠᇖ (ㄹ+ㅅ+ㅅ).</dd>
        <dt><code>RZ</code></dt>
        <dd><code>0000 0000 0000 003C</code><br />초성 ᅟᅠᇗ (ㄹ+ㅿ).</dd>
        <dt><code>RV</code></dt>
        <dd><code>0000 0000 0000 003D</code><br />초성 ᅟᅠퟛ (ㄹ+ㆁ).</dd>
        <dt><code>RJ</code></dt>
        <dd><code>0000 0000 0000 003E</code><br />초성 ꥭᅠ (ㄹ+ㅈ).</dd>
        <dt><code>RK</code></dt>
        <dd><code>0000 0000 0000 003F</code><br />초성 ꥮᅠ (ㄹ+ㅋ).</dd>
        <dt><code>RT</code></dt>
        <dd><code>0000 0000 0000 0040</code><br />초성 ᅟᅠᆴ (ㄹ+ㅌ).</dd>
        <dt><code>RP</code></dt>
        <dd><code>0000 0000 0000 0041</code><br />초성 ᅟᅠᆵ (ㄹ+ㅍ).</dd>
        <dt><code>RH</code></dt>
        <dd><code>0000 0000 0000 0042</code><br />초성 ㅀ (ㄹ+ㅎ).</dd>
        <dt><code>RX</code></dt>
        <dd><code>0000 0000 0000 0043</code><br />초성 ᅟᅠᇙ (ㄹ+ㆆ).</dd>
        <dt><code>RXH</code></dt>
        <dd><code>0000 0000 0000 0044</code><br />초성 ᅟᅠퟜ (ㄹ+ㆆ+ㅎ).</dd>
        <dt><code>RQ</code></dt>
        <dd><code>0000 0000 0000 0045</code><br />초성 ᄛᅠ (ㄹ+ㅇ).</dd>
        <dt><code>M_</code></dt>
        <dd><code>0000 0000 0000 0046</code><br />초성 ㅁ.</dd>
        <dt><code>MG</code></dt>
        <dd><code>0000 0000 0000 0047</code><br />초성 ꥯᅠ (ㅁ+ㄱ).</dd>
        <dt><code>MN</code></dt>
        <dd><code>0000 0000 0000 0048</code><br />초성 ᅟᅠퟞ (ㅁ+ㄴ).</dd>
        <dt><code>MNN</code></dt>
        <dd><code>0000 0000 0000 0049</code><br />초성 ᅟᅠퟟ (ㅁ+ㄴ+ㄴ).</dd>
        <dt><code>MD</code></dt>
        <dd><code>0000 0000 0000 004A</code><br />초성 ꥰᅠ (ㅁ+ㄷ).</dd>
        <dt><code>MR</code></dt>
        <dd><code>0000 0000 0000 004B</code><br />초성 ᅟᅠᇛ (ㅁ+ㄹ).</dd>
        <dt><code>MM</code></dt>
        <dd><code>0000 0000 0000 004C</code><br />초성 ᅟᅠퟠ (ㅁ+ㅁ).</dd>
        <dt><code>MB</code></dt>
        <dd><code>0000 0000 0000 004D</code><br />초성 ㅮ (ㅁ+ㅂ).</dd>
        <dt><code>MBS</code></dt>
        <dd><code>0000 0000 0000 004E</code><br />초성 ᅟᅠퟡ (ㅁ+ㅂ+ㅅ).</dd>
        <dt><code>MS</code></dt>
        <dd><code>0000 0000 0000 004F</code><br />초성 ㅯ (ㅁ+ㅅ).</dd>
        <dt><code>MSS</code></dt>
        <dd><code>0000 0000 0000 0050</code><br />초성 ᅟᅠᇞ (ㅁ+ㅅ+ㅅ).</dd>
        <dt><code>MZ</code></dt>
        <dd><code>0000 0000 0000 0051</code><br />초성 ᅟᅠᇟ (ㅁ+ㅿ).</dd>
        <dt><code>MJ</code></dt>
        <dd><code>0000 0000 0000 0052</code><br />초성 ᅟᅠퟢ (ㅁ+ㅈ).</dd>
        <dt><code>MC</code></dt>
        <dd><code>0000 0000 0000 0053</code><br />초성 ᅟᅠᇠ (ㅁ+ㅊ).</dd>
        <dt><code>MH</code></dt>
        <dd><code>0000 0000 0000 0054</code><br />초성 ᅟᅠᇡ (ㅁ+ㅎ).</dd>
        <dt><code>MQ</code></dt>
        <dd><code>0000 0000 0000 0055</code><br />초성 ㅱ (ㅁ+ㅇ).</dd>
        <dt><code>B_</code></dt>
        <dd><code>0000 0000 0000 0056</code><br />초성 ㅂ.</dd>
        <dt><code>BG</code></dt>
        <dd><code>0000 0000 0000 0057</code><br />초성 ㅲ (ㅂ+ㄱ).</dd>
        <dt><code>BN</code></dt>
        <dd><code>0000 0000 0000 0058</code><br />초성 ᄟᅠ (ㅂ+ㄴ).</dd>
        <dt><code>BD</code></dt>
        <dd><code>0000 0000 0000 0059</code><br />초성 ㅳ (ㅂ+ㄷ).</dd>
        <dt><code>BR</code></dt>
        <dd><code>0000 0000 0000 005A</code><br />초성 ᅟᅠᇣ (ㅂ+ㄹ).</dd>
        <dt><code>BRP</code></dt>
        <dd><code>0000 0000 0000 005B</code><br />초성 ᅟᅠퟤ (ㅂ+ㄹ+ㅍ).</dd>
        <dt><code>BM</code></dt>
        <dd><code>0000 0000 0000 005C</code><br />초성 ᅟᅠퟥ (ㅂ+ㅁ).</dd>
        <dt><code>BB</code></dt>
        <dd><code>0000 0000 0000 005D</code><br />초성 ㅃ (ㅂ+ㅂ).</dd>
        <dt><code>BS</code></dt>
        <dd><code>0000 0000 0000 005E</code><br />초성 ㅄ (ㅂ+ㅅ).</dd>
        <dt><code>BSG</code></dt>
        <dd><code>0000 0000 0000 005F</code><br />초성 ㅴ (ㅂ+ㅅ+ㄱ).</dd>
        <dt><code>BSD</code></dt>
        <dd><code>0000 0000 0000 0060</code><br />초성 ㅵ (ㅂ+ㅅ+ㄷ).</dd>
        <dt><code>BSB</code></dt>
        <dd><code>0000 0000 0000 0061</code><br />초성 ᄤᅠ (ㅂ+ㅅ+ㅂ).</dd>
        <dt><code>BSS</code></dt>
        <dd><code>0000 0000 0000 0062</code><br />초성 ᄥᅠ (ㅂ+ㅅ+ㅅ).</dd>
        <dt><code>BSJ</code></dt>
        <dd><code>0000 0000 0000 0063</code><br />초성 ᄦᅠ (ㅂ+ㅅ+ㅈ).</dd>
        <dt><code>BST</code></dt>
        <dd><code>0000 0000 0000 0064</code><br />초성 ꥲᅠ (ㅂ+ㅅ+ㅌ).</dd>
        <dt><code>BJ</code></dt>
        <dd><code>0000 0000 0000 0065</code><br />초성 ㅶ (ㅂ+ㅈ).</dd>
        <dt><code>BC</code></dt>
        <dd><code>0000 0000 0000 0066</code><br />초성 ᄨᅠ (ㅂ+ㅊ).</dd>
        <dt><code>BK</code></dt>
        <dd><code>0000 0000 0000 0067</code><br />초성 ꥳᅠ (ㅂ+ㅋ).</dd>
        <dt><code>BT</code></dt>
        <dd><code>0000 0000 0000 0068</code><br />초성 ㅷ (ㅂ+ㅌ).</dd>
        <dt><code>BP</code></dt>
        <dd><code>0000 0000 0000 0069</code><br />초성 ᄪᅠ (ㅂ+ㅍ).</dd>
        <dt><code>BH</code></dt>
        <dd><code>0000 0000 0000 006A</code><br />초성 ꥴᅠ (ㅂ+ㅎ).</dd>
        <dt><code>BQ</code></dt>
        <dd><code>0000 0000 0000 006B</code><br />초성 ㅸ (ㅂ+ㅇ).</dd>
        <dt><code>BBQ</code></dt>
        <dd><code>0000 0000 0000 006C</code><br />초성 ㅹ (ㅂ+ㅂ+ㅇ).</dd>
        <dt><code>S_</code></dt>
        <dd><code>0000 0000 0000 006D</code><br />초성 ㅅ.</dd>
        <dt><code>SG</code></dt>
        <dd><code>0000 0000 0000 006E</code><br />초성 ㅺ (ㅅ+ㄱ).</dd>
        <dt><code>SN</code></dt>
        <dd><code>0000 0000 0000 006F</code><br />초성 ㅻ (ㅅ+ㄴ).</dd>
        <dt><code>SD</code></dt>
        <dd><code>0000 0000 0000 0070</code><br />초성 ㅼ (ㅅ+ㄷ).</dd>
        <dt><code>SR</code></dt>
        <dd><code>0000 0000 0000 0071</code><br />초성 ᄰᅠ (ㅅ+ㄹ).</dd>
        <dt><code>SM</code></dt>
        <dd><code>0000 0000 0000 0072</code><br />초성 ᄱᅠ (ㅅ+ㅁ).</dd>
        <dt><code>SB</code></dt>
        <dd><code>0000 0000 0000 0073</code><br />초성 ㅽ (ㅅ+ㅂ).</dd>
        <dt><code>SBG</code></dt>
        <dd><code>0000 0000 0000 0074</code><br />초성 ᄳᅠ (ㅅ+ㅂ+ㄱ).</dd>
        <dt><code>SBQ</code></dt>
        <dd><code>0000 0000 0000 0075</code><br />초성 ᅟᅠퟫ (ㅅ+ㅂ+ㅇ).</dd>
        <dt><code>SS</code></dt>
        <dd><code>0000 0000 0000 0076</code><br />초성 ㅆ (ㅅ+ㅅ).</dd>
        <dt><code>SSG</code></dt>
        <dd><code>0000 0000 0000 0077</code><br />초성 ᅟᅠퟬ (ㅅ+ㅅ+ㄱ).</dd>
        <dt><code>SSD</code></dt>
        <dd><code>0000 0000 0000 0078</code><br />초성 ᅟᅠퟭ (ㅅ+ㅅ+ㄷ).</dd>
        <dt><code>SSB</code></dt>
        <dd><code>0000 0000 0000 0079</code><br />초성 ꥵᅠ (ㅅ+ㅅ+ㅂ).</dd>
        <dt><code>SSS</code></dt>
        <dd><code>0000 0000 0000 007A</code><br />초성 ᄴᅠ (ㅅ+ㅅ+ㅅ).</dd>
        <dt><code>SZ</code></dt>
        <dd><code>0000 0000 0000 007B</code><br />초성 ᅟᅠퟮ (ㅅ+ㅿ).</dd>
        <dt><code>SQ</code></dt>
        <dd><code>0000 0000 0000 007C</code><br />초성 ᄵᅠ (ㅅ+ㅇ).</dd>
        <dt><code>SJ</code></dt>
        <dd><code>0000 0000 0000 007D</code><br />초성 ㅾ (ㅅ+ㅈ).</dd>
        <dt><code>SC</code></dt>
        <dd><code>0000 0000 0000 007E</code><br />초성 ᄷᅠ (ㅅ+ㅊ).</dd>
        <dt><code>SK</code></dt>
        <dd><code>0000 0000 0000 007F</code><br />초성 ᄸᅠ (ㅅ+ㅋ).</dd>
        <dt><code>ST</code></dt>
        <dd><code>0000 0000 0000 0080</code><br />초성 ᄹᅠ (ㅅ+ㅌ).</dd>
        <dt><code>SP</code></dt>
        <dd><code>0000 0000 0000 0081</code><br />초성 ᄺᅠ (ㅅ+ㅍ).</dd>
        <dt><code>SH</code></dt>
        <dd><code>0000 0000 0000 0082</code><br />초성 ᄻᅠ (ㅅ+ㅎ).</dd>
        <dt><code>wS</code></dt>
        <dd><code>0000 0000 0000 0083</code><br />초성 ᄼᅠ.</dd>
        <dt><code>wSS</code></dt>
        <dd><code>0000 0000 0000 0084</code><br />초성 ᄽᅠ.</dd>
        <dt><code>Sw</code></dt>
        <dd><code>0000 0000 0000 0085</code><br />초성 ᄾᅠ.</dd>
        <dt><code>SSw</code></dt>
        <dd><code>0000 0000 0000 0086</code><br />초성 ᄿᅠ.</dd>
        <dt><code>Z_</code></dt>
        <dd><code>0000 0000 0000 0087</code><br />초성 ㅿ.</dd>
        <dt><code>ZB</code></dt>
        <dd><code>0000 0000 0000 0088</code><br />초성 ᅟᅠퟳ (ㅿ+ㅂ).</dd>
        <dt><code>ZBQ</code></dt>
        <dd><code>0000 0000 0000 0089</code><br />초성 ᅟᅠퟴ (ㅿ+ㅂ+ㅇ).</dd>
        <dt><code>Q_</code></dt>
        <dd><code>0000 0000 0000 008A</code><br />초성 ㅇ.</dd>
        <dt><code>QG</code></dt>
        <dd><code>0000 0000 0000 008B</code><br />초성 ᅁᅠ (ㅇ+ㄱ).</dd>
        <dt><code>QD</code></dt>
        <dd><code>0000 0000 0000 008C</code><br />초성 ᅂᅠ (ㅇ+ㄷ).</dd>
        <dt><code>QR</code></dt>
        <dd><code>0000 0000 0000 008D</code><br />초성 ꥶᅠ (ㅇ+ㄹ).</dd>
        <dt><code>QM</code></dt>
        <dd><code>0000 0000 0000 008E</code><br />초성 ᅃᅠ (ㅇ+ㅁ).</dd>
        <dt><code>QB</code></dt>
        <dd><code>0000 0000 0000 008F</code><br />초성 ᅄᅠ (ㅇ+ㅂ).</dd>
        <dt><code>QS</code></dt>
        <dd><code>0000 0000 0000 0090</code><br />초성 ᅅᅠ (ㅇ+ㅅ).</dd>
        <dt><code>QZ</code></dt>
        <dd><code>0000 0000 0000 0091</code><br />초성 ᅆᅠ (ㅇ+ㅿ).</dd>
        <dt><code>QQ</code></dt>
        <dd><code>0000 0000 0000 0092</code><br />초성 ㆀ (ㅇ+ㅇ).</dd>
        <dt><code>QJ</code></dt>
        <dd><code>0000 0000 0000 0093</code><br />초성 ᅈᅠ (ㅇ+ㅈ).</dd>
        <dt><code>QC</code></dt>
        <dd><code>0000 0000 0000 0094</code><br />초성 ᅉᅠ (ㅇ+ㅊ).</dd>
        <dt><code>QT</code></dt>
        <dd><code>0000 0000 0000 0095</code><br />초성 ᅊᅠ (ㅇ+ㅌ).</dd>
        <dt><code>QP</code></dt>
        <dd><code>0000 0000 0000 0096</code><br />초성 ᅋᅠ (ㅇ+ㅍ).</dd>
        <dt><code>QH</code></dt>
        <dd><code>0000 0000 0000 0097</code><br />초성 ꥷᅠ (ㅇ+ㅎ).</dd>
        <dt><code>V_</code></dt>
        <dd><code>0000 0000 0000 0098</code><br />초성 ㆁ.</dd>
        <dt><code>VG</code></dt>
        <dd><code>0000 0000 0000 0099</code><br />초성 ᅟᅠᇬ (ㆁ+ㄱ).</dd>
        <dt><code>VGG</code></dt>
        <dd><code>0000 0000 0000 009A</code><br />초성 ᅟᅠᇭ (ㆁ+ㄱ+ㄱ).</dd>
        <dt><code>VM</code></dt>
        <dd><code>0000 0000 0000 009B</code><br />초성 ᅟᅠퟵ (ㆁ+ㅁ).</dd>
        <dt><code>VS</code></dt>
        <dd><code>0000 0000 0000 009C</code><br />초성 ᅟᅠᇱ (ㆁ+ㅅ).</dd>
        <dt><code>VZ</code></dt>
        <dd><code>0000 0000 0000 009D</code><br />초성 ᅟᅠᇲ (ㆁ+ㅿ).</dd>
        <dt><code>VV</code></dt>
        <dd><code>0000 0000 0000 009E</code><br />초성 ᅟᅠᇮ (ㆁ+ㆁ).</dd>
        <dt><code>VK</code></dt>
        <dd><code>0000 0000 0000 009F</code><br />초성 ᅟᅠᇯ (ㆁ+ㅋ).</dd>
        <dt><code>VH</code></dt>
        <dd><code>0000 0000 0000 00A0</code><br />초성 ᅟᅠퟶ (ㆁ+ㅎ).</dd>
        <dt><code>J_</code></dt>
        <dd><code>0000 0000 0000 00A1</code><br />초성 ㅈ.</dd>
        <dt><code>JB</code></dt>
        <dd><code>0000 0000 0000 00A2</code><br />초성 ᅟᅠퟷ (ㅈ+ㅂ).</dd>
        <dt><code>JBB</code></dt>
        <dd><code>0000 0000 0000 00A3</code><br />초성 ᅟᅠퟸ (ㅈ+ㅂ+ㅂ).</dd>
        <dt><code>JQ</code></dt>
        <dd><code>0000 0000 0000 00A4</code><br />초성 ᅍᅠ (ㅈ+ㅇ).</dd>
        <dt><code>JJ</code></dt>
        <dd><code>0000 0000 0000 00A5</code><br />초성 ㅉ (ㅈ+ㅈ).</dd>
        <dt><code>JJH</code></dt>
        <dd><code>0000 0000 0000 00A6</code><br />초성 ꥸᅠ (ㅈ+ㅈ+ㅎ).</dd>
        <dt><code>wJ</code></dt>
        <dd><code>0000 0000 0000 00A7</code><br />초성 ᅎᅠ.</dd>
        <dt><code>wJJ</code></dt>
        <dd><code>0000 0000 0000 00A8</code><br />초성 ᅏᅠ.</dd>
        <dt><code>Jw</code></dt>
        <dd><code>0000 0000 0000 00A9</code><br />초성 ᅐᅠ.</dd>
        <dt><code>JJw</code></dt>
        <dd><code>0000 0000 0000 00AA</code><br />초성 ᅑᅠ.</dd>
        <dt><code>C_</code></dt>
        <dd><code>0000 0000 0000 00AB</code><br />초성 ㅊ.</dd>
        <dt><code>CK</code></dt>
        <dd><code>0000 0000 0000 00AC</code><br />초성 ᅒᅠ (ㅊ+ㅋ).</dd>
        <dt><code>CH</code></dt>
        <dd><code>0000 0000 0000 00AD</code><br />초성 ᅓᅠ (ㅊ+ㅎ).</dd>
        <dt><code>wC</code></dt>
        <dd><code>0000 0000 0000 00AE</code><br />초성 ᅔᅠ.</dd>
        <dt><code>Cw</code></dt>
        <dd><code>0000 0000 0000 00AF</code><br />초성 ᅕᅠ.</dd>
        <dt><code>K_</code></dt>
        <dd><code>0000 0000 0000 00B0</code><br />초성 ㅋ.</dd>
        <dt><code>T_</code></dt>
        <dd><code>0000 0000 0000 00B1</code><br />초성 ㅌ.</dd>
        <dt><code>TT</code></dt>
        <dd><code>0000 0000 0000 00B2</code><br />초성 ꥹᅠ (ㅌ+ㅌ).</dd>
        <dt><code>P_</code></dt>
        <dd><code>0000 0000 0000 00B3</code><br />초성 ㅍ.</dd>
        <dt><code>PB</code></dt>
        <dd><code>0000 0000 0000 00B4</code><br />초성 ᅖᅠ (ㅍ+ㅂ).</dd>
        <dt><code>PS</code></dt>
        <dd><code>0000 0000 0000 00B5</code><br />초성 ᅟᅠퟺ (ㅍ+ㅅ).</dd>
        <dt><code>PT</code></dt>
        <dd><code>0000 0000 0000 00B6</code><br />초성 ᅟᅠퟻ (ㅍ+ㅌ).</dd>
        <dt><code>PH</code></dt>
        <dd><code>0000 0000 0000 00B7</code><br />초성 ꥺᅠ (ㅍ+ㅎ).</dd>
        <dt><code>PQ</code></dt>
        <dd><code>0000 0000 0000 00B8</code><br />초성 ㆄ (ㅍ+ㅇ).</dd>
        <dt><code>H_</code></dt>
        <dd><code>0000 0000 0000 00B9</code><br />초성 ㅎ.</dd>
        <dt><code>HN</code></dt>
        <dd><code>0000 0000 0000 00BA</code><br />초성 ᅟᅠᇵ (ㅎ+ㄴ).</dd>
        <dt><code>HR</code></dt>
        <dd><code>0000 0000 0000 00BB</code><br />초성 ᅟᅠᇶ (ㅎ+ㄹ).</dd>
        <dt><code>HM</code></dt>
        <dd><code>0000 0000 0000 00BC</code><br />초성 ᅟᅠᇷ (ㅎ+ㅁ).</dd>
        <dt><code>HB</code></dt>
        <dd><code>0000 0000 0000 00BD</code><br />초성 ᅟᅠᇸ (ㅎ+ㅂ).</dd>
        <dt><code>HS</code></dt>
        <dd><code>0000 0000 0000 00BE</code><br />초성 ꥻᅠ (ㅎ+ㅅ).</dd>
        <dt><code>HH</code></dt>
        <dd><code>0000 0000 0000 00BF</code><br />초성 ㆅ (ㅎ+ㅎ).</dd>
        <dt><code>X_</code></dt>
        <dd><code>0000 0000 0000 00C0</code><br />초성 ㆆ.</dd>
        <dt><code>XX</code></dt>
        <dd><code>0000 0000 0000 00C1</code><br />초성 ꥼᅠ (ㆆ+ㆆ).</dd>
      </dl>
    </article>
  )
}
