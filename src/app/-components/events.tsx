"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"

/* TODO: Trocar pelo import de event.model.ts */
export interface Event {
	id: string
	title: string
	description: string
	date: string
	image?: string
	updatedBy: string
}

const mockedEvents: Event[] = [
	{
		id: "1",
		title: "CãoDomínio Satuba: Um Dia de Amor e Adoção!",
		description:
			"O Encontro cãodomínio é um evento dedicado a quem ama os animais, repleto de oportunidades para transformar vidas! Nesta edição, teremos uma grande feira de adoção com cães e gatos resgatados, todos prontos para encontrar um lar cheio de carinho. Além disso, o evento contará com atividades para todas as idades, incluindo um espaço kids, praça de alimentação, bazar solidário, palestras sobre cuidados e bem-estar animal, e sorteios. É uma chance única de contribuir com a causa, seja adotando, doando ou simplesmente participando deste dia especial de solidariedade e amor pelos animais!",
		date: "2023-12-10T10:00:00",
		updatedBy: "admin",
	},
	{
		id: "2",
		title: "Campanha de Vacinação",
		description: "Traga seu pet para vacinar e garantir a saúde dele.",
		date: "2023-11-20T09:00:00",
		updatedBy: "admin",
	},
	{
		id: "3",
		title: "Palestra sobre Cuidados com Animais",
		description: "Aprenda mais sobre como cuidar do seu pet com especialistas.",
		date: "2023-10-15T14:00:00",
		updatedBy: "admin",
	},
	{
		id: "4",
		title: "Evento de Arrecadação de Rações",
		description: "Ajude-nos a arrecadar rações para os animais resgatados.",
		date: "2023-09-05T11:00:00",
		updatedBy: "admin",
	},
]

const formatDate = (date: string) => {
	const month = new Date(date).toLocaleString("pt-BR", { month: "long" })
	const day = new Date(date).getDate()
	const time = new Date(date).toLocaleString("pt-BR", { hour: "numeric", minute: "numeric" })
	return { month, day, time }
}

export function Events() {
	return (
		<div id="events">
			<h2 className="text-h2 text-zinc-800 mb-6 text-center">Eventos</h2>
			<div className="mx-auto px-3">
				<Carousel>
					<CarouselContent className="-ml-6">
						{mockedEvents.map(event => (
							<CarouselItem className="pl-6 lg:basis-[45%] md:basis-2/3 basis-10/12" key={event.id}>
								<div className=" bg-white border rounded-lg min-h-[350px] w-[640px] h-full max-w-full select-none text-pretty flex sm:flex-row flex-col-reverse">
									<div className="md:p-6 p-2 px-6 pr-0 flex items-center sm:justify-center sm:flex-col text-zinc-500 gap-2">
										<span className="flex flex-row-reverse sm:flex-col text-center gap-2">
											<p className="capitalize text-subtitle-2">{formatDate(event.date).month}</p>
											<p className="sm:text-[3.25rem] sm:font-bold sm:text-zinc-800 sm:leading-[60px] text-subtitle-2">
												{formatDate(event.date).day}
											</p>
										</span>
										<p className=" sm:text-[1.75rem] leading-[36px] text-subtitle-2">
											{formatDate(event.date).time}
										</p>
									</div>
									<div className="md:p-5 p-2 px-6 ">
										<div className="w-full rounded-lg h-[180px] relative">
											<Image
												src={event.image || "/landing-page/events/card-placeholder.svg"}
												alt={event.title}
												className="object-cover rounded-lg"
												fill
											/>
										</div>

										<p className="text-subtitle-2 font-bold my-2 line-clamp-2 min-h-[56px] sm:min-h-0">
											{event.title}
										</p>
										<p className="text-paragraph text-zinc-600 line-clamp-2 min-h-[48px] sm:min-h-0">
											{event.description}
										</p>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
}
