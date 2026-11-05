
export const metadata = {
    title: "About Us",
    description:
      "Learn more about ToolNest, a collection of free online tools designed to make everyday digital tasks easier.",
    keywords: [
      "about ToolNest",
      "free online tools",
      "online utilities",
      "developer tools",
    ],
    openGraph: {
      title: "About Us | ToolNest",
      description:
        "Learn more about ToolNest and our mission to make useful online tools accessible to everyone.",
      type: "website",
    },
  };
  
  export default function AboutPage() {
    return (
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              About ToolNest
            </span>
  
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Simple Tools.
              <span className="block text-blue-600">
                Everyday Solutions.
              </span>
            </h1>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              ToolNest is a collection of free online tools designed to
              help you complete everyday digital tasks quickly and easily.
            </p>
          </div>
        </section>
  
        {/* Main Content */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="space-y-12">
            {/* Who We Are */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Who We Are
              </h2>
  
              <p className="mt-4 leading-8 text-slate-600">
                ToolNest is an online platform that brings together
                practical tools for developers, creators, students, and
                everyday internet users.
              </p>
  
              <p className="mt-4 leading-8 text-slate-600">
                Instead of switching between multiple websites for
                simple tasks, you can find useful utilities in one
                convenient place.
              </p>
            </div>
  
            {/* Our Mission */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h2>
  
              <p className="mt-4 leading-8 text-slate-600">
                Our mission is to make everyday digital tasks simpler,
                faster, and more accessible by providing useful online
                tools that anyone can use.
              </p>
  
              <p className="mt-4 leading-8 text-slate-600">
                We believe that useful tools should be easy to access
                without unnecessary complexity or complicated setup.
              </p>
            </div>
  
            {/* What We Offer */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                What We Offer
              </h2>
  
              <p className="mt-4 leading-8 text-slate-600">
                ToolNest provides a growing collection of online
                utilities for different needs, including:
              </p>
  
              <ul className="mt-5 space-y-3">
                {[
                  ["Text Tools", "Count words, characters, and other text statistics."],
                  ["QR Code Generator", "Create QR codes from text and URLs."],
                  ["JSON Tools", "Format, validate, and organize JSON data."],
                  ["Base64 Tools", "Encode and decode Base64 strings."],
                  ["Password Generator", "Generate random passwords with customizable options."],
                  ["URL Tools", "Encode and decode URL components."],
                ].map(([title, description]) => (
                  <li
                    key={title}
                    className="flex gap-3 rounded-xl border border-slate-100 p-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                      ✓
                    </span>
  
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* How We Work */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Designed for Convenience
              </h2>
  
              <p className="mt-4 leading-8 text-slate-600">
                Many of our tools are designed to work directly in your
                browser. This helps you complete common tasks without
                installing additional software.
              </p>
  
              <p className="mt-4 leading-8 text-slate-600">
                We continuously work to improve existing tools and
                introduce new utilities based on practical everyday
                needs.
              </p>
            </div>
  
            {/* Closing */}
            <div className="rounded-2xl bg-blue-50 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">
                Make Your Work Easier with ToolNest
              </h2>
  
              <p className="mt-3 leading-7 text-slate-600">
                Explore our collection of free online tools and find
                simple solutions for your everyday tasks.
              </p>
  
              <a
                href="/#tools"
                className="mt-6 inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Explore Our Tools
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }
  