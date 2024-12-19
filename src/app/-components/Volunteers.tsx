import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export function Volunteers() {
    const volunteers = [
        { name: 'Pedro Santos', role: 'Front-end UX', image: '/landing-page/volunteers/card-voluntario-1.png' },
        { name: 'Maria Silva', role: 'Front-end UX', image: '/landing-page/volunteers/card-voluntario-2.png' },
        { name: 'João Souza', role: 'Front-end UX', image: '/landing-page/volunteers/card-voluntario-3.png' },
        { name: 'Ana Costa', role: 'Front-end UX', image: '/landing-page/volunteers/card-voluntario-4.png' }
    ];

    return (
        <div 
        id="volunteers"
        className="text-center py-8">
            <h2 className="text-h2 text-zinc-800 text-center">Nossos voluntários</h2>
            <p className="mb-11 text-subtitle text-center text-gray-500">Conheça quem nos ajuda pessoalmente</p>
            <div className="flex gap-12 mx-auto items-center justify-center flex-wrap">
                {volunteers.map((volunteer, index) => (
                    <div key={`${volunteer.name}-${index}`} className="flex flex-col items-center w-[290px] border border-zinc-300 rounded-lg h-[370px] py-6 px-8 bg-white">
                        <Image
                            src={volunteer.image}
                            alt={volunteer.name}
                            width={160}
                            height={160}
                            className="rounded-full mb-4"
                        />
                        <h5 className="text-h5 text-zinc-900">{volunteer.name}</h5>
                        <p className="text-subtitle-2 text-zinc-500">{volunteer.role}</p>
                        <Link href="#xx" className="mt-4">
                            <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
