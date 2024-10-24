import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <footer className="bg-white text-gray-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-10">
                    <p className="text-gray-950">
                        Making the world a better place through constructing elegant hierarchies.
                    </p>
                </div>

                <div className="flex justify-center space-x-6 mb-10">
                    <a href="https://facebook.com" target="_blank" className="text-gray-950 hover:text-gray-600">
                        <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" className="text-gray-950 hover:text-gray-600">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="https://github.com/" target="_blank" className="text-gray-950 hover:text-gray-600">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://youtube.com" target="_blank" className="text-gray-950 hover:text-gray-600">
                        <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" className="text-gray-950 hover:text-gray-600">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray tracking-wider uppercase mb-4">Solutions</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Marketing</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Analytics</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Commerce</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Insights</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray tracking-wider uppercase mb-4">Support</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Pricing</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Documentation</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Guides</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">API Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">About</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Blog</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Jobs</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Press</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray tracking-wider uppercase mb-4">Legal</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Claim</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Privacy</a></li>
                            <li><a href="#" className="text-gray-950 hover:text-gray-500">Terms</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-950">&copy; 2024 BookMyMovie, All rights reserved.</p>
                </div>

                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-5 right-5 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
                    >
                        ↑ Back to Top
                    </button>
                )}

            </div>
        </footer>
    );
};

export default Footer;
