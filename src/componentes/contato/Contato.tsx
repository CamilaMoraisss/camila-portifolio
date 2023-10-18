import "./Contato.css";
function Contato(){
    return(
        <>
       
        <div className="Formulario">
            <input className="nome" type="text" placeholder="Nome:"/>
            <input className="telefone" type="text" placeholder="Telefone:*"/>
            <input className="campo-mensagem" type="text" placeholder="Digite aqui:"/>
            <button className="button-envio">Enviar</button>
        </div>
        </>
    )
    
}
export default Contato
