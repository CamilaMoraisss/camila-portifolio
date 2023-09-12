
import { useState } from 'react'
import Filme from './../filme/Filme'
import './Main.css'
export default function Main() {
   // let textodigitado = 'Barbie'
   const [textodigitado, funcaoMudaVariavel] =  useState("Barbie")
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        
        funcaoMudaVariavel(e.target.value)
    }
    return (
        <>
            <div className="campo_pesquisa">
                <p>Busque um filme</p>
                <input type="text" className='botao_pesquisa' placeholder='Pesquise um Filme'onChange={TrataTexto} /><p>Digitado: {textodigitado} </p>
</div>


        
        <main className="content-main">
            <Filme titulo='Barbie Live Action' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie.png'/>

            <Filme titulo='Barbie IA 1' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie2.jpg'/>

                <Filme titulo='Barbie IA 2' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie3.jpg'/>
              
            <Filme titulo='Barbie IA 4' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie4.jpg'/>
               <Filme titulo='Barbie IA 5' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie5.jpg'/>
              
            <Filme titulo='Barbie IA 6' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie6.jpg'/>

            <Filme titulo='Barbie IA 7' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbie7.jpg'/>
              
            <Filme titulo='New Barbie!' sinopse='No fabuloso live-action da boneca mais famosa do mundo,
             acompanhamos o dia a dia em Barbieland - o mundo mágico das Barbies, onde todas as versões da boneca
              vivem em completa harmonia e suas únicas preocupações são encontrar as melhores roupas para passear
              com as amigas e curtir intermináveis festas.' imagem='/barbienova.png'/>
              
        </main>
        </>

    )
    
}
