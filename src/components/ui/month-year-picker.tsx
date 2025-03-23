"use client";

import * as React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export interface MonthYearPickerProps {
	/** Start year for the year range (default: current year - 10) */
	startYear?: number;
	/** End year for the year range (default: current year + 10) */
	endYear?: number;
	/** Default selected month (1-12, default: current month) */
	defaultMonth?: number;
	/** Default selected year (default: current year) */
	defaultYear?: number;
	/** Callback when month or year changes */
	onChange?: (month: number, year: number) => void;
	/** Additional class names */
	className?: string;
	/** Label for the month select */
	monthLabel?: string;
	/** Label for the year select */
	yearLabel?: string;
}

const MONTHS = [
	{ value: "1", label: "January" },
	{ value: "2", label: "February" },
	{ value: "3", label: "March" },
	{ value: "4", label: "April" },
	{ value: "5", label: "May" },
	{ value: "6", label: "June" },
	{ value: "7", label: "July" },
	{ value: "8", label: "August" },
	{ value: "9", label: "September" },
	{ value: "10", label: "October" },
	{ value: "11", label: "November" },
	{ value: "12", label: "December" },
];

export function MonthYearPicker({
	startYear,
	endYear,
	defaultMonth,
	defaultYear,
	onChange,
	className,
	monthLabel = "Month",
	yearLabel = "Year",
}: MonthYearPickerProps) {
	// Get current date for defaults
	const currentDate = new Date(2025, 2, 23); // March 23, 2025

	// Set default values
	const currentMonth = currentDate.getMonth() + 1; // JavaScript months are 0-indexed
	const currentYear = currentDate.getFullYear();

	// Calculate year range
	const yearStart = startYear || currentYear - 10;
	const yearEnd = endYear || currentYear + 10;

	// Create years array
	const years = Array.from({ length: yearEnd - yearStart + 1 }, (_, i) => ({
		value: String(yearStart + i),
		label: String(yearStart + i),
	}));

	// State for selected values
	const [selectedMonth, setSelectedMonth] = React.useState<string>(
		String(defaultMonth || currentMonth)
	);
	const [selectedYear, setSelectedYear] = React.useState<string>(
		String(defaultYear || currentYear)
	);

	// Handle changes
	const handleMonthChange = (value: string) => {
		setSelectedMonth(value);
		if (onChange) {
			onChange(Number.parseInt(value), Number.parseInt(selectedYear));
		}
	};

	const handleYearChange = (value: string) => {
		setSelectedYear(value);
		if (onChange) {
			onChange(Number.parseInt(selectedMonth), Number.parseInt(value));
		}
	};

	return (
		<div className={cn("flex flex-col sm:flex-row gap-4", className)}>
			<div className="flex flex-col gap-2 flex-1">
				<label htmlFor="month-select" className="text-sm font-medium">
					{monthLabel}
				</label>
				<Select value={selectedMonth} onValueChange={handleMonthChange}>
					<SelectTrigger id="month-select" className="w-full">
						<SelectValue placeholder="Select month" />
					</SelectTrigger>
					<SelectContent>
						{MONTHS.map((month) => (
							<SelectItem key={month.value} value={month.value}>
								{month.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-2 flex-1">
				<label htmlFor="year-select" className="text-sm font-medium">
					{yearLabel}
				</label>
				<Select value={selectedYear} onValueChange={handleYearChange}>
					<SelectTrigger id="year-select" className="w-full">
						<SelectValue placeholder="Select year" />
					</SelectTrigger>
					<SelectContent>
						{years.map((year) => (
							<SelectItem key={year.value} value={year.value}>
								{year.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
