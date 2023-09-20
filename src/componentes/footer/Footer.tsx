import './Footer.css';

import LogoCamila from '..//img/LogoCamila.png'
import Facebook  from '..//img/facebook.png'
import Instagram  from '..//img/insta.png'
import Twitter from '..//img/twitter.png'

export function Footer(){

return(
    <footer className = "nome"> 
<div className= "parte1">
    <img className= "loguinho" src= {LogoCamila} alt ="" />
    <p className='p'> Aqui você encontra tudo sobre mim.<br />
    Me conheça melhor e também <br /> 
    meus projetos e todos os serviços que disponibilizo!</p>
        <div className = "socialmedia"> 
            <img className = 'facebook' src = {Facebook} alt="facebook" />
            <img className = 'insta' src= {Instagram} alt="youtube"/>
            <img className ='twitter' src={Twitter} alt="twitter" />
        </div>

    
    </div>

        <div className = "parte2">
            <p className = "titulo">Sobre mim</p>
            <a href="#">Igreja </a>
            <a href="#">Projetos </a>
            <a href="#">Esportes </a>
            <a href="#">Viagens </a>

        </div>
        <div className = "parte3" >
            <p className='titulo'>Conhecimentos</p>
            <a href="#">Gerais</a>
            <a href="#">Cursos </a>
            <a href="#">Pesquisa e Extensão </a>
            <a href="#">IFMS</a>

        </div>

    <div className='parte4'>
    <p className='titulo'>Serviços </p>
            <a href="#">Design</a>
            <a href="#">Social Media</a>
            <a href="#"> Programação</a>
            <a href="#"> Comuniucação e Marketing</a>



    
    </div>
    
</footer>
)} 

export default Footer 