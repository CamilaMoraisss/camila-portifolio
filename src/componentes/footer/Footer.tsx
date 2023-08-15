import './Footer.css';

import LogoBarbie from '..//img/logo.png'
import Facebook  from '..//img/facebook.png'
import Youtube from '..//img/youtube.png'
import Instagram  from '..//img/insta.png'
import Twitter from '..//img/twitter.png'

export function Footer(){

return(
    <footer className = "nome"> 
<div className= "parte1">
    <img className= "loguinho" src= {LogoBarbie} alt ="" />
    <p className='p'> Aqui você encontra diversas coisas sobre: <br />
     a nossa querida Barbie! <br />Veja tudo que você tem direito <br /> sobre a boneca mais querida do mundo!</p>
        <div className = "socialmedia"> 
            <img className = 'facebook' src = {Facebook} alt="facebook" />
            <img className = 'youtube' src={Youtube} alt="instagram" />
            <img className = 'insta' src= {Instagram} alt="youtube"/>
            <img className ='twitter' src={Twitter} alt="twitter" />
        </div>

        <div>
            <p className = "partebaixo1" > © 2021-2023 Camila Morais </p>
        </div>
    </div>

        <div className = "parte2">
            <p className = "titulo">  Produtos</p>
            <a href="#"> Mobile App</a>
            <a href="#">Integrações</a>
            <a href="#"> Soluções</a>
            <a href="#"> Segurança</a>

        </div>
        <div className = "parte3" >
            <p className='titulo'>Companhia </p>
            <a href="#">Investidores </a>
            <a href="#">Contato </a>
            <a href="#">Colaboradores </a>
            <a href="#">História</a>

        </div>

    <div className='parte4'>
    <p className='titulo'>Comunidade </p>
            <a href="#">Instagram </a>
            <a href="#">Documentação </a>
            <a href="#">Faça Parte </a>
            <a href="#">Colabs </a>


        <div>
          <p className = "partebaixo3" >Termos de Uso</p>
        </div> 


    </div>

    

    <div className='parte5'>
    <p className='titulo'>Ajuda </p>
            <a href="#">Blog </a>
            <a href="#">Central </a>
            <a href="#">Roadmap</a>
            <a href="#">Fale Conosco</a>
        
    <div>
    <p className = "partebaixo3" >Política de Privacidade </p>
    </div>
        
    </div>

    <div className='parte5'>
    <p className='titulo'>Ajuda </p>
            <a href="#">Blog </a>
            <a href="#">Central </a>
            <a href="#">Roadmap</a>
            <a href="#">Fale Conosco</a>

    </div>


        
    </footer>
)} 

export default Footer 