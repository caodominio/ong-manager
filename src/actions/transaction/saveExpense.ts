"use server"
import { actionClient } from "@/actions/safe-action"
import type { IExpense } from "@/models/transaction.model"
import { handleSaveTransaction } from "@/services/finance.service"
import { z } from "zod"

const schema = z.object({
	transactionType: z.literal("expense"),
	// userId: z.string(),
	category: z.enum([
		"Aluguel",
		"Energia Elétrica",
		"Água",
		"Produtos de Limpeza",
		"Ração/Suplementos",
		"Brinquedos",
		"Vacinas/Vermífugos",
		"Castração",
		"Exames/Tratamento Medico",
		"Remédios",
		"Salario",
		"Gás",
		"Internet",
		"Manutenção do espaço",
	]),
	value: z.number(),
	description: z.string(),
	// proof: z.array(z.instanceof(File)),
})

export const saveExpenseAction = actionClient.schema(schema).action(
	async ({
		parsedInput: {
			transactionType,
			// userId,
			category,
			value,
			description,
			// proof,
		},
	}) => {
		const expenseObject: IExpense = {
			transactionType,
			// userId,
			category,
			value,
			description,
			// proof,
			date: new Date().toISOString(),
		}
		const savedExpense = await handleSaveTransaction(expenseObject)
		return JSON.parse(savedExpense)
	},
)