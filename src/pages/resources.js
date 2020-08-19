import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout/Layout';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        frosh3: file(relativePath: { eq: "frosh-3.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <Layout>
        <div className="application">
          <Helmet>
            <html lang="en" amp />
            <meta charSet="utf-8" />
            <title>Froshters, Inc. | Resources</title>
            <link rel="canonical" href="https://susfrosh.com/resources" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <Img
            fluid={data.frosh3.childImageSharp.fluid}
            alt="Many students doing Yoga at top of mountain"
          />
          <div className="max-w-screen-lg mx-auto space-y-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold" id="frosh-mission-statement">
              Frosh Mission Statement
            </h1>
            <p>
              McGill Science Frosh committee is committed to creating the most inclusive, welcoming,
              and accessible environment throughout the orientation experience. Frosh 2020 is
              uniquely absent of in person social interactions, we are committed to establishing a
              comfortable and reliable space for all participants to establish meaningful and
              valuable connections as well as communicate any personal needs for their optimal Frosh
              experience. If you have any concerns or feedback, please feel free to contact{' '}
              <p>
                <a href="mailto:frosh@susmcgill.ca">frosh@susmcgill.ca</a> or{' '}
                <a href="mailto:belanna.gans@mail.mcgill.ca">belanna.gans@mail.mcgill.ca</a>
              </p>
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold" id="student-resources">
              Student Resources
            </h2>
            <h3 className="text-2xl lg:text-3xl font-semibold" id="during-frosh-">
              During Frosh:
            </h3>

            <p>
              <p>
                <strong>Coordinators</strong>
              </p>
              Coordinators are upper year students who spend their summer organizing Frosh and
              making sure everything runs smoothly. There are 14 Science Orientation Coordinators
              who will be able to help or redirect you to services as needed.
            </p>

            <p>
              <p>
                <strong>Access Allies</strong>
              </p>
              Access Allies are Frosh leaders with additional inclusivity, accessibility and mental
              health training that are there for you if you don’t feel comfortable speaking with
              your own Leaders or need a little extra support! After you register for Frosh you will
              receive more information on how to identify and contact access allies.
            </p>

            <p>
              <p>
                <strong>
                  <a href="https://psc.ssmu.ca">Peer Support Centre</a>
                </strong>
              </p>
              This is a student-run, confidential and non-judgemental support center at McGill in
              the SSMU building on McTavish. Each day of Frosh students may book an appointment to
              receive support with anxiety, depression, other mental health challenges, or simply to
              have someone to talk to!<p>514 398 3782</p>
            </p>

            <p>
              <p>
                <strong>OSVRSE</strong>
              </p>
              Office for Sexual Violence Response, Support and Education. Run by McGill
              administration to respond to and help prevent sexual violence.
              <p>514 398 3954</p>
              <p>Sexual violence response advisor: 514 398 4486</p>
              <p>Sexual violence education advisor: 514 398 3786</p>
              <p>
                <a href="mailto:osvrse@mcgill.ca">osvrse@mcgill.ca</a>
              </p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="http://www.sacomss.org/wp/">SACOMSS</a>
                </strong>
              </p>
              Sexual Assault Centre of the McGill Students’ Society. Run by McGill students to help
              provide counseling services for survivors of sexual misconduct.
              <p>514 398 8500</p>
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold" id="during-your-time-at-mcgill-">
              During your time at McGill:
            </h3>
            <p>
              <p>
                <strong>Red Frogs</strong>
              </p>
              Student volunteers, they focus on preventative measures to help ensure that you’re
              having a fun, safe time. Look for them handing out water, granola bars and freezies,
              wearing their own Red Frog shirts.{' '}
            </p>
            <p>
              <p>
                <strong>
                  <a href="http://msert.sus.mcgill.ca/about/">
                    McGill Student Emergency Response Team (M-SERT)
                  </a>
                </strong>
              </p>
              M-SERT is a volunteer student service whose members provide emergency first aid
              services. If you ever need help, don&#39;t be afraid to ask as they’ll be present at
              many McGill events wearing red shirts.
              <p>
                <a href="mailto:msert.firstaid@gmail.com">msert.firstaid@gmail.com</a>
              </p>
              <p>514 398 3000</p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://drivesafe.ssmu.ca">Drivesafe</a>
                </strong>
              </p>
              A volunteer student service, they offer free rides home to students in need anywhere
              on the island of Montreal. They are available during the Fall and Winter semesters
              from 11 pm to 3 am on Thursday, Friday and Saturday nights.
              <p>514 398 8040</p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://walksafe.ssmu.ca">Walksafe</a>
                </strong>
              </p>
              A volunteer student service that provides free accompaniment for those walking at
              night anywhere on the island of Montreal. Sunday – Thursday: 9 pm to 12 am Friday –
              Saturday: 9 pm to 3 am.
              <p>514 398 2498</p>
            </p>
            <p>
              <p>
                <strong>Sexual Assault Center of McGill Student Society (SACOMSS)</strong>
              </p>
              SACOMSS provides a variety of services for survivors of sexual assault and their
              allies. Volunteer and student-run, they offer pro-survivor, non-judgemental support to
              students in need, regardless of situation.
              <p>514 398 8500</p>
              <p>
                <a href="mailto:main@sacomss.org">main@sacomss.org </a>
              </p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://www.mcgill.ca/campussafety/security-services">McGill Security</a>
                </strong>
              </p>
              They patrol campus ensuring the safety of students 24 hours a day. If you have an
              emergency on campus, do not be afraid to call them.
              <p>514 398 3000</p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://involvement.mcgill.ca/organization/iss">
                    International student services
                  </a>
                </strong>
              </p>
              International Student Services (ISS) works hard to promote the growth, development and
              success of this burgeoning community, and ease their transition to McGill and
              Montreal. ISS offers a host of services, including Orientation activities, a social
              and support network, health insurance guidance, and much more!
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://www.mcgill.ca/osd/">
                    Office for Students with Disabilities (OSD)
                  </a>
                </strong>
              </p>
              OSD provides services for students with disabilities including exam taking
              accommodations, access to peer-written class notes, and more. 1010 Sherbrooke Ouest,
              suite 410
              <p>514 398 6009</p>
            </p>
            <p>
              <p>
                <strong>
                  <a href="https://www.mcgill.ca/wellness-hub/">Student Wellness Hub</a>
                </strong>
              </p>
              The Student Wellness Hub is a students&#39; place to go for their holistic health and
              wellness needs. It provides access to basic physical and mental health services, as
              well as health promotion and peer support programs, in convenient locations at both
              our Macdonald and downtown campuses. Professional physical and mental health services.
              <p>514 398 6017</p>
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold" id="consent">
              Consent
            </h2>
            <p>
              Consent is an informed and uninhibited agreement from all participating and affected
              parties regarding an action or activity. Consent is continuous, meaning it can be
              revoked at any time for any reason. It can be recognised by the presence of an
              enthusiastic “yes”, and not by the absence of a “no”. This applies to all
              circumstances and situations during Frosh, including sexual acts, photosharing, and
              alcohol consumption. Consent from all involved and affected members is required for
              all actions people choose to take.
            </p>
            <p>
              Consent can never be assumed and cannot be given if a person is incapacitated by
              alcohol and/or drugs or unconscious.
            </p>
            <p>
              All Frosh participants are required to watch a video about consent made by Frosh
              Coordinators. This ensures that the meaning of consent is unambiguous and unanimous
              among all Frosh participants. Many (notably, but not exclusively, sexual) acts
              committed without consent in the context of Frosh are eligible for consequences
              imposed by respective Frosh Committees and the Office of the Dean of Students.
            </p>
            <h3 className="text-2xl lg:text-3xl font-semibold" id="consent-online">
              Consent Online
            </h3>
            <p>
              Consent is exactly the same online as offline. We expect all Frosh participants to be
              aware of how their actions affect others in an online setting, and to ensure that all
              affected individuals are informed and have agreed to their actions.{' '}
            </p>
            <p>
              Specifically, if a person were to share a photo or video of other people, it is
              important that everyone in the photo or video have agreed to have it be shared and
              where.{' '}
            </p>
            <p>
              Someone who is unreachable online (asleep due to time zones, not logged in, unable to
              access a strong internet connection at the time) is unable to provide consent. This
              person is also unable to ask for or receive consent.{' '}
            </p>
            <p>
              It is important to remember that consent is never implied, especially in an online
              context where socialising can often leave more to implication than in an in-person
              setting.
            </p>
            <p>
              Other accessibility concerns?{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfI5lbbUHm7gGAx_VhVoXBh1nmzGGIVeDf3dRlTVai7QuqLYQ/viewform?usp=sf_link">
                Fill out the form to let us know
              </a>
              !
            </p>
            <h2 className="text-3xl lg:text-4xl font-semibold" id="science-bursary">
              Science Bursary
            </h2>
            <p>
              The Frosh Bursary is intended for incoming McGill Students who demonstrate financial
              need and wish to participate in Science Faculty Frosh. To apply for the Science Frosh
              Bursary, incoming students must explain their financial standing and elaborate their
              desire to engage in{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJVPZe9-XclEZoWsQHU9L5DHVbE_akvIhkWqKndeVB7-OSjA/viewform">
                Science Frosh 2020 in the bursary form.{' '}
              </a>
              The deadline to submit a bursary application is August 16th at 11:59pm.
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
);
