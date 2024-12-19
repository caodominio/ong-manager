"use client"

import { Icon } from "@iconify/react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

type Campaign = {
    id: number
    title: string
    description: string
    image: string
    video?: string
}

const availableCampaigns: Campaign[] = [
    {
        id: 1,
        title: "Ajude no tratamento da Aurora!",
        description: "Aurora tem TVT e estamos fazendo tratamento dela semanalmente, porém estamos SEM DINHEIRO.",
        image: "/landing-page/campaigns/image3.png",
        video: "https://www.youtube.com/embed/xYblSC5dCQA",
    },
    {
        id: 2,
        title: "Ajude a alimentar os cães de rua!",
        description: "Estamos arrecadando fundos para alimentar cães de rua que precisam de nossa ajuda. Cada doação faz a diferença!",
        image: "/landing-page/campaigns/image2.png",
    },
    {
        id: 3,
        title: "Construção de um abrigo para animais!",
        description: "Precisamos de sua ajuda para construir um abrigo seguro e confortável para animais abandonados. Contribua para essa causa!",
        image: "/landing-page/campaigns/image1.png",
    },
]

export function CampaignSection() {
    const [selectedCampaign, setSelectedCampaign] = useState<Campaign>(availableCampaigns[0])
    const [isPlaying, setIsPlaying] = useState(false)
    const sectionRef = useRef<HTMLDivElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)

    const handlePlay = () => {
        setIsPlaying(true)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting && iframeRef.current) {
                        iframeRef.current.contentWindow?.postMessage(
                            '{"event":"command","func":"pauseVideo","args":""}',
                            '*'
                        )
          }
                })
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current)
            }
        }
    }, [])

    return (
        <div 
        id="campaigns"
        ref={sectionRef}>
            <h2 className="text-h2 text-zinc-800 text-center">Precisamos da sua <span className="text-primary">Ajuda!</span></h2>
            <p className="text-subtitle text-center text-zinc-500 mb-12">Ajude a salvar nossos amiguinhos</p>
            <div className="flex gap-8 sm:flex-row flex-col">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedCampaign.id}
                        className="flex-1 flex justify-center items-center relative sm:w-[1100px] h-[600px] min-h-[300px] rounded-lg bg-black"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {isPlaying && selectedCampaign.video ? (
                            <iframe
                                ref={iframeRef}
                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                src={`${selectedCampaign.video}?enablejsapi=1&autoplay=1`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={selectedCampaign.title}
                            />
                        ) : (
                            <div
                                className="absolute inset-0 w-full h-full bg-no-repeat bg-contain bg-center rounded-lg flex justify-center items-center"
                                style={{
                                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 29.75%, rgba(0, 0, 0, 0.00) 93.01%), url(${selectedCampaign.image})`,
                                }}
                            >
                                {selectedCampaign.video && (
                                    <button
                                        type="button"
                                        onClick={handlePlay}
                                        className="p-2 rounded-full"
                                        style={{background: "rgba(0, 0, 0, 0.50)"}}
                                    >
                                        <Icon icon="mingcute:play-fill" className="h-12 w-12 text-primary" />
                                    </button>
                                )}
                            </div>
                        )}
                        {!isPlaying && (
                        <div className="absolute bottom-0 left-0 text-white sm:p-12 p-2 w-full">
                            <h3 className="sm:text-h3 text-subtitle-2 font-bold text-ellipsis line-clamp-1">{selectedCampaign.title}</h3>
                            <p className="sm:text-subtitle text-paragraph-3 text-ellipsis line-clamp-3">{selectedCampaign.description}</p>
                        </div>
                    )}
                    </motion.div>
                </AnimatePresence>
                <div className="flex justify-between sm:flex-col flex-row">
                    {availableCampaigns.map(campaign => (
                        <button
                            key={campaign.id}
                            type="button"
                            onClick={() => {
                                setSelectedCampaign(campaign)
                                setIsPlaying(false)
                            }}
                            className={`rounded-lg overflow-hidden transition-all duration-300 ease-in-out 
                                sm:w-[300px] w-[125px] h-[100px] sm:h-[180px] bg-no-repeat bg-contain bg-center bg-black hover:scale-105 outline-transparent outline
                                ${selectedCampaign.id === campaign.id ? "!outline-primary" : "hover:!outline-emerald-400 "}`}
                            style={{
                                backgroundImage: `url(${campaign.image})`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}