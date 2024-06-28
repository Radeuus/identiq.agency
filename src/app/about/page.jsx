import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import imagegcom from '@/images/team/gcom1.png'
import imagelording from '@/images/team/lording.png'
import imageminenetwork from '@/images/team/minenetwork.png'
import imagecoastline from '@/images/team/creation.png'
import blanc from '@/images/team/blanc.png'
import { loadArticles } from '@/lib/mdx'

function Culture() {
}

const team = [
  {
    title: 'Montage-Vidéo',
    people: [
      {
        name: 'G-Community',
        role: 'Minecraft Trailer',
        image: { src: imagegcom },
        link: 'https://youtu.be/G0WVpXZAGnI',
      },
      {
        name: 'Coastline Creation',
        role: 'Minecraft Trailer',
        image: { src: imagecoastline },
        link: 'https://www.youtube.com/watch?v=Mj5FTQZDMuM',
      },
      {
        name: 'Lording Quest',
        role: 'TikTok - Test',
        image: { src: imagelording },
        link: 'https://youtube.com/shorts/mbXK4Z2NqkA?feature=share',
      },
    ],
  },
  {
    title: 'Graphisme',
    people: [
      {
        name: 'MineNetwork',
        role: 'DA Complète',
        image: { src: imageminenetwork },
        link: 'https://discord.com/channels/1160694364566212629/1250109518042365993',
      },
      {
        name: 'test',
        role: 'test',
        image: { src: blanc },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <a href={person.link} target="_blank" rel="noopener noreferrer">
                            <Image
                              alt=""
                              {...person.image}
                              className="h-96 w-full object-cover transition duration-500 motion-safe:group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                              <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                {person.name}
                              </p>
                              <p className="mt-2 text-sm text-white">
                                {person.role}
                              </p>
                            </div>
                          </a>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}


export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Créations" title="Retrouvez l'ensemble de nos créations">
        <p>
        </p>
      </PageIntro>

      <Culture />

      <Team />
      <ContactSection />
    </>
  )
}
