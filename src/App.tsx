import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CaseStudy from './pages/CaseStudy'
import Contact from './pages/Contact'

export type Page = 'home' | 'portfolio' | 'case-study' | 'contact'

export interface NavProps {
  navigate: (to: Page, project?: string) => void
  currentPage: Page
}

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [selectedProject, setSelectedProject] = useState('food-delivery')

  const navigate = (to: Page, project?: string) => {
    if (project) setSelectedProject(project)
    setPage(to)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar currentPage={page} navigate={navigate} />
      <main className="flex-1">
        {page === 'home' && <Home navigate={navigate} currentPage={page} />}
        {page === 'portfolio' && <Portfolio navigate={navigate} currentPage={page} />}
        {page === 'case-study' && <CaseStudy navigate={navigate} currentPage={page} project={selectedProject} />}
        {page === 'contact' && <Contact navigate={navigate} currentPage={page} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
