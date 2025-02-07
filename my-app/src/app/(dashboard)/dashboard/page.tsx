'use client';
import SignIn from '@/app/components/sign-in';
import { SignOut } from '@/app/components/signout-button';
import { useSession } from 'next-auth/react';
const DashBoard = () => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>Welcome {session?.user?.name}</div>

      {status === 'unauthenticated' ? <SignIn /> : <SignOut />}
    </>
  );
};

export default DashBoard;
