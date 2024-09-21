// icons.js
import { useEffect } from 'react';

const Icons = () => {
  useEffect(() => {
    // Dynamically load Ionicons
    const scriptModule = document.createElement('script');
    scriptModule.type = 'module';
    scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
    document.body.appendChild(scriptModule);

    const scriptNoModule = document.createElement('script');
    scriptNoModule.nomodule = true;
    scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
    document.body.appendChild(scriptNoModule);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(scriptModule);
      document.body.removeChild(scriptNoModule);
    };
  }, []);

  return null; // This component does not render anything
};

export default Icons;
