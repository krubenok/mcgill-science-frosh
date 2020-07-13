import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        sus: file(relativePath: { eq: "sus.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
        <div className="flex -mx-3">
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">© 2020 Science Undergraduate Society</h2>
            <div className="px-8 py-4">
              <a href="https://sus.mcgill.ca" target="_blank" rel="noreferrer">
                <Img fluid={data.sus.childImageSharp.fluid} />
              </a>
            </div>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Contact Us</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="mailto:frosh@susmcgill.ca">Email</a>
              </li>
              <li>
                <a href="m.me/ScienceOrientationWeek">Facebook Messenger</a>
              </li>
            </ul>
          </div>
          <div className="flex-1 px-3">
            <h2 className="text-lg font-semibold">Social Media</h2>
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
