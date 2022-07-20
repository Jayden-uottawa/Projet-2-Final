const Navbar = () => {
    return ( 
        <nav className="navbar" style = {{padding: '10px'}}>
            <h1 style={{color: "orange"}} ><a href="/">Communactive</a></h1>
            <div className="links">
                <a href="/">Accueil</a>
                <a href="/Create">Ajouter une activité</a>
                <a href="/Activite">Activité à venir</a>
                <a href="/Blog">Forum de discussion</a>
                <a href="/FAQ">FAQ</a>
                <a href="/Apropos">À propos</a>
            </div>
        </nav>
     );
}
 
export default Navbar;