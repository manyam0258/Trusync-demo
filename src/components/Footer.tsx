import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-lg font-bold">Trusync Technologies LLP</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Hyderabad, Telangana, India
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              info@trusync.com | +91-XXXXX-XXXXX
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white">
              <Github />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800 dark:text-gray-400 dark:hover:text-white">
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trusync Technologies LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;