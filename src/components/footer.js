function Footer() {
    return (
      <footer className="bg-black">
        <ul className="flex items-center justify-end max-w-4xl mx-auto p-4 md:p-8 text-sm text-white">
          <li className="mr-8">
            Created by{" "}
            <a href="https://github.com/developerpeachy" target="_blank" className="font-bold">
              developerpeachy
            </a>
          </li>
  
          <li className="mr-8">
            <a
              href="https://twitter.com/rosalie_dev"
              target="_blank"
              className="font-hairline"
            >
              Twitter
            </a>
          </li>
          <li className="mr-8">
            <a
              href="https://www.instagram.com/rosie.dev/"
              target="_blank"
              className="font-hairline"
            >
              Instagram
            </a>
          </li>
          <li className="mr-8">
            <a
              href="mailto:rosalinda.prom@gmail.com"
              target="_blank"
              className="font-hairline"
            >
              Email
            </a>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;