import { memo, useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const ref = useRef<Swiper | null>(null);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    ref.current = new Swiper('.swiper', {
      direction: 'horizontal',

      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  return (
    <div className='Home flex flex-col'>
      <HomeContext.Provider value={[state, setState]}>
        <div className='swiper w-40'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>Slide 1</div>
            <div className='swiper-slide'>Slide 2</div>
            <div className='swiper-slide'>Slide 3</div>
          </div>

          <div className='swiper-pagination'></div>

          <div className='swiper-button-prev'></div>
          <div className='swiper-button-next'></div>

          <div className='swiper-scrollbar'></div>
        </div>
        <div className='w-full'>
          <button
            className='p-5'
            onClick={() => {
              ref.current?.slideNext();
            }}
          >
            test
          </button>
        </div>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
