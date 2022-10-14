import { SVGAttributes } from "react"

interface Props extends SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: Props) {
  return (
    <svg
      width={200}
      height={178}
      viewBox="0 0 200 178"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_10_73)">
        <path
          d="M100 106.832c9.845 0 17.826-7.984 17.826-17.832S109.845 71.168 100 71.168 82.174 79.152 82.174 89s7.98 17.832 17.826 17.832z"
          fill="#81D8F7"
        />
        <path
          d="M100 125.533c52.827 0 95.652-16.356 95.652-36.533S152.827 52.467 100 52.467 4.348 68.823 4.348 89 47.173 125.533 100 125.533z"
          stroke="#81D8F7"
          strokeWidth={3}
        />
        <path
          d="M68.378 107.251c26.42 45.761 61.999 74.681 79.468 64.595 17.47-10.086 10.214-55.359-16.206-101.12-26.42-45.76-62-74.68-79.469-64.594-17.47 10.086-10.213 55.359 16.207 101.119z"
          stroke="#81D8F7"
          strokeWidth={3}
        />
        <path
          d="M68.371 70.733c-26.413 45.765-33.665 91.042-16.197 101.131 17.468 10.088 53.041-18.833 79.455-64.597 26.413-45.765 33.665-91.042 16.197-101.13-17.468-10.089-53.041 18.832-79.455 64.596z"
          stroke="#81D8F7"
          strokeWidth={3}
        />
      </g>
      <defs>
        <clipPath id="clip0_10_73">
          <path fill="#fff" d="M0 0H200V178H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
