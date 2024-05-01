'use client'
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    LinkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import clsx from "clsx";
import {usePathname} from "next/navigation";

const links = [
    {
        name: 'Dashboard',
        href: '/',
        icon: HomeIcon,
    },
    {
        name: 'Invoices',
        href: '/invoices',
        icon: DocumentDuplicateIcon,
    },
    {
        name: 'Customers',
        href: '/customers',
        icon: UserGroupIcon,
    },
];
const NavLinks = () => {
    const pathname = usePathname()
    return (
        <>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(`flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`, {
                                'text-blue-600': pathname === link.href,
                            }
                        )}
                    >
                        <LinkIcon className="w-6"/>
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
};

export default NavLinks;
