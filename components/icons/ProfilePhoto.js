import * as React from 'react'
function SvgProfilePhoto(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 60 59" fill="none" {...props}>
      <circle
        cx={30}
        cy={29}
        r={29}
        fill="url(#profilePhoto_svg__pattern0)"
        stroke="currentColor"
        strokeWidth={2}
      />
      <defs>
        <pattern
          id="profilePhoto_svg__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <use xlinkHref="#profilePhoto_svg__image0" transform="scale(.001)" />
        </pattern>
        <image
          id="profilePhoto_svg__image0"
          width={1000}
          height={1000}
        />
      </defs>
    </svg>
  )
}
export default SvgProfilePhoto