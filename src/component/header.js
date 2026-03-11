import './header.css';
import logo from '../img/insang_biseo_logo.svg';

export default function Header() {
    return (
        <>
            <header className="App-header">
                <object data={logo} type='image/svg+xml' className='app_logo'></object>
            </header>
        </>
    );
}