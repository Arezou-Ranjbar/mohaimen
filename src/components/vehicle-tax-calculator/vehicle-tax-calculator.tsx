import { useMemo, useState } from 'react'
import {
  VEHICLE_TAX_THRESHOLD_TOMANS,
  calculateVehicleTransferTax,
  formatTomans,
} from '../../utils/vehicle-tax'

function parseTomansInput(raw: string): number {
  const normalized = raw
    .replace(/[۰-۹]/g, (digit) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(digit)))
    .replace(/[^\d]/g, '')

  if (!normalized) return 0
  return Number(normalized)
}

export default function VehicleTaxCalculator() {
  const [rawValue, setRawValue] = useState('')

  const carValue = useMemo(() => parseTomansInput(rawValue), [rawValue])
  const tax = useMemo(
    () => calculateVehicleTransferTax(carValue),
    [carValue],
  )

  const displayValue =
    carValue > 0 ? formatTomans(carValue) : rawValue === '' ? '' : '۰'

  return (
    <div className="flex flex-col gap-4 text-right">
      <p className="text-sm text-muted">
        ارزش خودرو را به تومان وارد کنید. تا سقف{' '}
        <span className="font-medium text-foreground">
          {formatTomans(VEHICLE_TAX_THRESHOLD_TOMANS)}
        </span>{' '}
        تومان مالیات صفر است؛ مازاد آن مشمول ۱٪ مالیات می‌شود.
      </p>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          ارزش خودرو (تومان)
        </span>
        <input
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={(event) => setRawValue(event.target.value)}
          placeholder="مثلاً ۸,۰۰۰,۰۰۰,۰۰۰"
          className="h-11 rounded-lg border border-border bg-surface px-3 text-right text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
        />
      </label>

      <div className="rounded-lg border border-border bg-surface-secondary p-4">
        <p className="text-sm text-muted">مالیات قابل پرداخت</p>
        <p className="mt-2 text-xl font-semibold text-primary-500">
          {formatTomans(tax)}{' '}
          <span className="text-sm font-medium text-muted">تومان</span>
        </p>
       
      </div>
    </div>
  )
}
