import { ChartType } from "@/@types/chart";
import { create } from "zustand";

interface IChartStore {
	chartType: ChartType;
	earnChartSortType: string;
	profitChartSortType: string;
	setEarnChartSortType: (sortType: string) => void;
	setProfitChartSortType: (sortType: string) => void;
	onChangeChartType: (chartType: ChartType) => void;
}

export const useChart = create<IChartStore>((set) => {
	return {
		chartType: "bar",
		profitChartSortType: "month",
		earnChartSortType: "day",
		setEarnChartSortType: (sortType) => {
			set({ earnChartSortType: sortType });
		},
		setProfitChartSortType: (sortType) => {
			set({ earnChartSortType: sortType });
		},
		onChangeChartType: (chartType) => {
			set({ chartType });
		},
	};
});
