import Image from "next/image"

export function OurStory() {
    return (
        <div 
        id="our-story"
        className="flex items-center justify-between gap-8 flex-wrap">
                {/* TODO: procurar uma imagem com melhor qualidade */}
                <Image
                    src="/landing-page/our-story/img-nossa-historia.png"
                    alt="Imagem Nossa Historia"
                    width={750}
                    height={400}
                    className="mx-auto"
                />
            <div className="flex-1 min-w-[300px]">
                <h2 className="text-3xl font-bold text-[#27272A] mb-4 text-center">
                    Um pouco da nossa <span className="text-[#10B981] font-bold">história</span>
                </h2>
                <p className="text-lg text-zinc-500 leading-relaxed text-center text-balance">
                    O CãoDomínio começou há mais de 30 anos, quando um grupo de apaixonados por animais
                    se uniu para cuidar de cães abandonados, sem condições de sobreviver nas ruas. Em um
                    terreno cedido pela prefeitura, a missão de resgatar e proteger esses animais se
                    tornou o propósito de nossas vidas.
                </p>
            </div>
        </div>
    )
}
