"use client"

import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

const socials = [
	{
		name: "Instagram",
		icon: "mdi:instagram",
		link: "https://instagram.com",
	},
	{
		name: "Facebook",
		icon: "basil:facebook-outline",
		link: "https://facebook.com",
	},
	{
		name: "Telefone",
		icon: "bi:telephone",
		link: "tel:+5582987654321",
	},
]

const sections = [
	{ name: "events", label: "Eventos", link: "#events" },
	{ name: "about", label: "Sobre nós", link: "#our-story" },
	{ name: "pets", label: "Conheça nossos peludos", link: "#available-pets" },
	{ name: "help", label: "Precisamos da sua ajuda", link: "#campaigns" },
	{ name: "transparency", label: "Transparência", link: "#transparency" },
	{ name: "volunteers", label: "Voluntários", link: "#volunteers" },
	{ name: "partners", label: "Parceiros", link: "#partners" },
]

const menu = [
	{ name: "adoption", label: "Animais para adoção", link: "/#" },
	{ name: "donations", label: "Doações", link: "/#" },
	{ name: "schedule", label: "Agenda", link: "/#" },
]

export function Footer() {
	return (
		<footer className="bg-primary text-white py-12 px-2">
			<div className="container mx-auto max-w-screen-2xl flex flex-wrap justify-between items-start gap-12 pl-4 md:pl-20">
				<div className="w-full md:w-96 h-auto flex-shrink-0 lg:mr-[140px]">
					<Image
						src="/landing-page/footer-images/icon.svg"
						alt="Logo"
						width={96}
						height={67}
						className="mb-4"
					/>
					<p className="text</footer>-paragraph mb-6">
						Somos a organização não governamental CãoDomínio, um abrigo que trabalha há 30 anos para
						fornecer assistência a cães e gatos necessitados.
					</p>
					<p className="text-paragraph mb-6">
						Estamos localizados em: Rua 17 de Agosto, 130, Centro, Satuba/AL - CEP 57120-000.
						Funcionamos de segunda à sexta, das 8 às 18:00.
					</p>
					<div className="flex justify-start md:justify-center gap-4">
						{socials.map((social, index) => (
							<Link
								key={`${social.name}-${index}`}
								href={social.link}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white hover:text-secondary transition-colors"
							>
								<Icon icon={social.icon} className="text-[30px]" />
							</Link>
						))}
					</div>
				</div>

				<div className="flex-1 w-full md:w-auto min-h-[186px] md:pt-[83px] pt-0">
					<h3 className="text-subtitle-2 font-bold mb-2">Sessões</h3>
					<ul className="space-y-1">
						{sections.map((section, index) => (
							<li key={`${section.name}-${index}`}>
								<Link
									href={section.link}
									className="text-paragraph hover:text-secondary transition-colors no-underline"
								>
									{section.label}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="flex-1 w-full md:w-auto min-h-[186px] md:pt-[83px] pt-0">
					<h3 className="text-subtitle-2 mb-2 font-bold">Menu</h3>
					<ul className="space-y-1">
						{menu.map((menuItem, index) => (
							<li key={`${menuItem.name}-${index}`}>
								<Link
									href={menuItem.link}
									className="text-paragraph hover:text-secondary transition-colors no-underline"
								>
									{menuItem.label}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="text-center mt-8">
				<p className="text-paragraph-5">
					Copyright © {new Date().getFullYear()} CãoDomínio.
					<br />
					Todos os direitos reservados.
				</p>
			</div>
		</footer>
	)
}
