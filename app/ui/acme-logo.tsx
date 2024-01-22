import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image
        src="/valdo.webp"
        width={100}
        height={100}
        className='justify-center md:justify-end lg:justify-center items-center'
        alt='Hero Image'
      />
      {/* <p className="text-[44px]">Valdo International</p> */}
    </div>
  );
}
