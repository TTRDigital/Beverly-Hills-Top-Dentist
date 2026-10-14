/* Small inline icons (Font Awesome shapes the old site used, plus UI chevrons). */
type P = { className?: string };

export const ChevronDown = ({ className = "h-3 w-3" }: P) => (
  <svg viewBox="0 0 15 15" className={className} aria-hidden="true" fill="currentColor">
    <path d="M2.1 3.2 7.5 8.5l5.4-5.3 1.6 1.6-7 6.9-7-6.9z" />
  </svg>
);

export const ChevronLeft = ({ className = "h-2.5 w-2.5" }: P) => (
  <svg viewBox="0 0 15 15" className={className} aria-hidden="true" fill="currentColor">
    <path d="M10.8 2.1 5.5 7.5l5.3 5.4-1.6 1.6-6.9-7 6.9-7z" />
  </svg>
);

export const MenuIcon = ({ className = "h-[18px] w-[18px]" }: P) => (
  <svg viewBox="0 0 18 14" className={className} aria-hidden="true" fill="currentColor">
    <rect y="0" width="18" height="1.7" rx="1" />
    <rect y="6.15" width="18" height="1.7" rx="1" />
    <rect y="12.3" width="18" height="1.7" rx="1" />
  </svg>
);

export const CloseIcon = ({ className = "h-3.5 w-3.5" }: P) => (
  <svg viewBox="0 0 12 12" className={className} aria-hidden="true" fill="currentColor">
    <path d="M1 0 6 5l5-5 1 1-5 5 5 5-1 1-5-5-5 5-1-1 5-5-5-5z" />
  </svg>
);

export const Plus = ({ className = "h-[15px] w-[15px]" }: P) => (
  <svg viewBox="0 0 448 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

export const Minus = ({ className = "h-[15px] w-[15px]" }: P) => (
  <svg viewBox="0 0 448 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

export const CheckCircle = ({ className = "h-[25px] w-[25px]" }: P) => (
  <svg viewBox="0 0 512 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
  </svg>
);

export const MapMarker = ({ className = "h-[22px] w-[22px]" }: P) => (
  <svg viewBox="0 0 384 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
  </svg>
);

export const PhoneIcon = ({ className = "h-[24px] w-[24px]" }: P) => (
  <svg viewBox="0 0 512 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
  </svg>
);

export const ArrowLeft = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M15 4 7 12l8 8" />
  </svg>
);

export const ArrowRight = ({ className = "h-6 w-6" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="m9 4 8 8-8 8" />
  </svg>
);

/* Social brand marks (Font Awesome). */
export const Facebook = ({ className = "h-[25px] w-[25px]" }: P) => (
  <svg viewBox="0 0 512 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
  </svg>
);

export const Instagram = ({ className = "h-[25px] w-[25px]" }: P) => (
  <svg viewBox="0 0 448 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
  </svg>
);

export const Google = ({ className = "h-[25px] w-[25px]" }: P) => (
  <svg viewBox="0 0 488 512" className={className} aria-hidden="true" fill="currentColor">
    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
  </svg>
);
