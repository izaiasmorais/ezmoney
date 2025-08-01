"use client";
import { SquarePen } from "lucide-react";
import { FormColorPicker } from "@/components/form/form-color-picker";
import { FormInput } from "@/components/form/form-input";
import { SubmitButton } from "@/components/form/form-submit-button";
import { Button } from "@/components/ui/button";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
import { useEditCategory } from "@/hooks/categories/use-edit-category";
import type { Category } from "@/hooks/categories/use-get-categories";

interface EditCategorySheetProps {
	category: Category;
}

export function EditCategorySheet({ category }: EditCategorySheetProps) {
	const {
		form,
		isLoadingEditCategory,
		isEditCategorySheetOpen,
		setIsEditCategorySheetOpen,
	} = useEditCategory(category.id, {
		name: category.name,
		color: category.color,
	});

	return (
		<Sheet
			open={isEditCategorySheetOpen}
			onOpenChange={setIsEditCategorySheetOpen}
		>
			<SheetTrigger asChild>
				<DropdownMenuItem
					onSelect={(e) => {
						e.preventDefault();
					}}
				>
					<SquarePen className="mr-2 h-4 w-4" />
					Editar
				</DropdownMenuItem>
			</SheetTrigger>

			<SheetContent className="w-[500px]">
				<SheetHeader>
					<SheetTitle>Editar Categoria</SheetTitle>
					<SheetDescription>
						Edite as informações da categoria.
					</SheetDescription>
				</SheetHeader>

				<Form {...form}>
					<form
						onSubmit={form.handleSubmitForm}
						className="space-y-4 flex-1 flex flex-col"
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

							<SubmitButton isLoading={isLoadingEditCategory}>
								Confirmar
							</SubmitButton>
						</SheetFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
