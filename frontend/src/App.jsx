import { Navigate, Route, Routes } from "react-router-dom"
import Login from "./pages/login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Home from "./pages/Home.jsx"
import { useContext } from "react"
import { userDataContext } from "./contexts/UserContext.jsx"

function App() {

  let { userdata } = useContext(userDataContext);

  return (
    <Routes>
      <Route path="/" element={userdata ? <Home /> : <Navigate to="/login" />} />
      <Route path="/login" element={userdata ? <Navigate to = "/" /> : <Login />} />
      <Route path="/signup" element={userdata ? <Navigate to = "/" /> : <SignUp />} />
    </Routes>
  )
}

export default App
