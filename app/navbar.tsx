"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && searchInput) {
      router.push(`/wallet_address?query=${encodeURIComponent(searchInput)}`);
      setSearchInput('');
    }
  };

  return (
    <nav className="bg-[#161A20] text-[#FFFFFF] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/fullogo.svg"
                alt="JBIZ Logo"
                width={60}
                height={80}
                className="mr-2"
              />
            </Link>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex flex-1 justify-evenly items-center font-quantico text-[#FFFFFF]">
            <Link href="/" className="hover:text-[#F5B056]">Home</Link>
            <Link href="/transaction" className="hover:text-[#F5B056]">Transaction</Link>
            <Link href="/aboutus" className="hover:text-[#F5B056]">About us</Link>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-xl ml-8">
            <div className="relative font-quantico w-full">
              <input
                type="text"
                placeholder="Search by address / Txn Hash / Block / Token / Domain"
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#F5B056]"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#F5B056] hover:text-[#FFFFFF] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-quantico">
              <Link href="/" className="block px-3 py-2 rounded-md text-[#F5B056] hover:text-[#FFFFFF] hover:bg-gray-700">Home</Link>
              <Link href="/transaction" className="block px-3 py-2 rounded-md text-[#F5B056] hover:text-[#FFFFFF] hover:bg-gray-700">Transaction</Link>
              <Link href="/aboutus" className="block px-3 py-2 rounded-md text-[#F5B056] hover:text-[#FFFFFF] hover:bg-gray-700">About us</Link>
            </div>
            <div className="px-2 pt-2 pb-3">
              <div className="relative font-quantico">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#F5B056]"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  onKeyDown={handleSearch}
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
