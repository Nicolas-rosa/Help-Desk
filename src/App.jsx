import { jsx } from "react/jsx-runtime";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'

function App() {
  return(
<Router>
<Routes>
 <Route path="/" element={<Home />}/> 
</Routes>
</Router>

  )
}
export default App;