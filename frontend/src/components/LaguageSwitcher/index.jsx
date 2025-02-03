import { useState } from 'react';
import './LanguageSwitcher.css';
import { Link } from 'react-router-dom';
const LanguageSwitcher = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="language-dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="language-toggle">
                <img
                    src="https://flagcdn.com/w20/gb.png"
                    alt="English"
                    className="flag-icon"
                />
                <span>EN</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em">
                    <path fill="white" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z" />
                </svg>
            </div>

            <ul className={`language-menu ${isHovered ? 'visible' : ''}`}>
                <li>
                    <Link to="#">
                        <img
                            src="https://flagcdn.com/w20/gb.png"
                            alt="English"
                            className="flag-icon"
                        />
                        <span className='font-300'>English</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <img
                            src="https://flagcdn.com/w20/th.png"
                            alt="Thai"
                            className="flag-icon"
                        />
                        <span>ไทย</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
