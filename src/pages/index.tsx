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
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Design System Animations</title>
        <meta name="description" content="Design System Hover Animations" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid-cols-9 gap-4 p-2 h-full">
        {/* Framework Section */}
        <div className="col-span-2 bg-slate-800 rounded-lg p-4 text-white">
          <FrameworkNodesAnimation />
        </div>

        {/* Voice & Tone Section */}
        <div className="col-span-2 bg-amber-300 rounded-lg p-4">
          <VoiceToneAnimation />
        </div>

        {/* Centered Blue Box */}
        <div className="col-span-1 flex items-center justify-center">
          <div className="bg-blue-600 rounded-lg w-full h-full flex items-center justify-center">
            <p className="text-white font-bold">Centered Box</p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="col-span-2 bg-cyan-400 rounded-lg p-4">
          <LogoAnimation />
        </div>

        {/* Typography Section */}
        <div className="col-span-2 bg-orange-500 rounded-lg p-4">
          <TypographyAnimation />
        </div>

        {/* Iconography Section */}
        <div className="col-span-2 bg-lime-400 rounded-lg p-4">
          <IconographyAnimation />
        </div>

        {/* Color Section */}
        <div className="col-span-2 bg-orange-400 rounded-lg p-4">
          <ColorAnimation />
        </div>

        {/* Imagery Section */}
        <div className="col-span-2 bg-purple-700 rounded-lg p-4 text-white">
          <ImageryAnimation />
        </div>

        {/* Motion Section */}
        <div className="col-span-2 bg-purple-300 rounded-lg p-4">
          <MotionAnimation />
        </div>
      </main>
    </div>
  );
};

export default Home;  