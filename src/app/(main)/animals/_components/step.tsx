import { Icon } from "@/components/icon"

interface IStepsProps {
	label: string
	step: number
	stepsCount: number
	currentStep: number
}
export const Step = ({ label, step, currentStep, stepsCount }: IStepsProps) => {
	return (
		<div className="flex flex-col items-center gap-1">
			<div className="flex items-center justify-center">
				<div
					className={`relative rounded-lg h-[40px] w-[40px] flex justify-center items-center ${
						step <= currentStep ? "bg-[#27272A]" : "bg-[#FFFFFF] border-2 border-[#27272A]"
					}`}
				>
					<div className="absolute top-11 text-nowrap font-semibold text-sm text-[#27272A]">
						{label}
					</div>
					<div
						className={`font-semibold text-base ${
							step <= currentStep ? "text-[#FFFFFF]" : "#27272A"
						} `}
					>
						{step < currentStep ? <Icon name="Check" className="w-4 h-4" /> : step}
					</div>
				</div>
				{step !== stepsCount && (
					<div
						className={`h-[3px] w-[80px] bg-[#27272A] ${step === stepsCount ? "ml-[-0px]" : ""}`}
					/>
				)}
			</div>
		</div>
	)
}