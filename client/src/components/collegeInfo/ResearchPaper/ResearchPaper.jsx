

const ResearchPaper = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Student Research Papers
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <a
              href="/research1.pdf"
              target="_blank"
              className="text-blue-600 underline"
            >
              Study on AI in Education
            </a>
          </li>
          <li>
            <a
              href="/research2.pdf"
              target="_blank"
              className="text-blue-600 underline"
            >
              Climate Change and Policy
            </a>
          </li>
          <li>
            <a
              href="/research3.pdf"
              target="_blank"
              className="text-blue-600 underline"
            >
              The Future of Renewable Energy
            </a>
          </li>
        </ul>
      </section>
    );
};

export default ResearchPaper;