import React from "react";
const d = new Date();
const year = d.getFullYear();
function Footer() {
  return(
    <footer>
    <p>Sidhant Kaul © {year} </p>
    </footer>
  )
}
export default Footer;
