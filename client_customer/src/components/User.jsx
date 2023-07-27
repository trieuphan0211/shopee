import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { GrEdit } from 'react-icons/gr';
import { FiUser } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa6';
import { BiShoppingBag } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';
import MyContext from '../contexts/MyContext';

import avatar from '../assets/img/avartar.png';

import { useTranslation } from 'react-i18next';

export const User = () => {
    const { customer } = useContext(MyContext);
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        if (customer) {
            setImage(customer.image);
            setName(customer.name);
        } else {
            setImage(avatar);
            setName('unknown');
        }
    }, [customer]);

    return (
        <div className="col l-2 m-3 c-3">
            <div className="order">
                <div className="order_info">
                    <div className="oder_info_name">
                        <img src={'data:image/jpg;base64,' + image} className="order_info-img" alt="" />
                        <div className="order_info-edit">
                            <p>{name}</p>
                            <p>
                                <GrEdit /> {t('user1.edit')}{' '}
                            </p>
                        </div>
                    </div>

                    <div className="oder_list">
                        <div>
                            <Link to="/user/profile" className="none-decorate">
                                <FiUser style={{ marginRight: 0 }} /> {t('layout7.taikhoan')} {''}
                            </Link>
                        </div>
                        <div>
                            <Link to="/user/change-password" className="none-decorate">
                                <FaLock style={{ marginRight: 0 }} /> {t('user2.doimk')} {''}
                            </Link>
                        </div>
                        <div className="sellected">
                            <Link to="/user/order" className="none-decorate">
                                <BiShoppingBag style={{ marginRight: 0 }} /> {t('layout8.donmua')}
                            </Link>
                        </div>
                    </div>
                </div>
                <Outlet />
            </div>
        </div>
    );
};
