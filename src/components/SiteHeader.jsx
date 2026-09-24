import { useEffect, useState } from "react";
import { FiBarChart2, FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import styles from "./siteHeader.module.scss";

const navigationLinks = [
    ["Raw data", "#raw-data"],
    ["Single record", "#single-data"],
    ["Statistics", "#statistics"],
    ["Gamma", "#gamma"],
];

function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        let lastScrollPosition = window.scrollY;

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            setVisible(currentScrollPosition <= 8 || currentScrollPosition < lastScrollPosition);
            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${visible ? styles.visible : styles.hidden}`}>
            <div className={styles.inner}>
                <a className={styles.brand} href="#top" onClick={closeMenu}>
                    <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Ashish Ranjan logo" />
                    <span>
                        <strong>Wine statistics</strong>
                        <small>Interactive dataset explorer</small>
                    </span>
                </a>

                <nav className={`${styles.navigation} ${menuOpen ? styles.open : ""}`} aria-label="Page sections">
                    {navigationLinks.map(([label, href]) => (
                        <a key={href} href={href} onClick={closeMenu}>{label}</a>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <a className={styles.datasetLink} href="#statistics">
                        <FiBarChart2 aria-hidden="true" />
                        <span>Explore data</span>
                        <FiChevronDown aria-hidden="true" />
                    </a>
                    <button
                        className={styles.menuButton}
                        type="button"
                        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((current) => !current)}
                    >
                        {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default SiteHeader;
