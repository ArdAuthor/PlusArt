import * as React from "react"
import Svg, { Path } from "react-native-svg"

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
      width={30}
      height={30}
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
        width={25}
        height={25}
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
        width={25}
        height={26}
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
        width={25}
        height={26}
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
  
  export {
    SvgPencil,
    SvgHouse,
    SvgPost,
    SvgRing,
    SvgMaca,
    SvgProfile,
    SvgSeta,
  }
  
  
  

