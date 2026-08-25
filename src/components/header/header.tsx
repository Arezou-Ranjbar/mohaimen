type HeaderProps = {
  onMenuToggle?: () => void
}

const headerImages = (
  <>
    <img
      src="/burger-header.png"
      alt="header image"
      className="block h-auto w-full md:hidden"
    />
    <img
      src="/header.png"
      alt="header image"
      className="hidden h-24 w-full md:block"
    />
  </>
)

export default function Header({ onMenuToggle }: HeaderProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-surface">
        <div className="relative">
          {headerImages}
          {onMenuToggle && (
            <button
              type="button"
              aria-label="باز کردن منو"
              onClick={onMenuToggle}
              className="absolute inset-y-0 right-0 w-16 md:hidden"
            />
          )}
        </div>
      </header>
      <div className="invisible" aria-hidden="true">
        {headerImages}
      </div>
    </>
  )
}
