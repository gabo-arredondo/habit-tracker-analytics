import { Link } from 'react-router-dom'

function Habits() {
  return (
    <div>
      <h2>Habits</h2>
      <Link to="/habits/1">Ver detalle del hábito</Link>
    </div>
  )
}

export default Habits
