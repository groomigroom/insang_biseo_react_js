import './header.css';
import logo from '../img/insang_biseo_logo.svg';

export default function Header() {
    return (
        <>
            <header className="app_header">
                <div>
                    <img src={logo} alt='로고' className='app_logo' />
                </div>
                <div></div>
            </header>
        </>
    );
}