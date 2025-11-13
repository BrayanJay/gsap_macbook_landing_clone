import React from 'react'
import {footerLinks} from "../constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop: Find an Apple Store or other retailer near you. Or call 00800 040 1966.</p>
                <img src="/logo.svg" alt="Apple Logo" />
            </div>

            <div className="links">
                <p>Copyright © 2024 Apple Inc. All rights reserved.</p>

                <ul>
                    {footerLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.link}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
