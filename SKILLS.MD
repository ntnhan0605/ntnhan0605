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
├── components/ # UI nhỏ dùng chung, không biết gì về nghiệp vụ
│ ├── Logo.tsx
│ ├── ProgressBar.tsx
│ └── PageTransition.tsx # motion.div bọc Outlet
│
├── stores/ # state toàn cục
│ └── system.ts # trạng thái: booting | locked | running | off
│
├── lib/ # hàm thuần, không phụ thuộc React
│ └── session.ts # đọc/ghi sessionStorage an toàn
│
├── router.tsx
├── main.tsx
└── styles.css
