import Button from './Button.jsx';
import Filters from './Filters.jsx';
import '../styles/Header.css'

function Header() {

    

    return (
        <header className='header-container'>
            <h1>Shop cart 🛒</h1> 
            
            <Filters/>
        </header>
    )
}

export default Header;