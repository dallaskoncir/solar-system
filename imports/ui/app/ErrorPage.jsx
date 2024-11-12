import React from 'react';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="main bg-white dark:bg-slate-800 h-screen flex flex-col justify-center items-center">
      <h1 className="text-slate-900 dark:text-white text-3xl font-bold underline">Oops!</h1>
      <p className="text-slate-500 dark:text-slate-400">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
