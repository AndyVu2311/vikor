import WorkCard from '../WorkCard';

export default function OurWorks() {
  return (
    <section className='my-title-container flex w-full flex-col items-center justify-center bg-(--swatch-light) p-(--site-margin) text-black'>
      <p className='font-secondary text-menu w-fit overflow-hidden text-center text-[30vw] text-nowrap whitespace-nowrap'>
        OUR WORK
      </p>
      <span className='font-primary-semibold py-(--site-margin) text-center text-lg'>
        Don’t let blank walls waste potential.
        <br /> See how our clients turn empty space into buzz, foot traffic, and
        business results.
      </span>
      {/* work card  */}
      <div>
        <div className='grid grid-cols-1 gap-(--site-gutter) md:grid-cols-2'>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
          <WorkCard></WorkCard>
        </div>
      </div>
    </section>
  );
}
