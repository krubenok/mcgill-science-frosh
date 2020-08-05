import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        icon: file(relativePath: { eq: "susicon.png" }) {
          childImageSharp {
            fluid(maxHeight: 150) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="container mx-auto py-4 px-3 text-gray-800">
        <div className="flex justify-around">
          <div className="flex-3 px-3 text-center">
            <h2 className="text-m lg:text-lg font-semibold">Copyright SUS 2020</h2>
            <div className="px-8 py-4 h-4">
              <a href="https://sus.mcgill.ca" target="_blank" rel="noopener noreferrer">
                <Img
                  fluid={data.icon.childImageSharp.fluid}
                  alt="Science undergraduate society logo"
                />
              </a>
            </div>
          </div>
          <div className="flex-2 px-3">
            <h2 className="text-m lg:text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="mailto:frosh@susmcgill.ca">Email</a>
              </li>
              <li>
                <a href="https://m.me/ScienceOrientationWeek">Facebook Messenger</a>
              </li>
            </ul>
          </div>
          <div className="flex-2 px-3">
            <h2 className="text-m lg:text-lg font-semibold">Social Media</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://www.facebook.com/ScienceOrientationWeek/">Facebook</a>
              </li>
              <li>
                <a href="https://www.instagram.com/mcgill_science_frosh/">Instagram</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@mcgillscifrosh">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
