import { supabaseBrowser } from "@/lib/supabase/supabaseClient";

export async function getProperties(
  swLat: number,
  swLng: number,
  neLat: number,
  neLng: number
) {
  const { data, error } = await supabaseBrowser
    .from("properties")
    .select(
      "id, latitude, longitude, title, price, area_m2, area_py, floor, address, maintenance_fee"
    )
    .gte("latitude", swLat)
    .lte("latitude", neLat)
    .gte("longitude", swLng)
    .lte("longitude", neLng);

  console.log("data", data);
  console.log("error", error);
  if (error) throw error;
  return data;
}
