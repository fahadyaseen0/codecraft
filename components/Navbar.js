import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">C</span>
          <div className="logo-text">
            <span>CodeCraft</span>
            <small>Digital Products Studio</small>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="nav-cta">
            Get in Touch
          </Link>
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
