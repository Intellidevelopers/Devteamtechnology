import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import QuotationModal from './components/QuotationModal'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'
import About from './pages/About'

export type Page = 'home' | 'portfolio' | 'case-study' | 'contact' | 'about'

export interface NavProps {
  navigate: (to: Page, project?: string) => void
  currentPage: Page
  openQuotation: () => void
}

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [selectedProject, setSelectedProject] = useState('food-delivery')
  const [quotationOpen, setQuotationOpen] = useState(false)

  const navigate = (to: Page, project?: string) => {
    if (project) setSelectedProject(project)
    setPage(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openQuotation = () => setQuotationOpen(true)

  const navProps: NavProps = { navigate, currentPage: page, openQuotation }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar {...navProps} />

      <main className="flex-1">
        {page === 'home'       && <Home       {...navProps} />}
        {page === 'portfolio'  && <Portfolio  {...navProps} />}
        {page === 'case-study' && <CaseStudy  {...navProps} project={selectedProject} />}
        {page === 'contact'    && <Contact    {...navProps} />}
        {page === 'about'      && <About      {...navProps} openQuotation={openQuotation} />}
      </main>

      <Footer navigate={navigate} />

      <QuotationModal isOpen={quotationOpen} onClose={() => setQuotationOpen(false)} />
    </div>
  )
}
