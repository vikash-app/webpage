function About() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <article>
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-transparent bg-clip-text">
          About This Site
        </h1>
        <section className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-4">
            <strong className="text-pink-600">vikash.app</strong> is a personal project designed to showcase beautiful travel destinations.
          </p>
          <p className="text-gray-700 mb-4">
            Created and maintained by Vikash.<br />
            <a 
              href="mailto:Contact@vikash.app" 
              className="text-pink-600 hover:text-cyan-500 transition underline"
              aria-label="Send an email to Contact@vikash.app"
            >
              Contact me
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}

export default About;