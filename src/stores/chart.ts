import { create } from "zustand";

interface IChartStore {
	type: ApexChart["type"];
	update: (type: string) => void;
}

export const useChart = create<IChartStore>((set) => {
	return {
		type: "area",

		update: (type: any) => {
			set({ type });
		},
	};
});
