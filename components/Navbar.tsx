import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link href="/" className="nav-name">
          Ethan Liu
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}