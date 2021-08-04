import './Header.css';
const Header = () =>{
    return(
        <span onClick={() => window.scroll(0, 0)} className="header">Maverick Media Search</span>
    );
}

export default Header;