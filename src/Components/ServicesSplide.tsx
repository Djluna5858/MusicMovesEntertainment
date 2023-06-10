import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from './generateSlides/generateSlides';


export const ServiceSplide: React.VoidFunctionComponent = () => {
  return (
    <div className="SplideWrapper">

      <Splide
        options={ {
          perPage: 7,
          rewind : true,
          gap    : '1rem',
        } }
        aria-labelledby="basic-example-heading"
        onMoved={ ( splide, newIndex ) => {
          // eslint-disable-next-line
          console.log( 'moved', newIndex );

          // eslint-disable-next-line
          console.log( 'length', splide.length );
        } }
      >
        { generateSlides().map( slide => (
          <SplideSlide key={ slide.src }>
            <div className={slide.look}>
                <img src={ slide.src } alt={ slide.alt }/>
                <div className='Overlay'>
                    <div className='ServiceText'>
                        <div className='Replace'>No</div>
                    </div>
                </div>
            </div>
          </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
};
