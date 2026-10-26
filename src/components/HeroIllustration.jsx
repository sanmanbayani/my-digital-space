import { useId } from "react";

const c = (name) => `var(--illustration-${name})`;

function Plant({ x, y, scale = 1, pot = "coral" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cy="9" rx="58" ry="10" fill={c("shadow")} />
      <g className="illustration-leaves">
        <path d="M0 -45 Q-6 -108 -30 -150 M0 -45 Q28 -117 42 -178 M0 -45 Q-25 -100 -58 -113 M0 -45 Q42 -83 69 -112" fill="none" stroke={c("green-dark")} strokeWidth="5" />
        <path d="M-30 -150 Q-77 -181 -67 -132 Q-56 -110 -30 -150 M42 -178 Q5 -219 3 -179 Q10 -149 42 -178 M42 -178 Q93 -195 78 -152 Q65 -132 42 -178 M-58 -113 Q-94 -149 -104 -115 Q-98 -88 -58 -113 M69 -112 Q108 -146 111 -111 Q103 -87 69 -112 M-8 -81 Q-64 -101 -51 -65 Q-31 -46 -8 -81 M20 -91 Q66 -110 59 -73 Q41 -57 20 -91" fill={c("green")} />
        <path d="M-30 -150 L-65 -144 M42 -178 L72 -169 M69 -112 L102 -113" stroke={c("green-dark")} strokeWidth="2" fill="none" />
      </g>
      <path d="M-43 -57 H43 L33 0 Q0 14 -33 0Z" fill={c(pot)} />
      <path d="M-43 -57 H-22 L-16 5 Q-29 3 -33 0Z" fill={c("ink")} opacity=".09" />
      <ellipse cy="-57" rx="43" ry="9" fill={c("coral-light")} />
      <ellipse cy="-57" rx="34" ry="5" fill={c("green-dark")} />
    </g>
  );
}

function Book({ x, y, width, color, angle = 0 }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${angle})`}>
      <rect width={width} height="17" rx="3" fill={c(color)} />
      <path d={`M7 5 H${width - 5} V12 H7Z`} fill={c("paper")} />
      <path d={`M12 8 H${width - 9}`} stroke={c("line")} strokeWidth="1" />
    </g>
  );
}

export default function HeroIllustration() {
  const id = useId().replace(/:/g, "");
  return (
    <div className="hero-illustration">
      <svg className="hero-illustration-art" viewBox="0 0 1600 650" role="img" aria-labelledby={`${id}-title ${id}-description`}>
        <title id={`${id}-title`}>Sanman's creative studio</title>
        <desc id={`${id}-description`}>A stylized designer sketching at his desk, surrounded by plants, a sunlit window, a camera, books and playful design sketches.</desc>
        <defs>
          <pattern id={`${id}-grid`} width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke={c("line")} strokeWidth=".8" />
          </pattern>
          <clipPath id={`${id}-window`}><rect x="1117" y="69" width="269" height="291" rx="135" /></clipPath>
        </defs>

        {/* The room is intentionally unframed, with plenty of white space. */}
        <path d="M0 558 H1600" stroke={c("line")} strokeWidth="2" />
        <path d="M63 604 H337 M1251 604 H1518 M401 629 H1134" stroke={c("line")} strokeWidth="2" strokeLinecap="round" />
        <ellipse cx="808" cy="586" rx="352" ry="29" fill={c("shadow")} />
        <path d="M1131 342 L1399 342 L1515 556 H1032Z" fill={c("sunlight")} />

        {/* Arched window and the small landscape beyond it. */}
        <rect x="1103" y="55" width="297" height="319" rx="148" fill={c("paper")} stroke={c("line")} strokeWidth="2" />
        <g clipPath={`url(#${id}-window)`}>
          <rect x="1117" y="69" width="269" height="291" fill={c("sky")} />
          <circle cx="1318" cy="142" r="34" fill={c("yellow")} />
          <path d="M1087 309 Q1169 198 1250 286 Q1328 210 1409 295 V378 H1087Z" fill={c("green-light")} />
          <path d="M1087 337 Q1201 245 1292 323 Q1350 275 1420 321 V378 H1087Z" fill={c("green")} />
          <path d="M1138 153 Q1155 138 1172 153 M1192 125 Q1204 114 1216 125" fill="none" stroke={c("green-dark")} strokeWidth="2" strokeLinecap="round" />
        </g>
        <path d="M1252 72 V360 M1117 226 H1386" stroke={c("paper")} strokeWidth="10" />
        <path d="M1252 72 V360 M1117 226 H1386" stroke={c("line")} strokeWidth="1.5" />
        <rect x="1090" y="360" width="324" height="13" rx="3" fill={c("green-dark")} />

        {/* Pinned design studies. */}
        <g transform="translate(354 118) rotate(-7)">
          <rect x="5" y="8" width="142" height="171" rx="2" fill={c("shadow")} />
          <rect width="142" height="171" rx="2" fill={c("paper")} stroke={c("line")} />
          <rect x="14" y="16" width="114" height="131" fill={`url(#${id}-grid)`} />
          <path d="M31 117 V50 H76 V83 H111 V117Z" fill={c("lavender")} stroke={c("ink")} strokeWidth="2" />
          <circle cx="76" cy="50" r="16" fill={c("coral")} />
          <path d="M26 157 H79 M91 157 H116" stroke={c("line")} strokeWidth="3" />
          <rect x="48" y="-8" width="46" height="18" fill={c("yellow")} opacity=".65" />
        </g>
        <g transform="translate(529 175) rotate(7)">
          <rect width="92" height="106" fill={c("yellow-light")} />
          <path d="M19 33 Q47 4 68 35 Q86 61 53 78 Q22 89 19 59 Q19 44 53 48" fill="none" stroke={c("ink")} strokeWidth="2.5" strokeLinecap="round" />
          <rect x="29" y="-7" width="36" height="15" fill={c("green-light")} opacity=".8" />
        </g>
        <g className="illustration-doodle">
          <path d="M638 108 L645 128 L666 133 L645 139 L638 159 L632 139 L612 133 L632 128Z" fill={c("yellow")} />
          <path d="M1019 160 Q1059 136 1076 164 M1076 164 L1074 150 M1076 164 L1062 167" stroke={c("green")} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M929 71 L936 85 M951 69 L948 84 M963 86 L952 92" stroke={c("coral")} strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Low shelf: cinema, photography and well-loved books. */}
        <path d="M82 433 H366 V449 H82Z" fill={c("green-dark")} />
        <path d="M104 449 V556 M344 449 V556" stroke={c("green-dark")} strokeWidth="10" />
        <Book x={113} y={414} width={126} color="coral" />
        <Book x={121} y={395} width={113} color="green" angle={-3} />
        <Book x={111} y={377} width={124} color="yellow" />
        <g transform="translate(263 375) rotate(-6)">
          <rect width="75" height="55" rx="8" fill={c("ink")} />
          <path d="M13 0 V-8 H36 V0" fill={c("ink")} />
          <rect x="5" y="7" width="65" height="15" rx="3" fill={c("green-dark")} />
          <circle cx="42" cy="29" r="22" fill={c("paper")} />
          <circle cx="42" cy="29" r="17" fill={c("ink")} />
          <circle cx="42" cy="29" r="11" fill={c("sky")} />
          <circle cx="38" cy="25" r="4" fill={c("paper")} />
          <rect x="9" y="11" width="11" height="6" rx="1" fill={c("yellow")} />
        </g>
        <g transform="translate(147 284) rotate(-12)">
          <rect width="77" height="67" rx="3" fill={c("ink")} />
          <path d="M0 0 H77 V17 H0Z" fill={c("paper")} />
          {[0, 23, 46, 69].map((x) => <path key={x} d={`M${x} 0 l-9 17 h12 l9 -17Z`} fill={c("ink")} />)}
          <path d="M13 33 H61 M13 43 H46 M13 53 H54" stroke={c("paper")} strokeWidth="2" opacity=".7" />
        </g>
        <Plant x={54} y={556} scale={1.05} />

        {/* Chair behind the designer. */}
        <rect x="812" y="347" width="128" height="160" rx="48" fill={c("green-dark")} />
        <rect x="827" y="360" width="98" height="123" rx="36" fill={c("green")} />
        <path d="M863 491 V577 M863 568 L805 593 M863 568 L921 593" stroke={c("ink")} strokeWidth="9" strokeLinecap="round" />
        <circle cx="803" cy="594" r="9" fill={c("ink")} /><circle cx="923" cy="594" r="9" fill={c("ink")} />

        {/* A quietly focused designer, drawn as layered editorial shapes. */}
        <path d="M799 445 Q843 429 886 453 L867 538 L815 541 L814 495 L782 489Z" fill={c("ink")} />
        <path d="M821 520 L824 573 L796 583 L782 570 L783 519Z" fill={c("lavender")} />
        <path d="M858 519 L883 564 L870 579 L849 569 L822 537Z" fill={c("lavender")} />
        <path d="M798 569 Q815 566 825 575 L826 590 H766 Q760 579 777 575Z" fill={c("ink")} />
        <path d="M874 561 Q893 562 898 574 L919 581 Q926 593 914 594 H869 L861 576Z" fill={c("ink")} />
        <path d="M769 591 H825 M873 592 H916" stroke={c("paper")} strokeWidth="3" />
        <path d="M781 303 Q815 283 849 312 Q875 344 875 441 Q825 466 773 438 L762 362Z" fill={c("coral")} />
        <path d="M839 328 Q855 379 852 433 M785 407 Q817 421 850 411" stroke={c("coral-dark")} strokeWidth="2" fill="none" />
        <path d="M798 292 L797 313 Q817 329 833 310 L822 280Z" fill={c("skin")} />
        <path d="M798 292 Q809 303 827 302 L822 282Z" fill={c("skin-shadow")} />
        <path d="M774 236 Q775 202 811 205 Q848 208 843 247 L835 275 Q818 302 796 285 L784 262Z" fill={c("skin")} />
        <path d="M777 251 Q759 233 775 212 Q770 192 797 189 Q811 172 826 192 Q854 190 854 215 Q852 233 837 235 L835 219 Q816 235 787 224 L785 252Z" fill={c("ink")} />
        <path d="M782 246 Q767 236 769 253 Q771 268 785 265" fill={c("skin")} />
        <path d="M808 253 H823 M827 252 H841 M822 253 L827 252" stroke={c("ink")} strokeWidth="3" strokeLinecap="round" />
        <path d="M807 249 V258 Q813 264 821 258 V249 M828 248 V257 Q834 261 840 256 V248" fill="none" stroke={c("ink")} strokeWidth="2" />
        <path d="M826 261 L829 270 L822 271 M810 278 Q818 283 824 278" fill="none" stroke={c("skin-shadow")} strokeWidth="2" strokeLinecap="round" />
        <path d="M778 321 Q748 323 737 355 L715 393 L746 410 L782 364Z" fill={c("coral")} />
        <path d="M743 379 L725 400 L678 390 L672 410 Q713 435 740 421 L764 391Z" fill={c("skin")} />
        <path d="M680 390 L657 385 Q646 385 643 394 L637 400 Q640 411 656 407 L673 410Z" fill={c("skin")} />
        <path d="M834 325 Q861 318 875 351 L894 387 L869 403 L843 366Z" fill={c("coral")} />
        <path d="M870 382 L883 397 L832 408 L831 426 Q876 430 902 410 Q912 399 892 374Z" fill={c("skin")} />
        <path d="M833 408 L810 403 Q792 402 789 411 L788 420 L812 424 L832 425Z" fill={c("skin")} />

        {/* Desk, drawing tablet and small everyday objects. */}
        <path d="M461 421 H1047 L1074 443 H436Z" fill={c("paper")} stroke={c("ink")} strokeWidth="2" />
        <path d="M436 443 H1074 V457 H436Z" fill={c("green-dark")} />
        <path d="M471 457 L450 586 M1031 457 L1053 586" stroke={c("green-dark")} strokeWidth="13" strokeLinecap="round" />
        <path d="M478 457 L459 573 M1025 457 L1044 573" stroke={c("green")} strokeWidth="3" />
        <g transform="translate(509 314) rotate(-7)">
          <rect x="-5" y="-5" width="140" height="94" rx="7" fill={c("ink")} />
          <rect width="130" height="83" rx="3" fill={c("sky")} />
          <rect x="9" y="10" width="32" height="63" rx="2" fill={c("paper")} />
          <rect x="49" y="10" width="70" height="27" rx="2" fill={c("green-light")} />
          <circle cx="106" cy="21" r="8" fill={c("coral")} />
          <rect x="49" y="44" width="32" height="29" rx="2" fill={c("lavender")} />
          <rect x="87" y="44" width="32" height="29" rx="2" fill={c("yellow")} />
          <path d="M17 21 H33 M17 30 H30 M17 53 H33 M17 62 H27" stroke={c("line")} strokeWidth="3" />
          <path d="M-5 90 L-27 106 H147 L135 90Z" fill={c("green-dark")} />
          <path d="M5 94 H123 L128 100 H-3Z" fill={c("line")} />
        </g>
        <path d="M728 421 L791 411 L827 432 L764 439Z" fill={c("paper")} stroke={c("line")} />
        <path d="M754 423 Q772 414 785 425 L771 431Z" fill={c("lavender")} />
        <path d="M653 393 L679 357" stroke={c("ink")} strokeWidth="4" strokeLinecap="round" />
        <path d="M679 357 L682 350" stroke={c("coral")} strokeWidth="3" strokeLinecap="round" />
        <g transform="translate(957 379)">
          <path d="M0 0 H31 V35 Q15 46 0 35Z" fill={c("yellow")} />
          <path d="M31 7 Q53 5 47 24 Q42 32 31 28" fill="none" stroke={c("yellow")} strokeWidth="6" />
          <ellipse cx="15.5" rx="15.5" ry="4" fill={c("yellow-light")} />
          <g className="illustration-steam" stroke={c("line")} strokeWidth="2" fill="none" strokeLinecap="round">
            <path d="M9 -12 Q2 -22 10 -30 Q17 -37 11 -46 M24 -10 Q17 -21 25 -30" />
          </g>
        </g>
        <g transform="translate(1007 378)">
          <path d="M0 0 H23 L20 41 H3Z" fill={c("lavender")} />
          <path d="M5 0 L0 -30 M12 0 L14 -40 M18 0 L26 -27" stroke={c("ink")} strokeWidth="4" />
          <path d="M14 -40 L14 -45" stroke={c("coral")} strokeWidth="4" />
        </g>

        {/* An oversized plant balances the composition, with a tiny resting cat. */}
        <Plant x={1420} y={555} scale={1.65} pot="green-light" />
        <Plant x={1190} y={358} scale={.48} pot="coral" />
        <g transform="translate(1212 534)">
          <ellipse cx="18" cy="25" rx="67" ry="9" fill={c("shadow")} />
          <path d="M-35 16 Q-34 -25 6 -20 Q40 -21 53 9 Q67 19 43 25 H-23Z" fill={c("yellow")} />
          <path d="M-35 12 Q-73 -3 -64 -22 Q-57 -32 -50 -23" fill="none" stroke={c("yellow")} strokeWidth="12" strokeLinecap="round" />
          <path d="M30 7 L29 -20 L41 -12 L54 -18 L59 7 Q48 24 30 7Z" fill={c("yellow")} />
          <path d="M35 3 L40 5 M47 5 L52 2 M42 11 L46 11" stroke={c("ink")} strokeWidth="2" strokeLinecap="round" />
          <path d="M-5 -14 Q-13 -6 -7 2 M8 -15 Q1 -6 8 1" fill="none" stroke={c("yellow-dark")} strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}