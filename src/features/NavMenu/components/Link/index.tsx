"use client";

// imports ================================================== //
import styles from './index.module.css';
import type { NavLink as NavLinkType } from './types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// main ===================================================== // 
const NavLink: NavLinkType = ({ children, ...props }) => {

    const pathname = usePathname();
    const isActiveLink = (props.href === pathname);

    if (isActiveLink) {
        if (props.className) {
            props.className += ` ${styles.active_link}`;
        } else {
            props.className = `${styles.active_link}`;
        }
    }
    props.className += ` ${styles.link}`;

    return (
        <Link {...props}>
            {children}
        </Link>
    );

}

// export =================================================== //
export default NavLink;