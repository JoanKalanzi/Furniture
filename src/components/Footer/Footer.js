import React from "react"
import "./footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="box">
            <div className="logo flex items-center">
              <ion-icon name="bag"></ion-icon>
              <h1 className="text-xl font-bold ml-2">JK</h1>
            </div>
            <p className="mt-4">JK Living & Co</p>
          </div>
          <div className="box">
            <h2 className="footer-text text-lg font-semibold">About Us</h2>
            <ul className="mt-4">
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2 className="footer-text text-lg font-semibold">Customer Care</h2>
            <ul className="mt-4">
              <li>Help Center</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate &amp; Bulk Purchasing</li>
              <li>Returns &amp; Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2 className="footer-text text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4">
              <li>1 Queens Court, London, EC16 9AJ, United Kingdom</li>
              <li>Email: example@company.com</li>
              <li>Phone: 0208 4567 123</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
