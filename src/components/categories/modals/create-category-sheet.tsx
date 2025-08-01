"use client";
import { Plus } from "lucide-react";
import { FormColorPicker } from "@/components/form/form-color-picker";
import { FormInput } from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { useCreateCategory } from "@/hooks/categories/use-create-category";

export function CreateCategorySheet() {
	const {
		form,
		isLoadingCreateCategory,
		isCreateCategorySheetOpen,
		setIsCreateCategorySheetOpen,
	} = useCreateCategory();

	return (
		<Sheet
			open={isCreateCategorySheetOpen}
			onOpenChange={setIsCreateCategorySheetOpen}
		>
			<SheetTrigger asChild>
				<Button className="ml-auto" variant="outline">
					<Plus />
					Criar Categoria
				</Button>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Criar Categoria</SheetTitle>
					<SheetDescription>
						Crie uma nova categoria para organizar suas finanças.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1	flex flex-col"
					>
						<FormInput
							form={form}
							entity="name"
							label="Nome"
							placeholder="Nome da categoria"
						/>

						<FormColorPicker
							form={form}
							entity="color"
							label="Cor"
							placeholder="Selecione uma cor"
						/>

						<SheetFooter>
							<SheetClose asChild>
								<Button variant="outline">Cancelar</Button>
							</SheetClose>

							<SubmitButton isLoading={isLoadingCreateCategory}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
