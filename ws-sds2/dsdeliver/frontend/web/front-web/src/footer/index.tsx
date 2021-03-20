import './styles.css'
import { ReactComponent as RedesSociais } from './redes-sociais.svg'
 

function Footer(){
    return(
        <footer className="main-footer">
           <h2>App desenvolvido durante a 2ª ed. do evento <i>Semana DevSuperior</i></h2>
            < RedesSociais />
        </footer>
    )
}
export default Footer