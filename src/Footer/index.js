import React from "react"
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer">
        <footer id="footer_main" className="footer">
                <p>@robinsonvegas • All rights reserved © 2022.</p>
                <nav>
                    <ul className="footer-social">
                        <li><a href="https://linkedin.com/in/robinson-vegas-malave-31779b156" target="_blank" rel="vrob" title="LinkedIn"><span className="footer-linkedin"></span></a></li>
                        <li><a href="https://github.com/vrob13" target="_blank" rel="vrob" title="GitHub"><span className="footer-github"></span></a></li>
                        <li><a href="" target="_blank" rel="vrob" title="My Web"><span className="footer-web"></span></a></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
 
export { Footer };