import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import AccountingSystem from './pages/accounting-system/accounting-system'
import AssetsStatus from './pages/assets-status/assets-status'
import HomePage from './pages/home-page/home-page'
import IdentityInformation from './pages/identity-information/identity-information'
import IncomeStatus from './pages/income-status/income-status'
import MonetaryAndCredit from './pages/monetary-and-credit/monetary-and-credit'
import PaymentAndRefund from './pages/payment-and-refund/payment-and-refund'
import Transactions from './pages/transactions/transactions'

function AppLayout() {
  return (
    <div className="flex h-svh flex-col overflow-hidden ">
      <Header />

      <main className="flex-1 overflow-y-auto p-2">
        <Outlet />
      </main>

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
      </Route>
    </Routes>
  )
}
