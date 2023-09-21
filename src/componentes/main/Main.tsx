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
            descricao:"Projeto de Extensão do IFMS em formato de PODCAST! coordenado pelo professor Diego Barros tendo cinco integrantes. Nesse projeto, participei como uma das hosts apresentando muitos episódios e fui coordernadora das mídias socias e comunicação na internet. Sem dúvidas, ajudou muito no desenvolvimento comunicativo e na área de Social Media.",
            imagem:'/podcast.png'
        },
        {
            titulo:'INICIAÇÃO CIENTÍFICA',
            descricao:'MEU TCC! Esse projeto foi uma iniciação científica (10/2022 - 10-2023). Orientado pelo professor Guilherme Botega, teve como objetivo principal foi criar um zoneamento climático abrangente para a cana-de-açúcar em todo o estado do Mato Grosso do Sul, impulsionando o país economicamente e fortalecendo a matriz energética do estado, enquanto apoia os produtores no cultivo dessa cultura. ',
            imagem:'/zonemento.png'
        },
        {
            titulo:'NAVITRINE',
            descricao:'Projeto desenvolvido por mim e pelos meus colegas, Ellen, Gabriela e Pedro durante nosso terceiro ano com partes documentacionais do desenvolvimento e a realização de um site sendo uma forma de Vitrine Virtual para a cidade de Naviraí.',
            imagem:'/navitrine.png'
        },
        {
            titulo:'GAVECH',
            descricao:"Esse projeto foi elaborado no segundo ano do ensino médio em grupo. Se baseia em uma criação de uma interface no Figma de uma loja de luxo fictícia chamada “Gavech” G de Gabriela, A de André, V de Vitor, E de Ellen, C de Camila e H de Henrique, todos os membros do grupo.",
            imagem:'/gavech.png'
        },
        {
            titulo:'IDENTIDADE VISUAL - NITA',
            descricao:"Com base em um projeto desenvolvido pelos servidores do IFMS com o foco na criação de um Núcleo de inovações e desenvolvimento de tecnologias assistivas, realizei uma identidade visual para essa ideia, que logo depois, consolidou-se.",
            imagem:'/idvisual.png'
        },

        {
            titulo:'MEMÓRIA ECOCONSCIENTE',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/memoria.png'
        },
        {
            titulo:'SOCIAL MEDIA - IFMAKER',
            descricao:"Há um ano, tenho cuidado e administrado as redes sociais do IFMaker, atuando como “Social Media”, alimentando o IG quando tem conteúdos referentes a atividades cotidianas realizadas no Núcleo de Tecnologia do IFMS.",
            imagem:'/socialmedia.png'
        },
        {
            titulo:'UM POUCO MAIS...',
            descricao:"Saiba um pouco mais sobre algumas atividades externas realizadas por mim, durante esses três anos de Instituição e acompanhe também meus projetos profissionais na área do Design e Comunicação.",
            imagem:'/outros.png'
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
                <p>Busque qualquer coisa aqui!</p>
              <div className='estilo-barra'>
              <input type="text" 
                       className='botao-pesquisa'
                       placeholder='Digite aqui...'
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