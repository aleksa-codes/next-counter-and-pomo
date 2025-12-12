import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-muted-foreground w-full py-4 text-center'>
      © {currentYear} • Made with 💻 & ☕ by{' '}
      <Link
        href='https://github.com/aleksa-codes/next-counter-and-pomo'
        target='_blank'
        rel='noopener noreferrer'
        className='text-blue-500 hover:text-blue-700'
      >
        aleksa.codes
      </Link>
    </footer>
  );
}
