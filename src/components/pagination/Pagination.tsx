import React from "react";
import { PaginationButton } from "./PaginationButton";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
				marginTop: "4rem",
			}}
		>
			<div
				style={{
					display: "flex",
					width: "230px",
					gap: "1rem",
					alignItems: "center",
				}}
			>
				<p>Itens por página:</p>

				<select
					className="pdv-input"
					style={{ maxWidth: "80px" }}
					defaultValue={itemsPerPage}
					onChange={(e) => onChangeItemsPerPage(Number(e.target.value))}
				>
					<option value={25}>25</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
				</select>
			</div>

			<div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
				{currentPage >= 1 && (
					<PaginationButton
						onClick={() => handleClick(currentPage - 1)}
						style={{ backgroundColor: "#f1f5f9", color: "black" }}
					>
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
						style={{ backgroundColor: "#f1f5f9", color: "black" }}
					>
						<ChevronRight size={20} />
					</PaginationButton>
				)}
			</div>
		</div>
	);
}
