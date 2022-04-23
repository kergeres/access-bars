import React from "react"
import classes from './Contact.css'
const Contact = () => {

    return (
        <footer id="contact" >
            <div className="twoDivA">
                <table id="contactTable">
                    <tbody>

                        <tr>
                            <td></td>
                            <td><a target="_blank" href="https://www.calengoo.com/booking/access_bars/">Időpontot foglalok</a></td>

                        </tr>  <tr>
                            <td></td>
                            <td><a href="tel:+36205334023">+36 20 533 4023</a></td>

                        </tr>
                        <tr>
                            <td></td>
                            <td>5ker remelem</td>

                        </tr>
                        <tr>
                            <td></td>
                            <td><a href="mailto:informacio.accessbars@gmail.com">informacio.accessbars@gmail.com</a></td>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="twoDivB">
                {/* 47.6104247/19.1734795 */}
                <iframe className="mapContainer" src="https://api.mapbox.com/styles/v1/kergeres/cl23i1f5x000714pe14kwhwgk.html?title=false&access_token=pk.eyJ1Ijoia2VyZ2VyZXMiLCJhIjoiY2s3ZDE2OWptMGNlcDNucHE0dTJzaXRubyJ9.n8mW2tGizEW9Hwvu26iG9g&zoomwheel=false#10/47.6104247/19.1734795" title="Basic"></iframe>

            </div>
        </footer>
    )

}

export default Contact