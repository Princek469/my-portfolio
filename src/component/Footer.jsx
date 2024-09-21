

const Footer = () => {
  return (
    <footer className="bg-gray-100    dark:bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Social Media Section */}

          {/* Copyright Information */}
          <div className="text-center">
            <p className="text-sm text-black dark:text-white  font-bold  md:text-lg">
              &copy; {new Date().getFullYear()} Prince Kumar Jha. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
