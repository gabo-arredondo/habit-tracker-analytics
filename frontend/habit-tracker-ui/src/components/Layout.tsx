import { Link } from 'react-router-dom'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>Habit Tracker Analytics</h1>
        <nav>
          <Link to="/">Dashboard</Link> | <Link to="/habits">Habits</Link>
        </nav>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default Layout
