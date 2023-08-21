import { create } from "zustand";

interface ChartState {
	type: ApexChart["type"];
	update: (type: string) => void;
}

export const useStore = create<ChartState>((set) => {
	return {
		type: "area",

		update: (type: any) => {
			set({ type });
		},
	};
});
