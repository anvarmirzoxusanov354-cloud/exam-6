import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Support from './pages/Support'
import JobDetails from './pages/JobDetails'
import BlogPageInner from './pages/BlogPageInner'
import JobDetailDynamic from './sections/jobDetails/index'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='career' element={<About />} />
        <Route path='career/:jobId' element={<JobDetails />} />
        <Route path='blog' element={<Articles />} />
        <Route path='blog-inner' element={<BlogPageInner />} />
        <Route path='privacy-policy' element={<PrivacyPolicy />} />
        <Route path='contact' element={<Support />} />
        <Route path='/job/:id' element={<JobDetailDynamic />} />
      </Route>
    </Routes>
  )
}

export default App