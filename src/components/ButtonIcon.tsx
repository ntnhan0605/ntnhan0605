import { Icon } from './Icon'
import type { IconName } from './Icon'

export function ButtonIcon({
  label,
  icon,
  onClick,
}: {
  label: string
  icon: IconName
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 text-[.72rem] opacity-85 hover:opacity-100"
    >
      <span className="grid size-10 place-items-center rounded-full border border-slate-50/22 bg-slate-50/16">
        <Icon name={icon} size={18} />
      </span>
      {label}
    </button>
  )
}
