import {Routes,Route} from "react-router-dom"
import {Home} from "./pages/Home"
import {Auth} from "./pages/Auth"
import {Notfound} from "./components/NotFound"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth/*" element={<Auth/>}/>
      <Route path="*" element={<Notfound/>}/>
    </Routes>
  )
}

export default App
