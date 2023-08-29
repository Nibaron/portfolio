
const Navbar = () => {

    function toggleMenu() {
        const desktopMenu = document.querySelector("#desktop-nav");
        const hamburgerMenu = document.querySelector("#hamburger-nav");
    
        const menuLinks = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
    
        desktopMenu.classList.toggle("open");
        hamburgerMenu.classList.toggle("open");
        menuLinks.classList.toggle("open");
        icon.classList.toggle("open");
    }
    

    return (
    <>
        <nav id="desktop-nav" className="desktop-nav">
        <div className="logo">Nibaron Kumar Das</div>
        <div>
            <ul className="nav-links">
                <li><a href="#about"> About </a></li>
                <li><a href="#experience"> Experience </a></li>
                <li><a href="#projects"> Projects </a></li>
                <li><a href="#contact"> Contact </a></li>
            </ul>
        </div>
        </nav>

        <nav id="hamburger-nav" className="hamburger-nav">
        <div className="logo">Nibaron Kumar Das</div>
        <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="menu-links">
            <li><a href="#about" onClick={toggleMenu}> About </a></li>
            <li><a href="#experience" onClick={toggleMenu}> Experience </a></li>
            <li><a href="#projects" onClick={toggleMenu}> Projects </a></li>
            <li><a href="#contact" onClick={toggleMenu}> Contact </a></li>
        </div>
        </div>
        </nav>
    </>
     );
}
 
export default Navbar;