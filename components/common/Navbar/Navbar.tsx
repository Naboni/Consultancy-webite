import { useState, useEffect } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { FiMenu } from "react-icons/fi";
import { Button } from "antd";
import styles from "./Navbar.module.css";

import logo from "@/public/logo.png";

const items = ["Home", "Destinations", "Services", "About", "Contact"];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 25) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  const router = useRouter();
  const handleClick = () => {
    router.push("https://next-ts-fe.vercel.app/auth/signup");
  };
  return (
    <div>
      <nav className={`${styles.navbar} ${scrolled ? styles.addBg : ""}`}>
        <Link href="/">
          <a className={styles.navlogo}>
            <Image alt="logo" src={logo} width="60" height="60" />
          </a>
        </Link>
        <ul
          className={
            !isOpen ? styles.navmenu : styles.navmenu + " " + styles.active
          }
        >
          {items.map((e, i) => {
            return (
              <li className={styles.navitem} key={i}>
                <Link href="/">
                  <a
                    className={
                      !isOpen
                        ? styles.navlink
                        : styles.navlink + " " + styles.active
                    }
                    onClick={openMenu}
                  >
                    {e}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          icon={<FiMenu />}
          className={
            isOpen === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
          onClick={openMenu}
        ></Button>
      </nav>
    </div>
  );
}
