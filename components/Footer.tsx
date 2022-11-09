import Link from 'next/link';
import Image from 'next/image';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="box-border flex items-center justify-center h-32 py-5 m-3 mt-20 text-center border-t-2 border-gray-200 w-100">
        <Link href="/" className="font-bold">
          Reece Rose
        </Link>
        <nav className="ml-auto">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/ReeceRose/"
                className="mr-2"
              >
                <Image src="/github.svg" alt="GitHub" height="24" width="24" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/reece-rose-5b2864116/"
              >
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  height="24"
                  width="24"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
