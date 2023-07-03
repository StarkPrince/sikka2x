export default function Footer() {
    return (
      <footer className="bg-primaryRed text-white p-4">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div>
              <h3 className="font-bold text-primaryYellow">Betting App</h3>
              <p className="text-white">123 Street, City, Country</p>
              <p className="text-white">Email: info@bettingapp.com</p>
              <p className="text-white">Phone: +123 456 7890</p>
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
            <p>© 2023 Betting App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  