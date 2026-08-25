import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar/PublicNavbar";
import finsightHero from "../../assets/finsight-hero.png";
import FinSightLogo from "../../components/common/FinSightLogo";

function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50/80 via-white to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800">
              <span className="h-2 w-2 rounded-full bg-teal-500 animate-pulse" />
              AI-Powered JSE Market Intelligence
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl leading-[1.15]">
              Understand the South African market with{" "}
              <span className="text-teal-700">AI</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              FinSight SA helps you explore market data, monitor your portfolio,
              and understand financial trends through AI-powered insights.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="rounded-lg bg-teal-700 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-teal-800 active:scale-[0.98]"
              >
                Explore FinSight
              </Link>

              <a
                href="#features"
                className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 hover:text-slate-900"
              >
                Explore Features
              </a>
            </div>

            <p className="mt-5 text-xs text-slate-500">
              Portfolio project — market data and AI insights are provided for
              demonstration purposes.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl transition hover:shadow-2xl">
            <img
              src={finsightHero}
              alt="AI-powered financial market analytics"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-slate-200 bg-slate-50/60 scroll-mt-14"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Platform Features
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to understand the market
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Explore market information, track your portfolio and use AI to
              turn financial data into understandable insights.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Portfolio Management"
              description="Track your investments and monitor portfolio performance from one place."
            />

            <FeatureCard
              title="JSE Market Monitoring"
              description="Explore South African market information and follow instruments that matter to you."
            />

            <FeatureCard
              title="AI Insights"
              description="Use AI-generated analysis to understand market movements and financial trends."
              highlighted
            />
          </div>
        </div>
      </section>

      {/* AI Intelligence */}
      <section id="ai-insights" className="bg-slate-950 text-white scroll-mt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              AI Capabilities
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Turn market data into meaningful insights.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300">
              FinSight SA uses AI to help explain market movements, identify
              relevant patterns and summarize financial information in a way
              that is easier to understand.
            </p>

            <div className="mt-8 space-y-4">
              <InsightItem text="AI-generated market summaries" />
              <InsightItem text="Trend and sentiment analysis" />
              <InsightItem text="Portfolio insights and explanations" />
              <InsightItem text="Natural-language financial questions" />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-300">AI Market Insight</span>

              <span className="rounded-full bg-emerald-500/20 px-3 py-0.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30">
                Demo
              </span>
            </div>

            <div className="mt-6 border-b border-slate-800 pb-6">
              <p className="text-xs text-slate-400">Market sentiment</p>
              <p className="mt-1 text-3xl font-black text-emerald-400">
                Positive
              </p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-800/80 p-5 border border-slate-700/50">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300">AI Summary</p>

              <p className="mt-2 text-xs leading-relaxed text-slate-300">
                Market activity is showing increased momentum across selected
                sectors. This demonstration illustrates how FinSight SA could
                summarize available market information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-white scroll-mt-14">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              How It Works
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              From data to insight
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Step
              number="01"
              title="Connect"
              description="Access your portfolio and relevant market information."
            />

            <Step
              number="02"
              title="Analyse"
              description="FinSight processes available financial and market data."
            />

            <Step
              number="03"
              title="Understand"
              description="Explore dashboards and AI-generated explanations."
            />
          </div>
        </div>
      </section>

      {/* Demo dashboard */}
      <section id="dashboard-preview" className="bg-slate-50 border-t border-slate-200 scroll-mt-14">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
              Data-Driven Interface
            </span>

            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              A dashboard designed for financial data.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-600">
              Visualize portfolio information, market trends and AI insights
              through a focused interface designed for clarity.
            </p>

            <ul className="mt-6 space-y-3 text-xs font-medium text-slate-700">
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700 text-xs font-bold">✓</span>
                <span>Portfolio overview</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700 text-xs font-bold">✓</span>
                <span>Market monitoring</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700 text-xs font-bold">✓</span>
                <span>Interactive financial charts</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-700 text-xs font-bold">✓</span>
                <span>AI-powered explanations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
            <div className="rounded-xl bg-slate-50 p-6 border border-slate-100">
              <div className="flex items-center justify-between">
                <div className="h-4 w-32 rounded bg-slate-200" />
                <span className="text-xs font-semibold text-teal-700">JSE Index Performance</span>
              </div>

              <div className="mt-8 flex h-44 items-end gap-3 pt-4 border-b border-slate-200">
                {[
                  { h: 40, label: "Mon" },
                  { h: 65, label: "Tue" },
                  { h: 50, label: "Wed" },
                  { h: 80, label: "Thu" },
                  { h: 60, label: "Fri" },
                  { h: 95, label: "Sat" },
                  { h: 75, label: "Sun" },
                ].map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                    <div
                      className="w-full rounded-t-md bg-teal-600 transition-all duration-300 group-hover:bg-teal-700"
                      style={{ height: `${item.h}%` }}
                    />
                    <span className="text-[10px] text-slate-400 font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white border-t border-slate-200 scroll-mt-14">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="mt-10 space-y-4">
            <FAQ
              question="What is FinSight SA?"
              answer="FinSight SA is a portfolio project demonstrating an AI-powered financial analytics platform focused on South African market information."
            />

            <FAQ
              question="What does the AI do?"
              answer="The AI layer is designed to summarize financial information, explain market movements and answer questions using available application data."
            />

            <FAQ
              question="Is FinSight SA providing financial advice?"
              answer="No. This portfolio application is designed for analytics and education and does not provide personalized financial advice."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-slate-50 border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-slate-950 px-8 py-12 text-white md:flex-row md:items-center shadow-xl">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Explore FinSight SA</h2>

            <p className="mt-3 max-w-xl text-sm text-slate-300 leading-relaxed">
              Experience a portfolio demonstration of AI-powered financial
              analytics for the South African market.
            </p>
          </div>

          <Link
            to="/register"
            className="rounded-lg bg-white px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-slate-100 active:scale-[0.98]"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <FinSightLogo size="sm" />

              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                AI-powered market intelligence for the South African market.
              </p>
            </div>

            <FooterColumn
              title="Platform"
              links={["Market Monitor", "Portfolio", "AI Insights"]}
            />

            <FooterColumn
              title="Company"
              links={["About", "Project", "Documentation"]}
            />

            <FooterColumn
              title="Connect"
              links={["GitHub", "LinkedIn", "Contact"]}
            />
          </div>

          <div className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-500">
            FinSight SA is a portfolio project created for demonstration and
            educational purposes. It does not provide financial advice.
          </div>
        </div>
      </footer>
    </main>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  highlighted?: boolean;
};

function FeatureCard({
  title,
  description,
  highlighted = false,
}: FeatureCardProps) {
  return (
    <article
      className={`rounded-xl border p-6 transition-all hover:shadow-md ${
        highlighted
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-200 bg-white"
      }`}
    >
      <div
        className={`mb-5 flex h-10 w-10 items-center justify-center rounded-lg text-xs font-bold ${
          highlighted ? "bg-slate-800 text-teal-400" : "bg-teal-50 text-teal-700"
        }`}
      >
        AI
      </div>

      <h3 className="text-lg font-bold">{title}</h3>

      <p
        className={`mt-2 text-xs leading-relaxed ${
          highlighted ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </article>
  );
}

function InsightItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-xs text-slate-300 font-medium">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-500/20 text-teal-400 text-[10px] font-bold">
        ✓
      </span>
      {text}
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="text-center rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition hover:bg-white hover:shadow-md">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-sm font-black text-teal-700">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>

      <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-slate-50/70 p-5 transition-all open:bg-white open:shadow-sm">
      <summary className="cursor-pointer list-none font-semibold text-sm text-slate-900 flex items-center justify-between">
        <span>{question}</span>
        <span className="text-slate-400 group-open:rotate-180 transition-transform text-xs">▼</span>
      </summary>

      <p className="mt-3 text-xs leading-relaxed text-slate-600 border-t border-slate-100 pt-3">{answer}</p>
    </details>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">{title}</h4>

      <ul className="mt-4 space-y-2 text-xs text-slate-600">
        {links.map((link) => (
          <li key={link}>
            <span className="hover:text-teal-700 cursor-pointer transition">{link}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
