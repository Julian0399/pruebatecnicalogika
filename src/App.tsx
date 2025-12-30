import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
