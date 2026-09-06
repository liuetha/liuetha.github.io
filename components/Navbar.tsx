import Link from "next/link";

export default function Navbar() {
  return (
    <header className="site-header page-width">
      <Link href="/" className="site-name">Ethan Liu</Link>
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <Link href="/#music">Music</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
