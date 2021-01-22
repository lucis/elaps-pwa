import type { FC } from 'react'
import React from 'react'

const VideoIcon: FC<{ size: string }> = ({ size }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 56.401 56.4"
    >
      <path d="M33.721 6.26h-7.506l-3.385 6.598h7.071zM46.521 6.26h-7.506l-3.385 6.598h7.071zM56.25 6.26h-4.434l-3.386 6.598h7.82zM20.92 6.358H0v6.5h17.101zM.15 45.974c0 2.302 1.866 4.167 4.167 4.167h47.917c2.301 0 4.167-1.865 4.167-4.167v-28.82H.15v28.82zm21.058-16.319c0-2.301 1.669-3.332 3.727-2.303l8.864 4.432c2.058 1.028 2.058 2.697 0 3.727l-8.864 4.432c-2.058 1.028-3.727-.003-3.727-2.303v-7.985z" />
    </svg>
  )
}

export default VideoIcon
