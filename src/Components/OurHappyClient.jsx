import React from 'react';

const OurHappyClient = () => {
  const localClients = [
    'Bangladesh National Sports Federation',
    'Dhaka Cricket Club',
    'Bangladesh Olympic Association',
  ];

  const internationalClients = [
    'FIFA - International Football Federation',
    'International Cricket Council (ICC)',
    'NBA - National Basketball Association',
  ];

  return (
    <section className='py-20 '>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-extrabold text-gray-800 text-center mb-8'>
          Our Valued Clients
        </h2>
        <p className='text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto'>
          We take pride in building lasting relationships with our clients,
          providing top-notch sports equipment and services to some of the most
          renowned organizations both locally and internationally.
        </p>

        <div className='flex items-center lg:justify-center gap-32  flex-col md:flex-row'>
          {/* Bangladesh Clients */}
          <div className='text-left'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
              Top Clients from Bangladesh
            </h3>
            <ul className='space-y-4'>
              {localClients.map((client, index) => (
                <li key={index} className='text-lg text-gray-700'>
                  {client}
                </li>
              ))}
            </ul>
          </div>

          {/* International Clients */}
          <div className='text-left'>
            <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
              International Clients
            </h3>
            <ul className='space-y-4'>
              {internationalClients.map((client, index) => (
                <li key={index} className='text-lg text-gray-700'>
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHappyClient;
