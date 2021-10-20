import myTeam from '../assets/img/myteam.png'
import ovalBorder from '../assets/img/oval-border.png'

export const Navbar = () => {
    return (<div className="navbar flex align-center space-between">
        <div className="logo-wrapper">
            <img className="logo" src={myTeam} />
        </div>
        <div className="nav-links flex ">
            <div className="left-links flex">
                <h4>home</h4>
                <h4>about</h4>
            </div>
        </div>
        <div className="contact-wrapper">
            <img src={ovalBorder} />
            <span>contact us</span>
        </div>

    </div>)
}