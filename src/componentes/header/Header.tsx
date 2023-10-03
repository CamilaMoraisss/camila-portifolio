import './Header.css'
import LinkNav from '../linknav/LinkNav'
import LogoCamila from '..//img/LogoCamila.png'

function Header(){
    return(
        <header>
            <div>
            <img src= {LogoCamila} alt ="Logo Image" />   </div>
            <nav>
                <ul>
                    <li>
                    <LinkNav url="/" texto='Início'/>       
                    </li>

                    <li>
                        <LinkNav url="/sobremim" texto='Sobre Mim'/>
                    </li>
                    <li>
                    <LinkNav url="/formacoes" texto='Formações'/>
                    </li>
                    <li>
                    <LinkNav url="/contato" texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header