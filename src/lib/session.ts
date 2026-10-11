const KEY = 'nolan-session'

// sessionStorage có thể bị chặn hoặc ném lỗi (chế độ riêng tư, bị khoá)
export function writeSession(user: string) {
  try {
    sessionStorage.setItem(KEY, user)
  } catch {}
}
