import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Button from '../components/Button';
import CustomerCard from '../components/CustomerCard';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import customerData from '../data/customer-data';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh1: file(relativePath: { eq: "frosh-1.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        logo1: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cover: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
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
            <title>Froshters, Inc. | Home</title>
            <link rel="canonical" href="https://susfrosh.com" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 space-y-4 text-center">
          <Img fluid={data.cover.childImageSharp.fluid} />
          <section className="container mx-auto py-8 px-4 bg-gray-200 rounded-lg text-center items-center">
            <div className="flex items-center">
              <div className="flex-auto">
                <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold leading-none">
                  Sign up for the best week of your life!
                </h1>
              </div>
              <div className="flex-auto">
                <p>
                  <a href="https://www.mcgilloweek.ca">
                    <Button size="sm:l md:xl">Registration Opening Soon</Button>
                  </a>
                </p>
              </div>
            </div>
          </section>
        </section>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="text-3xl font-semibold leading-tight">Join us August 27th - 30th!</h3>
              <p className="mt-6 text-l font-light leading-relaxed">
                When students register for Frosh, they&apos;re signing up for four days of engaging
                virtual events with the goal of introducing students to the McGill and Montreal
                community. No matter where our Froshies are this year they will have the opportunity
                to foster connections in a safe and inclusive online environment. The Science
                coordinators, leaders, and community can’t wait to see you for this once in a
                lifetime opportunity!
              </p>
            </div>
          }
          secondarySlot={
            <Img
              fluid={data.frosh1.childImageSharp.fluid}
              alt="Photo of many students in a crowd at a concert"
            />
          }
        />
        {/* <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="text-3xl font-semibold leading-tight">Check out last year</h3>
              <p className="mt-8 text-xl font-light leading-relaxed">It was pretty great.</p>
            </div>
          }
          secondarySlot={
            <iframe
              title="Science Frosh 2019 Video"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/s9Wx3ymS1Qk"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          }
        /> */}
        {/* <section id="stats" className="py-20 lg:pt-32">
          <div className="container mx-auto text-center">
            <LabelText className="text-gray-600">Our customers get results</LabelText>
            <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
              <div className="w-full sm:w-1/3">
                <StatsBox primaryText="+100%" secondaryText="Stats Information" />
              </div>
            </div>
          </div>
        </section> */}
        <section id="testimonials" className="py-20 lg:py-40">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:-mx-3">
              {customerData.map(customer => (
                <div key={customer.customerName} className="flex-1 px-3">
                  <CustomerCard customer={customer} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
          <h3 className="text-3xl mx-2 font-semibold">
            Register now for four days of exciting interactive events and bonding activities.
          </h3>
          <p className="mt-8 mx-2 text-xl font-light">
            For more information on what is included in your Frosh package, check out our{' '}
            <Link className="text-gray-800 underline" to="/about">
              About page.
            </Link>
          </p>
          <p className="mt-8">
            <a href="https://www.mcgilloweek.ca">
              <Button size="xl">Registeration Opening Soon</Button>
            </a>
          </p>
        </section>
      </Layout>
    )}
  />
);
