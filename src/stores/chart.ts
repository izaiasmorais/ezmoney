import { create } from "zustand";

interface IChartStore {
	chartType: ApexChart["type"];
	onChangeChartType: (chartType: ApexChart["type"]) => void;
}

export const useChart = create<IChartStore>((set) => {
	return {
		chartType: "line",

		onChangeChartType: (chartType) => {
			set({ chartType });
		},
	};
});
