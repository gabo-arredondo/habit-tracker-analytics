import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Link to="/habits">Ver mis hábitos</Link>
    </div>
  )
}

export default Dashboard
