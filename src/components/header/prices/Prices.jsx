import React, { Fragment } from "react";
import classes from "./Prices.css";

const Prices = () => {
  return (
    <section id="árak">
      <h3>Árlista</h3>
      <table id="pricesTable">
        <tbody>
          <tr>
            <td>Access Bars kezelés (60 perc)</td>
            <td>15.000.-</td>
          </tr>
          <tr>
            <td>Access Bars kezelés (120 perc)</td>
            <td>28.000.-</td>
          </tr>
          <tr>
            <td>Access Bars gyermek kezelés (60 perc)</td>
            <td>13.000.-</td>
          </tr>
          <tr>
            <td>Access Bars gyermek kezelés (120 perc)</td>
            <td>25.000.-</td>
          </tr>
          <tr>
            <td>Access Bars kezelés 3 alkalom (60 perc)</td>
            <td>43.000.-</td>
          </tr>
          <tr>
            <td>Access Bars kezelés 3 alkalom (120 perc)</td>
            <td>80.000.-</td>
          </tr>
          <tr>
            <td>Access Bars gyermek kezelés 3 alkalom (60 perc)</td>
            <td>37.000.-</td>
          </tr>
          <tr>
            <td>Access Bars gyermek kezelés 3 alkalom (120 perc)</td>
            <td>72.000.-</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Prices;
