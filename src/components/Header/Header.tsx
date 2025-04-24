import React, { useEffect, useState } from "react";
import { TrendingUp, Moon, Menu } from "lucide-react";

const Header: React.FC = () => {
  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Sync theme with local storage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-background-dark/80 backdrop-blur-md border-b border-neutral-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <TrendingUp className="w-6 h-6 text-primary" />
          <span className="ml-2 text-xl font-bold">CryptoTrack</span>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-neutral-200 hover:text-primary transition-colors">Cryptocurrencies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Exchanges</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">NFTs</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </nav>

          <button 
            className="p-2 rounded-full hover:bg-neutral-800 transition-colors"
            onClick={toggleTheme}
          >
            <Moon className="w-5 h-5" />
          </button>
        </div>

        <button className="md:hidden p-2 rounded-full hover:bg-neutral-800 transition-colors">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
