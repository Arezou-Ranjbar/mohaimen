/** Threshold in Tomans — tax is 0 up to this amount. */
export const VEHICLE_TAX_THRESHOLD_TOMANS = 7_000_000_000

/** Tax rate applied to the amount above the threshold. */
export const VEHICLE_TAX_RATE = 0.01

export function calculateVehicleTransferTax(carValueTomans: number): number {
  if (!Number.isFinite(carValueTomans) || carValueTomans <= 0) return 0

  const excess = carValueTomans - VEHICLE_TAX_THRESHOLD_TOMANS
  if (excess <= 0) return 0

  return excess * VEHICLE_TAX_RATE
}

export function formatTomans(value: number): string {
  return new Intl.NumberFormat('fa-IR').format(Math.round(value))
}
