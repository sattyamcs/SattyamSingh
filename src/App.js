import './App.css';
import Contact from './Components/Contact/Contact';
import Forms from './Components/Form/Forms';
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import { themeContext } from './Context'
import { useContext } from 'react'



function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <>
        <div className="App"
          style={{
            background: darkMode ? '#10375C' : '',
            color: darkMode ? 'white' : '',
          }}
        >
          <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Contact />
          <Forms />
          <Footer />
        </div>
    </>
  )
}

export default App;
