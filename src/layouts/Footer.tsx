const Footer = () => {
  return (
    <footer className="bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-10 text-neutral-content p-4">
      <div className="footer container mx-auto px-12 items-center">
        <aside className="grid-flow-col items-center">
          <img src="images/Logo2.png" alt="sitevia.code" className="w-8" />
          <p>Copyright © 2025 - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center">
          <a>
            <img
              src="/images/icons/linkedin.svg"
              alt="linkedin"
              className="w-6"
            />
          </a>
          <a>
            <img src="/images/icons/ig.svg" alt="ig" className="w-6" />
          </a>
          <a>
            <img src="/images/icons/email.svg" alt="email" className="w-7" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
