import Image from "next/image"
import type { ReactNode } from "react"
export default function Layout({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<div className="relative flex flex-col lg:flex-row h-full">
			<div className="relative bg-green-500">
				<Image
					src={"/img-pagina-login.svg"}
					width={100}
					height={100}
					priority
					alt="imagem da página de login"
					className="hidden lg:block h-screen w-screen object-cover"
				/>
			</div>

			<div className="flex-1 flex flex-col items-center w-full lg:min-w-[550px] lg:max-w-[33%] overflow-y-auto gap-4 px-6 sm:px-12 py-16">
				<Image
					src={"/landing-page/home/logo-caodominio-satuba.svg"}
					width={200}
					height={70}
					alt="logo"
					className="mb-16"
				/>
				{children}
			</div>
		</div>
	)
}
