export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">John Doe</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-indigo-600">
              About
            </a>
            <a href="#projects" className="hover:text-indigo-600">
              Projects
            </a>
            <a href="#skills" className="hover:text-indigo-600">
              Skills
            </a>
            <a href="#contact" className="hover:text-indigo-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="max-w-5xl mx-auto px-4 py-20 text-center" id="hero">
        <h2 className="text-4xl font-bold mb-4">
          Web Developer Specializing in Laravel & React
        </h2>
        <p className="text-lg text-gray-600">
          3+ years of experience building scalable and efficient web
          applications. Currently working on healthcare systems that improve
          patient data management and clinical workflows.
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Let's Connect
        </a>
      </section>

      <section id="about" className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            I'm a full-stack web developer passionate about creating impactful
            applications using Laravel and React. Over the past three years,
            I've delivered solutions in e-commerce, internal business tools, and
            most recently, healthcare—where I help hospitals streamline
            electronic health records and reporting.
          </p>
        </div>
      </section>

      <section id="projects" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Highlighted Projects</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-lg font-bold">Hospital EHR System</h4>
              <p className="text-sm text-gray-600 mt-2">
                Built using Laravel and React, this system manages patient
                records, doctor schedules, and medical history. Focused on clean
                UI and fast search features.
              </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg p-6">
              <h4 className="text-lg font-bold">Admin Dashboard</h4>
              <p className="text-sm text-gray-600 mt-2">
                A role-based dashboard built with React and Tailwind. Integrated
                with Laravel APIs for data management and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl font-semibold mb-6">Skills</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>Laravel</li>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>PHP</li>
            <li>RESTful APIs</li>
            <li>MySQL</li>
            <li>Tailwind CSS</li>
            <li>Git & GitHub</li>
            <li>Healthcare Systems</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="bg-indigo-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-6">
            Whether you have a project in mind or just want to connect, feel
            free to drop a message!
          </p>
          <a
            href="mailto:you@example.com"
            className="bg-white text-indigo-600 font-semibold px-6 py-2 rounded hover:bg-gray-100 transition"
          >
            you@example.com
          </a>
        </div>
      </section>

      <footer className="text-center text-gray-500 py-8 text-sm">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </main>
  );
}
