import './Header.scss'
import { IconWorld } from '@tabler/icons-react';
import { IconSearch } from '@tabler/icons-react';
import Logo from '../../assets/images/logo.png'

const Header = () => {

    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={Logo} alt="Logo" className="logo" /> 
                    </a>
                </div>
                <div className="navbar-search">
                    <button className="search-button">
                        <IconSearch stroke={2} />
                    </button>
                    <input type="text" placeholder="Tìm kiếm nội dung bất kỳ" className='search-input' />
                </div>
                <div className="navbar-buttons">
                    <button className="login-button">Đăng nhập</button>
                    <button className="signup-button">Đăng ký</button>
                    <button className="language-button">
                        <IconWorld stroke={2} />
                    </button>
                </div>
            </nav>
        </>
    )
}
export default Header