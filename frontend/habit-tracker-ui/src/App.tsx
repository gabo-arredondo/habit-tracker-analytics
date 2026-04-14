import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import HabitDetail from './pages/HabitDetail'
import Layout from './components/Layout'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
          />
          <Route
            path="/habits"
            element={<Habits />}
          />
          <Route
            path="/habits/:id"
            element={<HabitDetail />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
