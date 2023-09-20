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
            titulo:'Podcast - POD ISSO No IF?',
            descricao:"Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
            imagem:'/barbie.png'
        },
        {
            titulo:'Filme Barbie',
            descricao:'Depois de ser expulsa da Barbieland por ser.',
            imagem:'/KEN.png'
        },
        {
            titulo:'Filme Barbie',
            descricao:'Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.',
            imagem:'/boneca.jpg'
        },
        {
            titulo:'Barbie',
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