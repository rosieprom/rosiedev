function Footer() {
    return (
      <footer className="bg-black">
          <div class="mx-auto">
            <div class="w-full flex flex-col md:flex-row py-6">
                <div className="flex-1 sm:flex-wrap">
                    <p className="font-sans inline-block md:block py-4 text-white text-center">
                        Created by  {" "}
                        <a href="https://github.com/developerpeachy" target="_blank" className="font-bold no-underline hover:underline text-white hover:text-yellow-500">
                        developerpeachy
                        </a>
                    </p>
                </div> 
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;