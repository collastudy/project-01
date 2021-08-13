import React from 'react';
import Section from '../../../HOC/Section';
import Gallery from './index'

const Gallerys = () => {
    return (
        <Section id='Gallery'>
          <div className='container pt-2 pb-5'>
            <div className='section-header pt-5 pb-5 text-center'>
              <h3 className='section-title'>
                <span>Gallery</span>
              </h3>
              <h6 className='section-subtitle mr-auto ml-auto'>
       
              </h6>
            </div>
            <div className='section-content'>
              <div className='row'>
                <Gallery />
              </div>
            </div>
          </div>
        </Section>
      );
}

export default Gallerys;