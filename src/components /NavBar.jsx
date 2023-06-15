import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'
import useWindowDimensions from '../window'
import image from '../assets/img_logo.jpeg'
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
                    <img src={image} className='logo'/>
                    <nav className='nav'>
                        <ul>
                            <Link className='nav-elem' to='/'>HOME</Link>
                            <Link className='nav-elem' to='/advogado'>ADVOGADO ONLINE</Link>
                            <Link className='nav-elem' to='/areas'>ÁREAS DE ATUAÇÃO</Link>
                            <Link className='nav-elem' to='contato'>CONTATO</Link>
                        </ul>
                    </nav>
                </div>
                :
                <div className='nav-hamburguer'>
                    <img src={image} className='logo-hamburguer'/>
                    <Menu>
                        <Link id="home" className="menu-item" to="/" >HOME</Link>
                        <Link id="about" className="menu-item" to="/advogado" >ADVOGADO ONLINE</Link>
                        <Link id="contact" className="menu-item" to="/areas" >ÁREAS DE ATUAÇÃO</Link>
                        <Link onChange={ (e) => showSettings(e) } className="menu-item--small" to="/contato" >CONTATO</Link>
                    </Menu>
                </div>
        }
        </div>
    )
}

export default NavBar