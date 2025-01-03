import Layout from "./partials/Layout"
import "./styles.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./screens/Home";

function App() {

  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Layout>
  )
}

export default App
