// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import CourseComparison from './Coursecomparison';
import UpcomingEvents from './Upcomingevents';
import SuccessStories from './Successstories';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>CAT Tutorials - Course Comparison</title>
        <meta name="description" content="Compare CAT Tutorial courses and upcoming events" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <CourseComparison />
        <UpcomingEvents />
        <SuccessStories />
      </main>
    </div>
  );
}