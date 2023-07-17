import React from 'react';
import '../assets/css/MyProfile.css';

export const MyProfile = () => {
    return (
        <div>
            <div>
                <div className="col l-10 m-12 c-12">
                    <div className="Profile">
                        <div className="Profile__customer_header border-b">
                            <h1 className="Profile__customer_header_1 ">Hồ Sở Của Tôi</h1>
                            <div className="Profile__customer_header_2">
                                Quản lý thông tin hồ sơ để bảo mật tài khoản
                            </div>
                        </div>
                        <div className="Profile__name">
                            <form action className="Profile__detail">
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        Email
                                        <input
                                            placeholder="email"
                                            type="email"
                                            className="Profile__detail-buttonEmail update__boder"
                                        />
                                    </div>
                                </div>
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        Tên
                                        <input
                                            placeholder="Tên Người Dùng"
                                            type="email"
                                            className="Profile__detail-buttonEmail update__boder"
                                        />
                                    </div>
                                </div>
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        Số Điện Thoại
                                        <input
                                            placeholder="Số Điện thoại"
                                            type="email"
                                            className="Profile__detail-buttonEmail update__boder"
                                        />
                                    </div>
                                </div>
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        Địa chỉ
                                        <input
                                            placeholder="Địa Chỉ"
                                            type="email"
                                            className="Profile__detail-buttonEmail update__boder"
                                        />
                                    </div>
                                </div>
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        Ngày Sinh
                                        <div className="Profile__detail-buttonEmail edit">
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
                                </div>
                                <div className="Profile__detail-Email">
                                    <div className="email">
                                        <p />
                                        <button className="Profile__detail-buttonEmail btn__update">Cập Nhật</button>
                                    </div>
                                </div>
                            </form>
                            <div className="Add__avatar">
                                <div className="Add__avatar-1">
                                    <div className="Import_img">
                                        <img src="./assets/img/avartar.png" alt className="Import_img-0" />
                                    </div>
                                    <div className="Import_img-1 input">
                                        <label className="custom-file-upload">
                                            <input type="file" accept="image/*" />
                                            <span>Chọn ảnh</span>
                                        </label>
                                    </div>
                                    <div className="Text_push">
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
    );
};
