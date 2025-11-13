import { create } from "zustand";

type Bounds = {
  swLat: number;
  swLng: number;
  neLat: number;
  neLng: number;
};

type MapState = {
  bounds: Bounds | null;
  setBounds: (b: Bounds) => void;
};

export const useMapStore = create<MapState>((set) => ({
  bounds: null,
  setBounds: (b) => set({ bounds: b }),
}));
