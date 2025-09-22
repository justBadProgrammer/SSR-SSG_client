
import { Link } from "react-router";
import * as React from 'react';

export default function NoSuchPage() {
   return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
          <h1>Oops, no such page</h1>           
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <Link to ='/pages/home'>to home</Link>
        </div>
      </div>
      <div className="max-w-[300px] w-full space-y-6 px-4">       
      </div>
    </main>
  );
}