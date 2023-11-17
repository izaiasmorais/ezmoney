"use client";
import React from "react";
import { PaginationButton } from "./pagination-button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../ui/select";

interface PaginationProps {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	onChangePage: (page: number) => void;
	onChangeItemsPerPage: (items: number) => void;
}

export function Pagination({
	totalItems,
	itemsPerPage,
	currentPage,
	onChangePage,
	onChangeItemsPerPage,
}: PaginationProps) {
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	let startPage, endPage;

	if (totalPages <= 6) {
		startPage = 1;
		endPage = totalPages;
	} else if (currentPage <= 4) {
		startPage = 1;
		endPage = 6;
	} else if (currentPage >= totalPages - 3) {
		startPage = totalPages - 5;
		endPage = totalPages;
	} else {
		startPage = currentPage - 2;
		endPage = currentPage + 2;
	}

	const pagePaginationButtons = [];

	for (let i = startPage; i <= endPage; i++) {
		pagePaginationButtons.push(i);
	}

	function handleClick(pageNumber: number) {
		if (pageNumber === 0) return;

		if (pageNumber > totalPages) return;

		onChangePage(pageNumber);
	}

	return (
		<div
			style={{
				display: "flex",
				width: "100%",
				justifyContent: "space-between",
				marginTop: "2rem",
			}}
		>
			<div
				style={{
					display: "flex",
					width: "250px",
					gap: "1rem",
					alignItems: "center",
				}}
			>
				<p>Itens por página:</p>

				<Select
					defaultValue={String(itemsPerPage)}
					onValueChange={(e) => onChangeItemsPerPage(Number(e))}
				>
					<SelectTrigger className="w-[100px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>

					<SelectContent>
						<SelectItem value={"5"}>5</SelectItem>
						<SelectItem value={"10"}>10</SelectItem>
						<SelectItem value={"15"}>15</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
				{currentPage >= 1 && (
					<PaginationButton onClick={() => handleClick(currentPage - 1)}>
						<ChevronLeft size={20} />
					</PaginationButton>
				)}

				{startPage > 1 && (
					<PaginationButton onClick={() => handleClick(1)}>1</PaginationButton>
				)}

				{startPage > 2 && <p>...</p>}

				{pagePaginationButtons.map((pageNumber) => (
					<PaginationButton
						key={pageNumber}
						onClick={() => handleClick(pageNumber)}
						disabled={pageNumber === currentPage}
					>
						{pageNumber}
					</PaginationButton>
				))}

				{endPage < totalPages - 1 && <p>...</p>}

				{endPage < totalPages && (
					<PaginationButton onClick={() => handleClick(totalPages)}>
						{totalPages}
					</PaginationButton>
				)}

				{currentPage <= totalPages && (
					<PaginationButton
						onClick={() => handleClick(currentPage + 1)}
						disabled={currentPage === totalItems ? true : false}
					>
						<ChevronRight size={20} />
					</PaginationButton>
				)}
			</div>
		</div>
	);
}
