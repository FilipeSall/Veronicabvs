import { NavLink } from "react-router-dom";
import styles from "./mobilenav.module.scss";
import linkedinHoverIcon from "../../../assets/svgs/links/linkedinhover.svg";
import emailHoverIcon from "../../../assets/svgs/links/emailhover.svg";
import wppHoverIcon from "../../../assets/svgs/links/wppHover.svg";
import aboutIcon from "../../../assets/svgs/ABOUT ON.svg";
import homeIcon from "../../../assets/svgs/House Icon.svg";

type MobileNavItem = {
  id: string;
  text: string;
  path: string;
  icon: string;
  isExternal?: boolean;
};

const mobileNavItems: MobileNavItem[] = [
  {
    id: "linkedin",
    text: "Linkedin",
    path: "https://www.linkedin.com/in/veronicabvs/",
    icon: linkedinHoverIcon,
    isExternal: true,
  },
  {
    id: "email",
    text: "E-mail",
    path: "mailto:vebarbosa@hotmail.com",
    icon: emailHoverIcon,
    isExternal: true,
  },
  {
    id: "inicio",
    text: "Inicio",
    path: "/",
    icon: homeIcon,
  },
  {
    id: "whatsapp",
    text: "WhatsApp",
    path: "https://wa.me/5527998741918",
    icon: wppHoverIcon,
    isExternal: true,
  },
  {
    id: "sobre",
    text: "Sobre",
    path: "/sobre-mim",
    icon: aboutIcon,
  },
];

function MobileNav() {
  return (
    <nav className={styles.mobileNav} aria-label="Navegação mobile">
      <ul className={styles.mobileNavList}>
        {mobileNavItems.map((item) => (
          <li key={item.id} className={styles.mobileNavItem}>
            {item.isExternal ? (
              <a
                href={item.path}
                className={styles.mobileNavLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.text}
              >
                <img src={item.icon} alt="" className={styles.mobileNavIcon} />
                <span className={styles.mobileNavText}>{item.text}</span>
              </a>
            ) : (
              <NavLink
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.mobileNavLink} ${styles.mobileNavLinkActive}`
                    : styles.mobileNavLink
                }
                aria-label={item.text}
              >
                <img src={item.icon} alt="" className={styles.mobileNavIcon} />
                <span className={styles.mobileNavText}>{item.text}</span>
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNav;
