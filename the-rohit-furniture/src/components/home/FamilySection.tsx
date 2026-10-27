import { Phone } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { BUSINESS_INFO } from '../../data/businessInfo';

export const FamilySection = () => {
  const { language } = useLanguage();
  const hi = language === 'hi';
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">{hi ? 'हमारा परिवार' : 'Meet the family'}</h2>
        <p className="text-stone-600 text-sm mt-1 max-w-2xl">
          {hi
            ? 'राकेश जी और बृजेश जी न मिलें तो महेन्द्र कुमार P.T.I. जी से बात करें।'
            : 'If Rakesh ji and Brijesh ji are not available, please contact Mahender Kumar PTI ji.'}
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {BUSINESS_INFO.contacts.map((c) => (
            <div key={c.whatsappNumber} className="rounded-2xl border border-stone-200 bg-[#FDFBF7] p-5">
              <h3 className="text-lg font-bold text-stone-900">{hi ? c.nameHi : c.name}</h3>
              <p className="mt-1 font-mono text-sm text-stone-700">{c.phone}</p>
              <div className="mt-4 flex gap-2">
                <a className="flex-1 rounded-lg bg-[#25D366] px-3 py-2 text-center text-sm font-bold text-white" target="_blank" rel="noopener noreferrer"
                  href={`https://wa.me/${c.whatsappNumber}?text=${encodeURIComponent(hi ? 'नमस्ते, मुझे फ़र्नीचर के बारे में जानकारी चाहिए।' : 'Hello, I want to know about furniture.')}`}>WhatsApp</a>
                <a className="flex items-center justify-center gap-1 rounded-lg border border-stone-400 px-3 py-2 text-sm font-bold text-stone-900" href={c.telLink}><Phone className="h-4 w-4" />{hi ? 'फ़ोन' : 'Call'}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
