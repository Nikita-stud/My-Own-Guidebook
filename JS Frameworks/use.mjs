//when a component isn't ready, show something else instead.
<Suspense fallback={<ProfileSkeleton />}>
  <UserProfile />
</Suspense>;

//use
import { use, Suspense } from 'react';

function UserProfile({ userPromise }) {
  const user = use(userPromise); // suspends here until resolved
  return <h1>{user.name}</h1>;
}
