import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__logo">
              <Image
                src="/logo.jpg"
                alt="me"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="header__links">
              <ul>
                <li>
                  <Link href="/">
                    <a>Price List</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Bridal</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Education</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Book In</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="nav-toggle-btn">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
