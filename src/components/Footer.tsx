import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-center text-sm text-[#333] py-6">
      <div className="space-y-5">
        {/* Corporate Address */}
        <p>
          Corporate Address: B Doza & Co., Bashar Square, 2nd Floor, 108 Agrabad
          Commercial Area, Chattogram 4000, Bangladesh
        </p>

        {/* Email */}
        <p>
          Email Address: <span className="font-semibold">info@bdoza.com</span>
        </p>

        {/* Company Info */}
        <p>©2022 by B Doza &amp; Company</p>
      </div>
      {/* Copyright */}
      <p className="text-[13px] mt-7">
        © 2025 – All rights reserved with Industry Insider | Developed By{' '}
        <a href="https://bepro.it.com/" className="font-semibold">
          BePro IT
        </a>
      </p>
    </footer>
  );
};

export default Footer;
