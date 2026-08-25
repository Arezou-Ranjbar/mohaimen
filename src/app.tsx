import { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import MenuBar from './components/menu-bar/menu-bar'
import AccountingSystem from './pages/accounting-system/accounting-system'
import AssetsStatus from './pages/assets-status/assets-status'
import HomePage from './pages/home-page/home-page'
import IdentityInformation from './pages/identity-information/identity-information'
import IncomeStatus from './pages/income-status/income-status'
import MonetaryAndCredit from './pages/monetary-and-credit/monetary-and-credit'
import PaymentAndRefund from './pages/payment-and-refund/payment-and-refund'
import EmptyHouse from './pages/tax-services/empty-house/empty-house'
import ExitFee from './pages/tax-services/exit-fee/exit-fee'
import Inheritance from './pages/tax-services/inheritance/inheritance'
import LuxuryHouse from './pages/tax-services/luxury-house/luxury-house'
import RentalProperty from './pages/tax-services/rental-property/rental-property'
import TaxServicesPage from './pages/tax-services/tax-services'
import VehicleTax from './pages/tax-services/vehicle-tax/vehicle-tax'
import Transactions from './pages/transactions/transactions'

function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((open) => !open)

  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <Header onMenuToggle={toggleMenu} />

      <div className="flex min-h-0 flex-1 px-4 pb-8">
        <main className="min-w-0 flex-1 overflow-y-auto p-2">
          <Outlet />
        </main>

        <aside className="hidden w-[270px] shrink-0 p-2 md:flex md:flex-col">
          <MenuBar />
        </aside>

        {isMenuOpen && (
          <>
            <button
              type="button"
              aria-label="بستن منو"
              className="fixed inset-0 top-12 z-40 bg-foreground/20 md:hidden"
              onClick={closeMenu}
            />
            <aside className="fixed right-0 top-12 bottom-8 z-50 flex w-[270px] flex-col p-2 md:hidden">
              <MenuBar onNavigate={closeMenu} />
            </aside>
          </>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/identity-information" element={<IdentityInformation />} />
        <Route path="/income-status" element={<IncomeStatus />} />
        <Route path="/assets-status" element={<AssetsStatus />} />
        <Route path="/monetary-and-credit" element={<MonetaryAndCredit />} />
        <Route path="/accounting-system" element={<AccountingSystem />} />
        <Route path="/payment-and-refund" element={<PaymentAndRefund />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/tax-services" element={<TaxServicesPage />} />
        <Route
          path="/tax-services/rental-property"
          element={<RentalProperty />}
        />
        <Route path="/tax-services/empty-house" element={<EmptyHouse />} />
        <Route path="/tax-services/luxury-house" element={<LuxuryHouse />} />
        <Route path="/tax-services/inheritance" element={<Inheritance />} />
        <Route path="/tax-services/vehicle-tax" element={<VehicleTax />} />
        <Route path="/tax-services/exit-fee" element={<ExitFee />} />
      </Route>
    </Routes>
  )
}
