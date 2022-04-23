import React, { Fragment } from "react";
import classes from "./Prices.css"

const Prices = () => {

    return (
        <section id="pricesContainer">
            <h3>árlista</h3>
            <table id="pricesTable">
                <tr>
                    <td>felnott rovid</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>felnott rovid</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>felnott rovid 3 alkalom</td>
                    <td>20000</td>
                </tr> <tr>
                    <td>felnott hosszu 3 alkalom</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>gyermek rovid</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>gyermek hosszu</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <td>gyermek rovid 3 alkalom</td>
                    <td>20000</td>
                </tr> <tr>
                    <td>gyermek hosszu 3 alkalom</td>
                    <td>20000</td>
                </tr>

            </table>
        </section>
    )
}

export default Prices