import SEO from "../components/SEO";

function About() {
  const handleContact = () => {
    const user = "Contact";
    const domain = "vikash.app";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <SEO
        title="About"
        description="Learn about vikash.app, a personal project showcasing beautiful travel destinations across Europe and Asia. Created and maintained by Vikash."
        path="/about"
      />
      <article>
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          About This Site
        </h1>
        <section className="prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong className="text-pink-600">vikash.app</strong> is a personal project designed to showcase beautiful travel destinations.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Created and maintained by Vikash.<br />
            <button
              type="button"
              onClick={handleContact}
              className="text-pink-600 hover:text-cyan-500 transition underline cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
              aria-label="Send an email"
            >
              Contact me
            </button>
          </p>
        </section>
      </article>
    </main>
  );
}

export default About;