import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-start text-xl">
        <div>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" href="/about">
          About
        </Link>
        <Link className="px-4" href="/team">
          Team
        </Link>
        {/* <Link className="px-4" href="/schedule">
          Schedule
        </Link> */}
        {/* <Link className="px-4" href="/resources">
          Resources
        </Link> */}
        {/* <Link className="px-4" href="/partners">
          Partners
        </Link> */}
        <Link className="px-4" href="/contact">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <a href="https://www.mcgilloweek.ca">
          <Button className="text-sm">Register Now</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
