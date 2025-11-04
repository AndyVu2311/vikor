interface Work {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  author: {
    name: string | null;
    image: string | null;
  };
  _count: {
    comments: number;
    likes: number;
  };
}
// { work }: { work: Work }
export default function WorkCard() {
  return (
    <a href='' className='w-full'>
      {/* image */}
      <img
        src='/home-page-background.jpg' // replace with your image path
        alt='Live Nation: The Magic City mural'
        width={800}
        height={500}
        className='mb-(--spacing-space-3) w-full rounded-sm object-cover'
      />
      {/* text under  */}
      <div className='flex'>
        <div className='font-secondary text-xl md:text-3xl'>
          WORK TITLE: Lorem ipsum dolor sit.
        </div>
        <div>
          {' '}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
          reiciendis.
        </div>
      </div>
    </a>
  );
}
