
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Body from './Components/Body'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import appStore from './Components/Utils/AppStore'
import CartSlice from './Components/CartSlice'
import { addItem } from './Components/CartSlice'





function App() {
  

  return (
    <Provider store = {appStore}>
      <Header/>
        <Nav/>
      <Outlet/>
      <Footer/>
      
    </Provider>
  )
}

export default App
