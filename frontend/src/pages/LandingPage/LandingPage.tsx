import Navbar from "../../components/Navbar/Navbar/PublicNavbar";
import finsightHero from "../assets/finsight-hero.png";

function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-(--color-primary)">
            AI-Powered JSE Market Intelligence
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Understand the South African market with AI.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            FinSight SA helps you explore market data, monitor your portfolio,
            and understand financial trends through AI-powered insights.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/register"
              className="rounded-lg bg-(--color-primary) px-6 py-3 text-sm font-semibold text-white transition hover:bg-(--color-primary-dark)"
            >
              Explore FinSight
            </a>

            <a
              href="#features"
              className="rounded-lg border border-(--color-border) px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Explore Features
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Portfolio project — market data and AI insights are provided for
            demonstration purposes.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-(--color-border) bg-slate-50 shadow-xl">
          <img
            src={finsightHero}
            alt="AI-powered financial market analytics"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="border-y border-(--color-border) bg-slate-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-(--color-primary)">
              Platform Features
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to understand the market
            </h2>

            <p className="mt-4 text-slate-600">
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
      <section className="bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-teal-400">
              AI Capabilities
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Turn market data into meaningful insights.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-300">
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

          <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">AI Market Insight</span>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                Demo
              </span>
            </div>

            <div className="mt-8">
              <p className="text-sm text-slate-400">Market sentiment</p>

              <p className="mt-2 text-3xl font-bold text-emerald-400">
                Positive
              </p>
            </div>

            <div className="mt-8 rounded-xl bg-slate-800 p-5">
              <p className="text-sm font-medium">AI Summary</p>

              <p className="mt-3 text-sm leading-6 text-slate-300">
                Market activity is showing increased momentum across selected
                sectors. This demonstration illustrates how FinSight SA could
                summarize available market information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-(--color-primary)">
              How It Works
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
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
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-(--color-primary)">
              Data-Driven Interface
            </span>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              A dashboard designed for financial data.
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Visualize portfolio information, market trends and AI insights
              through a focused interface designed for clarity.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-600">
              <li>✓ Portfolio overview</li>
              <li>✓ Market monitoring</li>
              <li>✓ Interactive financial charts</li>
              <li>✓ AI-powered explanations</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-(--color-border) bg-white p-4 shadow-lg">
            <div className="h-72 rounded-xl bg-slate-100 p-6">
              <div className="h-4 w-32 rounded bg-slate-300" />

              <div className="mt-8 flex h-40 items-end gap-3">
                {[40, 65, 50, 80, 60, 95, 75].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-(--color-primary)"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
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
      <section className="px-6 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl bg-slate-950 px-8 py-12 text-white md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold">Explore FinSight SA</h2>

            <p className="mt-3 max-w-xl text-slate-300">
              Experience a portfolio demonstration of AI-powered financial
              analytics for the South African market.
            </p>
          </div>

          <a
            href="/register"
            className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-(--color-border) bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="font-bold text-(--color-primary)">FinSight SA</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
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

          <div className="mt-10 border-t border-(--color-border) pt-6 text-xs text-slate-500">
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
      className={`rounded-xl border p-6 ${
        highlighted
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-(--color-border) bg-white"
      }`}
    >
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-sm font-bold text-(--color-primary)">
        AI
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p
        className={`mt-3 text-sm leading-6 ${
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
    <div className="flex items-center gap-3 text-sm text-slate-300">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/10 text-teal-400">
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
    <article className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-(--color-border) text-sm font-semibold text-(--color-primary)">
        {number}
      </div>

      <h3 className="mt-5 text-lg font-semibold">{title}</h3>

      <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-600">
        {description}
      </p>
    </article>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-(--color-border) bg-slate-50 p-5">
      <summary className="cursor-pointer list-none font-medium">
        {question}
      </summary>

      <p className="mt-4 text-sm leading-6 text-slate-600">{answer}</p>
    </details>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold">{title}</h4>

      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
