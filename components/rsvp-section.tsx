'use client'

import {
  Heart,
  Sparkles,
  Users,
  Crown,
  Baby,
  Flower2,
  Home,
} from 'lucide-react'

const familyDetails = [
  {
    side: "Groom’s Family",
    person: 'Dnyanesh',
    icon: Crown,
    emoji: '🌿',
    gradient: 'from-[#fff1f2] via-[#fde2e4] to-[#f8cfd4]',
    details: [
      {
        label: 'Parents',
        value: 'Shri Prakash & Smt. Asha Painjane',
      },
      {
        label: 'Grandparents',
        value: '[Names]',
      },
      {
        label: 'Siblings',
        value: 'Priyanka, Nilima, Neha, Kavita, Deepika, Prathmesh',
      },
      {
        label: 'Family Love',
        value: 'Aaradhya, Arnit, Nainish, Kesari',
      },
    ],
  },
  {
    side: "Bride’s Family",
    person: 'Pratiksha',
    icon: Flower2,
    emoji: '🌸',
    gradient: 'from-[#fff7ed] via-[#ffe4d6] to-[#f4c2c2]',
    details: [
      {
        label: 'Parents',
        value: 'Shri Balkrushna & Smt. Sarla Wade',
      },
      {
        label: 'Grandparents',
        value: 'With blessings from our beloved elders',
      },
      {
        label: 'Siblings',
        value: 'Rahul',
      },
      {
        label: 'Family Love',
        value: 'AAA',
      },
    ],
  },
]

const blessingCards = [
  {
    icon: Home,
    title: 'Parents',
    text: 'Our first blessings, our strongest support, and the roots of our journey.',
  },
  {
    icon: Crown,
    title: 'Elders',
    text: 'Their guidance and blessings make this celebration sacred and meaningful.',
  },
  {
    icon: Users,
    title: 'Siblings & Cousins',
    text: 'The laughter, memories, fun, and joy that make every moment special.',
  },
  {
    icon: Baby,
    title: 'Little Ones',
    text: 'Tiny hearts bringing smiles, innocence, and extra happiness to our wedding.',
  },
]

export function RSVPSection() {
  return (
    <section
      id="rsvp"
      className="relative overflow-hidden py-16 md:py-24 px-5 bg-[radial-gradient(circle_at_top,#fff8f5_0%,#fffaf8_42%,#f8ebe6_100%)]"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 h-56 w-56 rounded-full bg-[#f4c2c2]/25 blur-3xl animate-float" />
        <div className="absolute top-36 -right-24 h-64 w-64 rounded-full bg-[#e6d7be]/30 blur-3xl animate-float-delayed" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#b76e79]/10 blur-3xl animate-pulse-soft" />

        <span className="absolute left-[8%] top-[18%] text-2xl text-[#b76e79]/20 animate-twinkle">
          ✦
        </span>
        <span className="absolute right-[10%] top-[26%] text-3xl text-[#b76e79]/15 animate-orbit">
          ✧
        </span>
        <span className="absolute left-[14%] bottom-[18%] text-2xl text-[#c9a34e]/25 animate-twinkle">
          ❀
        </span>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center animate-slide-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-[#b76e79]/20 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
            <p className="text-[11px] tracking-[0.24em] uppercase text-[#b76e79] font-sans font-medium">
              With Blessings
            </p>
            <Sparkles className="w-3.5 h-3.5 text-[#b76e79]" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-[#8f4e58] mb-4 text-balance">
            Our Family Circle
          </h2>

          <p className="max-w-xl mx-auto text-[#4a4a4a]/70 font-sans font-normal leading-7 text-sm md:text-base">
            Rooted in <span className="font-semibold text-[#8f4e58]">love</span>,
            growing with{' '}
            <span className="font-semibold text-[#8f4e58]">blessings</span>.
          </p>

          <div className="relative w-20 h-px bg-[#b76e79]/35 mx-auto mt-7 mb-10">
            <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#b76e79]/70" />
          </div>
        </div>

        {/* Family cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {familyDetails.map((family, index) => (
            <div
              key={family.side}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className={`relative h-full overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br ${family.gradient} p-[1px] shadow-lg shadow-[#b76e79]/10 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#b76e79]/20`}
              >
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative h-full rounded-[calc(1.5rem-1px)] bg-white/60 p-5 md:p-6 backdrop-blur-xl">
                  <div className="absolute -right-3 -top-5 text-6xl opacity-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                    {family.emoji}
                  </div>

                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-[#b76e79]/20 blur-md transition-all duration-500 group-hover:scale-125" />
                      <div className="relative w-11 h-11 rounded-full bg-white/80 border border-white shadow-md flex items-center justify-center transition-all duration-500 group-hover:rotate-6 group-hover:scale-105">
                        <family.icon className="w-5 h-5 text-[#b76e79]" />
                      </div>
                    </div>

                    <div>
                      <p className="text-[10px] tracking-[0.22em] uppercase text-[#b76e79]/75 font-sans font-semibold mb-1">
                        {family.side}
                      </p>

                      <h3 className="font-serif text-xl md:text-2xl font-medium text-[#3f3434]">
                        The Family of {family.person}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {family.details.map((item) => (
                      <FamilyRow
                        key={item.label}
                        label={item.label}
                        value={item.value}
                      />
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2.5">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b76e79]/30 to-[#b76e79]/10" />
                    <Heart className="w-3.5 h-3.5 text-[#b76e79]/60 fill-[#b76e79]/25" />
                    <div className="h-px flex-1 bg-gradient-to-r from-[#b76e79]/10 via-[#b76e79]/30 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Blessing mini cards */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {blessingCards.map((card, index) => (
            <div
              key={card.title}
              className="group animate-fade-in-up rounded-2xl border border-white/70 bg-white/60 p-4 shadow-md shadow-[#b76e79]/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:bg-white/80 hover:shadow-lg"
              style={{ animationDelay: `${260 + index * 90}ms` }}
            >
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#b76e79]/10 text-[#b76e79] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                <card.icon className="h-4.5 w-4.5" />
              </div>

              <h4 className="font-serif text-lg font-medium text-[#3f3434] mb-1">
                {card.title}
              </h4>

              <p className="text-xs md:text-sm leading-5 text-[#4a4a4a]/70 font-sans font-normal">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 text-center animate-fade-in-up">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2.5 px-5 py-3 rounded-full border border-[#b76e79]/15 bg-white/65 shadow-sm shadow-[#b76e79]/10 backdrop-blur-md">
            <Heart className="w-4 h-4 text-[#b76e79] fill-[#b76e79]/20" />
            <span className="text-sm text-[#4a4a4a]/75 font-sans font-medium">
              Together, they are the roots of our beautiful beginning.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FamilyRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl bg-white/60 border border-white/70 px-3.5 py-3 shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-white/85">
      <p className="text-[10px] tracking-[0.22em] uppercase text-[#b76e79]/75 font-sans font-semibold mb-1">
        {label}
      </p>
      <p className="text-[#3f3434] font-sans text-sm md:text-base font-semibold leading-6">
        {value}
      </p>
    </div>
  )
}
