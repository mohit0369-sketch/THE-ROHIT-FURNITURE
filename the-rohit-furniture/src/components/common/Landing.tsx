import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const Landing: FC<{ onDone: () => void }> = ({ onDone }) => {
  const { language, setLanguage } = useLanguage();
  const [fill, setFill] = useState(false);
  const hi = language === 'hi';

  useEffect(() => {
    const raf = requestAnimationFrame(() => setFill(true));
    const timer = setTimeout(onDone, 3000);
    return () => { cancelAnimationFrame(raf); clearTimeout(timer); };
  }, [onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-center bg-[#2C1E16] px-6 py-8 text-[#FDFBF7]">
      <div className="mx-auto w-full max-w-xl">
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-amber-300">
          {hi ? 'महेंद्रगढ़, हरियाणा' : 'Mahendragarh, Haryana'}
        </p>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
          {hi ? 'द रोहित फ़र्नीचर' : 'The Rohit Furniture'}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-stone-200">
          {hi
            ? 'राकेश राज और बृजेश राज ने 15 साल पहले यह दुकान शुरू की, महेन्द्र कुमार P.T.I. जी के आशीर्वाद से।'
            : 'Rakesh Raj and Brijesh Raj started this shop 15 years ago, with the blessings of Mahender Kumar PTI.'}
        </p>
        <p className="mt-3 text-lg leading-relaxed text-stone-200">
          {hi
            ? 'हर पलंग, सोफा, दरवाज़ा और रसोई हाथ से बनी है। हम लकड़ी का नाम भी बताते हैं।'
            : 'Every bed, sofa, door and kitchen is made by hand. We tell you the wood.'}
        </p>
        <img src="/images/shop-front.jpg" alt="" className="mt-6 max-h-40 w-full rounded-xl object-cover" />
        <div className="mt-6 flex gap-3">
          <button onClick={() => { setLanguage('hi'); onDone(); }} className={`rounded-lg px-5 py-2.5 text-sm font-bold ${hi ? 'bg-[#A35824] text-white' : 'border border-stone-400'}`}>हिन्दी</button>
          <button onClick={() => { setLanguage('en'); onDone(); }} className={`rounded-lg px-5 py-2.5 text-sm font-bold ${!hi ? 'bg-[#A35824] text-white' : 'border border-stone-400'}`}>English</button>
          <button onClick={onDone} className="ml-auto text-sm underline text-stone-300">{hi ? 'छोड़ें' : 'Skip'}</button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1 bg-amber-300" style={{ width: fill ? '100%' : '0%', transition: 'width 3s linear' }} />
    </div>
  );
};
