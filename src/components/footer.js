function Footer() {
    return (
      <footer className="bg-black">
          <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6"> 
                <div class="flex-1">
                    <p className="font-sans mt-2 inline-block mr-2 md:block md:mr-0 text-white">
                        Created by{" "}
                        <a href="https://github.com/developerpeachy" target="_blank" className="font-bold no-underline hover:underline text-white hover:text-yellow-500">
                        developerpeachy
                        </a>
                    </p>
                </div>
                <div className="flex-auto">
                    <p className="font-sans mt-2 inline-block mr-2 md:block md:mr-0">
                        <a
                        href="https://twitter.com/rosalie_dev"
                        target="_blank"
                        className="font-hairline no-underline hover:underline text-white hover:text-yellow-500"
                        >
                        Twitter
                        </a>
                    </p>
                </div>
                <div className="flex-auto">
                    <p className="font-sans mt-2 inline-block mr-2 md:block md:mr-0">
                        <a
                        href="https://www.instagram.com/rosie.dev/"
                        target="_blank"
                        className="ont-hairline no-underline hover:underline text-white hover:text-yellow-500"
                        >
                        Instagram
                        </a>
                    </p>
                </div>
                <div className="flex-auto">
                    <p className="font-sans mt-2 inline-block mr-2 md:block md:mr-0">
                        <a
                        href="mailto:rosalinda.prom@gmail.com"
                        target="_blank"
                        className="ont-hairline no-underline hover:underline text-white hover:text-yellow-500"
                        >
                        Email
                        </a>
                    </p>
                </div> 
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;