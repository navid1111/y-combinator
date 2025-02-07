import Link from 'next/link';

const page = () => {
  return (
    <>
      <div>User dashboard</div>
      <ul>
        <li>
          <Link href="/dashboard/users/1">User1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User3</Link>
        </li>
      </ul>
    </>
  );
};

export default page;
