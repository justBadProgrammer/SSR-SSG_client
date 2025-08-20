
import { Link } from "react-router";
// import logoDark from "./logo-dark.svg";
// import logoLight from "./logo-light.svg";
import * as React from 'react';
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}


export default function Home() {
   return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
          <h1>Home</h1>
           
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          <a href ='/ssg/first'>to first page</a>
          <br/>
          <a href ='/ssg/second'>to second page</a>
          <br/>
          <a href ='/ssg/third'>to third page</a>
        </div>
      </div>
      <div className="max-w-[300px] w-full space-y-6 px-4">       
      </div>
    </main>
  );
}