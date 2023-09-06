import { create } from "zustand";

interface IChartStore {
	chartType: ApexChart["type"];
	onChangeChartType: (chartType: ApexChart["type"]) => void;
}

export const useChart = create<IChartStore>((set) => {
	return {
		chartType: "area",

		onChangeChartType: (chartType) => {
			set({ chartType });
		},
	};
});
