import React from 'react';
import * as Io5Icons from 'react-icons/io5';
import { useAuth } from '../../auth/AuthContext';

export const Sidebar = () => {
    const auth = useAuth();

    const handleLogout = () => {
        auth.logout();
    };

    return [
        {
            title: 'Home',
            path: '/Home',
            icons: <Io5Icons.IoHomeOutline />,
            cName: 'nav-text',
        },
        {
            title: 'Profile',
            path: '/Profile',
            icons: <Io5Icons.IoPersonCircle />,
            cName: 'nav-text',
        },
        {
            title: 'ActivityCard',
            path: '/ActivityCard',
            icons: <Io5Icons.IoHeartCircleOutline />,
            cName: 'nav-text',
        },
    ];
};

export default Sidebar;
