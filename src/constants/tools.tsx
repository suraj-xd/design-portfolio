import Image from "next/image";

export const tools = [
  {
    name: "Figma",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_17_203)">
          <path
            d="M16.0001 48C20.4162 48 24.0002 44.4159 24.0002 39.9999V31.9999H16.0001C11.5841 31.9999 8 35.5839 8 39.9999C8 44.4159 11.5841 48 16.0001 48Z"
            fill="#0ACF83"
          />
          <path
            d="M8 24C8 19.584 11.5841 15.9999 16.0001 15.9999H24.0002V31.9998H16.0001C11.5841 32 8 28.416 8 24Z"
            fill="#A259FF"
          />
          <path
            d="M8 8.00006C8 3.58406 11.5841 0 16.0001 0H24.0002V15.9999H16.0001C11.5841 15.9999 8 12.4161 8 8.00006Z"
            fill="#F24E1E"
          />
          <path
            d="M23.9998 0H31.9999C36.4159 0 40 3.58406 40 8.00006C40 12.4161 36.4159 15.9999 31.9999 15.9999H23.9998V0Z"
            fill="#FF7262"
          />
          <path
            d="M40 24C40 28.416 36.4159 32 31.9999 32C27.5838 32 23.9998 28.416 23.9998 24C23.9998 19.584 27.5838 15.9999 31.9999 15.9999C36.4159 15.9999 40 19.584 40 24Z"
            fill="#1ABCFE"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_203">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
  {
    name: "Framer",
    icon: <Image src="/framer.svg" alt="framer" width={15} height={12} />,
  },
  {
    name: "Spline",
    icon: <Image src="/spline_logo.webp" alt="spline" width={12} height={12} />,
  },
  {
    name: "Rive",
    icon: <Image src="/rive.webp" alt="spline" width={20} height={15} />,
  },
  {
    name: "Photoshop",
    icon: <Image src="/photoshop.png" alt="spline" width={20} height={20} />,
  },
  {
    name: "Canva",
    icon: <Image src="/canva.svg" alt="spline" width={20} height={20} />,
  },
];
