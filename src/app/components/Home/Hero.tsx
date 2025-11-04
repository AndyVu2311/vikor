import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative -z-1 flex h-screen w-full items-center justify-center bg-[url('/home-page-background.jpg')] bg-cover bg-center bg-no-repeat text-white">
      {/* dark overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* content */}
      <div className='relative z-10 px-6 text-center'>
        <h1 className='mb-4 text-5xl font-bold sm:text-6xl'>
          Architectural Excellence
        </h1>
        <p className='mx-auto mb-8 max-w-2xl text-lg sm:text-xl'>
          Designing inspiring spaces that merge innovation with timeless design.
        </p>
        <a
          href='/services'
          className='inline-block rounded-full bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-200'
        >
          Explore Services
        </a>
      </div>
    </section>
  );
}
