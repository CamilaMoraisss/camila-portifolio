import './Header.css'
import Link from './link/Link'
import LogoCamila from '..//img/LogoCamila.png'

function Header(){
    return(
        <header>
            <div>
            <img src= {LogoCamila} alt ="Logo Image" />   </div>
            <nav>
                <ul>
                    <li>
                        <Link texto='Início'/>
                    </li>
                    <li>
                        <Link texto='Sobre mim'/>
                    </li>
                    <li>
                        <Link texto='Formações'/>
                    </li>
                    <li>
                        <Link texto='Contato'/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header