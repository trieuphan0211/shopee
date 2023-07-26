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

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="grid wide footer__content">
                <div className="grid__row">
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Trung Tâm Trợ Giúp
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
                                    Hướng Dẫn Mua Hàng
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Hướng Dẫn Bán Hàng
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Thanh Toán
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Shopee Xu
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Vận Chuyển
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Trả Hàng &amp; Hoàn Tiền
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Chăm Sóc Khách Hàng
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Chính Sách Bảo Hành
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">VỀ SHOPEE</h3>
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Giới Thiệu Về Shopee Việt Nam
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Tuyển Dụng
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Điều Khoản Shopee
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Chính Sách Bảo Mật
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Chính Hãng
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Kênh Người Bán
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Flash Sales
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Chương Trình Tiếp Thị Liên Kết Shopee
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to="#" className="footer-item__link">
                                    Liên Hệ Với Truyền Thông
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col l-2-4 m-4 c-6">
                        <h3 className="footer__heading">ĐƠN VỊ VẬN CHUYỂN</h3>
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
                        <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
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
                        <h3 className="footer__heading">TẢI ỨNG DỤNG SHOPEE NGAY THÔI</h3>
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
                            <h4>Công ty TNHH Shopee</h4>
                        </div>
                        <div className="footer-content__text">
                            <p>
                                Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh,
                                Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email:
                                cskh@hotro.shopee.vn
                            </p>
                        </div>
                        <div className="footer-content__text">
                            <p>
                                Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Long - Điện thoại liên hệ: 024 9999999
                                (ext 4567)
                            </p>
                        </div>
                        <div className="footer-content__text">
                            <p>
                                Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch &amp; Đầu tư TP Hà Nội cấp lần đầu ngày
                                10/02/2015
                            </p>
                        </div>
                        <div className="footer-content__text">
                            <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
