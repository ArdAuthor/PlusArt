import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgBack(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
      {...props}>
      <G clipPath="url(#clip0_657_30)">
        <Path
          d="M4.242 13.175a1.167 1.167 0 000 1.65l6.6 6.6a1.166 1.166 0 001.65-1.65l-4.609-4.608h15.45a1.167 1.167 0 100-2.333H7.883l4.609-4.609a1.167 1.167 0 00-1.65-1.65l-6.6 6.6z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_657_30">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

function SvgSearch(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      {...props}>
      <Path
        d="M16 16l4 4M2 10a8 8 0 1016 0 8 8 0 00-16 0z"
        stroke="#fff"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function SvgDown(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      {...props}
    >
      <Path
        d="M1 1l6 6 6-6"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgUp(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={8}
      viewBox="0 0 14 8"
      fill="none"
      {...props}
    >
      <Path
        d="M13 7L7 1 1 7"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export { SvgBack, SvgSearch, SvgDown, SvgUp };
