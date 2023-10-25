import React from 'react';
import * as Io5Icons from 'react-icons/io5';
import { useAuth } from '../../auth/AuthContext';

export const Sidebar = () => {
    const auth = useAuth();

    const handleLogout = () => {
        console.log('auth :>> ', auth);
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
        {
            title: 'Advice',
            path: '/Advice',
            icons: <Io5Icons.IoInformationCircleOutline />,
            cName: 'nav-text',
        },
        // {
        //     title: 'Logout',
        //     path: '/Logout',
        //     icons: <Io5Icons.IoLogOutOutline />,
        //     cName: 'nav-text',
        //     action: handleLogout(),
        // },
    ];
};

export default Sidebar;
