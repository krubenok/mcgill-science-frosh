import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        leaders: file(relativePath: { eq: "leaders.jpg" }) {
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
            <title>Froshters, Inc. | Team</title>
            <link rel="canonical" href="https://susfrosh.com/team" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Meet the team</h1>
          <h2 className="text-3xl lg:text-4xl font-semibold">Coordinators</h2>
          <p className="text-m lg:text-l mt-6">
            Coordinators are upper year students who spend their summer organizing Frosh and making
            sure everything runs smoothly. There are 14 Science Orientation Coordinators and they
            will be wearing blue and white tie dye tanks. Don’t hesitate to contact a Coord if you
            have any serious problems during Frosh.
          </p>
          <div className="flex flex-wrap leading-normal">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord. I need the pictures
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-4">
              Hello, this is my name, I am a coord.
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-semibold leading-tight">Leaders</h2>
          <p className="text-m lg:text-l mt-6 font-light">
            Frosh leaders are your guides for the week. These are McGill Students who have
            previously participated in Frosh and want to volunteer their time to guide incoming
            students through this awesome new experience. They are selected out of a competitive
            pool of applicants and complete extensive training on harm reduction, online skills,
            consent, and more!{' '}
          </p>
          <Img
            fluid={data.leaders.childImageSharp.fluid}
            alt="photo of leaders guiding a group of new students in a parc"
          />
          <h3 className="text-l lg:text-xl font-semibold leading-tight">Access Allies</h3>
          <p className="text-m lg:text-l mt-6 font-light">
            Access allies are Frosh leaders with additional accessibility and mental health training
            that are there for you if you don’t feel comfortable speaking with your own Leaders or
            need a little extra support! After you register for Frosh you will receive more
            information on how to identify and contact access allies.
          </p>
        </section>
      </Layout>
    )}
  />
);
