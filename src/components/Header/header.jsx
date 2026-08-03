"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {Play} from "lucide-react"
import styles from "./header.module.css";
import "./header.module.css"

const links = [
    { name: "Accueil",path: "/" },
    { name: "Nous rejoindre",path: "https://discord.gg/XhcPUmR92v" },
    { name: "Réglements",path: "/rules" },
    { name: "Boutique", path: "/boutique" },
    { name: "Equipe",path: "/equipe" },
];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <>
            <header className={`${styles.header}`}>
                <Link href="/" className={styles.logo}>
                     <img src="./logo.png" alt="Logo" className={styles.logoImage} /> Festiny Roleplay
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navLinks}>
                        {links.map((link) => (
                            <li key={link.name} className={pathname === link.path ? styles.active : ""}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`} onClick={() => setMenuOpen((p) => !p)} aria-label="Ouvrir le menu">
                    <span /><span /><span />
                </button>
            </header>

            <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ""} `}>
                <ul>
                    {links.map((link) => (
                        <li key={link.name} className={pathname === link.path ? styles.active : ""}>
                            <Link href={link.path} onClick={() => setMenuOpen(false)}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default Header;