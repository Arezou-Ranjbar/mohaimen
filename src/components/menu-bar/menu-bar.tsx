import { navigationItems } from '../../config/navigation'
import MenuItem from '../menu-item/menu-item'

type MenuBarProps = {
  onNavigate?: () => void
}

export default function MenuBar({ onNavigate }: MenuBarProps) {
  return (
    <nav className="flex h-full min-h-0 w-full flex-col gap-2 rounded-xl border border-border bg-surface p-3 shadow-sm">
      <div className="flex items-center gap-2 border-b border-border pb-3">
      
        <div className="min-w-0 flex-1 text-right">
          <p className=" text-sm text-foreground">
            شکوه اسماعیلی رضازاده قوچانی
          </p>
          <p className="text-xs text-muted">۱۱۰۹۵۹۱۰۰۰</p>
        </div>

        <img src="/User, Circle.svg" alt="" className="h-10 w-10 shrink-0" />
      </div>

      <div className="flex flex-col gap-1">
        {navigationItems.map((item) => (
          <MenuItem
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            end={item.end}
            onClick={onNavigate}
          />
        ))}
      </div>
    </nav>
  )
}
