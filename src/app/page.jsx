import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'

import logoOlympe from '@/images/clients/olympe.png'
import logoFavvey from '@/images/clients/favvey.png'


import imageLaptop from '@/images/test.png'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Olympe', logoOlympe],
  ['Favvey', logoFavvey],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Nous avons travaillé avec des personnes extraordinaires
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 items-center justify-center"
          >
          {clients.map(([client, logo]) => (
          <li key={client} className="flex items-center justify-center">
          <FadeIn>
            <Image
              src={logo}
              alt={client}
              unoptimized
              style={{ maxWidth: '100%', maxHeight: '100%' }} 
            />
          </FadeIn>
          </li>
          ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}


function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Tout ce dont vous avez besoin pour vos projets et sur mesure."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Un éventail de services pour concrétiser chaque vision
        </p> 
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 2048px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Montage">
              Capturez l&apos;essence de votre créativité et amplifiez votre impact sur les réseaux avec des montages TikTok et YouTube dynamiques qui captent et retiennent l&apos;attention.
            </ListItem>
            <ListItem title="Communication">
              Sublimez votre message à travers des stratégies de communication innovantes et adaptées à votre audience.
            </ListItem>
            <ListItem title="Rédaction">
              Transformez vos idées en mots impactants, avec une rédaction soignée et adaptée à vos besoins.
            </ListItem>
            <ListItem title="Game Design">
              Éveillez l&apos;imaginaire de vos joueurs en concevant des univers ludiques captivants et des mécaniques de jeu innovantes qui dépassent les frontières de l&apos;ordinaire.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Ensemble, créons l&apos;identité qui vous siéra le mieux.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nous sommes une agence de communication, spécialisé dans la création de contenu digital. Faites-nous confiance et donnons vie à votre vision.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
}
