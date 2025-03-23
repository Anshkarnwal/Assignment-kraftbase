// pages/index.tsx

import type { NextPage } from 'next';
import Head from 'next/head';
import FrameworkNodesAnimation from '../components/FrameworkNodesAnimation';
import VoiceToneAnimation from '../components/VoiceToneAnimation';
import LogoAnimation from '../components/LogoAnimation';
import TypographyAnimation from '../components/TypographyAnimation';
import IconographyAnimation from '../components/IconographyAnimation';
import ColorAnimation from '../components/ColorAnimation';
import ImageryAnimation from '../components/ImageryAnimation';
import MotionAnimation from '../components/MotionAnimation';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Design System Animations</title>
        <meta name="description" content="Design System Hover Animations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12">Design System Hover Animations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <FrameworkNodesAnimation />
          </div>
          
          <div>
            <VoiceToneAnimation />
          </div>
          
          <div>
            <LogoAnimation />
          </div>
          
          <div>
            <TypographyAnimation />
          </div>
          
          <div>
            <IconographyAnimation />
          </div>
          
          <div>
            <ColorAnimation />
          </div>
          
          <div>
            <ImageryAnimation />
          </div>
          
          <div>
            <MotionAnimation />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;