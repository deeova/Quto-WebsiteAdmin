import React from 'react'
import * as MdIcons from "react-icons/md";
import * as CgIcons from "react-icons/cg";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
    {
        title: 'Profile',
        path: '/',
        icon: <CgIcons.CgProfile />,
        cName: 'nav-text'
    },
    {
        title: 'Menu',
        path: '/menu',
        icon: <BiIcons.BiFoodMenu />,
        cName: 'nav-text'
    },
    {
        title: 'Orderan',
        path: '/orderan',
        icon: <MdIcons.MdRestaurantMenu />,
        cName: 'nav-text'
    },
    {
        title: 'History',
        path: '/history',
        icon: <BiIcons.BiHistory />,
        cName: 'nav-text'
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <CgIcons.CgLogOut />,
        cName: 'nav-text'
    },
]
