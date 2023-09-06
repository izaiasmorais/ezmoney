import { create } from "zustand";

interface IChartStore {
	chartType: ApexChart["type"];
	earnChartSortType: string;
	setEarnChartSortType: (sortType: string) => void;
	onChangeChartType: (chartType: ApexChart["type"]) => void;
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
