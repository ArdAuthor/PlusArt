import * as React from "react"
import Svg, { Path, G, Defs, ClipPath, Circle, Rect, LinearGradient, Stop, } from "react-native-svg"

function SvgPencil(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="#FF005C"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16 1C7.715 1 1 7.715 1 16s6.715 15 15 15 15-6.715 15-15S24.285 1 16 1z"
        stroke={"white"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 29.752V19l6-10.5L22 19v10.752"
        stroke={'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 19s1.69 1.5 3 1.5 3-1.5 3-1.5 1.69 1.5 3 1.5 3-1.5 3-1.5"
        stroke='white'
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgHouse(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.39 25.98v-5.02c0-.887.327-1.738.907-2.366a2.985 2.985 0 012.19-.98c.822 0 1.61.353 2.191.98.581.628.907 1.479.907 2.366v5.02M1 9.248l15.073-8.142a.873.873 0 01.83 0l15.073 8.142"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.878 14.268v13.386c0 .887-.326 1.738-.907 2.366a2.986 2.986 0 01-2.19.98H7.194c-.821 0-1.61-.353-2.19-.98a3.488 3.488 0 01-.907-2.366V14.268"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgPost(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M31 2v28a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1h28a1 1 0 011 1z"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1 22.667l11.667-5L31 26m-8.333-13.333a3.334 3.334 0 110-6.668 3.334 3.334 0 010 6.668z"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgRing(props) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17.097 29.504a3 3 0 01-5.19 0M23.502 10.6c0-2.546-.948-4.988-2.636-6.788C19.177 2.013 16.887 1 14.502 1c-2.387 0-4.676 1.011-6.366 2.813-1.687 1.8-2.635 4.242-2.635 6.788C5.5 21.803 1 25.003 1 25.003h27.003s-4.5-3.2-4.5-14.402z"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgMaca(props) {
  return (
    <Svg
      width={22}
      height={23}
      viewBox="0 0 31 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15.468 30.662l-.226-.046-.226.046c-3.66.731-7.114.323-9.639-1.694C2.87 26.96 1 23.13 1 16.397 1 9.51 2.552 6.712 4.595 5.69c1.07-.534 2.453-.69 4.211-.488 1.757.203 3.785.751 6.071 1.513l.4.133.393-.157c3.822-1.528 7.257-2.114 9.67-.987 2.263 1.054 4.144 3.907 4.144 10.693 0 6.734-1.867 10.562-4.377 12.57-2.525 2.02-5.979 2.428-9.639 1.695z"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
      />
      <Path
        d="M15.242 6.389c0-3.85-1.54-5.389-4.619-5.389"
        stroke={props.cor || "#FFF"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgProfile(props) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 2C6.7 2 2 6.7 2 12.5S6.7 23 12.5 23 23 18.3 23 12.5 18.3 2 12.5 2z"
        stroke="#000"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.385 19.163s2.34-2.988 8.115-2.988 8.116 2.988 8.116 2.988M12.5 12.5a3.15 3.15 0 100-6.3 3.15 3.15 0 000 6.3z"
        stroke="#000"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgSeta(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.5 14.5h-10m0 0l4.375 4.375M9.5 14.5l4.375-4.375M14.5 27C21.404 27 27 21.404 27 14.5S21.404 2 14.5 2 2 7.596 2 14.5 7.596 27 14.5 27z"
        stroke={props.cor || "#FFF"}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgFacebook(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={25} cy={25} r={24.5} fill="#000" stroke="#fff" />
      <Path
        d="M25 11c-7.719 0-14 6.281-14 14s6.281 14 14 14 14-6.281 14-14-6.281-14-14-14zm0 2.333c6.457 0 11.667 5.21 11.667 11.667a11.64 11.64 0 01-9.931 11.526v-8.124h3.323l.521-3.375h-3.844v-1.844c0-1.4.46-2.644 1.771-2.644h2.106v-2.945c-.37-.05-1.153-.159-2.632-.159-3.09 0-4.9 1.631-4.9 5.348v2.244h-3.176v3.375h3.176v8.094A11.637 11.637 0 0113.333 25c0-6.457 5.21-11.667 11.667-11.667z"
        fill="#fff"
      />
    </Svg>
  )
}

function SvgGoogle(props) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={25} cy={25} r={24.5} fill="#000" stroke="#fff" />
      <Path
        d="M37.509 22.4c.139 0 .258.097.282.233.135.76.209 1.577.209 2.367a12.952 12.952 0 01-3.312 8.668.284.284 0 01-.396.026l-3.532-2.99a.297.297 0 01-.023-.429 7.797 7.797 0 001.61-2.675h-7.058a.289.289 0 01-.289-.289V22.69a.29.29 0 01.289-.289h12.22zm-8.937 9.533a.297.297 0 01.327.035l3.709 3.139a.284.284 0 01-.015.446A12.94 12.94 0 0125 38a12.99 12.99 0 01-10.903-5.918.285.285 0 01.067-.38l3.676-2.834a.3.3 0 01.438.09 7.797 7.797 0 0010.294 2.975zm-11.256-5.596a.296.296 0 01-.11.285l-3.95 3.044a.282.282 0 01-.44-.122A12.97 12.97 0 0112 25c0-1.664.313-3.256.884-4.719a.283.283 0 01.432-.123l3.946 2.895a.295.295 0 01.113.3 7.826 7.826 0 00-.06 2.984zm.674-5.438c.139.101.334.06.426-.084A7.795 7.795 0 0125 17.2c1.816 0 3.574.636 4.969 1.798a.296.296 0 00.398-.014l3.274-3.275a.284.284 0 00-.01-.413A12.932 12.932 0 0025 12a12.988 12.988 0 00-10.81 5.778.285.285 0 00.07.385l3.73 2.736z"
        fill="#fff"
      />
    </Svg>
  )
}

function SvgArrowLeft(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_555_330)">
        <Path
          d="M6.06 18.822a1.667 1.667 0 000 2.356l9.429 9.429a1.666 1.666 0 002.356-2.357l-6.583-6.583h22.072a1.667 1.667 0 000-3.334H11.262l6.583-6.583a1.667 1.667 0 00-2.356-2.357L6.06 18.822z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_555_330">
          <Path fill="#fff" d="M0 0H40V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

function SvgDefinitivePencil(props) {
  return (
    <Svg
      width={74}
      height={74}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={64} height={64} rx={32} fill="url(#paint0_linear_592_64)" />
      <Path
        d="M32 19c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.8 43.918V34.6l5.2-9.1 5.2 9.1v9.318"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.8 34.6s1.465 1.3 2.6 1.3 2.6-1.3 2.6-1.3 1.465 1.3 2.6 1.3 2.6-1.3 2.6-1.3"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_592_64"
          x1={-0.0000011269}
          y1={6}
          x2={59}
          y2={68}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FF005C" />
          <Stop offset={1} stopColor="#A2325A" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

function SvgEyeClosed(props) {
  return (
    <Svg
    name='eye-off'
      width={26}
      height={26}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1 1l20 20M9.333 9.53a2.222 2.222 0 003.137 3.137"
        stroke="#000"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.847 6.068C3.977 7.378 2.42 9.244 1 11c2.099 3.323 5.869 6.667 10 6.667 1.722 0 3.381-.581 4.883-1.5M11 4.333c4.453 0 7.446 3.51 10 6.667a17.39 17.39 0 01-1.198 1.667"
        stroke="#000"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

function SvgEye(props) {
  return (
    <Svg
    name='eye'
      width={26}
      height={26}
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M11 9.889a2.222 2.222 0 100-4.444 2.222 2.222 0 000 4.444z"
        stroke="#000"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 7.667c-2.099 3.323-5.869 6.666-10 6.666S3.099 10.99 1 7.667C3.554 4.509 6.547 1 11 1s7.446 3.509 10 6.667z"
        stroke="#000"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}



export {
  SvgPencil,
  SvgHouse,
  SvgPost,
  SvgRing,
  SvgMaca,
  SvgProfile,
  SvgSeta,
  SvgFacebook,
  SvgGoogle,
  SvgArrowLeft,
  SvgDefinitivePencil,
  SvgEye,
  SvgEyeClosed,
}




