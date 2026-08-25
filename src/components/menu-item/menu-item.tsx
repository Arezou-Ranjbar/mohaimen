import { NavLink } from 'react-router-dom'

type MenuItemProps = {
  to: string
  label: string
  icon: string
  end?: boolean
  onClick?: () => void
}

export default function MenuItem({
  to,
  label,
  icon,
  end,
  onClick,
}: MenuItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          'flex h-10 w-full items-center gap-2 rounded-lg p-2 text-sm transition-colors',
          isActive
            ? 'bg-primary-500 text-white [&_img]:brightness-0 [&_img]:invert'
            : 'text-muted hover:bg-primary-500/10 hover:text-foreground',
        ].join(' ')
      }
    >
     
      <span className="min-w-0 flex-1 truncate text-right">{label}</span>
      <img src={icon} alt="" className="h-5 w-5 shrink-0" />
    </NavLink>
  )
}
