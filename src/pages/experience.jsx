import Head from 'next/head';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import experienceData from "./experienceData/experience.js";

function ExperienceSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  );
}

function Experience({ name, event, description, cta, href }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {name}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.CTA href={cta.href}>{cta.text}</Card.CTA>}
    </Card>
  );
}

export default function ExperiencePage() {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta
          name="description"
          content="My journey from marketing to code."
        />
      </Head>
      <SimpleLayout
        title="From Marketing to Code: My Journey of Passion and Growth."
        intro="With an unwavering passion for coding and design, I'm excited to pivot into web development and apply my problem-solving skills to create innovative solutions. My hands-on experience in diverse projects has honed my technical and collaboration skills, and I thrive in collaborative environments where ideas are shared and nurtured. Let's work together to build something amazing!"
      >
        <div className="space-y-20">
          {experienceData.map(section => (
            <ExperienceSection key={section.title} title={section.title}>
              {section.information.map(info => (
                <Experience key={info.name} {...info} />
              ))}
            </ExperienceSection>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}



// import Head from 'next/head'
// import { Card } from '@/components/Card'
// import { Section } from '@/components/Section'
// import { SimpleLayout } from '@/components/SimpleLayout'
// import experienceData from "./experienceData/experience.js";

// function SpeakingSection({ children, ...props }) {
//   return (
//     <Section {...props}>
//       <div className="space-y-16">{children}</div>
//     </Section>
//   )
// }

// function Appearance({ title, description, event, cta, href }) {
//   return (
//     <Card as="article">
//     <Card.Title as="h3" onClick={() => console.log('Clicked')}>
//         {title}
//       </Card.Title>
//       <Card.Eyebrow decorate>{event}</Card.Eyebrow>
//       <Card.Description>{description}</Card.Description>
//     </Card>
//   )
// }

// export default function Speaking() {
//   return (
//     <>
//       <Head>
//         <title>Experience</title>
//         <meta
//           name="description"
//           content="."
//         />
//       </Head>
//       <SimpleLayout
//         title="From Marketing to Code: My Journey of Passion and Growth."
//         intro="With an unwavering passion for coding and design, I'm excited to pivot into web development and apply my problem-solving skills to create innovative solutions. My hands-on experience in diverse projects has honed my technical and collaboration skills, and I thrive in collaborative environments where ideas are shared and nurtured. Let's work together to build something amazing!"
//       >
//         <div className="space-y-20">
//           <SpeakingSection title="Experience">
//             <Appearance
//               href="#"
//               title="Cosmic Agency"
//               description="Experienced marketing and sales consultant adept at bringing brand visions to life. I identify growth opportunities, create landing pages and e-commerce solutions, and optimize user experience. 
              
//               Skilled in content creation, including video editing and written content. Proficient in Google and Meta Ads to boost traffic and visibility."
//               event="Independent Consultant (2017 - present)"

//             />
//             <Appearance
//               href="#"
//               title="Swappy Mexico"
//               description="I led the development and growth of a second-hand clothes selling app startup. My responsibilities included conducting market research and data analysis to identify growth opportunities, representing the brand at events to build partnerships, and leading strategic decision-making processes."
//               event="CEO & Co-Founder (2020 - 2022)"
//             />
//             <Appearance
//               href="#"
//               title="Royal Prestige 2015 - 2019"
//               description="As a high-level distributor in the Royal Prestige network, I consistently surpassed sales targets and was recognized as a top performer. I successfully expanded my sales team and customer base through strategic marketing initiatives, driving significant sales growth."
//               event="Direct Sales Lead (2015 - 2019)"
//             />
//             <Appearance
//               href="#"
//               title="The New Agency"
//               description="I create effective branding strategies for clients, using my keen eye for detail and deep understanding of consumer behavior. I consistently deliver exceptional results, driving brand awareness, engagement, and revenue growth. Passionate about helping brands achieve their potential through social media, compelling content, and innovative marketing initiatives."
//               event="Brand Manager (2013 - 2015)"
//             />
//           </SpeakingSection>
//         </div>
//       </SimpleLayout>
//     </>
//   )
// }
