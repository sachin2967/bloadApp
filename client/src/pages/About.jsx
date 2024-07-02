import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>

          <div className="container mx-auto p-6 bg-white rounded-lg shadow-md mt-0">
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
              About This Blog
            </h1>
            <p className="text-gray-700 mb-6">
              Welcome! I'm Sachin Yasav, sharing the latest in web development.
              This blog covers tutorials, trends, reviews, tips, and case
              studies to help you stay updated and build innovative web
              solutions.
            </p>

            <h2 className="text-2xl font-bold text-blue-500 mb-4">
              Topics Covered
            </h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              <li>Tutorials</li>
              <li>Latest Trends</li>
              <li>Tech Reviews</li>
              <li>Tips and Tricks</li>
              <li>Case Studies</li>
            </ul>

            <h2 className="text-2xl font-bold text-blue-500 mb-4">About Me</h2>
            <p className="text-gray-700 mb-6">
              I'm a web developer passionate about learning and sharing
              knowledge. This blog is my platform to connect with developers and
              contribute to the community.
            </p>

            <p className="text-gray-700">
              Thanks for visiting! I hope you find the content helpful. Feel
              free to reach out with any feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About