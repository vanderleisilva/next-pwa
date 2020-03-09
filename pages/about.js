import Link from 'next/link';

export default () => {
  return (
    <div>
      <Link href="/">
        <a>Go to index</a>
      </Link>
      <p>This is the about page</p>
    </div>
  );
}