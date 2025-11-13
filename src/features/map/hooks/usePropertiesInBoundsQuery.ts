import { useQuery } from "@tanstack/react-query";
import { getProperties } from "../api/propertyApi";

export function usePropertiesInBoundsQuery(
  bounds: {
    swLat: number;
    swLng: number;
    neLat: number;
    neLng: number;
  } | null
) {
  return useQuery({
    queryKey: ["properties", bounds],
    queryFn: async () => {
      const data = await getProperties(
        bounds!.swLat,
        bounds!.swLng,
        bounds!.neLat,
        bounds!.neLng
      );

      return data.map((p) => ({
        id: p.id,
        title: p.title,
        lat: p.latitude,
        lng: p.longitude,
        price: p.price,
        maintenanceFee: p.maintenance_fee,
        address: p.address,
        areaM2: p.area_m2,
        areaPy: p.area_py,
        floor: p.floor,
      }));
    },
    enabled: !!bounds,
    placeholderData: (prev) => prev,
    staleTime: 1000 * 60 * 2,
  });
}
