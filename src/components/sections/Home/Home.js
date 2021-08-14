import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Link from '../../UI/Link/Link';
import movingword from'../../../movingword.svg';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
        /*  style={{ backgroundImage: `url(${bgImage})` }}*/
          style = {{backgorundImage: 'url({$movingword.svg})'}}
        >
          <div className='intro container text-center text-light'>
            <h1 className='title'>COLLA</h1>
            <h2 className='sub-title mb-4'>
              This is the first project of COLLA to study React and TypScript to create a website and introduce a new algorithm.
            </h2>
            <Link target='about' classes='btn btn-primary rounded-0 mr-2'>
              Members
            </Link>
            <Link target='contact' classes='btn btn-light text-dark rounded-0'>
              Main stack
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
