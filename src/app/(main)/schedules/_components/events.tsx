"use client"
import { useAtomValue, useSetAtom } from "jotai"
import { EventCard } from "./cards/event-card"
import { confirmDeleteInfo, filterOrderAtom, filterSearchAtom, modalConfirmDelete, modalCreateEvent, updateEventData } from "./store"
import { useGetEvents } from "./mutations/useEvents"
import { When } from "@/components/when"
import { PawLoader } from "@/components/paw-loader"
import Image from "next/image"
import { contains } from "@/utils/contains"

export function Events() {
	const { data, isLoading } = useGetEvents()
	const search = useAtomValue(filterSearchAtom)
	const order = useAtomValue(filterOrderAtom)
	const setCreateEventModal = useSetAtom(modalCreateEvent)
	const setDeleteInfo = useSetAtom(confirmDeleteInfo)
	const setUpdateData = useSetAtom(updateEventData)
	const setDeleteModal = useSetAtom(modalConfirmDelete)
	const handleDelete = (id: string, title: string) => {
		setDeleteInfo({
			type: "event",
			id,
			description: "Certeza que deseja excluir esse evento?",
			title: `Excluir Evento ${title}`,
		})
		setDeleteModal(true)
	}

	const filteredData = data
		?.filter(
			event =>
				contains(event.title, search) ||
				contains(event.description, search),
		)
		.sort((a, b) =>
			order === "older"
				? new Date(a.date).getTime() - new Date(b.date).getTime()
				: new Date(b.date).getTime() - new Date(a.date).getTime(),
		)
	return (
		<div className="flex flex-1 flex-wrap gap-6">
			<When
				condition={!isLoading}
				fallback={
					<div className="flex-1 flex items-center justify-center">
						<PawLoader />
					</div>
				}
			>
				<When
					condition={filteredData?.length}
					fallback={
						<div className="w-full flex-grow flex flex-col items-center justify-center">
							<Image src="empty-state.svg" alt="empty users image" height={200} width={200} />
							<span className="text-lg text-zinc-400">Parece que não tem eventos cadastradas</span>
						</div>
					}
				>
					{filteredData?.map(event => (
						<EventCard
							key={event.id}
							date={event.date}
							description={event.description}
							title={event.title}
							imageUrl={event.image}
							onDelete={() => handleDelete(event.id, event.title)}
							onEdit={() => {
								setUpdateData({ ...event })
								setCreateEventModal(true)
							}}
						/>
					))}
				</When>
			</When>
		</div>
	)
}