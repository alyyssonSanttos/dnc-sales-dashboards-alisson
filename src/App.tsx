import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Home, Leads, Login, Profile, Registation } from './pages'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Registation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App
