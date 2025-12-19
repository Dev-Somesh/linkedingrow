import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const About = () => {

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/90" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234299e1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About LinkedIn Evolved
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Helping professionals optimize their LinkedIn presence since 2023
          </p>
        </div>

        <div className="mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-4 text-lg text-gray-600">
                At LinkedIn Evolved, we believe that every professional deserves to have their LinkedIn profile
                working as hard as they do. Our mission is to democratize access to advanced profile analytics
                and provide actionable insights that help people advance their careers.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                We're passionate about helping professionals at all stages of their careers optimize their
                digital presence.
              </p>

              <div className="mt-8 flex space-x-6">
                <a
                  href="https://github.com/Dev-Somesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/ersomeshbhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:hello@someshbhardwaj.me"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600">
                  Have questions or suggestions? Feel free to reach out through any of the social links
                  or send an email directly to:
                </p>
                <a
                  href="mailto:hello@someshbhardwaj.me"
                  className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  hello@someshbhardwaj.me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;