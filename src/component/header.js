import './header.css';
import logo from '../img/insang_biseo_logo.svg';

export default function Header() {
    function showName() {
        console.log("groom");
    }

    return (
        <>
            <header className="app_header">
                <div>
                    <img src={logo} alt='로고' className='app_logo' />
                </div>
                <div onClick={showName}></div>
            </header>
        </>
    );
}