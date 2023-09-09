import { ChartType } from "@/@types/chart";
import { create } from "zustand";

interface IChartStore {
	chartType: ChartType;
	earnChartSortType: string;
	setEarnChartSortType: (sortType: string) => void;
	onChangeChartType: (chartType: ChartType) => void;
}

export const useChart = create<IChartStore>((set) => {
	return {
		chartType: "bar",
		earnChartSortType: "month",
		setEarnChartSortType: (sortType) => {
			set({ earnChartSortType: sortType });
		},
		onChangeChartType: (chartType) => {
			set({ chartType });
		},
	};
});
