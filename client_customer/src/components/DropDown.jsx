import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import i18n from 'i18next';
import { BiChevronDown } from 'react-icons/bi';
import Vietnamese from '../assets/img/vietnam.png';
import English from '../assets/img/english.png';

export function Dropdown() {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [language, setLanguage] = useState(<img src={English} alt="" style={{ width: '30px' }} />);
    const changeIcon = (name) => {
        switch (name) {
            case 'English':
                setLanguage(<img src={English} alt="" style={{ width: '30px' }} />);
                break;
            case 'Vietnamese':
                setLanguage(<img src={Vietnamese} alt="" style={{ width: '30px' }} />);
                break;
        }
    };
    const handleLanguage = (lang) => {
        setLanguage(lang);
        handleClose();
        switch (lang) {
            case 'Vietnamese':
                i18n.changeLanguage('1');
                break;
            case 'English':
                i18n.changeLanguage('0');
                break;
        }
    };

    return (
        <div className="dropdown">
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ height: '26px' }}>
                {language}
                <BiChevronDown
                    className="dropdown-icon"
                    style={{ color: 'white', fontSize: '2.2rem', marginLeft: '5px' }}
                />
            </Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem
                    onClick={() => {
                        handleLanguage('English');
                        changeIcon('English');
                    }}
                    className="language_icon--hover"
                    style={{
                        padding: '0',
                        width: '57px',
                        height: '29px',
                        padding: '5px 10px',
                    }}
                >
                    <img src={English} alt="" style={{ width: '26px' }} />
                </MenuItem>

                <MenuItem
                    onClick={() => {
                        handleLanguage('Vietnamese');
                        changeIcon('Vietnamese');
                    }}
                    className="language_icon--hover"
                    style={{
                        padding: '0',
                        width: '57px',
                        height: '29px',
                        padding: '5px 10px',
                    }}
                >
                    <img src={Vietnamese} alt="" style={{ width: '26px' }} />
                </MenuItem>
            </Menu>
        </div>
    );
}
export default Dropdown;
