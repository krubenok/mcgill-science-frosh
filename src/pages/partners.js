import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        alto: file(relativePath: { eq: "sponsors/alto.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coc: file(relativePath: { eq: "sponsors/coc.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        diperie: file(relativePath: { eq: "sponsors/diperie.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        freshii: file(relativePath: { eq: "sponsors/freshii.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        hatter: file(relativePath: { eq: "sponsors/hatter.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        licm: file(relativePath: { eq: "sponsors/licm.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mcgillpizza: file(relativePath: { eq: "sponsors/mcgillpizza.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meddirection: file(relativePath: { eq: "sponsors/meddirection.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pannizza: file(relativePath: { eq: "sponsors/pannizza.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        wize: file(relativePath: { eq: "sponsors/wize.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        apt200: file(relativePath: { eq: "sponsors/apt200.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        ecoleprivee: file(relativePath: { eq: "sponsors/ecoleprivee.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cibc: file(relativePath: { eq: "sponsors/cibc.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        oxford: file(relativePath: { eq: "sponsors/oxford.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spc: file(relativePath: { eq: "sponsors/spc.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        spin: file(relativePath: { eq: "sponsors/spin.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fizz: file(relativePath: { eq: "sponsors/fizz.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="application">
          <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <title>Froshters, Inc. | Partners</title>
            <link rel="canonical" href="https://susfrosh.com/partners" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Partners</h1>
          <div className="flex flex-wrap items-center justify-around leading-normal text-black">
            <div className="w-full sm:w-full md:w-2/3 lg:w-1/2 my-10 px-6">
              <a href="https://wizedemy.com/schools/mcgill">
                <Img fluid={data.wize.childImageSharp.fluid} alt="Wize" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around leading-normal text-black">
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://altorestaurant.ca/en/">
                <Img fluid={data.alto.childImageSharp.fluid} alt="Alto's" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://apt200.com/montreal">
                <Img fluid={data.apt200.childImageSharp.fluid} alt="Apartment 200" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.cibc.com/en/personal-banking.html">
                <Img fluid={data.cibc.childImageSharp.fluid} alt="CIBC" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.chefoncalldelivery.com">
                <Img fluid={data.coc.childImageSharp.fluid} alt="Chef on Call" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://ladiperie.com">
                <Img fluid={data.diperie.childImageSharp.fluid} alt="La Diperie" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://l.facebook.com/l.php?u=http%3A%2F%2Fclubecoleprivee.com%2F&h=AT2l4yxsAkMeApcdwF4_dG0_rJRztCVxgorxVjbCzeIdb0qDagUvKicGPRFq94d6JJdmmtkCKj6HhNIjSYirxGqoF5mT7tumup9jrHJB72ttmlhWuAyWEkWB9CBCb4emMKLL3LQ">
                <Img fluid={data.ecoleprivee.childImageSharp.fluid} alt="Ecole Privee" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://fizz.ca/en?utm_source=mcgill&utm_medium=&utm_term=referral&utm_content=logo-en&utm_campaign=BTS-partnerships&fbclid=IwAR3Izt79Kb-uWp7d2nLeYMuXIeNnqUkxhsNtpLyIjVvXausJT_Mf0ptmLxs">
                <Img fluid={data.fizz.childImageSharp.fluid} alt="Fizz" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.freshii.com">
                <Img fluid={data.freshii.childImageSharp.fluid} alt="Freshii" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.madhatterpubmtl.com">
                <Img fluid={data.hatter.childImageSharp.fluid} alt="The Mad Hatters" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://licm.ca">
                <Img
                  fluid={data.licm.childImageSharp.fluid}
                  alt="Legal Information Clinic at McGill"
                />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.facebook.com/mcgillpizza/">
                <Img fluid={data.mcgillpizza.childImageSharp.fluid} alt="McGill Pizza" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://md.sus.mcgill.ca">
                <Img fluid={data.meddirection.childImageSharp.fluid} alt="Med Direction McGill" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.oxfordproperties.com/corp">
                <Img fluid={data.oxford.childImageSharp.fluid} alt="Oxford" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="http://www.pannizza.com">
                <Img fluid={data.pannizza.childImageSharp.fluid} alt="Pannizza" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://spccard.ca">
                <Img fluid={data.spc.childImageSharp.fluid} alt="SPC" />
              </a>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-10 px-6">
              <a href="https://www.spinenergie.com/en">
                <Img fluid={data.spin.childImageSharp.fluid} alt="Spin Energie" />
              </a>
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
);
