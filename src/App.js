import React from 'react'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'



import "./Styles/App.css"
import "./Styles/Header.css"
import "./Styles/Home.css"
import "./Styles/Card.css"
import "./Styles/Row.css"

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>

  )
}

export default App