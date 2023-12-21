import { Outlet } from 'react-router-dom'
import './App.css'
import MainFoterMoabilMenu from './component/layout/Footer/FooterMobailMenu/MainFoterMoabilMenu'
import { Header } from './component/layout/Header/Header'

function App() {


  return (
    <div className='' id='root-home'>
    <Header />
    <Outlet />
    <MainFoterMoabilMenu />
 </div>
     

  )

}

export default App
