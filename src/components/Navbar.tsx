import { Link } from "react-router-dom";
import '../styles/navbar.scss'

export function Navbar(){
  return(
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </header>
  )
}