import React from 'react';
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoLinkedinSquare } from 'react-icons/bi';

import appStore from '../assets/img/app_store.png';
import googlePlay from '../assets/img/google_play.png';
import appGalley from '../assets/img/app_gallery.png';
import downloadQR from '../assets/img/qr_code.png';
import bestExpress from '../assets/img/best_express.png';
import giaoHangTietKiem from '../assets/img/giao_hang_tiet_kiem.png';
import shopeeExpress from '../assets/img/shopee_epress.png';
import Be from '../assets/img/be.png';
import giaoHangNhanh from '../assets/img/giao_hang_nhanh.png';
import vnPost from '../assets/img/vn_post.png';
import grabExpress from '../assets/img/grab_express.png';
import vtPost from '../assets/img/viettel_post.png';
import jTExpress from '../assets/img/j&t_epress.png';
import ninjaVan from '../assets/img/ninja_van.png';
import CCDV from '../assets/img/logoCCDV.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="grid__row">
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">{t('footer1.chamsoc')}</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer2.trungtam')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Shopee Blog
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Shopee Mall
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer3.muahang')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer4.banhang')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer5.thanhtoan')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Shopee Xu
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer6.vanchuyen')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer25.tratien')} &amp; {t('footer26.hoantien')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer1.chamsoc')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer7.chinhsach')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">{t('footer8.veshopee')}</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer9.vespvn')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer10.tuyendung')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer11.dieukhoan')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer12.baomat')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer13.chinhhang')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('layout.kenh')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Flash Sales
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer14.lienket')}
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    {t('footer15.lienhett')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">{t('footer16.donvivc')}</h3>
                        <ul className="footer-list">
                            <li className="footer-list__shipping">
                                <img alt="" src={shopeeExpress} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={giaoHangTietKiem} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={giaoHangNhanh} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={vtPost} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={vnPost} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={jTExpress} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={grabExpress} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={ninjaVan} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={bestExpress} className="footer-list__shipping-img" />
                            </li>
                            <li className="footer-list__shipping">
                                <img alt="" src={Be} className="footer-list__shipping-img" />
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">{t('footer17.theodoi')}</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    <BiLogoFacebookCircle className="footer-item__icon fa-brands fa-facebook" />
                                    Facebook
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    <BiLogoInstagram className="footer-item__icon fa-brands fa-instagram" />
                                    Instagram
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    <BiLogoLinkedinSquare className="footer-item__icon fa-brands fa-linkedin" />
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-8 c-12">
                        <h3 className="footer__heading">{t('footer18.taiapp')}</h3>
                        <div className="footer__download">
                            <img src={downloadQR} alt="Download QR" className="footer__download-qr" />
                            <div className="footer__download-apps">
                                <Link to="#" className="footer__download-app-link">
                                    <img src={appStore} alt="App Store" className="footer__download-app-img" />
                                </Link>
                                <Link to="#" className="footer__download-app-link">
                                    <img src={googlePlay} alt="Google Play" className="footer__download-app-img" />
                                </Link>
                                <Link to="#" className="footer__download-app-link">
                                    <img src={appGalley} alt="App Gallery" className="footer__download-app-img" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="grid wide">
                    <div className="footer-contents">
                        <div className="footer-content__ccdv">
                            <Link to="#" className="footer-content__ccdv-link">
                                <img alt="" src={CCDV} className="footer-content__ccdv-img" />
                            </Link>
                        </div>
                        <div className="footer-content__heading">
                            <h4>{t('footer19.cty')}</h4>
                        </div>
                        <div className="footer-content__text">
                            <p>{t('footer20.diachi')}</p>
                        </div>
                        <div className="footer-content__text">
                            <p>{t('footer21.noidung')}</p>
                        </div>
                        <div className="footer-content__text">
                            <p>
                                {t('footer22.msdn')} &amp; {t('footer23.ngaycap')}
                            </p>
                        </div>
                        <div className="footer-content__text">
                            <p>{t('footer24.banquyen')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
