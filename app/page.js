// DEPLOYMENT NOTES:
// 1. Create a free account at Vercel.com
// 2. Upload this project to GitHub
// 3. Import the GitHub repository into Vercel
// 4. Click Deploy
// 5. Connect your custom domain later
//
// Recommended Stack:
// - Framework: Next.js + React
// - Hosting: Vercel
// - Forms: Formspree or Google Forms
// - Calendar: Embedded Google Calendar
// - Store (Future): Shopify or Printify integration
//
// Suggested Domain Ideas:
// - gelballwasteland.com.au
// - wastelandgelball.com
// - wastelandops.au
//
// Future Features Ready To Add:
// - Online booking system
// - Digital waivers
// - Player accounts
// - Merch store
// - Event ticketing
// - Team/faction leaderboards

export default function GelballWastelandWebsite() {
  return (
    <div className="min-h-screen bg-black text-zinc-200 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-orange-500/20 bg-gradient-to-b from-zinc-900 to-black">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-orange-500 uppercase tracking-[0.3em] text-sm mb-4">
              Welcome To The Wasteland
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight text-white mb-6">
              GELBALL
              <br />
              WASTELAND
            </h1>

            <p className="text-lg text-zinc-300 leading-relaxed mb-8">
              Chaos. Dust. Adrenaline. Queensland’s most feral gelball field.
              Whether you're a first timer or a hardened wasteland raider,
              this is where weekend survival begins.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://forms.gle/YOURBOOKINGFORM"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-6 py-3 rounded-2xl transition inline-block"
              >
                Book A Game
              </a>

              <a
                href="#calendar"
                className="border border-zinc-700 hover:border-orange-500 px-6 py-3 rounded-2xl transition inline-block"
              >
                View Game Calendar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK INFO */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Game Days',
            text: 'Weekly public games, night events, themed battles and total chaos.'
          },
          {
            title: 'Field Waivers',
            text: 'Digital waivers and safety forms for all players before entering the field.'
          },
          {
            title: 'New Merchandise',
            text: 'Patches, shirts, gels and wasteland gear coming soon.'
          }
        ].map((card, i) => (
          <div
            key={i}
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-orange-500 mb-3">
              {card.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </section>

      {/* GAME CALENDAR */}
      <section id="calendar" className="border-y border-zinc-800 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
                Upcoming Events
              </p>
              <h2 className="text-4xl font-black text-white">
                Game Calendar
              </h2>
            </div>

            <button className="border border-orange-500 text-orange-500 px-5 py-3 rounded-2xl hover:bg-orange-500 hover:text-black transition">
              Full Schedule
            </button>
          </div>

          <div className="mb-10 rounded-3xl overflow-hidden border border-zinc-800 bg-black p-2">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=<iframe src="https://calendar.google.com/calendar/embed?src=the_wasteland%40outlook.com&ctz=Australia%2FBrisbane" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              title="Gelball Wasteland Calendar"
            ></iframe>
          </div>

          <div className="grid gap-5">
            {[
              {
                title: 'Sunday Public Game',
                date: 'Sunday — 8:00AM Start',
                desc: 'Full field open play with hire blasters available.'
              },
              {
                title: 'Saturday Night Game',
                date: 'Saturday — 6:30PM Start',
                desc: 'Low light chaos, tracers, flashlights and panic.'
              },
              {
                title: 'Private Events',
                date: 'Mon - Fri ',
                desc: 'Group booking, Birthday parties, Work event.'
              }
            ].map((event, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-3xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {event.title}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-2">
                    {event.date}
                  </p>
                  <p className="text-zinc-400">{event.desc}</p>
                </div>

                <button className="bg-orange-500 text-black font-bold px-5 py-3 rounded-2xl hover:bg-orange-400 transition">
                  Reserve Spot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
            Entry & Rentals
          </p>
          <h2 className="text-4xl font-black text-white">Pricing</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Field Entry',
              price: '$35',
              details: 'Bring your own gear and join the chaos.'
            },
            {
              title: 'Rental Package',
              price: '$60',
              details: 'Includes blaster, mask and starter gels.'
            },
            {
              title: 'Night Game',
              price: '$40',
              details: 'After-dark madness under lights and smoke.'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <div className="text-5xl font-black text-orange-500 mb-4">
                {item.price}
              </div>
              <p className="text-zinc-400 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RULES */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="mb-10">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
              Stay Safe
            </p>
            <h2 className="text-4xl font-black text-white">
              Rules & Safety
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              'No.1 Eye protection - must remain on at all times in active play zones.',
              'No.2 Safe Zone -  Magazine out and chamber cleared before leaving the field.',
              'No.3 FPS Limits Apply - 350fps Max ',
              'No.4 No Blind Fire - Look where you shoot.',
              'No.5 Call your hits - All Players are to call their hits.',
              'No.6 Dead Men Dont Talk - No talking whle waiting for revival or respawning.',
              'No.7 Grenade! - All grenades have a 3 meter radius.',
              
            ].map((rule, i) => (
              <div
                key={i}
                className="bg-black border border-zinc-800 rounded-2xl p-5 flex items-start gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-orange-500 mt-2" />
                <p className="text-zinc-300 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="mb-10">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
            Wasteland Memories
          </p>
          <h2 className="text-4xl font-black text-white">Gallery</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-64 rounded-3xl border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-500"
            >
              Photo / Video Placeholder
            </div>
          ))}
        </div>
      </section>

      {/* MERCH */}
      <section className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-y border-orange-500/20">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Coming Soon
          </p>

          <h2 className="text-5xl font-black text-white mb-6">
            WASTELAND MERCH
          </h2>

          <p className="max-w-2xl mx-auto text-zinc-300 text-lg leading-relaxed mb-8">
            Custom shirts, patches, gels, field gear and wasteland themed merch
            are currently under construction.
          </p>

          <button className="bg-orange-500 text-black font-bold px-6 py-3 rounded-2xl hover:bg-orange-400 transition">
            Notify Me
          </button>
        </div>
      </section>

      {/* FOOTER */}
      {/* WAIVER FORM */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
            Required Before Play
          </p>
          <h2 className="text-4xl font-black text-white mb-4">
            Digital Waiver Form
          </h2>
          <p className="text-zinc-400">
            All players must complete the online waiver before entering the field.
          </p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">
          <a
            href="https://forms.gle/YOURWAIVERFORM"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-2xl transition inline-block"
          >
            Complete Waiver
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-10">
            <p className="text-orange-500 uppercase tracking-widest text-sm mb-2">
              Contact The Wasteland
            </p>
            <h2 className="text-4xl font-black text-white">
              Get In Touch
            </h2>
          </div>

          <form
            action="https://formspree.io/f/YOURFORMID"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="w-full bg-black border border-zinc-700 rounded-2xl px-5 py-4 text-white"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-8 py-4 rounded-2xl transition"
            >
              Send Transmission
            </button>
          </form>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-500">
        <div>
          <p className="font-bold text-zinc-300">Gelball Wasteland</p>
          <p>Queensland, Australia</p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="hover:text-orange-500 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>
      </footer>
    </div>
  )
}
