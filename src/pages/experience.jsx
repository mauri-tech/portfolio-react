import Head from 'next/head';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { SimpleLayout } from '@/components/SimpleLayout';
import experienceData from "../lib/experience.js";

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

