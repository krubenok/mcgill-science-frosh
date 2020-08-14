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
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.alto.childImageSharp.fluid} alt="Alto's" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.coc.childImageSharp.fluid} alt="Chef on Call" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.diperie.childImageSharp.fluid} alt="La Diperie" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.freshii.childImageSharp.fluid} alt="Freshii" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.hatter.childImageSharp.fluid} alt="The Mad Hatters" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img
                fluid={data.licm.childImageSharp.fluid}
                alt="Legal Information Clinic at McGill"
              />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.mcgillpizza.childImageSharp.fluid} alt="McGill Pizza" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.meddirection.childImageSharp.fluid} alt="Med Direction McGill" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.pannizza.childImageSharp.fluid} alt="Pannizza" />
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.wize.childImageSharp.fluid} alt="Wize" />
            </div>
          </div>
        </section>
      </Layout>
    )}
  />
);
