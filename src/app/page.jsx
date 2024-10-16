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
import logoCoastline from '@/images/clients/coastlinebannerO.png'


import imageLaptop from '@/images/shop.png'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Olympe', logoOlympe, 'https://olympe.gg/'], 
  ['Favvey', logoFavvey, 'https://favvey.com/'], 
  ['Coastline', logoCoastline, 'https://discord.gg/crab'], 
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
            {clients.map(([client, logo, url]) => (
              <li key={client} className="flex items-center justify-center">
                <FadeIn>
                  <Link href={url}>  {/* Wrap logo in Link component */}
                    <Image
                      src={logo}
                      alt={client}
                      unoptimized
                      style={{ maxWidth: '100%', maxHeight: '100%' }} 
                    />
                  </Link>
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
              Sculptez votre histoire et racontez-la de manière captivante avec un montage vidéo professionnel. Format Youtube et TikTok avec voix-off. 
            </ListItem>
            <ListItem title="Web Design">
              Créez une expérience utilisateur immersive et intuitive avec un design de site web professionnel.
            </ListItem>
            <ListItem title="Identité visuelle">
             {"Définissez  l'âme de votre marque avec une identité visuelle cohérente et mémorable, incluant logo, palette de couleurs, typographie et plus encore."}
            </ListItem>
            <ListItem title="Rédaction">
              Transformez vos idées en mots impactants, avec une rédaction soignée et adaptée à vos besoins.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Née de la passion pour la création.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Ensemble, créons l&apos;identité qui vous correspond.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Nous sommes une agence de communication, spécialisé dans la création de contenu digital. Faites-nous confiance et donnons vie à votre vision.
          </p>
          <p className="mt-6 text-xl text-neutral-600">
            Identiq Agency est actuellement en refonte, le site ainsi que les créations associées ne sont pas à jour.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Services />

      <ContactSection />
    </>
  )
}
