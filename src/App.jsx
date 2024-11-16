import './App.css'
import Navbar from './Navbar'
import Header from './Header'
import Content from './Content'
function App() {
  return (
    <>
      <div className='mainPage'>
        <Header/>
        <div className='infoSection'>
        <Navbar/>
        <Content/>
        </div>
      </div>
      
    </>
  )
}

export default App
