"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Icon } from "@iconify/react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

interface Partner {
	id: number
	name: string
	role: string
	image: string
	linkedin?: string
	github?: string
}

const partners: Partner[] = [
	{
		id: 1,
		name: "Parceiro 1",
		role: "Front-end UX",
		image: "/landing-page/partners/card-parceiro-1.png",
		linkedin: "#",
		github: "#",
	},
	{
		id: 2,
		name: "Parceiro 2",
		role: "Back-end Developer",
		image: "/landing-page/partners/card-parceiro-2.png",
		linkedin: "#",
		github: "#",
	},
	{
		id: 3,
		name: "Parceiro 3",
		role: "UI/UX Designer",
		image: "/landing-page/partners/card-parceiro-3.png",
		linkedin: "#",
		github: "#",
	},
	{
		id: 4,
		name: "Parceiro 4",
		role: "Full-stack Developer",
		image: "/landing-page/partners/card-parceiro-4.png",
		linkedin: "#",
		github: "#",
	},
	{
		id: 5,
		name: "Parceiro 5",
		role: "Project Manager",
		image: "/landing-page/partners/card-parceiro-1.png",
		linkedin: "#",
		github: "#",
	},
	{
		id: 6,
		name: "Parceiro 6",
		role: "DevOps Engineer",
		image: "/landing-page/partners/card-parceiro-2.png",
		linkedin: "#",
		github: "#",
	},
]

const institutionalPartners = [
	{
		id: 1,
		name: "IFAL",
		image: "/landing-page/partners/ifal-icon.png",
	},
	{
		id: 2,
		name: "Logo",
		image: "/landing-page/partners/logo.png",
	},
	{
		id: 3,
		name: "Qualifica Tech",
		image: "/landing-page/partners/qualifica-tech.png",
	},
]

const autoplayPlugin = Autoplay({
	delay: 4000,
	stopOnInteraction: false,
	stopOnMouseEnter: true,
	playOnInit: true,
})

export function Partners() {
	const [teamApi] = useEmblaCarousel({ loop: true, align: "start", slidesToScroll: 1 }, [
		autoplayPlugin,
	])

	return (
		<div 
		id="partners"
		className="text-center py-8">
			<h2 className="text-h2 text-zinc-800 mb-2">Parceiros</h2>
			<p className="mb-11 text-subtitle text-zinc-500">Conheça os parceiros da ONG</p>

			<div className="mx-auto px-3">
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					plugins={[autoplayPlugin]}
					className="w-full"
				>
					<CarouselContent>
						{partners.map(partner => (
							<CarouselItem key={partner.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mx-auto bg-white">
								<div className="border border-zinc-300 rounded-lg p-4 flex flex-col items-center h-[380px]">
									<Image
										src={partner.image}
										alt={partner.name}
										width={160}
										height={160}
										className="rounded-full mb-4"
									/>
									<h4 className="text-h4 text-center text-zinc-900">{partner.name}</h4>
									<p className="text-subtitle-2 text-centertext-zinc-500">{partner.role}</p>
									<div className="flex gap-4 bg-zinc-200 px-2 py-3 rounded-lg mt-3 font-bold">
										{partner.linkedin && (
											<a
												href={partner.linkedin}
												className="text-blue-500 hover:opacity-80 transition-opacity"
											>
												<Icon icon="meteor-icons:linkedin" className="w-6 h-6 text-black" />
											</a>
										)}
										{partner.github && (
											<a
												href={partner.github}
												className="text-gray-800 hover:opacity-80 transition-opacity"
											>
												<Icon icon="mingcute:github-line" className="w-6 h-6 text-black" />
											</a>
										)}
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>

				<div className="flex justify-center gap-16 py-6 mx-auto mt-12 flex-wrap">
					{institutionalPartners.map(partner => (
						<img key={partner.id} src={partner.image} alt={`Logo ${partner.name}`} />
					))}
				</div>
			</div>
		</div>
	)
}
