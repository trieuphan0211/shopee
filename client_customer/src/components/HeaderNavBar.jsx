import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiLogoFacebookCircle, BiLogoInstagram, BiBell } from 'react-icons/bi';
import { RiQuestionLine } from 'react-icons/ri';

import MyContext from '../contexts/MyContext';

import appStore from '../assets/img/app_store.png';
import googlePlay from '../assets/img/google_play.png';
import appGalley from '../assets/img/app_gallery.png';
import downloadQR from '../assets/img/qr_code.png';
import Spay from '../assets/img/shopee.png';
import Voucher from '../assets/img/samnganmayman.png';
import Sale from '../assets/img/muahangxuyentet.png';
import Dropdown from './DropDown';
import { useTranslation } from 'react-i18next';

export const HeaderNavBar = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const { token, customer } = useContext(MyContext);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const context = useContext(MyContext);
    console.log('content', context.token);
    useEffect(() => {
        if (customer) {
            setName(customer.name); // Replace 'name' with the actual key in 'customer' object that holds the user's name
            setImage(customer.image);
        } else {
            setName(''); // If 'customer' is null or undefined, reset the name state
            setImage('');
        }
    }, [customer]);

    // event-handlers
    const btnLogoutClick = () => {
        context.setToken('');
        context.setCustomer({});
        context.setMycart([]);
    };

    return (
        <div>
            <nav className="header__navbar hide-on-mobile-tablet">
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--separate">{t('layout.kenh')}</li>
                    <li className="header__navbar-item header__navbar-item--has-qr header__navbar-item--separate">
                        {t('layout1.taiungdung')}
                    </li>
                    {/* Header QR code */}
                    <div className="header__qr">
                        <img src={downloadQR} alt="QR Code" className="header__qr-img" />
                        <div className="header__qr-apps">
                            <Link to="#" className="header__qr-link">
                                <img src={appStore} alt="App Store" className="header__qr-download-img" />
                            </Link>
                            <Link to="#" className="header__qr-link">
                                <img src={googlePlay} alt="Google Play" className="header__qr-download-img" />
                            </Link>
                            <Link to="#" className="header__qr-link">
                                <img src={appGalley} alt="App Gallery" className="header__qr-download-img" />
                            </Link>
                        </div>
                    </div>

                    <li className="header__navbar-item">
                        <span className="header__navbar-title--no-pointer">{t('layout2.ketnoi')}</span>
                        <Link to="#" className="header__navbar-icon-link">
                            <BiLogoFacebookCircle className="header__navbar-icon fa-brands fa-facebook" />
                        </Link>
                        <Link to="#" className="header__navbar-icon-link">
                            <BiLogoInstagram className="header__navbar-icon fa-brands fa-instagram" />
                        </Link>
                    </li>
                    <li className="header__navbar-user-item">
                        <Dropdown />
                    </li>
                </ul>
                <ul className="header__navbar-list">
                    <li className="header__navbar-item header__navbar-item--has-notify">
                        <Link to="#" className="header__navbar-item-link">
                            <BiBell className="header__navbar-icon fa-regular fa-bell" />
                            {t('layout3.thongbao')}
                        </Link>
                        <div className="header__notify">
                            <header className="header__notify-header">
                                <h3>Thông Báo Mới Nhận</h3>
                            </header>
                            <ul className="header__notify-list">
                                <li className="header__notify-item header__notify-item--viewed">
                                    <Link to="#" className="header__notify-link">
                                        <img src={Spay} className="header__notify-img" alt="" />
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">{t('headernav1.spay')}</span>
                                            <span className="header__notify-descriotion">{t('headernav2.baotri')}</span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="header__notify-item">
                                    <Link to="#" className="header__notify-link">
                                        <img src={Voucher} className="header__notify-img" alt="" />
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">{t('headernav3.voucher')}</span>
                                            <span className="header__notify-descriotion">
                                                {t('headernav4.vouchers')}
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="header__notify-item header__notify-item--viewed">
                                    <Link className="header__notify-link">
                                        <img alt="" src={Sale} className="header__notify-img" />
                                        <div className="header__notify-info">
                                            <span className="header__notify-name">{t('headernav7.tet')}</span>
                                            <span className="header__notify-descriotion">{t('headernav5.fuji')}</span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <footer className="header__notify-footer">
                                <Link className="header__notify-footer-btn">{t('headernav6.view')}</Link>
                            </footer>
                        </div>
                    </li>
                    <li className="header__navbar-item">
                        <Link className="header__navbar-item-link">
                            <RiQuestionLine className="header__navbar-icon fa-regular fa-circle-question" />
                            {t('layout4.giup')}
                        </Link>
                    </li>
                    {!token && (
                        <div>
                            <li
                                class="header__navbar-item header__navbar-item--strong header__navbar-item--separate"
                                onClick={() => {
                                    navigate('/register');
                                }}
                            >
                                {t('layout5.dangky')}
                            </li>
                            <li
                                class="header__navbar-item header__navbar-item--strong header__navbar-item--separate"
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                {t('layout6.dangnhap')}
                            </li>
                            <li
                                class="header__navbar-item header__navbar-item--strong"
                                onClick={() => {
                                    navigate('/active');
                                }}
                            >
                                Active
                            </li>
                        </div>
                    )}
                    {token && (
                        <li className="header__navbar-item header__navbar-user">
                            <img src={'data:image/jpg;base64,' + image} alt="" className="header__navbar-user-img" />
                            <span className="header__navbar-user-name">{name}</span>
                            <ul className="header__navbar-user-menu">
                                <li className="header__navbar-user-item">
                                    <Link to="/user/profile">{t('layout7.taikhoan')}</Link>
                                </li>
                                <li className="header__navbar-user-item">
                                    <Link to="/user/order">{t('layout8.donmua')}</Link>
                                </li>
                                <li className="header__navbar-user-item header__navbar-user-item--separate">
                                    <Link
                                        to="/home"
                                        onClick={() => {
                                            btnLogoutClick();
                                        }}
                                    >
                                        {t('layout9.dangxuat')}
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    )}
                    <div></div>
                </ul>
            </nav>
        </div>
    );
};
