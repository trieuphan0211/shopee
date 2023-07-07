import React from 'react';
import {HeaderNavBar, HeaderWithSearch} from './index';

export const Header = () =>  {
    return (
        <header class="header">
        <div class="grid wide">
            <HeaderNavBar/>
            <HeaderWithSearch/>
        </div>
        </header>

    );
    }