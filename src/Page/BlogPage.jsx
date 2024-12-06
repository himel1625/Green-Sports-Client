import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Green Sports | Blog-Page</title>
      </Helmet>
      <div className="py-10 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="shadow-md rounded-lg p-6  border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              The Rise of Eco-Friendly Sports Gear
            </h2>
            <p className="text-gray-700">
              Sports equipment is undergoing a green revolution. With
              advancements in technology and increasing awareness of
              environmental issues, manufacturers are now prioritizing
              sustainability in their designs. Eco-friendly sports gear, such as
              biodegradable soccer balls, bamboo-based bikes, and recycled
              plastic running shoes, is becoming more popular among athletes.
              These innovations not only reduce waste but also help in lowering
              the overall carbon footprint of sports industries. By opting for
              sustainable materials and production methods, the sports world is
              setting an example for other industries. The shift is not just
              about reducing harm but also about proving that performance can go
              hand in hand with responsibility.
            </p>
            <p className="text-green-600 text-sm mt-4">
              Date: December 6, 2024
            </p>
          </div>

          <div className="shadow-md rounded-lg p-6  border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Top 10 Green Stadiums in the World
            </h2>
            <p className="text-gray-700">
              Stadiums worldwide are now embracing sustainable design
              principles. The concept of green stadiums focuses on renewable
              energy sources, water conservation, and waste reduction. Iconic
              examples include the Mercedes-Benz Stadium in Atlanta, which
              boasts solar panels and a rainwater collection system, and the
              Amsterdam Arena, powered entirely by wind energy. These venues
              showcase how sports infrastructure can lead the way in
              environmental consciousness. As we move forward, more stadiums are
              expected to adopt green technologies, ensuring that large-scale
              sporting events leave a minimal environmental footprint.
            </p>
            <p className="text-green-600 text-sm mt-4">
              Date: December 4, 2024
            </p>
          </div>

          <div className="shadow-md rounded-lg p-6  border-l-4 border-green-500">
            <h2 className="text-xl font-bold text-green-800 mb-2">
              Sustainable Practices in Major Sports Events
            </h2>
            <p className="text-gray-700">
              Major sports events like the Olympics and FIFA World Cup are
              increasingly adopting sustainable practices. These initiatives
              include waste segregation, promoting public transport, and using
              renewable energy for operations. For instance, the Tokyo Olympics
              introduced hydrogen-powered vehicles for transportation and
              reusable cardboard beds for athletes. Such practices not only
              enhance the environmental impact of events but also inspire
              audiences and participating nations to adopt greener lifestyles.
              With global attention on these events, their approach to
              sustainability sets an important precedent for other industries.
            </p>
            <p className="text-green-600 text-sm mt-4">
              Date: December 1, 2024
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
