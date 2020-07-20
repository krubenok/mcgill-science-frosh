import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import '../css/accordion.css';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';

export default () => (
  <StaticQuery
    query={graphql`
      query {
        cover: file(relativePath: { eq: "cover.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        frosh2: file(relativePath: { eq: "frosh-2.jpg" }) {
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
            <title>Froshters, Inc. | About</title>
            <link rel="canonical" href="https://susfrosh.com/about" />
          </Helmet>
        </div>
        <section className="container mx-auto px-4 pt-8 mb-20 space-y-4">
          <Img
            fluid={data.cover.childImageSharp.fluid}
            alt="Froshers Ink Logo on green background with dates august 27th to 30th."
          />
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">About Frosh</h1>
          <p className="text-m lg:text-l mt-2 font-light">
            <b>FROSHTERS, INC</b> is the 2020 Orientation Week for students entering the McGill
            Faculty of Science in the 2020-2021 academic year. Due to the McGill Fall 2020 semester
            being online, the Faculty of Science will also be moving Frosh to a virtual platform.
            When students register for Frosh, they&apos;re signing up for four days of engaging
            virtual events with the goal of introducing students to the McGill and Montreal
            community. Frosh will be dedicated to showcasing McGill campus and student life while
            helping students foster online connections with other McGill students in a safe and
            inclusive environment. No matter where our froshies are this year they will have the
            ability to meet the McGill community, become comfortable with Montreal, and make
            long-lasting friends. With the guidance of over 120 Frosh Leaders (upper year McGill
            students who undergo intensive online skills and leadership training in preparation for
            Frosh), Froshters, Inc. is an incoming student&apos;s chance to experience what McGill
            has to offer. We are extremely excited to provide an experience that will be
            accommodating for all students. The Science coordinators, leaders, and community can’t
            wait to see you August 27th - 30th for this once in a lifetime opportunity!
          </p>
        </section>
        <section className="container mx-auto px-4 my-20 pt-8 space-y-4">
          <SplitSection
            primarySlot={
              <Img
                fluid={data.frosh2.childImageSharp.fluid}
                alt="Photo of two froshies pointing at camera smiling"
              />
            }
            secondarySlot={
              <div className="lg:pl-32 xl:pl-48">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
                  Frequently Asked Questions
                </h1>
                <h2 className="text-2xl lg:text-3xl xl:text-4xl">
                  <i>We&apos;re here to help.</i>
                </h2>
              </div>
            }
          />
          <h3 className="text-xl lg:text-2xl xl:text-3xl">General</h3>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh is your four day introduction to McGill University and more specifically,
                  the Faculty of Science through engaging virtual events. Frosh will be dedicated to
                  showcasing McGill campus and student life while helping students foster online
                  connections with other McGill students in a safe and inclusive environment. We
                  encourage all incoming McGill students to participate for the chance to meet other
                  incoming students from around the world. Frosh is your opportunity to become more
                  comfortable with Montreal, ask older students questions about life at McGill and
                  learn about the programs that the Faculty of Science has to offer.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>When is Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Science Frosh 2020 will begin Thursday, August 27th and run to Sunday, August
                  30th. Classes don’t begin until Tuesday, September 2nd so Frosh is your chance to
                  have fun, get familiar with Montreal and McGill campus, and make friends before
                  the studying begins!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What kind of activities will Frosh have?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh will consist of a variety of exciting interactive events and bonding
                  activities. These events will be catered to multiple time zones and students will
                  be led through all Frosh activities by their Frosh Leaders. Larger faculty events
                  will include a virtual concert and comedy night, interactive FAQ session, and
                  trivia night. During the four days there will also be multiple organized
                  opportunities to bond with smaller groups of fellow science peers.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>How do I register?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Register through the registration button on our homepage.Your Frosh swag will be
                  mailed directly to your house just in time for frosh. We strongly encourage you to
                  register early as spots fill up quickly! Remember that your spot is not guaranteed
                  until your payment has been processed so please be sure to check your emails for
                  when payment opens.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Why should I do Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh week is an invaluable start to your McGill experience. With the Fall 2020
                  semester being online, Frosh will be one of the main ways to meet fellow entering
                  Science students and make connections. Whether they be study buddies or lifelong
                  friends, the connections you make at Frosh can help you get the most out of your
                  time at McGill. You won’t want to miss out on the memories and friendships that
                  Frosh week creates!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How much is Frosh and where/when do we pay?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The price for Science Frosh 2020 is $30 + processing fees, which grants you access
                  to four days of interactive online events and activities. Frosh actually costs us
                  much more than $30 per participant, but thanks to our incredible partners we can
                  offer you an incredible Frosh experience at the price we do. Here are some
                  examples of what’s included with your Frosh bracelet:
                </p>
                <ul className="list-disc text-m lg:text-l ml-8 mt-2 font-light">
                  <li>
                    Awesome swag including a hat, t-shirt, mug, stickers, and temporary tattoos!
                  </li>
                  <li>
                    A virtual Montreal Crawl with insights into favourite McGill spots and a chance
                    to win prizes!
                  </li>
                  <li>Virtual games nights, escape rooms, and concerts</li>
                  <li>
                    A chance to become oriented and welcomed into the McGill and Montreal
                    communities!
                  </li>
                  <li>Full communications support</li>
                  <li>Mentorship from over 120 upper year McGill students</li>
                  <li>The best four days of your life (We aren’t joking!)</li>
                  <li>And more!</li>
                </ul>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you demonstrate financial need and wish to participate in Science Faculty
                  Frosh, please apply for the Science Frosh Bursary located on our Resources page.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What merchandise is included in the Frosh participation fee?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  In your Frosh package you will receive a hat, t-shirt, mug, stickers, temporary
                  tattoos and more!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is the SUS anyway?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The Science Undergraduate Society (SUS) represents all students in the Faculty of
                  Science (over 5000 students)! Almost like a student government, the SUS is
                  responsible for providing countless events, activities, and services to students,
                  allowing them to enjoy the best possible university experience.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  With events ranging from Frosh and Science Games, to Social Sustainability Week
                  and Academia Week, the SUS has earned recognition as an organization that promotes
                  academic excellence within the context of a fun-filled, socially-active community.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  The SUS is led by a group of elected students who help organize events and
                  services throughout the academic year — like Frosh!
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you’d like to get more involved in the science faculty or McGill community,
                  check out opportunities at the SUS at{' '}
                  <Link to="https://sus.mcgill.ca">sus.mcgill.ca.</Link>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Who are Frosh Coordinators?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  A group of 14 <b>Frosh Coordinators</b> (upper-year students) spend the summer
                  organizing the four-day event, with responsibilities such as funding Frosh through
                  sponsorships, booking venues, and hiring Frosh Leaders and Staff. During the week
                  they will be <b>wearing blue and white tie dye tanks.</b> If you ever need help
                  before or during Frosh, reach out to a coordinator and they will try their very
                  best to assist you. Don’t be afraid to ask them questions, or just say hi!
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  This Frosh committee is hired by and overseen by the Vice-President Internal of
                  the Science Undergraduate Society (SUS), which is a group of elected students who
                  organize events and services throughout the academic year.{' '}
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you’d like to be involved in the science faculty or McGill community, and
                  possibly be involved in Frosh next year, check out more opportunities at the SUS{' '}
                  <Link to="https://sus.mcgill.ca">sus.mcgill.ca.</Link>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Who are Frosh Leaders?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  <b>Frosh leaders</b> are McGill Students who have previously participated in Frosh
                  and want to volunteer their time to guide new students through this awesome new
                  experience. They are selected out of a competitive pool of applicants and complete
                  extensive training on harm reduction, online skills, consent, and more!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Will there be a Winter Frosh/later in-person frosh when quarantine restrictions
                  are lifted?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The coordinators have discussed having an in person Winter Frosh and this is a
                  possibility. We are working with the McGill administration to determine how
                  realistic this is. However, there are many external factors out of our control, so
                  we cannot confirm if a Winter Frosh will happen.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 className="text-xl lg:text-2xl xl:text-3xl">Frosh Events and Participation</h3>
          <Accordion allowMultipleExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I cannot afford the Frosh Participation fee. Is there a way I can still take part
                  in Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you demonstrate financial need and wish to participate in Science Faculty
                  Frosh, please apply for the Science Frosh Bursary located on our Resources page.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Are any Frosh events mandatory?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The only mandatory part of Frosh is to set up and register your Frosh account and
                  the opening ceremony (where Frosh groups are formed). Detailed instructions on how
                  to register your account will be included in your Frosh package. However, we do
                  highly encourage attending as many events as possible!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I can’t make all of Frosh, can I only pay for certain events?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  No, unfortunately it is not logistically possible for us to let students pay per
                  event.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Can I arrive late to events?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Some Frosh events will be recorded or you will have entry access throughout the
                  duration of the event. However, there will be certain events, such as organized
                  bonding activities that will require you to be there on time and present for the
                  entire event. Your Frosh leaders and the schedule will keep you informed on which
                  events these are.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do I sign up for Frosh? Is it necessary to register?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  YES! Registration is required to participate in Frosh Links to registration are
                  located in the menu tab or on our homepage. Keep an eye on this site or our social
                  media channels to stay informed about upcoming Frosh news.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I provided incorrect information on my Frosh signup form online, how do I go about
                  correcting it?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Send an email to the Orientation Week staff at{' '}
                  <a href="mailto:frosh@susmcgill.ca">frosh@susmcgill.ca</a>{' '}
                  <i>
                    Note: if any information on your form turns out to be false (ie. your age), you
                    will not be allowed to participate in Frosh.
                  </i>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How will I get my Frosh package and how do I get into online events?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Once you’ve registered and paid for Frosh, all information on accessing Frosh
                  websites/content will be sent to you by email. You will have the option to have
                  your Frosh package including all of your Frosh swag delivered directly to your
                  house or to pick it up if you are in Montreal around the time of Frosh. More
                  details to come on Frosh Package Pickup details.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What should I have with me while attending virtual Frosh events?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  We strongly encourage wearing your Frosh swag and any other FROSHTERS, INC
                  theme-related gear that you may have! Please ensure that your device is set up on
                  all platforms necessary for frosh...And don’t forget a positive attitude :)
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Who can (and cannot) participate in Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh events and programming are for students entering their first year of
                  university at McGill in the Fall, students who entered McGill in the Winter term
                  of the previous academic year, transfer students new to McGill. Returning
                  students, family members, and (non-McGill-attending) friends of new students are
                  not permitted to attend Frosh.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  We understand the instinct to want to invite friends to join, especially in an
                  online setting, but we ask that you please refrain from doing this. We will have
                  systems set in place that will allow us to determine who should be present at an
                  event and who should not. Remember, this is your chance to branch out and meet new
                  people!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I’m not a first year, can I still do Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  New transfers are considered first years at McGill and are encouraged to
                  participate in Orientation Week activities. If you are a transfer student from
                  Winter 2019 you are also eligible to participate in Frosh. Unfortunately, all
                  other students not in entering their first year at McGill cannot register for
                  Frosh – even if you’ve never participated before.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I’m not in Science, can I still be a part of Science Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  No you must participate in your own faculty Frosh unless you have applied for and
                  been approved for a faculty transfer. If a faculty transfer has been approved, you
                  may submit a faculty change through your Minerva account. If your faculty or
                  school does not plan its own Frosh, then consult the list below for your suggested
                  group:
                  <ul className="list-disc text-m lg:text-l ml-8 mt-2 font-light">
                    <li>
                      Arts & Science: Arts & Science students have their own Arts & Science Frosh
                    </li>
                    <li>Nursing Faculty: Students are suggested to join Science Frosh </li>
                    <li>Faculty of Religious Studies: Students are suggested to join Arts Frosh</li>
                    <li>Pre-Med Faculty: Students are suggested to join Science Frosh</li>
                  </ul>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I’m from Montreal, should I still do Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  We highly encourage all incoming Science students to participate in Science Frosh!
                  It is a great way to make friends in the Science faculty and get acquainted with
                  upper year mentors (Frosh Leaders) and the McGill campus. Even if students have
                  lived in Montreal their entire life, we guarantee Frosh will show them something
                  they have yet to see and will give them a chance to meet tons of people new to
                  Montreal!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>How long will Frosh be each day?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Each day will be made up of multiple events spread out throughout the day to cater
                  to multiple time zones. In total, Frosh will be roughly 4-5 hours a day.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 className="text-xl lg:text-2xl xl:text-3xl">Accessibility and Inclusivity</h3>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What is Consent?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Consent is an informed and uninhibited agreement from all participating and
                  affected parties regarding an action or activity. Consent is continuous, meaning
                  it can be revoked at any time for any reason. It can be recognised by the presence
                  of an enthusiastic “yes”, and not by the absence of a “no”. This applies to all
                  circumstances and situations during Frosh, including sexual acts, photosharing,
                  and alcohol consumption. Consent from all involved and affected members is
                  required for all actions people choose to take.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Consent can never be assumed and cannot be given if a person is incapacitated by
                  alcohol and/or drugs or unconscious.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  All Frosh participants are required to watch a video about consent made by Frosh
                  Coordinators. This ensures that the meaning of consent is unambiguous and
                  unanimous among all Frosh participants. Many (notably, but not exclusively,
                  sexual) acts committed without consent in the context of Frosh are eligible for
                  consequences imposed by respective Frosh Committees and the Office of the Dean of
                  Students.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How does Consent translate to an online setting?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Consent is exactly the same online as offline. We expect all Frosh participants to
                  be aware of how their actions affect others in an online setting, and to ensure
                  that all affected individuals are informed and have agreed to their actions.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Specifically, if a person were to share a photo or video of other people, it is
                  important that everyone in the photo or video have agreed to have it be shared and
                  where.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Someone who is unreachable online (asleep due to time zones, not logged in, unable
                  to access a strong internet connection at the time) is unable to provide consent.
                  This person is also unable to ask for or receive consent.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  It is important to remember that consent is never implied, especially in an online
                  context where socialising can often leave more to implication than in an in-person
                  setting.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is Sexual Harassment and Sexual Assault?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Sexual violence is an umbrella term thaty encapsulates two behaviours; sexual
                  harassment and sexual asssault.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Sexual harassment is any form of unwanted sexual advances, requests for sexual
                  acts, and verbal sexual aggressions. This includes harassment online or in-person.
                  Examples of sexual harassment include, but are not limited to, unwelcome sexual
                  teasing, jokes, remarks, questions, or suggestive signals.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Sexual assault is any act of a sexual nature that the done without unambiguous and
                  enthusiastic consent. Sexual harassment becomes sexual assault when physical
                  contact is made.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Both sexual assault and harassment can be committed by any gender.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you or someone you know is affected by sexual assault or harassment during
                  Frosh, please do not hesitate to contact the Inclusivity Coordinator. They will
                  explain the various courses of action available, offer on and off campus resources
                  and support, and will provide confidential, non-judgmental, and pro-survivor
                  support.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  <b>
                    Regardless of the nature of the sexual act or type of harassment, if the
                    incident made you uncomfortable we encourage you to reach out to the Inclusivity
                    Coordinator immediately. Unless there is imminent danger, your disclosure will
                    remain completely confidential.
                  </b>
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  <i>
                    Please note: you do not have to contact the Inclusivity Coordinator directly,
                    leaders and other coordinators are all prepared and trained to receive and help
                    with such information
                  </i>
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I have mental health challenges, how could Frosh affect that?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh is an exciting week full of new experiences and meeting tons of other
                  incoming students. But just as much as it is exciting, it can also be mentally
                  taxing and stress-inducing. Students are encouraged to speak up when they are
                  struggling with their mental health challenges. McGill has a number of resources
                  available to students during Orientation Week that serves this purpose:
                </p>
                <ul className="list-disc text-m lg:text-l ml-8 mt-2 font-light">
                  <li>
                    <strong>Peer Support Centre</strong>: A confidential and non-judgmental peer
                    support service located on the 4th floor of the SSMU building on McTavish.
                    Volunteers will be available by phone during Frosh. For more information please
                    consult their website: <a href="https://psc.ssmu.ca">https://psc.ssmu.ca</a>
                  </li>
                  <li>
                    <strong>Nightline</strong>: A confidential, anonymous, and non-judgmental peer
                    support service via phone conversation. For Frosh hours of service, please
                    consult their website:{' '}
                    <a href="https://ssmu.mcgill.ca/nightline">https://ssmu.mcgill.ca/nightline</a>
                  </li>
                  <li>
                    <strong>Access Allies</strong>: Frosh Leaders with additional and more specific
                    training that makes them well-equipped to refer Frosh participants to the
                    correct services for a variety of mental or physical challenges. They will be
                    identifiably distinct from other leaders during Frosh and you may contact any
                    access ally from any group.
                  </li>
                  <li>
                    <strong>Vent Over Tea</strong>: A free active listening service that pairs
                    people up with volunteers to have a conversation in a local Montreal coffee
                    shop. Confidential and non-judgmental, Vent Over Tea volunteers are typically
                    graduates pursuing careers in social work, psychology, or medicine.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I have visual/auditory difficulties, will I still be able to participate in Frosh?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The most accurate subtitles that we can realistically access will be available for
                  all events. In addition all information shared as a part of Frosh will be readable
                  by screen reader.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Yes. Please indicate on your online registration form that you have
                  visual/auditory difficulties or email the Inclusivity and Equity Coordinator at{' '}
                  <a href="mailto:frosh@susmcgill.ca">frosh@susmcgill.ca</a>. We are including
                  considerations for such difficulties in our event designs, and benefit greatly
                  from any information about what we can best do to help.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  During Frosh, where can I receive extra support for my accessibility challenges?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Student’s Frosh Leaders are there to help them every step of the way during Frosh.
                  Always feel free to reach out to your Leaders if you require extra assistance at
                  any point during the week. Additionally, the Science Inclusivity Coordinator will
                  be present during Frosh to ensure all accessibility concerns are addressed and
                  student’s receive adequate support. This Coordinator’s phone number will be
                  accessible once you sign up for Frosh. You may also fill out our{' '}
                  <a href="https://docs.google.com/forms/d/18DqM_ejfVlJObVDWJCS4P85PkHihK4MhvifGHxfFdOg/viewform?fbclid=IwAR3JE4IvHqDcAYoK6rtq7390vHQwfIBU4ZCSx2VK1PliV6dYAWQwkh7w0Rg&amp;edit_requested=true">
                    accessibility form{' '}
                  </a>
                  to express your concerns.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  I have another issue that the Frosh Coordinators should know about, how can I tell
                  them?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  If you have any other concerns (medical, mental health, etc.) that you would like
                  to be noted please email us at frosh@susmcgill.ca or message McGill Science
                  Orientation Week on Facebook. We check these regularly and will be sure to get
                  back to you right away.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Please remember that we will be better equipped to help you if you tell us of any
                  potential issues before Frosh begins. You are also welcome to reach out to any
                  Frosh Coordinator during the event in order to share any issues that may arise.
                  Please do not worry about approaching us; we are here to ensure your safety and
                  fun at Frosh!
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>How will timezones be accommodated?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Most events will be recorded and occur at multiple different times in hopes that
                  everyone will be able to realistically attend at least one of the sessions.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Leaders will be encouraged to ensure group bonding at many times of the day so
                  it’s not the same participants missing bonding consistently due to timezones.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  We are disappointed that we are unable to provide exactly the same Frosh
                  experience to everyone no matter where they are in the world, but we can guarantee
                  that people in any timezone will be able to participate in Frosh.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What measures will be in place to ensure online bullying is not tolerated?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  We take any violation of consent or form of harassment (eg. bullying) during Frosh
                  incredibly seriously and are prepared to remove offending participants from Frosh.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Students may express their concerns directly to a coordinator or leader before,
                  during, or after Frosh. Information on how to make an anonymous complaint will
                  also be given once you receive your Frosh account.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          <h3 className="text-xl lg:text-2xl xl:text-3xl">Health, Safety and Harm Reduction</h3>
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is the drinking age and what if I am not of age?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  The legal drinking age in Quebec is 18, however we recognize that many students
                  taking part in Frosh will not be in Quebec. Here is a link for the drinking ages
                  around the world, please check for your respective region if you are unsure of the
                  drinking age: Legal Drinking Ages around the world - You&#39;ll be Surprised!{' '}
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  Frosh is about the events and activities, not about drinking alcohol. Underage
                  students find that their Frosh experience is hardly changed by their age and they
                  still have an amazing time! More information on which events you will be able to
                  opt-in to alcohol consumption will be provided by your leaders and the schedule.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>Is there alcohol present at Frosh?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Yes, Science Frosh does acknowledge that many incoming students are of legal
                  drinking age in their respective regions and organizes a safe and inclusive space
                  for people to opt-in to drinking alcohol. However, as the legal age is different
                  in all areas of the world, we do not encourage the consumption of alcohol or other
                  substances during Frosh events.
                </p>
                <p className="text-m lg:text-l mt-2 font-light">
                  While Frosh is mainly made up of social events, please keep in mind that it does
                  not entail the consumption of alcohol or other substances. We strongly urge you to
                  be aware of the fact that it is difficult for us to effectively reduce harm or
                  provide you with any necessary assistance that comes as a result of consumption in
                  a virtual world. Should you make the choice to drink, please be informed of all
                  regional laws and regulations in regard to substance use as well as safe
                  consumption practices, such as knowing your limits and making sure that you are
                  not alone when you engage in such activities.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>What if I don’t drink or can’t drink?</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Some Science Frosh events will allow participants to drink alcohol, however
                  drinking is always optional. Frosh is designed so that every participant will be
                  able to enjoy themselves, regardless of whether or not they are drinking. There
                  will also be online events in which drinking will inhibit the flow of the event,
                  therefore it will not be allowed.{' '}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  If I’m underage in my respective location during Frosh (or for part of it) is it
                  still worth it?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="text-m lg:text-l mt-2 font-light">
                  Yes! The Science Frosh Coordinators strive to make every effort to ensure everyone
                  is included. Frosh is about the events and activities and there are no events
                  centered around alcohol. Underage students find that their Frosh experience is
                  hardly changed by their age and they still have an amazing time.{' '}
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  If I choose to drink, how can I consume alcohol in a safe way?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <ul className="list-disc text-m lg:text-l ml-8 mt-2 font-light">
                  <li>
                    Students who make the decision to consume alcohol during Frosh week should be
                    aware that alcohol affects different people in different ways. Here are a few
                    tips to make sure Frosh stays a safe and fun environment for all:
                  </li>
                  <li>
                    Count your drinks: It takes one hour to metabolize a drink (12 ounces of beer, 5
                    ounces of wine, or 1.5 ounces of hard liquor). Just because the alcohol doesn’t
                    hit you right away, doesn’t mean it isn’t there!
                  </li>
                  <li>
                    Inform a friend: Make sure you consume alcohol with people you feel safe and
                    comfortable around. It’s best to stick with your Frosh Group! Your Leaders are a
                    great resource if you ever feel you have consumed too much or are not sure if
                    you have consumed too much.
                  </li>
                  <li>
                    Don’t drink on an empty stomach: Eating before drinking decreases the absorption
                    rate of alcohol.
                  </li>
                  <li>
                    Alcohol affects people in different ways: Alcohol tends to have a stronger
                    effect on females than males due to female’s lower levels of alcohol
                    dehydrogenase, an enzyme that aids in the metabolism of alcohol. Additionally,
                    your body’s water content plays a role in how your body metabolizes alcohol,
                    which is why oftentimes when a male and a female are the same weight, the man
                    will have a higher tolerance.{' '}
                  </li>
                  <li>
                    Nicotine: Smoking slows the emptying of your stomach, in turn delaying alcohol
                    absorption. Just because you don’t feel the alcohol right away, doesn’t mean you
                    won’t later!
                  </li>
                  <li>
                    Tylenol: Alcohol and tylenol separately can already cause liver failure. Taken
                    together, either during consumption of alcohol or while hungover, can increase
                    risk of liver failure even more.
                  </li>
                  <li>
                    Benadryl: Mixing an antihistamine with alcohol will cause an increase in
                    drowsiness.
                  </li>
                </ul>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </section>
        <section className="container mx-auto px-4 my-20 pt-8 space-y-4">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">Land Acknewledgement</h1>
          <p className="text-m lg:text-l mt-2 font-light">
            The SUS acknowledges that McGill is on the traditional territory of the Indigenous
            People, Kanien&apos;keha:ka (Ga-niyen-ge-haa-ga). The Kanien&apos;keha:ka are the
            keepers of the Eastern Door of the Haudenosaunee Confederacy. This island known as
            Montreal is known as Tio’tia:ke (Gio-Jaw-Gé) in the language of the Kanien’kehá:ka, and
            has historically served as a meeting place for other Indigenous nations.
          </p>
          <p className="text-m lg:text-l mt-2 font-light">
            It is not enough to just acknowledge the keepers of this land and McGill’s status as a
            settler-colonial institution. Silence and inaction will only contribute to erasing the
            history, the culture, and the realities of Indigenous people. As such, it is important
            that individuals educate themselves on Indigenous matters and that they apply that
            knowledge to support Indigenous communities. The SUS should actively resist
            (neo)-colonialism in the many forms it takes, and in the diversity of forms that
            resistance can take.
          </p>
        </section>
      </Layout>
    )}
  />
);
