import "./Navbar.css"


    const Navbar = () => {
        return (
            <div className="barContainer">
            <a className="main" href="/">Midas Touch</a>
                <ul>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                </ul>
            </div>
        )
    }

export default Navbar;