import React from 'react';
import { Link } from 'gatsby';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';

const Header = () => (
  <header className="z-50 sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-around content-around items-center mx-auto py-4">
      <div className="flex items-start text-xl">
        <div>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-around content-around items-center mt-4 sm:mt-0">
        <Link className="px-2 my-2" href="/about">
          About
        </Link>
        <Link className="px-2 my-2" href="/team">
          Team
        </Link>
        <Link className="px-2 my-2" href="/schedule">
          Schedule
        </Link>
        <Link className="px-2 my-2" href="/resources">
          Resources
        </Link>
        <Link className="px-2 my-2" href="/partners">
          Partners
        </Link>
        <Link className="px-2 my-2" href="mailto:frosh@susmcgill.ca">
          Contact
        </Link>
      </div>
      <div className="hidden md:block">
        <a href="https://www.mcgilloweek.ca">
          <Button className="text-sm">Registration Opening Soon</Button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
