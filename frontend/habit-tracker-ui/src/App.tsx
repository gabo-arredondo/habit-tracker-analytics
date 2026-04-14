import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Habits from './pages/Habits'
import HabitDetail from './pages/HabitDetail'

function App() {
  return (
    <BrowserRouter>
      <h1>Habit Tracker Analytics</h1>

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
    </BrowserRouter>
  )
}

export default App
