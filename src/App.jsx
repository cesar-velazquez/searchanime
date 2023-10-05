import { Route, Routes } from 'react-router-dom'
import './App.css'
import Buscador from './components/Buscador'
import ChildrenExample from './components/ChildrenExample'
import Anime from './Pages/Anime'
import Inicio from './Pages/Inicio'
import Page404 from './Pages/Page404'

function App() {

  return (
    <>

      <main className=' bg-black min-h-screen'>
        {/* <ChildrenExample/> */}
        <Routes>
          
          <Route path='/' element={<Inicio />} />
          <Route path='/anime/:id' element={<Anime />} />



          <Route path='*' element={<Page404 />} />
        </Routes>

      </main>
    </>
  )
}

export default App
