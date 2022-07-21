import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
const Navbar = () => {
    return ( 
        <nav className="navbar" style = {{padding: '10px'}}>
            <h1 style={{color: "orange"}} ><a href="/">Communactive</a></h1>
            <div className="links">
                <a href="/">Accueil</a>
                <a href="/Activite">Activité à venir</a>
                <a href="/Create">Ajouter une activité</a>
                <a href="/Blog">Forum de discussion</a>
                <a href="/FAQ">FAQ</a>
                <a href="/Apropos">À propos</a>
                <a href="https://www.youtube.com"
                    className="youtube social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </nav>
     );
}
 
export default Navbar;