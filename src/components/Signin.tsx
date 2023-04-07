'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import ColroButton from './ui/ColroButton';
import { dancingScript } from './ui/font/font';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function Signin({ providers, callbackUrl }: Props) {
  return (
    <div className='flex flex-col items-center mx-auto border shadow-md w-80 h-96'>
      <h2 className={`${dancingScript.className} text-3xl my-12 font-bold`}>
        Jeongstagram
      </h2>
      <div className='mt-[18%]'>
        {Object.values(providers).map(({ name, id }) => (
          <ColroButton
            key={id}
            text={`Sign In with ${name}`}
            onClick={() => signIn(id, { callbackUrl })}
            size='small'
          />
        ))}
      </div>
    </div>
  );
}
