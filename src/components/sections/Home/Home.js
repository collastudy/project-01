import React from 'react';

import Section from '../../../HOC/Section';
import bgImage from '../../../assets/img/home_bg.jpg';
import Link from '../../UI/Link/Link';
import pencil from '../../../SVG_Animation/image/Pencil.svg';

const home = () => {
  return (
    <Section id='home'>
      <div>
        <div
          className='home-content p-5'
          style={{ backgroundImage: `url(${bgImage})` }}
        >
        /*  <div className='intro container text-center text-light'>
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
          </div>*/
          <div id="blue-container">

            <h1 class="alc">Colla</h1>
            <div class="alc" id="top-pencil">
              <object>
                <embed src="pencil" width="300px" height="300px"/>
              </object>
            </div>


        </div>
      </div>
    </Section>
  );
}

export default home;
