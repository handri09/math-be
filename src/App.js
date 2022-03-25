import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-200">
      <Authenticator className="shadow-lg">
        {({ signOut, user }) => (
          <main>
            <h1 className="">Hello {user.username}</h1>
            <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded py-3 px-4 m-5" onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}