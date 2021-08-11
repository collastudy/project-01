import React from 'react';
import Section from '../../../HOC/Section';
import Calender from './index.js';


const Blog = () => {
  return (
    <Section id='blog'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Calender</span>
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Individualized quality care that meets the total needs of the
            patient Individualized quality care that quality care that
            Individualized quality care that meets the total.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <Calender />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Blog;
