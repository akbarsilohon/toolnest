
export const metadata = {
    title: "Contact Us",
    description:
      "Get in touch with ToolNest. Contact us for questions, feedback, suggestions, or assistance regarding our free online tools.",
    keywords: [
      "contact ToolNest",
      "ToolNest support",
      "ToolNest feedback",
      "contact online tools",
    ],
    openGraph: {
      title: "Contact Us | ToolNest",
      description:
        "Have a question or suggestion? Get in touch with the ToolNest team.",
      type: "website",
    },
  };
  
  export default function ContactPage() {
    return (
      <main className="bg-white">
        {/* Hero */}
        <section className="border-b border-slate-100 bg-slate-50">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
              Contact ToolNest
            </span>
  
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Get in Touch
            </h1>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Have a question, suggestion, or feedback? We would love
              to hear from you. Your input helps us make ToolNest better.
            </p>
          </div>
        </section>
  
        {/* Contact Content */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Contact Information
              </h2>
  
              <p className="mt-4 leading-7 text-slate-600">
                Whether you have questions about our tools, want to
                report an issue, or simply want to share an idea,
                feel free to reach out.
              </p>
  
              <div className="mt-8 space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    ✉
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email Support
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      For general questions, feedback, and support
                      inquiries.
                    </p>
                    <p className="mt-2 text-sm font-medium text-blue-600">
                      Use the contact form
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    💡
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Suggestions
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Have an idea for a new tool or feature?
                      We welcome your suggestions.
                    </p>
                  </div>
                </div>
  
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-xl">
                    🛠
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Report an Issue
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Let us know if you encounter a problem while
                      using any of our online tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Contact Form Placeholder */}
            <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Send Us a Message
              </h2>
  
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Please use your preferred email application to contact
                our team.
              </p>
  
              <div className="mt-8 rounded-xl bg-slate-50 p-6">
                <p className="text-sm leading-7 text-slate-600">
                  To help us respond effectively, include the following
                  information in your message:
                </p>
  
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Your name
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Your email address
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    Subject of your inquiry
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">✓</span>
                    A detailed description of your message
                  </li>
                </ul>
              </div>
  
              <p className="mt-6 text-sm leading-7 text-slate-500">
                We appreciate your interest in ToolNest and will do
                our best to address your inquiry.
              </p>
            </div>
          </div>
  
          {/* Closing */}
          <div className="mt-16 rounded-2xl bg-blue-50 px-8 py-10 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              Thank You for Visiting ToolNest
            </h2>
  
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
              Your feedback and suggestions help us improve our tools
              and provide a better experience for everyone.
            </p>
          </div>
        </section>
      </main>
    );
  }
  