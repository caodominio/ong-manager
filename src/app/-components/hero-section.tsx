import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import Image from "next/image"

function ActionButtons() {
    return (
        <div className="flex gap-4 mt-2 mx-auto justify-center">
            <Button className="w-44 h-10 bg-emerald-500 hover:bg-emerald-600 text-white rounded-tl-lg px-4 flex items-center gap-2">
                <Icon icon="fa-solid:paw" className="w-4 h-4" />
                Quero adotar!
            </Button>
            <Button className="w-44 h-10 bg-white text-emerald-500 border-2 border-emerald-500 rounded-tl-lg px-4 flex items-center gap-2 hover:bg-gray-100">
                <Icon icon="fa-solid:paw" className="w-4 h-4" />
                Apadrinhar
            </Button>
        </div>
    )
}

export function HeroSection() {
    return (
        <div id="hero">
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 px-4 lg:px-16 md:mt-[128px] mt-10">
            <div className="flex flex-col max-w-xl order-1 lg:order-1">
                <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mx-auto mb-4">
                    Transforme a vida de um animal.
                </p>
                <h1 className="text-h3 sm:text-4xl md:text-5xl lg:text-6xl text-h1 text-center sm:mb-8 text-pretty">
                    Adote ou ajude um peludo <br /> <span className="hidden md:block">em busca de um novo lar!</span>
                </h1>
                <div className="order-3 lg:order-2  hidden lg:block">
                <ActionButtons />
            </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 relative order-2 lg:order-3 max-w-[75%]">
                <Image
                    src="/landing-page/home/Vector.svg"
                    alt="Icon"
                    className="object-contain mb-4 w-full max-w-[700px]"
                    width={700}
                    height={500}
                    priority
                />
                {/* TODO: O container deve ser uma div, tendo o QR como imagem */}
                <div className="absolute z-20 lg:bottom-[-10px] right-[-15px] bottom-[-15px]">
                    <Image
                        src="/landing-page/home/Groups.svg"
                        alt="QR Code"
                        width={257}
                        height={330}
                        className="object-contain hidden md:block max-w-[75%]"
                    />
                </div>
            </div>

            <div className="order-3 lg:order-2 block lg:hidden">
                <ActionButtons />
            </div>
        </div>
            <div className="text-[28px] text-[#27272A] mt-6 leading-relaxed text-center mx-auto px-4 lg:px-16">
            <p>A CãoDomínio é uma ONG dedicada a resgatar, cuidar e encontrar lares</p>
            <p>
                amorosos para cães abandonados.
                <span className="text-[#10B981] font-bold"> Junte-se a nós nessa missão!</span>
            </p>
        </div>
        </div>
    )
}