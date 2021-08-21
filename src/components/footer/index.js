import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
const Footer = (props) => {
    return (

        <footer className="footer">
          <h3 className="title">  <FontAwesomeIcon icon={faCopyright} />  Christopher Kirkum</h3>
        </footer>
    )
}

export default Footer
