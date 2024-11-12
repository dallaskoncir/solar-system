import React from 'react';
import { useTracker } from 'meteor/react-meteor-data'
import { LoginForm } from './LoginForm';

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <div className="main bg-white dark:bg-slate-800 h-screen">
      {user ? (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-slate-900 dark:text-white text-3xl font-bold underline">Solar System</h1>
          <p className="text-slate-500 dark:text-slate-400">{`Logged in as ${user.username}`}</p>
          <button onClick={() => Meteor.logout()} className="mt-2 bg-transparent text-indigo-600 font-semibold py-2 px-4 border border-indigo-600 rounded">Logout</button>
        </div>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};
