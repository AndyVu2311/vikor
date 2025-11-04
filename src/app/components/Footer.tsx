import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-(--swatch-yellow)'>
      {/* Bottom line */}
      <div className='border-t border-gray-700 pt-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
}
