import { JSX } from 'react';
import { SlideIn } from '../SlideIn';
import clsx from 'clsx';

declare module 'react' {
  interface CSSProperties {
    '--index'?: number;
  }
}

/**
 * Component for "TextAndImage" Slices.
 */

//  theme === 'Blue' && 'bg-texture bg-brand-blue text-white',
//                 theme === 'Orange' && 'bg-texture bg-brand-orange text-white',
//                 theme === 'Navy' && 'bg-texture bg-brand-navy text-white',
//                 theme === 'Lime' && 'bg-texture bg-brand-lime'
const TextAndImage = (): JSX.Element => {
  return (
    <div>
      <section className='sticky top-[calc(0*2rem)] bg-amber-400'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24'>
          <div
            className={clsx(
              'flex flex-col items-center gap-8 text-center md:items-start md:text-left'
            )}
          >
            <SlideIn>
              <h2 className='text-3xl'>
                <div>this is first text</div>
              </h2>
            </SlideIn>
            <SlideIn>
              <div className='max-w-md text-lg leading-relaxed'>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quae perferendis voluptatibus quidem ipsum sapiente, ipsam
                  ducimus nulla earum assumenda.
                </div>
              </div>
            </SlideIn>
            <SlideIn>
              <a>Lorem, ipsum.</a>
            </SlideIn>
          </div>

          <img src={'/home-page-background.jpg'} />
        </div>
      </section>
      <section className='sticky top-[calc(1*2rem)] bg-red-400'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24'>
          <div
            className={clsx(
              'flex flex-col items-center gap-8 text-center md:items-start md:text-left'
            )}
          >
            <SlideIn>
              <h2 className='text-3xl'>
                <div>this is first text</div>
              </h2>
            </SlideIn>
            <SlideIn>
              <div className='max-w-md text-lg leading-relaxed'>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quae perferendis voluptatibus quidem ipsum sapiente, ipsam
                  ducimus nulla earum assumenda.
                </div>
              </div>
            </SlideIn>
            <SlideIn>
              <a>Lorem, ipsum.</a>
            </SlideIn>
          </div>

          <img src={'/home-page-background.jpg'} />
        </div>
      </section>
      <section className='sticky top-[calc(2*2rem)] bg-green-400'>
        <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-24'>
          <div
            className={clsx(
              'flex flex-col items-center gap-8 text-center md:items-start md:text-left'
            )}
          >
            <SlideIn>
              <h2 className='text-3xl'>
                <div>this is first text</div>
              </h2>
            </SlideIn>
            <SlideIn>
              <div className='max-w-md text-lg leading-relaxed'>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
                  quae perferendis voluptatibus quidem ipsum sapiente, ipsam
                  ducimus nulla earum assumenda.
                </div>
              </div>
            </SlideIn>
            <SlideIn>
              <a>Lorem, ipsum.</a>
            </SlideIn>
          </div>
          <img src={'/home-page-background.jpg'} />{' '}
        </div>
      </section>
    </div>
  );
};

export default TextAndImage;
