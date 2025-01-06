import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = () => {
    if (feedback.trim()) {
      setFeedback('');
      toast.success('Thank you for your valuable feedback!');
    } else {
      toast.error('Please enter your feedback before submitting.');
    }
  };

  return (
    <div className='mt-20'>
      <footer className='text-white py-12 px-6  bg-[#081621] '>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold mb-2 text-Color'>Green Sports</h2>
            <p className='text-white leading-relaxed'>
              Leading provider of quality export equipment globally. We deliver
              excellence and ensure customer satisfaction.
            </p>
          </div>

          <div className='space-y-3'>
            <h3 className='text-2xl font-semibold mb-3  text-Color'>
              Contact Us
            </h3>
            <p className='text-white'>
              <span className='font-semibold'>Email: </span>
              Green-Sports@gmail.com
            </p>
            <p className='text-white'>
              <span className='font-semibold'>Phone:</span> +880 123 000 696
            </p>
            <p className='text-white'>
              <span className='font-semibold'>Address:</span> Q64R+8Q3, Keerani
              Para Rd, Rangpur, Bangladesh
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-3  text-Color'>
              Feedback
            </h3>
            <div className='space-y-4'>
              <textarea
                className='w-full p-4 text-gray-800 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md'
                rows='2'
                placeholder='Share your valuable feedback...'
                value={feedback}
                onChange={e => setFeedback(e.target.value)}
              />
              <button
                type='button'
                className='w-full py-2 bg-Color text-white rounded-md shadow-md'
                onClick={handleFeedbackSubmit}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>

        <div className='text-center border-t border-gray-300 mt-10 pt-5'>
          <p className='text-white'>
            &copy; {new Date().getFullYear()} Green Sports . All rights
            reserved. | (Himel)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
