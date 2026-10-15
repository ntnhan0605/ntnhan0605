# Cấu trức đề xuất

src/
├── routes/ # CHỈ chứa route mỏng: khai báo + ghép component
│ ├── __root.tsx
│ ├── index.tsx # desktop
│ ├── lockscreen.tsx
│ └── poweroff.tsx
│
├── features/
│ ├── boot/
│ │ ├── BootScreen.tsx
│ │ └── useBoot.ts # logic sessionStorage, reduced-motion
│ ├── lockscreen/
│ │ ├── LockScreen.tsx
│ │ ├── UserPicker.tsx
│ │ └── PasswordForm.tsx
│ ├── desktop/
│ │ ├── Desktop.tsx
│ │ ├── Dock.tsx
│ │ ├── MenuBar.tsx
│ │ └── DesktopIcon.tsx
│ ├── windows/ # hệ thống cửa sổ dùng chung
│ │ ├── Window.tsx # titlebar, kéo thả, đóng/thu nhỏ
│ │ ├── WindowManager.tsx
│ │ └── useWindows.ts
│ ├── apps/ # mỗi app là một thư mục
│ │ ├── about/AboutApp.tsx
│ │ ├── books/BooksApp.tsx
│ │ └── resume/ResumeApp.tsx
│ └── power/
│ ├── PowerScreen.tsx
│ └── usePower.ts # sleep / restart / shutdown
│
├── components/
│ ├── ui/ # primitive, không biết nghiệp vụ, không biết layout
│ │ ├── Icon.tsx
│ │ ├── Avatar.tsx
│ │ ├── Button.tsx # hoặc ButtonIcon.tsx hiện tại
│ │ └── GlassPanel.tsx # khung kính mờ dùng lại được
│ └── layout/ # khung bố cục, quyết định vị trí của children
│ ├── AppShell.tsx # bọc Outlet, wallpaper, lớp kính
│ ├── Screen.tsx # full-screen + căn giữa (lock/sleep/power dùng chung)
│ └── PageTransition.tsx # motion.div bọc Outlet
│
├── hooks/ # hook dùng chung, không gắn với một feature
│ └── useClock.ts
│
├── stores/ # state toàn cục
│ └── system.ts # trạng thái: booting | locked | running | off
│
├── lib/ # hàm thuần, không phụ thuộc React
│ ├── cn.ts
│ └── session.ts # đọc/ghi sessionStorage an toàn
│
├── router.tsx
├── main.tsx
└── styles.css
