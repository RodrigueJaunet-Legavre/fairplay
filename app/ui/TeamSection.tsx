import Image from 'next/image'
import FadeIn from './FadeIn'

const team = [
  {
    name: 'Rodrigue',
    role: 'Co-fondateur & CEO',
    bio: "Entrepreneur passionné par l'accessibilité de l'IA",
    photo: '/team/rodrigue.jpg',
    delay: 100,
  },
  {
    name: 'Viktor',
    role: 'Co-fondateur & CTO',
    bio: 'Développeur expert en intelligence artificielle',
    photo: '/team/viktor.jpg',
    delay: 200,
  },
]

export default function TeamSection() {
  return (
    <div
      style={{
        background: '#0d0d18',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* Titre */}
        <FadeIn className="text-center mb-16">
          <h2
            className="text-3xl font-black mb-3"
            style={{ color: '#f0f0f8' }}
          >
            L&apos;équipe FairPlay
          </h2>
          <p className="font-light text-lg" style={{ color: '#5a5a78' }}>
            Deux passionnés qui rendent l&apos;IA accessible à tous
          </p>
        </FadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl mx-auto">
          {team.map(({ name, role, bio, photo, delay }) => (
            <FadeIn key={name} delay={delay}>
              <div
                className="group flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Photo */}
                <div className="w-[300px] h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={photo}
                    width={300}
                    height={300}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Texte */}
                <h3
                  className="text-2xl font-black mb-1"
                  style={{ color: '#f0f0f8' }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm font-semibold mb-3"
                  style={{ color: '#a78bfa' }}
                >
                  {role}
                </p>
                <p
                  className="text-sm font-light leading-relaxed"
                  style={{ color: '#5a5a78' }}
                >
                  {bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

      </section>
    </div>
  )
}
