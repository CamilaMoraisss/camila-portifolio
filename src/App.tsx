import './App.css'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'
import Filme from './componentes/filme/Filme'


function App() {
  return (
    <div>
         <Header/>
       <Main/>
         <Footer/>
         <Filme titulo='tere' sinopse='tere' imagem='tere'/>
         </div>
  )
}

export default App