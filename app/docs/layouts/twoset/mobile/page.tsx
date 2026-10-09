import TableOfContents, { type TocConfig } from "@/app/components/table-of-contents";
import VirtualKeyboard, { VirtualKeyLabel } from "@/app/components/virtualKeyboard";
import { cheonjiin, cheonjiinPlus, dujulESimple, dujulESimplePad11, dujulESimplePad9, motorola, muiSimple, muiSimplePad11, muiSimplePad9, naratgeul, twoSetSimple, twoSetSimplePad11, twoSetSimplePad9, vega } from "./mobileTwoSetLayouts";
import Link from "next/link";

const toc: TocConfig = {
  title: "목차",
  items: [
    {
      title: "키패드형 배열", href: "#keypad-like",
      children: [
        { title: "천지인", href: "#cheonjiin" },
        { title: "천지인 플러스", href: "#cheonjiin-plus" },
        { title: "베가 (SKY-II 한글)", href: "#vega" },
        { title: "나랏글", href: "#naratgeul" },
        { title: "모토로라", href: "#motorola" },
      ]
    },
    {
      title: "단모음 배열", href: "#simple",
      children: [
        { title: "두벌식 표준 단모음", href: "#two-set-simple" },
        { title: "무이단모음", href: "#mui-simple" },
        { title: "두줄이 단모음", href: "#dujul-e-simple" },
      ]
    },
    // {
    //   title: "제스처 배열", href: "#gesture",
    //   children: [
    //     { title: "모아키", href: "#moakey" },
    //   ]
    // },
  ],
}

let twoSetPhone: VirtualKeyLabel[][] = [
  [
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'consonant'}], topLabels: [{label: 'ㅃ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'consonant'}], topLabels: [{label: 'ㅆ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄷ', labelType: 'consonant'}], topLabels: [{label: 'ㄸ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'consonant'}], topLabels: [{label: 'ㄲ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'consonant'}], topLabels: [{label: 'ㅉ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅛ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅑ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅐ', labelType: 'vowel'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅔ', labelType: 'vowel'}], topLabels: [{label: 'ㅖ', labelType: 'vowel'}]}}},
  ],
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅓ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅏ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅣ', labelType: 'vowel'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {width: 1.3, content: {kind: 'special', labelData: 'shift'}},
    {width: 0.2, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅌ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅡ', labelType: 'vowel'}]}}},
    {width: 0.2, content: {kind: 'empty'}},
    {width: 1.3, content: {kind: 'special', labelData: 'delete'}},
  ],
]

let twoSetPad9: VirtualKeyLabel[][] = [
  [
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'consonant'}], topLabels: [{label: 'ㅃ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'consonant'}], topLabels: [{label: 'ㅆ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄷ', labelType: 'consonant'}], topLabels: [{label: 'ㄸ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'consonant'}], topLabels: [{label: 'ㄲ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'consonant'}], topLabels: [{label: 'ㅉ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅛ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅑ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅐ', labelType: 'vowel'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅔ', labelType: 'vowel'}], topLabels: [{label: 'ㅖ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'delete'}, width: 1.25},
  ],
  [
    {content: {kind: 'empty'}, width: 0.5},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅓ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅏ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅣ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'return'}, width: 1.75},
  ],
  [
    {content: {kind: 'special', labelData: 'shift'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅌ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅡ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: ','}], topLabels: [{label: '!'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: '.'}], topLabels: [{label: '?'}]}}},
    {content: {kind: 'special', labelData: 'shift'}, width: 1.25},
  ],
]

let twoSetPad11: VirtualKeyLabel[][] = [
  [
    {content: {kind: 'special', labelData: 'tab'}, width: 1.25},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'consonant'}], topLabels: [{label: 'ㅃ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'consonant'}], topLabels: [{label: 'ㅆ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄷ', labelType: 'consonant'}], topLabels: [{label: 'ㄸ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'consonant'}], topLabels: [{label: 'ㄲ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'consonant'}], topLabels: [{label: 'ㅉ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅛ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅑ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅐ', labelType: 'vowel'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅔ', labelType: 'vowel'}], topLabels: [{label: 'ㅖ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'delete'}, width: 1.25},
  ],
  [
    {content: {kind: 'special', labelData: 'caps'}, width: 1.5},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅓ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅏ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅣ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'return'}, width: 2},
  ],
  [
    {content: {kind: 'special', labelData: 'shift'}, width: 2},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅌ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'consonant'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅡ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: ','}], topLabels: [{label: '!'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: '.'}], topLabels: [{label: '?'}]}}},
    {content: {kind: 'special', labelData: 'shift'}, width: 1.5},
  ],
]

let phoneThreeSet390: VirtualKeyLabel[][] = [
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'trailing'}], topLabels: [{label: 'ㅈ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅆ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅛ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅑ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅖ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅢ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'leading'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'trailing'}], topLabels: [{label: 'ㅍ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'trailing'}], topLabels: [{label: 'ㅌ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅕ', labelType: 'vowel'}], topLabels: [{label: 'ㅋ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅐ', labelType: 'vowel'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅓ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄷ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'leading'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'trailing'}], topLabels: [{label: 'ㄷ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'trailing'}], topLabels: [{label: 'ㄶ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅣ', labelType: 'vowel'}], topLabels: [{label: 'ㄺ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅏ', labelType: 'vowel'}], topLabels: [{label: 'ㄲ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅡ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'leading'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {content: {kind: 'special', labelData: 'shift'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'trailing'}], topLabels: [{label: 'ㅊ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'trailing'}], topLabels: [{label: 'ㅄ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅔ', labelType: 'vowel'}], topLabels: [{label: 'ㄻ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅗ', labelType: 'vowel'}], topLabels: [{label: 'ㅀ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅌ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'delete'}},
  ],
]

let shinThreeSetPhone: VirtualKeyLabel[][] = [
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'trailing'}], topLabels: [{label: 'ㅍ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'trailing'}], topLabels: [{label: 'ㅌ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅕ', labelType: 'vowel'}], topLabels: [{label: 'ㅋ', labelType: 'trailing'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅐ', labelType: 'vowel'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅓ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄹ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄷ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'leading'}], topLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'leading'}], topLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'leading'}], topLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {width: 0.5, content: {kind: 'empty'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'trailing'}], topLabels: [{label: 'ㅒ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'trailing'}], topLabels: [{label: 'ㅖ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'trailing'}], topLabels: [{label: 'ㅣ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'trailing'}], topLabels: [{label: 'ㅏ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅍ', labelType: 'trailing'}], topLabels: [{label: 'ㅡ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄴ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅇ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅈ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅂ', labelType: 'leading'}]}}},
    {width: 0.5, content: {kind: 'empty'}},
  ],
  [
    {content: {kind: 'special', labelData: 'shift'}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅁ', labelType: 'trailing'}], topLabels: [{label: 'ㅠ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㄱ', labelType: 'trailing'}], topLabels: [{label: 'ㅛ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅊ', labelType: 'trailing'}], topLabels: [{label: 'ㅔ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'trailing'}], topLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅆ', labelType: 'trailing'}], topLabels: [{label: 'ㅜ', labelType: 'vowel'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅅ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅎ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅌ', labelType: 'leading'}]}}},
    {content: {kind: 'label', labelData: {bottomLabels: [{label: 'ㅋ', labelType: 'leading'}], topLabels: [{label: 'ㅗ', labelType: 'vowel'}]}}},
    {content: {kind: 'special', labelData: 'delete'}},
  ],
]

export default function Layouts() {
  return (
    <article>
      <h2>모바일용 두벌식</h2>
      <p>모바일 기기는 화면이 작기에 컴퓨터용 배열을 그대로 사용하기에 불편합니다. 키 하나의 크기가 작아져 정확한 위치를 터치하는 데 손이 피로해지기 쉬우며, 오타가 발생하기도 쉽습니다. 또, 과거 피처폰 시절에는 컴퓨터 키보드 레이아웃을 그대로 휴대전화에 넣는 것도 불가능했습니다. 이러한 문제점을 해결하기 위해 모바일용 키보드 배열이 개발되었습니다.</p>
      <p>모바일용 두벌식 배열은 크게 ‘키패드형 배열’과 ‘단모음 배열’로 구분됩니다. 키패드형 배열은 피처폰의 숫자 버튼에 맞추어 3×4 배열에 한글 키를 늘어놓은 배열로, 하나의 키를 최대 3번까지 연타하여 낱자를 입력합니다. 키 하나의 크기는 확실히 커지지만 한 글자를 입력하는 데 필요한 터치 수가 많아져 입력 속도가 느려집니다. 단모음형 배열은 컴퓨터 키보드 배열을 바탕으로 이중모음을 단모음의 연타로 입력하도록 만든 배열입니다. 필요한 터치 수는 크게 늘어나지 않지만, 키의 크기가 많이 커지지도 않아 오타가 여전히 많이 발생할 수 있습니다.</p>
      <p>아래 배열 그림에서, 파란색 낱자는 자음(초성·종성 겸용)을, 녹색 낱자는 초성을, 갈색 낱자는 중성을, 빨간색 낱자는 종성을 가리킵니다. 회색 기호는 방점을 나타냅니다. ‘❖’는 음절 조합을 종료하는 동작을 나타냅니다.</p>
      <TableOfContents toc={toc} />

      <h3 id="keypad-like">키패드형 배열</h3>
      <p>키패드형 배열은 3×4 배열에 한글 키를 늘어놓은 배열로, 과거 피처폰 시절에 사용되었던 배열입니다. 키의 수가 적기에 한 글자를 입력하는 데 터치를 많이 해야 하므로 타자 속도가 느리지만, 반대로 화면 상에서 키 하나의 크기는 커지므로 키를 터치하는 것이 쉬워집니다. 과거에는 스마트폰 제조사별로 탑재된 배열이 달랐으나, 스마트폰 시대에는 키보드 앱을 사용하여 배열을 변경할 수 있게 되었습니다.</p>
      <h4 id="cheonjiin">천지인</h4>
      <VirtualKeyboard labelData={cheonjiin} keyboardType="keypad" hideTopLabels={true} />
      <p>가장 널리 쓰이는 키패드형 배열입니다. 배열의 이름은 훈민정음 모음의 창제 원리인 천(ㆍ)·지(ㅡ)·인(ㅣ)에서 따온 것으로, 모음을 입력할 때 <code>ㅣ</code>, <code>ㆍ</code>, <code>ㅡ</code> 키 세 개를 조합하여 입력합니다.</p>
      <p>자음은 7개의 키를 사용하여 입력합니다. 키를 한 번 터치하면 왼쪽의 낱자가 입력되며, 두 번 터치하면 오른쪽의 낱자가 입력됩니다. ㄱ, ㄷ, ㅂ, ㅅ, ㅈ가 있는 키는 세 번 터치하여 쌍자음을 입력할 수 있습니다.</p>
      <p>자음은 최대 3번, 모음은 최대 5번 터치하여 입력할 수 있습니다.</p>
      <h4 id="cheonjiin-plus">천지인 플러스</h4>
      <VirtualKeyboard labelData={cheonjiinPlus} keyboardType="keypad" hideTopLabels={true} />
      <p>천지인 배열에서 자음 키를 둘로 쪼개어, 자음 입력 시의 연타 횟수를 줄인 배열입니다. 쌍자음을 입력할 때는 홑자음 오른쪽의 키를 두 번 연타하면 됩니다(예: ㄲ을 입력하려면 <code>ㅋ</code>&nbsp;키를 두 번 연타합니다). 자음의 연타 횟수는 줄어들었지만, 여전히 모음을 입력할 때는 터치 횟수가 많습니다.</p>
      <p>자음은 최대 2번, 모음은 최대 5번 터치하여 입력할 수 있습니다.</p>
      <h4 id="vega">베가 (SKY-II 한글)</h4>
      <VirtualKeyboard labelData={vega} keyboardType="keypadWithSyllableBreak" hideTopLabels={true} />
      <p>자음 기본자 14자와 모음 기본자 10자를 모두 2개씩 묶어 12개의 키에 배치하였습니다. 조합 메커니즘 없이 연타만으로 모든 낱자를 입력하기에, 각 낱자를 입력하는 방법은 키패드형 배열 중 가장 간단합니다.</p>
      <p>자음은 최대 3번, 모음도 최대 3번 터치하여 입력할 수 있습니다.</p>
      <h4 id="naratgeul">나랏글</h4>
      <VirtualKeyboard labelData={naratgeul} keyboardType="keypad" hideTopLabels={true} />
      <p>나랏글 배열은 자음의 창제 원리에 따라 구현된 배열입니다. 기본자를 바탕으로 <code>획 추가</code> 버튼으로 가획해 나가면서 낱자를 만듭니다. 쌍자음은 <code>쌍자음</code> 키로 입력합니다. 한편, <code>획 추가</code> 버튼은 모음을 입력할 때도 사용됩니다.</p>
      <p>자음은 최대 3번, 모음은 최대 4번 터치하여 입력할 수 있습니다.</p>
      <h4 id="motorola">모토로라</h4>
      <VirtualKeyboard labelData={motorola} keyboardType="keypadWithSyllableBreak" hideTopLabels={true} />
      <p>베가와 나랏글 배열을 합친 듯한 특징을 가지고 있습니다. <code>한</code>&nbsp;키가 존재하며, 이 키는 자음을 입력 중일 때와 모음을 입력 중일 때의 동작이 다릅니다.</p>
      <ul>
        <li>자음 키를 누르고 <code>한</code>&nbsp;키를 누르면 자음 키에 적힌 두 번째 낱자가 입력됩니다.</li>
        <li>자음 키를 두 번 누르면 쌍자음이 입력됩니다.</li>
        <li>모음 키를 두 번 누르면 모음 키에 적힌 두 번째 낱자가 입력됩니다.</li>
        <li>모음 입력 중에 <code>한</code>&nbsp;키를 누르면 이중모음이 입력됩니다(예: ㅑ = <code>ㅏㅓ</code>+<code>한</code>, ㅛ = <code>ㅗㅜ</code>+<code>ㅗㅜ</code>+<code>한</code>).</li>
      </ul>
      <p>자음은 최대 3번, 모음은 최대 4번 터치하여 입력할 수 있습니다.</p>

      <h3 id="simple">단모음 배열</h3>
      <h4 id="two-set-simple">두벌식 표준 단모음</h4>
      <VirtualKeyboard labelData={twoSetSimple} hideTopLabels={true} />
      {/* <VirtualKeyboard labelData={twoSetSimplePad9} keyboardType="pad9" hideTopLabels={true} /> */}
      {/* <VirtualKeyboard labelData={twoSetSimplePad11} keyboardType="pad11" hideTopLabels={true} /> */}
      <p>Google이 개발한 배열로, 표준 두벌식 배열에서 이중모음 키 <code>ㅑ</code>·<code>ㅕ</code>·<code>ㅛ</code>·<code>ㅠ</code>를 없애고 단모음 키만 남긴 배열입니다. 이중모음을 입력하려면 단모음을 연타하면 됩니다. Shift 키도 없으며, 쌍자음은 홑자음 키를 연타하여 입력합니다.</p>
      <h4 id="mui-simple">무이단모음</h4>
      <VirtualKeyboard labelData={muiSimple} hideTopLabels={true} />
      {/* <VirtualKeyboard labelData={muiSimplePad9} keyboardType="pad9" hideTopLabels={true} /> */}
      {/* <VirtualKeyboard labelData={muiSimplePad11} keyboardType="pad11" hideTopLabels={true} /> */}
      <p>무이가 두벌식 표준 단모음 배열을 기반으로, 키 수를 더 줄인 배열입니다. <code>ㅂ</code>&nbsp;키를 하단으로 옮겼으며, 사용 빈도가 낮은 자음인 ㅊ과 ㅍ은 각각 <code>ㅌㅊ</code>과 <code>ㅎㅍ</code>&nbsp;키를 연타하여 입력하도록 하였습니다.</p>
      <p><a href="https://story.pxd.co.kr/962" target="_blank">자세한 정보 ›</a></p>
      <h4 id="dujul-e-simple">두줄이 단모음</h4>
      <VirtualKeyboard labelData={dujulESimple} hideTopLabels={true} />
      {/* <VirtualKeyboard labelData={dujulESimplePad9} keyboardType="pad9" hideTopLabels={true} /> */}
      {/* <VirtualKeyboard labelData={dujulESimplePad11} keyboardType="pad11" hideTopLabels={true} /> */}
      <p>신세기가 개발한 <Link href="./#dujul-e">두줄이</Link> 배열의 단모음 버전입니다. 두벌식 표준 단모음 배열과 비교하였을 때, <code>ㅆ</code>&nbsp;키가 추가되어 키가 1개 더 많습니다. ㅆ을 제외한 나머지 쌍자음 ㄲ·ㄸ·ㅃ·ㅉ은 각각 <code>ㄱ</code>·<code>ㄷ</code>·<code>ㅂ</code>·<code>ㅈ</code>&nbsp;키를 연타하여 입력합니다.</p>
      <p><a href="https://blog.naver.com/eekdland/224252538464" target="_blank">자세한 정보 ›</a></p>

      {/* <h3 id="gesture">제스처 배열</h3> */}
      {/* <h4 id="moakey">모아키 (지원 예정)</h4> */}
    </article>
  )
}
