import ic_phone from './ic_phone.svg'

const Header =()=>{

    return(
        <div class="header">
            <div class="header__logo">
                <img src="images/Logo_RIMAC.png" />
            </div>            
            <div class="header__contact">
                <img src={ic_phone} alt='Icono'/>
                <p class="header__phone-text">Llámanos</p>
            </div>
        </div>
    );

}

export default Header;


