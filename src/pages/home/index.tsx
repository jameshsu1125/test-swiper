import { memo, useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import { HomeContext, HomeState, THomeState } from './config';
import './index.less';

const Home = memo(() => {
  const ref = useRef<Swiper | null>(null);
  const [state, setState] = useState<THomeState>(HomeState);

  useEffect(() => {
    ref.current = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
    });
  });

  return (
    <div className='Home flex flex-col'>
      <HomeContext.Provider value={[state, setState]}>
        <div className='swiper w-full'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>Slide 1</div>
            <div className='swiper-slide'>Slide 2</div>
            <div className='swiper-slide'>Slide 3</div>
          </div>
        </div>
        <div className='w-full'>
          <button
            className='p-5'
            onClick={() => {
              ref.current?.slideNext();
            }}
          >
            slideNext
          </button>
          <button
            className='p-5'
            onClick={() => {
              ref.current?.slidePrev();
            }}
          >
            slidePrev
          </button>
          <button
            className='p-5'
            onClick={() => {
              ref.current?.slideTo(2);
            }}
          >
            slideTo
          </button>
        </div>
      </HomeContext.Provider>
    </div>
  );
});

export default Home;
