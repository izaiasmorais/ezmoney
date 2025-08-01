"use client";
import { Ellipsis, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Category } from "@/hooks/categories/use-get-categories";
import { EditCategorySheet } from "../modals/edit-category-sheet";

interface CategoryActionsProps {
	category: Category;
}

export function CategoryActions({ category }: CategoryActionsProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size="icon" variant="ghost">
					<Ellipsis />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuGroup>
					<EditCategorySheet category={category} />

					<DropdownMenuItem disabled>
						<Trash2 className="mr-2 h-4 w-4" />
						Excluir
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
