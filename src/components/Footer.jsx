export default function Footer() {
    return (
      <footer className="bg-primaryRed text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-primaryYellow">SIKKA 2X</h3>
              <p className="text-white">GameTech Studio</p>
              <p className="text-white">Pune, Maharashtra - 412207 </p>
              <p className="text-white">Contact: 7610051000</p>
              <p className="text-white">Email: Admin@sikka2x.com</p>
            </div>
            <div>
              <h3 className="font-bold text-primaryYellow">Quick Links</h3>
              <ul>
                <li><a href="/terms" className="block mt-2 text-white hover:text-primaryYellow">Terms & Conditions</a></li>
                <li><a href="/privacy" className="block mt-2 text-white hover:text-primaryYellow">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-4 text-white">
            <p>© 2023 SIKKA 2X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  