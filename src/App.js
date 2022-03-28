import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import {Home} from './pages'
Amplify.configure(awsExports);

export default function App() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-200">
      <Authenticator className="shadow-lg">
        {({ signOut, user }) => (
          <main>

            <nav className="flex justify-end items-center w-screen h-14 sticky shadow-md">
              <div className="flex items-center px-4 py-2 rounded-md m-2 border-2 border-green-600 hover:bg-green-200">Home</div>
              <div className="flex items-center px-4 py-2 rounded-md m-2 border-2 border-green-600 hover:bg-green-200">Programs</div>
              <div className="flex items-center px-4 py-2 rounded-md m-2 border-2 border-green-600 hover:bg-green-200">About</div>
              <button className="flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded py-3 px-4 m-5" onClick={signOut}>Sign out</button>
            </nav>

            <Home />

            {/* <h1 className="">Hello {user.username}</h1> */}
          </main>
        )}
      </Authenticator>
    </div>
  );
}