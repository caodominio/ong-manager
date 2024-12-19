"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Icon } from "@iconify/react"
import Image from "next/image"
import Link from "next/link"

const navigationItems = [
	{ href: "#animais", label: "Animais para adoção" },
	{ href: "#doacoes", label: "Doações" },
	{ href: "#agenda", label: "Agenda" },
]

export function Header() {
	return (
		<header className="w-full relative">
			<div className="h-[60px] max-w-[1280px] mx-auto flex justify-between items-center px-4 sm:h-[50px] md:px-8 mt-[40px]">
				{/* logo */}
				<Image
					src="/landing-page/logo-horizontal.svg"
					alt="Logo"
					width={280}
					height={72}
					className="w-[200px] md:w-[280px] h-auto"
				/>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex w-[350px] h-[24px] justify-between gap-6 text-base text-zinc-800 navbar-link">
					{navigationItems.map(item => (
						<a
							key={item.href}
							href={item.href}
							className="hover:text-emerald-500 transition-colors"
						>
							{item.label}
						</a>
					))}
				</nav>

				{/* Desktop Button */}
				<Button
					asChild
					className="hidden md:flex w-[176px] h-[40px] rounded-tl-lg p-2 px-4 items-center gap-2 bg-emerald-500 hover:bg-emerald-600"
				>
					<Link href={"/login"}>
						<Icon icon="fa-solid:user" className="w-4 h-4" />
						Entrar
					</Link>
				</Button>

				{/* Mobile Menu Button */}
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="ghost" size="icon" className="md:hidden">
							<Icon icon="heroicons:bars-3" className="w-6 h-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="w-[300px] sm:w-[400px] border-l">
						<SheetHeader className="mb-6">
							<SheetTitle className="text-2xl font-bold text-zinc-800">Menu</SheetTitle>
						</SheetHeader>
						<nav className="flex flex-col gap-4">
							{navigationItems.map(item => (
								<a
									key={item.href}
									href={item.href}
									className="text-zinc-800 py-3 px-4 border-b border-gray-100 hover:bg-gray-50 transition-colors rounded-lg"
								>
									{item.label}
								</a>
							))}
							<Button className="w-full h-[40px] rounded-tl-lg p-2 px-4 flex items-center justify-center gap-2 mt-4 bg-emerald-500 hover:bg-emerald-600">
								<Icon icon="fa-solid:paw" className="w-5 h-5" />
								Quero adotar
							</Button>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	)
}
