import { cn } from '#/lib/cn'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ReactElement, SVGProps } from 'react'

type GlyphProps = SVGProps<SVGSVGElement>

const ICONS = {
  guest: (p) => (
    <svg viewBox="0 0 120 120" {...p}>
      <circle cx="60" cy="60" r="60" fill="#94A3B8" />
      <circle cx="60" cy="48" r="20" fill="#E2E8F0" />
      <path d="M22 104c6-20 21-30 38-30s32 10 38 30" fill="#E2E8F0" />
    </svg>
  ),
  'log-in': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  sleep: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z" />
    </svg>
  ),
  restart: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...p}
    >
      <path d="M20 12a8 8 0 11-2.4-5.7M20 4v5h-5" />
    </svg>
  ),
  poweroff: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...p}
    >
      <path d="M12 3v8M7 6.3a8 8 0 1010 0" />
    </svg>
  ),
  logo: (p) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...p}>
      <defs>
        <linearGradient id="logo-sp" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset=".55" stopColor="#CBD5E1" />
          <stop offset="1" stopColor="#38BDF8" />
        </linearGradient>
        <linearGradient id="logo-gp" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#22D3EE" />
          <stop offset="1" stopColor="#0284C7" />
        </linearGradient>
        <mask id="logo-mp">
          <rect width="24" height="24" fill="#fff" />
          <circle cx="17" cy="6.4" r="5.9" fill="#000" />
          <path
            d="M0 13.4 c3 -1.2 6 -1.2 9 0 s6 1.2 9 0 s6 -1.2 9 0"
            stroke="#000"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M0 15.6 c3 -1.2 6 -1.2 9 0 s6 1.2 9 0 s6 -1.2 9 0"
            stroke="#000"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 18 c3 -1.2 6 -1.2 9 0 s6 1.2 9 0 s6 -1.2 9 0"
            stroke="#000"
            strokeWidth="2.1"
            fill="none"
          />
        </mask>
      </defs>
      <circle
        cx="12"
        cy="12.5"
        r="9.5"
        fill="url(#logo-sp)"
        mask="url(#logo-mp)"
      />
      <path
        d="M20.4 3.2l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5z"
        fill="#E0F2FE"
      />
    </svg>
  ),
  wifi: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...p}
    >
      <path d="M2 8.8a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16.2a5 5 0 017 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" />
    </svg>
  ),
  battery: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <rect x="2" y="7" width="18" height="10" rx="2" />
      <path d="M22 11v2" />
      <rect
        x="4"
        y="9"
        width="11"
        height="6"
        rx="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  ),
  projects: (p) => (
    <svg viewBox="0 0 52 52" {...p}>
      <path
        d="M4 12a4 4 0 014-4h12l4 5h20a4 4 0 014 4v25a4 4 0 01-4 4H8a4 4 0 01-4-4z"
        fill="#38BDF8"
      />
      <path d="M4 18h44v24a4 4 0 01-4 4H8a4 4 0 01-4-4z" fill="#7DD3FC" />
    </svg>
  ),
  resume: (p) => (
    <svg viewBox="0 0 52 52" {...p}>
      <path
        d="M12 4h20l10 10v32a2 2 0 01-2 2H12a2 2 0 01-2-2V6a2 2 0 012-2z"
        fill="#F8FAFC"
      />
      <path d="M32 4v10h10" fill="#CBD5E1" />
      <rect x="15" y="20" width="22" height="3" rx="1.5" fill="#38BDF8" />
      <rect x="15" y="27" width="18" height="2" rx="1" fill="#94A3B8" />
      <rect x="15" y="32" width="20" height="2" rx="1" fill="#94A3B8" />
      <rect x="15" y="37" width="14" height="2" rx="1" fill="#94A3B8" />
    </svg>
  ),
  terminal: (p) => (
    <svg viewBox="0 0 52 52" {...p}>
      <rect
        x="4"
        y="8"
        width="44"
        height="36"
        rx="7"
        fill="#0B1220"
        stroke="#334155"
      />
      <path
        d="M13 20l7 6-7 6"
        stroke="#22D3EE"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 33h13"
        stroke="#E2E8F0"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  sidebar: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M9 5v14" />
    </svg>
  ),
  'chevron-left': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M15 5l-7 7 7 7" />
    </svg>
  ),
  'chevron-right': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  ),
  'view-icons': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <rect x="4" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.6" />
      <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.6" />
    </svg>
  ),
  'view-list': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...p}
    >
      <path d="M9 6h11M9 12h11M9 18h11" />
      <circle cx="4.5" cy="6" r=".9" fill="currentColor" />
      <circle cx="4.5" cy="12" r=".9" fill="currentColor" />
      <circle cx="4.5" cy="18" r=".9" fill="currentColor" />
    </svg>
  ),
  'view-columns': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M9 5v14M15 5v14" />
    </svg>
  ),
  'view-gallery': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <rect x="3" y="4" width="18" height="11" rx="2.5" />
      <rect x="4" y="17.5" width="4" height="3" rx=".8" />
      <rect x="10" y="17.5" width="4" height="3" rx=".8" />
      <rect x="16" y="17.5" width="4" height="3" rx=".8" />
    </svg>
  ),
  'sort-group': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      {...p}
    >
      <rect x="3" y="5" width="4" height="4" rx="1" />
      <rect x="10" y="5" width="4" height="4" rx="1" />
      <rect x="17" y="5" width="4" height="4" rx="1" />
      <rect x="3" y="12" width="4" height="4" rx="1" />
      <rect x="10" y="12" width="4" height="4" rx="1" />
      <rect x="17" y="12" width="4" height="4" rx="1" />
      <path d="M3 20h18" />
    </svg>
  ),
  'chevron-down': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      {...p}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  share: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 3v12M8 7l4-4 4 4" />
      <path d="M7 10H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1" />
    </svg>
  ),
  tag: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M3 12V4.5A1.5 1.5 0 014.5 3H12l9 9-9 9z" />
      <circle cx="7.5" cy="7.5" r="1.4" />
    </svg>
  ),
  more: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <circle cx="5" cy="12" r="1.7" />
      <circle cx="12" cy="12" r="1.7" />
      <circle cx="19" cy="12" r="1.7" />
    </svg>
  ),
  search: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      {...p}
    >
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </svg>
  ),
  display: (p) => (
    <svg viewBox="0 0 40 40" {...p}>
      <rect width="40" height="40" rx="9" fill="#1E293B" />
      <rect
        x="6"
        y="8"
        width="28"
        height="18"
        rx="3"
        fill="#38BDF8"
        opacity=".35"
      />
      <rect x="9" y="29" width="22" height="6" rx="3" fill="#E2E8F0" />
      <rect x="11" y="30.5" width="3" height="3" rx="1" fill="#38BDF8" />
      <rect x="16" y="30.5" width="3" height="3" rx="1" fill="#22D3EE" />
      <rect x="21" y="30.5" width="3" height="3" rx="1" fill="#0B1220" />
      <rect x="26" y="30.5" width="3" height="3" rx="1" fill="#38BDF8" />
    </svg>
  ),
  library: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="4" y="4" width="4" height="16" rx="1" />
      <rect x="10" y="4" width="4" height="16" rx="1" />
      <path d="M16.2 5.2l3.6-.9 3 15.3-3.6.9z" transform="translate(-2 0)" />
    </svg>
  ),
  fullscreen: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
    </svg>
  ),
  'exit-fullscreen': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
    </svg>
  ),
  'external-link': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
    </svg>
  ),
  download: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  ),
  'tile-1': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <defs>
        <clipPath id="tile-1-dkAbout">
          <rect width="50" height="50" rx="12" />
        </clipPath>
      </defs>
      <g clipPath="url(#tile-1-dkAbout)">
        <rect width="50" height="50" fill="#0B1220" />
        <path
          d="M0 32 C10 27 18 36 25 32 S40 27 50 32 V50 H0Z"
          fill="#38BDF8"
        />
        <path
          d="M0 40 C12 36 22 44 32 40 S46 36 50 40 V50 H0Z"
          fill="#0E7490"
        />
        <text
          x="16"
          y="28"
          fontFamily="Inter,sans-serif"
          fontWeight="700"
          fontSize="20"
          fill="#F8FAFC"
        >
          N
        </text>
      </g>
    </svg>
  ),
  'tile-2': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#E2E8F0" />
      <path
        d="M9 15a3 3 0 013-3h9l3 4h14a3 3 0 013 3v17a3 3 0 01-3 3H12a3 3 0 01-3-3z"
        fill="#38BDF8"
      />
      <path d="M9 20h32v16a3 3 0 01-3 3H12a3 3 0 01-3-3z" fill="#7DD3FC" />
    </svg>
  ),
  'tile-3': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#1E293B" />
      <g transform="translate(25 25)">
        <circle
          r="11"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="5"
          strokeDasharray="4 3.6"
        />
        <circle r="7" fill="#1E293B" stroke="#E2E8F0" strokeWidth="2" />
        <circle r="2.5" fill="#22D3EE" />
      </g>
    </svg>
  ),
  'tile-4': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#F8FAFC" />
      <rect x="0" y="0" width="50" height="14" rx="12" fill="#38BDF8" />
      <rect x="0" y="8" width="50" height="6" fill="#38BDF8" />
      <rect x="13" y="22" width="24" height="3" rx="1.5" fill="#0F172A" />
      <rect x="13" y="29" width="18" height="3" rx="1.5" fill="#94A3B8" />
      <rect x="13" y="36" width="21" height="3" rx="1.5" fill="#94A3B8" />
    </svg>
  ),
  'tile-5': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#0B1220" stroke="#334155" />
      <path
        d="M13 18l7 6-7 6"
        stroke="#22D3EE"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 31h12"
        stroke="#E2E8F0"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  'tile-6': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#38BDF8" />
      <rect x="10" y="15" width="30" height="21" rx="3" fill="#F8FAFC" />
      <path
        d="M11 17l14 10 14-10"
        stroke="#0EA5E9"
        strokeWidth="2.4"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  ),
  'tile-7': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#1E293B" />
      <path d="M25 16c-4-3-9-3.5-14-2.5v21c5-1 10-.5 14 2.5z" fill="#F8FAFC" />
      <path d="M25 16c4-3 9-3.5 14-2.5v21c-5-1-10-.5-14 2.5z" fill="#E2E8F0" />
      <path d="M25 16v21" stroke="#38BDF8" strokeWidth="1.6" />
      <path
        d="M14 19.5c2.8-.5 5.6-.2 8 .8M14 23.5c2.8-.5 5.6-.2 8 .8M28 20.3c2.4-1 5.2-1.3 8-.8M28 24.3c2.4-1 5.2-1.3 8-.8"
        stroke="#94A3B8"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  ),
  'tile-8': (p) => (
    <svg viewBox="0 0 50 50" {...p}>
      <rect width="50" height="50" rx="12" fill="#F8FAFC" />
      <path
        d="M15 9h14l7 7v24a2 2 0 01-2 2H15a2 2 0 01-2-2V11a2 2 0 012-2z"
        fill="#E2E8F0"
      />
      <rect x="17" y="21" width="15" height="2.5" rx="1" fill="#38BDF8" />
      <rect x="17" y="27" width="12" height="2" rx="1" fill="#94A3B8" />
      <rect x="17" y="32" width="14" height="2" rx="1" fill="#94A3B8" />
    </svg>
  ),
  folder: (p) => (
    <svg viewBox="0 0 64 52" {...p}>
      <path
        d="M2 8a5 5 0 015-5h15.5a4 4 0 012.8 1.2L29.5 8H57a5 5 0 015 5v32a5 5 0 01-5 5H7a5 5 0 01-5-5z"
        fill="#4FA9EC"
      />
      <path
        d="M2 17a4 4 0 014-4h52a4 4 0 014 4v28a5 5 0 01-5 5H7a5 5 0 01-5-5z"
        fill="#86CBF8"
      />
      <path
        d="M2 17a4 4 0 014-4h52a4 4 0 014 4v2.5H2z"
        fill="#B3E0FC"
        opacity=".75"
      />
    </svg>
  ),
  image: (p) => (
    <svg viewBox="0 0 20 18" {...p}>
      <rect
        x=".5"
        y="1.5"
        width="19"
        height="15"
        rx="2"
        fill="#0B1220"
        stroke="#fff"
      />
      <path
        d="M3 12l4-4 3 3 3-4 4 5"
        stroke="#38BDF8"
        strokeWidth="1.4"
        fill="none"
      />
    </svg>
  ),
  clock: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...p}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  ),
  'folder-outline': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M3 7a2 2 0 012-2h4.5l2 2H19a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  ),
  home: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M4 11l8-6.5 8 6.5V19a1 1 0 01-1 1h-4.5v-5h-5v5H5a1 1 0 01-1-1z" />
    </svg>
  ),
  file: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M7 3h7l5 5v12a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5" />
    </svg>
  ),
  'terminal-outline': (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M7 10l3 2.5L7 15M12.5 15H17" />
    </svg>
  ),
  trash: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      {...p}
    >
      <path d="M4 7h16M9 7V4.5h6V7M6 7l1 13h10l1-13" />
    </svg>
  ),
  'chevron-up': (p) => (
    <svg
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...p}
    >
      <path d="M2 6.5L5 3.5l3 3" />
    </svg>
  ),
  play: (p) => (
    <svg viewBox="0 0 10 10" fill="currentColor" {...p}>
      <path d="M3 1.5l4.5 3.5L3 8.5z" />
    </svg>
  ),
} satisfies Record<string, (p: GlyphProps) => ReactElement>

export type IconName = keyof typeof ICONS

const iconVariants = cva([], {
  variants: {
    size: {
      xs: 'size-3.5',
      sm: 'size-4',
      md: 'size-4.5',
      lg: 'size-6.5',
      xl: 'size-8',
      xxl: 'size-10',
    },
  },
  defaultVariants: { size: 'md' },
})

export type IconProps = Omit<GlyphProps, 'name'> & {
  size?: VariantProps<typeof iconVariants>['size'] | number
  name: IconName
}

export const Icon = ({ name, size, className, ...rest }: IconProps) => {
  const Glyph = ICONS[name]
  const classNames = typeof size === 'number' ? '' : iconVariants({ size })
  const props =
    typeof size === 'number'
      ? { ...rest, width: size, height: size }
      : { ...rest }

  return <Glyph className={cn(className, classNames)} {...props} />
}
