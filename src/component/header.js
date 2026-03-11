import './header.css';
import logo from '../img/insang_biseo_logo.svg';

export default function Header() {
    return (
        <>
            <header className="app_header">
                <object data={logo} type='image/svg+xml' aria-label='로고' className='app_logo'></object>
            </header>
        </>
    );
}