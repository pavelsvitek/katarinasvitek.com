import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { FormEvent } from 'react'

import { sendContact } from '../server/contact'

export const Route = createFileRoute('/')({ component: Home })

const EMAIL = 'hello@katarinasvitek.com'
const LINKEDIN = 'linkedin.com/in/katarinasvitek'

type Row = readonly [label: string, text: string]

const individuals: readonly Row[] = [
  ['ICP definition', 'Who buys from you, scored on public signals'],
  ['Strategy', 'Offer, positioning and a one-line hook'],
  ['SoMe engine', 'LinkedIn posts drafted in your voice, weekly'],
  ['Lead-gen', 'Warm list built, enriched and sequenced'],
  ['AEO', 'Get named when buyers ask ChatGPT or Perplexity'],
]

const businesses: readonly Row[] = [
  ['GTM strategy', 'Channel mix, budget and a launch plan you can run'],
  ['ICP + lead-gen', 'Target list to sequenced leads, enriched, no manual lists'],
  ['Dashboards', 'One funnel view, from first click to revenue'],
  ['SoMe + paid', 'Agent-led weekly loop on Meta and Google Ads'],
  ['AEO / GEO', 'Track and grow how AI answers describe your brand'],
]

const engagements: readonly Row[] = [
  [
    'Growth audit',
    'A short, fixed-scope review of your funnel, spend and tracking, with a prioritized plan.',
  ],
  [
    'Project sprint',
    'A defined launch, rebuild or agent build, delivered with clear targets.',
  ],
  [
    'Fractional lead',
    'Ongoing ownership of growth or performance, part-time, embedded with your team.',
  ],
]

function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <div className="shell">
        <Sidebar />
        <main id="main" className="content">
          <Hero />
          <Results />
          <Why />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="#top">
          Katarina Svitek
        </a>
        <nav className="nav__links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="btn btn--pill" href="#contact">
          Book an intro call
        </a>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <aside className="side" id="top">
      <div className="side__sticky">
        <div className="side__id">
          <img
            className="side__photo"
            src="/profile.jpg"
            alt="Portrait of Katarina Svitek"
            width={320}
            height={320}
            fetchPriority="high"
          />
          <div className="side__intro">
            <h2 className="side__name">Katarina Svitek</h2>
            <p className="side__role">Freelance growth and GTM marketer</p>
            <p className="side__bio">
              I take products to market and scale them, with the numbers to
              prove it. 12+ years across B2C apps, B2B and e-commerce, plus AI
              agents that do the repeatable work.
            </p>
            <div className="side__cta">
              <a className="btn btn--solid" href="#contact">
                Book an intro call
              </a>
              <a className="btn btn--ghost" href="#results">
                See the results
              </a>
            </div>
          </div>
        </div>

        <div className="avail">
          <span className="eyebrow eyebrow--accent">Available for</span>
          <p>Freelance GTM, performance and AI marketing projects.</p>
        </div>

        <ul className="facts">
          <li>
            <Icon name="pin" />
            Zurich, Switzerland
          </li>
          <li>
            <Icon name="globe" />
            English · German · Slovak · Hungarian
          </li>
          <li>
            <Icon name="mail" />
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </li>
          <li>
            <Icon name="link" />
            <a
              href={`https://www.${LINKEDIN}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {LINKEDIN}
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

function Hero() {
  return (
    <section className="hero" id="services" aria-labelledby="hero-title">
      <p className="eyebrow">Freelance · GTM · Growth · AI agents</p>
      <h1 id="hero-title">GTM Engineering in the age of AI.</h1>
      <p className="lede">
        Freelance marketer for teams that need growth with numbers attached. I
        frame the launch, run the funnel and build the AI agents that make it
        faster.
      </p>

      <div className="tracks">
        <Track
          tag="01 · Personal GTM"
          title="GTM for individuals"
          blurb="For founders, consultants and fractional leaders who sell their own expertise. A position and a pipeline you can run."
          rows={individuals}
        />
        <Track
          tag="02 · Business GTM"
          title="GTM for businesses"
          blurb="For B2B and B2C teams launching or scaling. Strategy, acquisition and measurement, owned end to end against your numbers."
          rows={businesses}
        />
      </div>
    </section>
  )
}

function Track(props: {
  tag: string
  title: string
  blurb: string
  rows: readonly Row[]
}) {
  return (
    <article className="track">
      <p className="eyebrow eyebrow--accent">{props.tag}</p>
      <h2>{props.title}</h2>
      <p className="track__blurb">{props.blurb}</p>
      <p className="eyebrow track__label">AI-enabled workflows</p>
      <dl className="workflows">
        {props.rows.map(([label, text]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{text}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="section-title">
      <span aria-hidden="true" />
      {children}
    </h2>
  )
}

function Results() {
  return (
    <section className="results" id="results" aria-labelledby="results-title">
      <div id="results-title">
        <SectionTitle>Results</SectionTitle>
      </div>

      <div className="stats">
        <div className="stat stat--hero">
          <p className="eyebrow">Livewell by Zurich · D2C app</p>
          <p className="stat__value stat__value--xl">15K → 500K+</p>
          <p className="stat__text">
            Monthly active users in under 12 months, across 30+ countries.
            Ahead of the 2024 KPI target.
          </p>
        </div>
        <div className="stat stat--side">
          <p className="stat__value">−91%</p>
          <p className="stat__text">
            CPA across 6 markets · Google Ads, Apple Search Ads, Meta
          </p>
        </div>
        <div className="stat">
          <p className="stat__value">ROAS 1.69 → 2.30</p>
          <p className="stat__text">Meta Ads · Gowago, with leads +41%</p>
        </div>
        <div className="stat">
          <p className="stat__value">+243%</p>
          <p className="stat__text">
            Organic traffic · Cytosurge, break-even in 11 months
          </p>
        </div>
        <div className="stat">
          <p className="stat__value">€850K–1M</p>
          {/* TODO: confirm the client name and market count from the Paper design (unreadable at 31% zoom). */}
          <p className="stat__text">Monthly media budget across markets</p>
        </div>
      </div>

      <div className="work">
        <p className="eyebrow">How we can work</p>
        <div className="work__grid">
          {engagements.map(([title, text]) => (
            <article key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="why" aria-labelledby="why-title">
      <div id="why-title">
        <SectionTitle>Why work with me</SectionTitle>
      </div>
      <div className="why__grid">
        <div className="why__copy">
          <p className="why__lead">
            I started in finance and controlling, so I talk CAC, payback and
            margin as comfortably as CTR.
          </p>
          <p>
            You get one person who frames the problem, builds the system and
            reports the numbers. No decks without delivery, no AI for its own
            sake.
          </p>
          <div className="note">
            <span className="eyebrow eyebrow--accent">12+ years</span>
            <p>
              B2C apps, B2B with 18 to 24 month sales cycles, and e-commerce at
              scale. Budgets from CHF 90K to €1M a month.
            </p>
          </div>
        </div>
        <img
          className="why__photo"
          src="/about.jpg"
          alt="Katarina Svitek sitting in a bright living room"
          width={480}
          height={600}
          loading="lazy"
        />
      </div>
    </section>
  )
}

function Contact() {
  const [interest, setInterest] = useState<'personal' | 'business'>('personal')

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const get = (key: string) => String(data.get(key) ?? '')
    setStatus('sending')
    try {
      const result = await sendContact({
        data: {
          name: get('name'),
          email: get('email'),
          interest,
          company: get('company'),
          goal: get('goal'),
          website: get('website'),
        },
      })
      if (result.ok) {
        form.reset()
        setStatus('sent')
      } else {
        setMessage(result.error)
        setStatus('error')
      }
    } catch {
      setMessage('Could not send your message. Please email me directly instead.')
      setStatus('error')
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__intro">
        <p className="eyebrow eyebrow--light">Contact</p>
        <h2 id="contact-title">Let’s frame your next move.</h2>
        <p>
          Available for freelance projects. Tell me the goal and the number
          that matters.
        </p>
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </div>

      <form className="form" onSubmit={onSubmit}>
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" placeholder="Your name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            autoComplete="email"
          />
        </label>

        <fieldset className="choice">
          <legend>I’m interested in</legend>
          <label className={interest === 'personal' ? 'is-on' : ''}>
            <input
              type="radio"
              name="interest"
              checked={interest === 'personal'}
              onChange={() => setInterest('personal')}
            />
            <i aria-hidden="true" />
            Personal GTM
          </label>
          <label className={interest === 'business' ? 'is-on' : ''}>
            <input
              type="radio"
              name="interest"
              checked={interest === 'business'}
              onChange={() => setInterest('business')}
            />
            <i aria-hidden="true" />
            Business GTM
          </label>
        </fieldset>

        <label className="field field--wide">
          <span>{interest === 'personal' ? 'Role' : 'Company or role'}</span>
          <input
            name="company"
            type="text"
            placeholder={interest === 'personal' ? 'e.g. Head of Growth' : 'e.g. Head of Growth, Acme'}
          />
        </label>
        <label className="field field--wide">
          <span>What do you want to achieve?</span>
          <textarea
            name="goal"
            rows={3}
            placeholder="The goal, the number that matters, the timeline."
          />
        </label>
        <input
          className="hp"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <div className="field--wide form__actions">
          <button
            className="btn btn--pill btn--submit"
            type="submit"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending…' : 'Send message →'}
          </button>
          <p className="form__status" role="status" aria-live="polite">
            {status === 'sent' && 'Thank you! I’ll get back to you soon.'}
            {status === 'error' && message}
          </p>
        </div>
      </form>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <strong>Katarina Svitek</strong>
        <span>Zurich · Freelance GTM marketing in the age of AI.</span>
      </div>
    </footer>
  )
}

function Icon({ name }: { name: 'pin' | 'globe' | 'mail' | 'link' }) {
  const paths = {
    pin: 'M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
    globe:
      'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21ZM3.5 9h17M3.5 15h17',
    mail: 'M4 6h16v12H4V6Zm0 1 8 6 8-6',
    link: 'M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1',
  } as const
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  )
}
