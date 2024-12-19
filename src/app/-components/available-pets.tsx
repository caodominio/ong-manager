"use client"


import { Button } from "@/components/ui/button"
import { Icon } from "@iconify/react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

type Pet = {
	id: number
	name: string
	description: string
	photo: string
	tags: string[]
}

const availablePets: Pet[] = [
	{
		id: 1,
		name: "Nina",
		description:
			"Nina é uma gata de 3 anos, dócil e brincalhona. Com pelagem macia e olhos expressivos, ela adora se aconchegar no colo e receber carinho. Sua natureza curiosa a faz explorar cada cantinho da casa, mas sempre volta para perto de seus humanos favoritos. Já castrada e vacinada, está pronta para trazer alegria ao seu lar.",
		photo: "/landing-page/adopt-puppies/nina.png",
		tags: ["Gato", "Castrada", "Fêmea"],
	},
	{
		id: 2,
		name: "MisterKat",
		description:
			"MisterKat é um gato elegante de 4 anos que conquistou a todos com seu charme único. Calmo e independente, ele aprecia momentos tranquilos e tem uma personalidade marcante. Adora brincar com bolinhas e se esticar ao sol. Completamente vacinado e castrado, busca um lar que aprecie sua natureza distinta.",
		photo: "/landing-page/adopt-puppies/misterKat.png",
		tags: ["Gato", "Castrado", "Macho"],
	},
	{
		id: 3,
		name: "Alfredo",
		description:
			"Alfredo é um cachorro de porte médio com 2 anos de idade. Extremamente carinhoso e sociável, ele se dá bem com outros animais e crianças. Sua energia contagiante e lealdade fazem dele um companheiro perfeito para famílias ativas. Castrado e com todas as vacinas em dia, está ansioso para encontrar seu lar definitivo. Alfredo é um cachorro de porte médio com 2 anos de idade. Extremamente carinhoso e sociável, ele se dá bem com outros animais e crianças. Sua energia contagiante e lealdade fazem dele um companheiro perfeito para famílias ativas. Castrado e com todas as vacinas em dia, está ansioso para encontrar seu lar definitivo.",
		photo: "/landing-page/adopt-puppies/alfredo.png",
		tags: ["Cachorro", "Castrado", "Macho"],
	},
	{
		id: 4,
		name: "Thor",
		description:
			"Thor é um cachorro forte e gentil de 3 anos. Com sua personalidade brincalhona e protetora, ele é o companheiro ideal para aventuras ao ar livre. Apesar do seu porte imponente, é extremamente dócil e carinhoso com todos. Treinado, castrado e vacinado, está pronto para ser parte de uma família amorosa.",
		photo: "/landing-page/adopt-puppies/thor.png",
		tags: ["Cachorro", "Castrado", "Macho"],
	},
	{
		id: 5,
		name: "Valentina",
		description:
			"Valentina é uma cachorra meiga de 1 ano e meio que conquista a todos com seu olhar doce. Muito esperta e afetuosa, ela adora aprender truques novos e brincar com seus brinquedos favoritos. Sua energia positiva contagia o ambiente. Já castrada e com todas as vacinas em dia, está pronta para encontrar uma família para chamar de sua.",
		photo: "/landing-page/adopt-puppies/valentina.png",
		tags: ["Cachorro", "Castrada", "Fêmea"],
	},
]

function PetImage({ pet, className }: { pet: Pet; className?: string }) {
	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={pet.id}
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				exit={{ opacity: 0, x: -20 }}
				transition={{ duration: 0.3 }}
				className={`relative ${className}`}

			>
				<Image
					src={pet.photo}
					alt={`Foto do ${pet.name}`}
					className={`rounded-lg ${className}`}
					width={450}
					height={550}
				/>
				<div className="flex flex-row gap-2 mt-2 absolute bottom-4 w-full px-4 [&>*]:text-paragraph-3 ">
					{/* TODO: Adicionar funcionalidades para os botões */}
					<Button
						className="text-black w-[50%] gap-2 font-bold"
						variant={"outline"}
					>
						<Icon icon="fa-solid:heart" width={16} height={16} />
						Apadrinhar
					</Button>
					<Button className="gap-2 w-[50%] font-bold">
						<Icon icon="fa-solid:paw" width={16} height={16} />
						Adotar
					</Button>
				</div>
			</motion.div>
		</AnimatePresence>
	)
}

function TypewriterEffect({ text }: { text: string }) {
	const [displayText, setDisplayText] = useState("")

	useEffect(() => {
		setDisplayText("")
		let currentIndex = 0
		const interval = setInterval(() => {
			if (currentIndex <= text.length) {
				setDisplayText(text.slice(0, currentIndex))
				currentIndex++
			} else {
				clearInterval(interval)
			}
		}, 150)

		return () => clearInterval(interval)
	}, [text])

	return (
		<motion.div className="flex lg:justify-start justify-center">
			<span>{displayText}</span>
			<motion.span
				animate={{ opacity: [1, 0] }}
				transition={{
					duration: 0.8,
					repeat: Number.POSITIVE_INFINITY,
					repeatType: "reverse",
				}}
				className="w-[2px] h-[80%] bg-primary ml-1"
			/>
		</motion.div>
	)
}

export function AvailablePets() {
	const [selectedPet, setSelectedPet] = useState<Pet>(availablePets[0])

	return (
		<div 
		id="available-pets"
		className="text-center">
			<h3 className="text-4xl font-bold">
				Conheça nossos
				<span className="text-primary"> peludos!</span>
			</h3>
			<p className="text-2xl mb-16 text-gray-600">Eles adoram carinho e merecem amor!</p>

			<div className="flex flex-wrap lg:flex-nowrap gap-8 mt-8 max-w-[450px] lg:max-w-[100vw] mx-auto">
				<div className="justify-between flex flex-col">
					<div>
						<h3 className="text-h3 text-zinc-800 mb-2 min-h-[3.5rem]">
							<TypewriterEffect text={selectedPet.name} />
						</h3>
						<div className="flex flex-wrap gap-2 mb-4 justify-center lg:justify-start">
							{selectedPet.tags.map(tag => (
								<span
									key={tag}
									className="text-paragraph-2 text-zinc-800 bg-zinc-200 px-2 py-0.5 rounded-full"
								>
									<p>{tag}</p>
								</span>
							))}
						</div>
						<div className="lg:hidden block mx-auto py-2 ">
							<PetImage pet={selectedPet} className="w-full max-h-[350px] max-w-[350px] mx-auto" />
						</div>
						<p className="text-zinc-500 text-sm lg:text-[1.75rem] lg:leading-[2.25rem] mb-4 max-h-[90px] lg:h-[220px] lg:max-h-[220px] text-pretty overflow-hidden text-ellipsis line-clamp-4 lg:line-clamp-6 text-center lg:text-left ">
							{selectedPet.description}
						</p>
					</div>

					<div className="flex gap-1 mt-4 flex-wrap justify-center lg:justify-start">
						{availablePets.map(pet => (
							<button
								key={pet.id}
								type="button"
								onClick={() => setSelectedPet(pet)}
								className={`rounded-lg overflow-hidden border-2 transition-all duration-300 ease-in-out 
									aspect-square lg:w-[150px] w-[75px] bg-cover bg-center bg-no-repeat border-transparent
									hover:scale-105
									${selectedPet.id === pet.id ? "!border-primary" : " hover:border-emerald-400"}`}
								style={{
									backgroundImage: `url(${pet.photo})`,
								}}
							/>
						))}
					</div>
				</div>
				<div className="hidden lg:block">
					<PetImage pet={selectedPet} className="max-w-[450px] max-h-[550px]" />
				</div>
			</div>
		</div>
	)
}
