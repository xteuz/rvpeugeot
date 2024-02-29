import bgImage from '@/public/Design sem nome (1).png';
import Image from 'next/image';
import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

const Main = ({ children }: MainProps) => {
  return (
    <>
      <div className='absolute fixeddd  min-[344px]:h-[500px] h-[560px] w-full'>
      </div>
    <main className='h-[500px]'>
      <div className='container flex lg:justify-start justify-center mx-auto'>{children}</div>
    </main>
    </>
  );
};

export default Main;
