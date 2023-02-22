import { Store } from "./components/Store"
import { Home } from "./pages/Home"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  )
}

export default App
