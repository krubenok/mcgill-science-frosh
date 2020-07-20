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
        alissa: file(relativePath: { eq: "alissa.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        anna: file(relativePath: { eq: "anna.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        belanna: file(relativePath: { eq: "belanna.jpeg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        charmaine: file(relativePath: { eq: "charmaine.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jared: file(relativePath: { eq: "jared.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        jia: file(relativePath: { eq: "jia.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kobi: file(relativePath: { eq: "kobi.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        leo: file(relativePath: { eq: "leo.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        maddie: file(relativePath: { eq: "maddie.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        maxine: file(relativePath: { eq: "maxine.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        meghan: file(relativePath: { eq: "meghan.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        yasmine: file(relativePath: { eq: "yasmine.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        zeynep: file(relativePath: { eq: "zeynep.jpg" }) {
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
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.jared.childImageSharp.fluid} alt="Jared" />
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Name:</strong> Jared (he/him)
              </p>
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Position:</strong> VP Internal{' '}
              </p>
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Major:</strong> Anatomy and Cell Biology{' '}
              </p>
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Frosh Advice:</strong> Never forget to be your unapologetic self!{' '}
              </p>
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Which Monsters Inc character do you identify with most?:</strong> Mike cause
                of how stressey and organized he is. I’d like to think that I’m also funny?
              </p>
              <p className="text-m lg:text-l mt-2 font-light">
                <strong>Favourite Thing at McGill:</strong> The essentially unlimited amount of
                amazing ways to get involved around campus!
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.kobi.childImageSharp.fluid} alt="Kobi" />
              <p>
                <strong>Name:</strong> Kobi (he/him)
              </p>
              <p>
                <strong>Position:</strong> Chair
              </p>
              <p>
                <strong>Major:</strong> Chemistry
              </p>
              <p>
                <strong>Frosh Advice:</strong> Everyone is nervous and excited to meet people! You
                are not alone in feeling that way!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Sulley!
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> The labs underneath Pulp &amp; Paper
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.anna.childImageSharp.fluid} alt="Annabel" />
              <p>
                <strong>Name:</strong> Annabel (she/her)
              </p>
              <p>
                <strong>Position:</strong> Communications
              </p>
              <p>
                <strong>Major:</strong> Environment
              </p>
              <p>
                <strong>Frosh Advice:</strong> This is a new experience for everyone. Going into
                frosh and first year with a positive attitude toward these new changes will make a
                huge difference in what you get out of your time here!!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Art from
                Monsters University because he’s all about the chill vibez
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> Catching up with friends at OAP in the
                fall :)
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.maddie.childImageSharp.fluid} alt="Maddie" />
              <p>
                <strong>Name:</strong> Maddie (she/her)
              </p>
              <p>
                <strong>Position:</strong> Communications{' '}
              </p>
              <p>
                <strong>Major:</strong> Physiology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Take advantage of every opportunity to meet new
                people and immerse yourself into the McGill environment!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Abominable
                snowman cause I’m totally here for a good snow day
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> $1 grilled cheeses every friday evening
                &lt;3
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.alissa.childImageSharp.fluid} alt="Alissa" />
              <p>
                <strong>Name:</strong> Alissa (she/her)
              </p>
              <p>
                <strong>Position:</strong> Sponsorship
              </p>
              <p>
                <strong>Major:</strong> Math and Computer Science
              </p>
              <p>
                <strong>Frosh Advice:</strong> Reach out to people that are utterly different from
                you. You’d be surprised at how much you can have in common with someone completely
                different from you.
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Boo
                because I like to think I’m cute and everything makes me laugh
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> All the amazing people I’ve met{' '}
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.maxine.childImageSharp.fluid} alt="Maxine" />
              <p>
                <strong>Name:</strong> Max (she/her)
              </p>
              <p>
                <strong>Position:</strong> Events
              </p>
              <p>
                <strong>Major:</strong> Anatomy &amp; Cell Biology
              </p>
              <p>
                <strong>Frosh Advice:</strong> DON’T BE AFRAID TO MAKE FRIENDS!! We can&#39;t
                guarantee that you will all be best friends forever but frosh is a great time to
                find some of your life time besties!!! #weareallbestfriends
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Roz bc im
                always watching ;)
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> The people!!!!! &lt;3
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.jia.childImageSharp.fluid} alt="Jia" />
              <p>
                <strong>Name:</strong> Jia (she/her)
              </p>
              <p>
                <strong>Position:</strong> Events
              </p>
              <p>
                <strong>Major:</strong> Immunology &amp; Microbiology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Be yourself and don’t be afraid to participate in ALL
                the frosh events!!! Your frosh experience is irreplaceable!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Johnny
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> The endless friends you’ll meet!
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.yasmine.childImageSharp.fluid} alt="Yasmine" />
              <p>
                <strong>Name:</strong> Yasmine (she/her)
              </p>
              <p>
                <strong>Position:</strong> Events
              </p>
              <p>
                <strong>Major:</strong> Mathematics &amp; Biology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Hydrate, sleep, step out of your comfort zone (and
                repeat)! Frosh is a great way to meet new friends and make awesome memories :)
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Boo, I
                like Kitties
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> I never feel like I miss leg day
                #stewartbiosquadup
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.leo.childImageSharp.fluid} alt="Pengi" />
              <p>
                <strong>Name:</strong> Pengi (he/him)
              </p>
              <p>
                <strong>Position:</strong> Sponsorship
              </p>
              <p>
                <strong>Major:</strong> Psyc
              </p>
              <p>
                <strong>Frosh Advice:</strong> Drink water!!! And be open minded, frosh is the best
                time to make friends and explore different activities!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Johnny{' '}
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> $2 tequila shots at Gerts - rip gerts :({' '}
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.leo.childImageSharp.fluid} alt="Leo" />
              <p>
                <strong>Name:</strong> Léo (he/him)
              </p>
              <p>
                <strong>Position:</strong> Information Technology
              </p>
              <p>
                <strong>Major:</strong> Physiology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Frosh is one of the best ways to be introduced to
                McGill and meet fellow first years who are all in the same boat, so make most of
                what it has to offer!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Johnny
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> Ordering Chef on Call at 3am while
                studying at Trottier
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.zeynep.childImageSharp.fluid} alt="Zeynep" />
              <p>
                <strong>Name:</strong> Zeynep (she/her)
              </p>
              <p>
                <strong>Position:</strong> Implementation
              </p>
              <p>
                <strong>Major:</strong> Anatomy and Cell Biology{' '}
              </p>
              <p>
                <strong>Frosh Advice:</strong> Frosh is a great opportunity to get out of your
                comfort zone and meet new people, make the most of it!{' '}
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Archie the
                Scare Pig! He’s just a clueless little goofball!{' '}
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> The fact that it’s close to an alpaca
                farm I visit once every year to chill with fuzzy dudes!
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.belanna.childImageSharp.fluid} alt="Belanna" />
              <p>
                <strong>Name:</strong> Belanna (she/her)
              </p>
              <p>
                <strong>Position:</strong> Inclusivity and Equitable Programming
                <strong>Major:</strong> Economics and Psychology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Keep an open mind! Remember that frosh is what you
                make of it, and it is designed to help you have fun and become acquainted with
                McGill and all different kinds of people and activities!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Needleman
                and Smitty
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> If you have $1 then you could get a
                samosa and if have $2 then you could get 3 samosas and that’s so many samosas
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.charmaine.childImageSharp.fluid} alt="Charmaine" />
              <p>
                <strong>Name:</strong> Charmaine (she/her)
              </p>
              <p>
                <strong>Position:</strong> Interfaculty
              </p>
              <p>
                <strong>Major:</strong> Psychology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Don’t be afraid to step out of your comfort zone or
                make the first step to meet new people. Everyone is in the same boat and are all a
                little nervous!{' '}
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Boo
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> The incredible life long friends I’ve
                met through greek life and all sorts of fun events like Winter Carnival!
              </p>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 my-8 px-4">
              <Img fluid={data.meghan.childImageSharp.fluid} alt="Meghan" />
              <p>
                <strong>Name:</strong> Meg (she/her)
              </p>
              <p>
                <strong>Position:</strong> Events
              </p>
              <p>
                <strong>Major:</strong> Pharmacology
              </p>
              <p>
                <strong>Frosh Advice:</strong> Don’t be afraid to ask questions--McGill has a lot to
                offer (clubs, greek life, etc.) and frosh is a great way to learn about all the ways
                you can get involved on campus!!
              </p>
              <p>
                <strong>Which Monsters Inc character do you identify with most?:</strong> Johnny
              </p>
              <p>
                <strong>Favourite Thing at McGill:</strong> OAP during frosh
              </p>
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
