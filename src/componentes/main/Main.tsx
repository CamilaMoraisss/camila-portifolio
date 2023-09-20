import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
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
    ]

    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
     
        setTexto(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um projeto</p>
                <input type="text" 
                       className='botao_pesquisa'
                       placeholder='Pesquise um Projeto'
                       onChange={TrataTexto} />
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