import React, { useEffect, useState } from 'react';
import './index.css';
import OmbudsmanOptions from './Ombudsman'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faUser, faFlag } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    const [searchText, setSearchText] = useState('');
    const [menuItems] = useState([
        { label: 'Contact us', link: '#' },
        { label: 'I am UniFacisa', link: '#' },
        { label: 'Track Your Registration', link: '#' },
    ]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {
        setFilteredItems(
            menuItems.filter((item) =>
                item.label.toLowerCase().includes(searchText.toLowerCase())
            )
        );
    }, [searchText, menuItems]);

    const handleSearch = () => {
        console.log('Searching for:', searchText);  
        setSearchText('');
    };

    const handleSignUp = () => {
        console.log('Sign Up clicked');
    };

    return (
        <div>
            <div className="menu">
                {menuItems.map((item, index) => (
                    <a key={index} href={item.link}>
                        {item.label === 'Contact us' && (
                            <>
                                <FontAwesomeIcon icon={faCommentDots} style={{ marginRight: '8px', fontSize: '20px' }} />
                                {item.label}
                            </>
                        )}
                        {item.label === 'I am UniFacisa' && (
                            <>
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px', fontSize: '20px' }} />{' '}
                                {item.label}
                            </>
                        )}
                        {item.label === 'Track Your Registration' && (
                            <>
                                <FontAwesomeIcon icon={faFlag} style={{ marginRight: '8px', fontSize: '20px' }} />{' '}
                                {item.label}
                            </>
                        )}
                        {item.label !== 'Contact us' && item.label !== 'I am UniFacisa' && item.label !== 'Track Your Registration' && (
                            <>
                                {item.label}
                            </>
                        )}
                    </a>
                ))}
                <div className="search-bar">
                    <input
                        className="filter-input"
                        type="text"
                        placeholder="What are you looking for..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} style={{ fontSize: 14 }}
                    />
                    {searchText && (
                        <button onClick={handleSearch}>
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
                                alt="Clear Search"
                                style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                            />
                        </button>
                    )}
                </div>
                <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>
            </div>
            <Submenu /> 
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/friends-learning-study-group 1.png`}malt="Descrição da imagem" /> 
            </div>
            <OmbudsmanOptions/>
        </div>
    );
}
function Submenu() {
    const submenuItems = [
        { label: 'Courses', link: '#', options: ['Graduation', 'Post Medical', 'Felloship Program', 'Medical Residency 2024'] },
        { label: 'Scholarships and Discounts', link: '#', options: ['RUDDER', 'CreditES', 'Health insurance', 'For Real', 'Family','Egress' ] },
        { label: 'Study at Unifacisa', link: '#', options: ['Enrollment Schedule', 'Entrance exam', 'And either', 'Second Degree', 'Transfer'] },
        { label: 'The Unifacisa', link: '#', options: ['Who we are?', 'News', 'Unifacisa Careers', 'Academic Secretary', 'Library', 'Social Responsibility', 'Academic Repository', 'Contact', 'Work with us', 'Ombudsman'] }
    ];

    const [showOptions, setShowOptions] = useState(null);

    const handleToggleOptions = (index) => {
        if (showOptions === index) {
            setShowOptions(null);
        } else {
            setShowOptions(index);
        }
    };

    return (
        <div className="submenu">
            <div className="logo-container">
                <img src={`${process.env.PUBLIC_URL}/unifacisa-2.jpg`} alt="Logo" className="logo" />
            </div>
                <div className="submenu-container">
                <div className="submenu-items">
                    {submenuItems.map((item, index) => (
                        <div key={index} className="submenu-item">
                            <div onClick={() => handleToggleOptions(index)} className="submenu-item-label">
                                {item.label}
                        <span className="arrow">{showOptions === index ? '▲' : '▼'}</span>
                </div>
                    {showOptions === index && (
                        <ul className="submenu-options list-group">
                            {item.options.map((option, i) => (
                                <li key={i} className="list-group-item">{option}</li>
                                ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Menu
