import React from "react"
import classes from './Header.css'
const Header = () => {

    return (
        <header className={classes.Header}>
            <div id="logo"><a href="#landing" >logo</a></div>
            <ul id="hederUl">
                <li><a href="#aboutUs" >Bemutatkozás</a> </li>
                <li><a href="#pricesContainer" >árak</a> </li>
                <li><a href="#appointment" >időpontfoglalás</a> </li>
                <li><a href="#contact" >Elérhetőség</a> </li>
            </ul>
        </header>
    )

}

export default Header