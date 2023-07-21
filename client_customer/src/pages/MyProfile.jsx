import React from 'react';
import '../assets/css/MyProfile.css';
import { User } from '../components';

export const MyProfile = () => {
    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row sm-gutter app__content">
                    <User />
                    <div className="col l-10 m-9 c-9">
                        <div className="profile__contents">
                            <div className="profile__contents-header">
                                <h1 className="content-heading">Hồ Sơ Của Tôi</h1>
                                <div className="content-des">Quản lý thông tin hồ sơ để bảo mật tài khoản</div>
                            </div>
                            <div className="profile__info">
                                <form action className="profile__form">
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Email</div>
                                        <div className="detail-input">Bo email vao day</div>
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Tên</div>
                                        <input placeholder="Tên người dùng" type="text" className="detail-input" />
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Số Điện Thoại</div>
                                        <input placeholder="Số điện thoại" type="text" className="detail-input" />
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Địa chỉ</div>
                                        <input placeholder="Địa chỉ" type="text" className="detail-input" />
                                    </div>
                                    <div className="profile__form-detail">
                                        <div className="detail-label">Ngày Sinh</div>
                                        <div className="detail-input">
                                            <select className="birth-date ">
                                                <option value>Ngày</option>
                                                <option value>1</option>
                                                <option value>2</option>
                                                <option value>3</option>
                                                <option value>4</option>
                                                <option value>5</option>
                                                <option value>6</option>
                                                <option value>7</option>
                                                <option value>8</option>
                                                <option value>9</option>
                                                <option value>10</option>
                                                <option value>11</option>
                                                <option value>12</option>
                                                <option value>13</option>
                                                <option value>14</option>
                                                <option value>15</option>
                                                <option value>16</option>
                                                <option value>17</option>
                                                <option value>18</option>
                                                <option value>19</option>
                                                <option value>20</option>
                                                <option value>21</option>
                                                <option value>22</option>
                                                <option value>23</option>
                                                <option value>24</option>
                                                <option value>25</option>
                                                <option value>26</option>
                                                <option value>27</option>
                                                <option value>28</option>
                                                <option value>29</option>
                                                <option value>30</option>
                                                <option value>31</option>
                                            </select>
                                            <select className="birth-month">
                                                <option value>Tháng</option>
                                                <option value>1</option>
                                                <option value>2</option>
                                                <option value>3</option>
                                                <option value>4</option>
                                                <option value>5</option>
                                                <option value>6</option>
                                                <option value>7</option>
                                                <option value>8</option>
                                                <option value>9</option>
                                                <option value>10</option>
                                                <option value>11</option>
                                                <option value>12</option>
                                            </select>
                                            <select className="birth-year">
                                                <option value>Năm</option>
                                                <option value>1999</option>
                                                <option value>2000</option>
                                                <option value>2001</option>
                                                <option value>2002</option>
                                                <option value>2003</option>
                                                <option value>2004</option>
                                                <option value>2005</option>
                                                <option value>2006</option>
                                                <option value>2007</option>
                                                <option value>2008</option>
                                                <option value>2009</option>
                                                <option value>2010</option>
                                                <option value>2011</option>
                                                <option value>2012</option>
                                                <option value>2013</option>
                                                <option value>2014</option>
                                                <option value>2015</option>
                                                <option value>2016</option>
                                                <option value>2017</option>
                                                <option value>2018</option>
                                                <option value>2019</option>
                                                <option value>2020</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="profile__form-detail">
                                        <button className="btn btn--primary ">Cập Nhật</button>
                                    </div>
                                </form>
                                <div className="profile__avatar">
                                    <div className="avatar__upload">
                                        <img src="./assets/img/avartar.png" alt="" className="avatar__upload-img" />
                                        <button className="btn btn--primary avatar__upload-btn">Chọn ảnh</button>
                                        <div className="avtar__upload-text">
                                            <div style={{ marginTop: 12 }}>Dụng lượng file tối đa 1 MB</div>
                                            <div style={{ marginTop: 12 }}>Định dạng .jpg .jpeg .png</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
