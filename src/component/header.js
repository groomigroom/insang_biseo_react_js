import './header.css';
import logo from '../img/insang_biseo_logo.svg';

export default function Header() {
    function showName() {
        console.log("groom");
    }

    function showChange() {
        console.log(txt);
    }

    return (
        <>
            <header className="app_header">
                <div>
                    <img src={logo} alt='로고' className='app_logo' />
                </div>
                <div>
                    <div onClick={showName}></div>
                    <div onClick={() => {
                        console.log(300);
                    }}></div>
                    <input type='text' onChange={e => {
                        const txt = e.target.value;
                        showChange(txt);
                    }}></input>
                </div>
            </header>
        </>
    );
}