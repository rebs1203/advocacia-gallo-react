import { useState, useEffect } from 'react'
import { stack as Menu } from 'react-burger-menu'
import useWindowDimensions from '../window'
import '../styles/nav-bar.css'


const NavBar = () => {
    const [sizeNav, setSizeNav] = useState(true)
    const [columnNav, setColumnNav] = useState(false)

    const { height, width } = useWindowDimensions()

        function showSettings (event) {
            event.preventDefault();
        }

    
    useEffect( () => {
        if (width < 1000) {
            setSizeNav(false)
        } else if (width > 1000){
            setSizeNav(true)
        }
    }, [width])


    return (
        <div>
            { 
                sizeNav
                ?
                <div>
                    <img src="IMG_1984.jpeg" className='logo'/>
                    <nav className='nav'>
                        <ul>
                            <a className='nav-elem'>HOME</a>
                            <a className='nav-elem'>ADVOGADO ONLINE</a>
                            <a className='nav-elem'>ÁREAS DE ATUAÇÃO</a>
                            <a className='nav-elem'>CONTATO</a>
                        </ul>
                    </nav>
                </div>
                :
                <div className='nav-hamburguer'>
                    <img src="IMG_1984.jpeg" className='logo-hamburguer'/>
                    <Menu>
                        <a id="home" className="menu-item" href="/">HOME</a>
                        <a id="about" className="menu-item" href="/about">ADVOGADO ONLINE</a>
                        <a id="contact" className="menu-item" href="/contact">ÁREAS DE ATUAÇÃO</a>
                        <a onClick={ (e) => showSettings(e) } className="menu-item--small" href="">CONTATO</a>
                    </Menu>
                </div>
        }
        </div>
    )
}

export default NavBar