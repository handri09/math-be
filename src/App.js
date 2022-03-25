import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className="">Hello {user.username}</h1>
          <button className="bg-sky-500 py-1 px-2 border-2 border-sky-500 shadow-sm rounded-md m-3 text-white hover:bg-sky-400" onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}