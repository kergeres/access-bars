import React from "react";
import "./Contact.css";
const Contact = () => {
  let mapP =
    '<div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=2150,%20dunakeszi,%20k%C3%A1polna%20u%202&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://123movies-to.org">123movies</a><br><style>.mapouter{position:relative;text-align:right;height:100%;width:100%;}</style><a href="https://www.embedgooglemap.net"></a><style>.gmap_canvas {overflow:hidden;background:none!important;height:100%;width:100%;}</style></div></div>';
  return (
    <footer id="elérhetőség">
      <div className="twoDivA">
        <table id="contactTable">
          <tbody>
            <tr>
              <td></td>
              <td>
                <a href="tel:+36205334023">+36 20 533 4023</a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td style={{ textDecoration: "none" }}>
                2120 Dunakeszi, Kápolna u. 2
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a href="mailto:informacio.accessbars@gmail.com">
                  informacio.accessbars@gmail.com
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a
                  href="https://www.calengoo.com/booking/access_bars/"
                  style={{ opacity: 0 }}
                >
                  access bars
                </a>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <a
                  style={{ textDecoration: "underline" }}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.calengoo.com/booking/access_bars/"
                >
                  Időpontot foglalok>>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="twoDivB">
        <div
          style={{ height: "100%" }}
          dangerouslySetInnerHTML={{ __html: mapP }}
        ></div>
      </div>
    </footer>
  );
};

export default Contact;
