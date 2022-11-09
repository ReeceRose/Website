import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="flex h-24 m-3 align-items-center">
        <Link href="/" className="font-bold">
          Reece Rose
        </Link>
        <nav className="ml-auto">
          <a
            href="mailto:reecerose18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
