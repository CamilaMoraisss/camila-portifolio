import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
import MoraisBg from '..//img/MoraisBg.png'
type ProjetoType = {
    titulo:string,
    descricao:string,
    imagem:string
}

export default function Main() {
    
    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            titulo:'POD ISSO NO IF?',
            descricao:"Projeto de Extensão de um podcast para o IFMS, desenvolvido pelo professor Diego Barros e algumas alunas e outros professores. ",
            imagem:'/barbie.png'
        },
        {
            titulo:'INICIAÇÃO CIENTÍFICA',
            descricao:'Esse projeto consiste em um zoenamento agrícola da cana-de-açúcar em cenários de mudanças climáticas no estado do Mato Grosso do Sul. ',
            imagem:'/KEN.png'
        },
        {
            titulo:'NAVITRINE',
            descricao:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/boneca.jpg'
        },
        {
            titulo:'GAVECH',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            titulo:'IDENTIDADE VISUAL - NITA',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },

        {
            titulo:'MEMÓRIA ECOCONSCIENTE',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            titulo:'IDENTIDADE VISUAL - NITA',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            titulo:'IDENTIDADE VISUAL - NITA',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
     
        setTexto(e.target.value)
    }
    return (
        <>
                 <div style={{backgroundImage:`url(${MoraisBg})`}} className='bg'>
            <img src="" alt="" />
            <div className='textobg'>
                <p>Eu sou uma garota contagiante, gosto de deixar as pessoas felizes, <br />
            gosto da minha caracterísca sobre sensibilidade, minha base é minha fé em Cristo Jesus. <br />Sou esperançosa, acredito em um mundo melhor. A coisa mais importante pra mim nesse mundo: <br />
            é a minha família. Eles são meu lar, meus exemplos e inspirações. <br /> Quando gosto de algo me dedico ao máximo, sou uma pessoa amiga e tenho facilidade em perdoar. <br /> 
            Gosto de pensar que existe a possibilidade de algo novo. <br />
            Penso que em todo momento há a oportunidade de <br /> crescer, mudar, recomeçar e ser restaurado, basta você querer. <br />
            Prazer, Camila Morais.</p>
            </div>
            <div>
            <div className=''>

            </div>
            </div>
        </div>
                
            <div className="campo-pesquisa">
                <p>Busque um projeto aqui!</p>
              <div className='estilo-barra'>
              <input type="text" 
                       className='botao-pesquisa'
                       placeholder='Pesquise um projeto...'
                       onChange={TrataTexto} />
              </div>
                {texto && <p>Resultados Para: {texto} </p>}
            </div>
            <main className="content-main">
                
                {
                projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto 
                              
                                descricao={projeto.descricao}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }

       

            </main>
        </>
    )
}