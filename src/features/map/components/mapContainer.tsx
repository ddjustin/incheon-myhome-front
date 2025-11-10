"use client";

import {
  Map,
  MarkerClusterer,
  CustomOverlayMap,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useState } from "react";
import { usePropertiesInBoundsQuery } from "../hooks/usePropertiesInBoundsQuery";
import { useMapStore } from "../store/useMapStore";

const clustererStyle = [
  {
    width: "80px",
    height: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(37, 99, 235, 0.8)",
    color: "#fff",
    borderRadius: "50%",
    fontSize: "20px",
    fontWeight: "700",
  },
];

export default function MapContainer() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_API_KEY!,
    libraries: ["clusterer"],
  });

  const { bounds, setBounds } = useMapStore();
  const { data: properties, isLoading } = usePropertiesInBoundsQuery(bounds);
  return (
    <div className="relative w-full h-screen">
      <Map
        center={{ lat: 37.4563, lng: 126.7052 }}
        style={{ width: "100%", height: "100%" }}
        level={7}
        onIdle={(map) => {
          const b = map.getBounds();
          setBounds({
            swLat: b.getSouthWest().getLat(),
            swLng: b.getSouthWest().getLng(),
            neLat: b.getNorthEast().getLat(),
            neLng: b.getNorthEast().getLng(),
          });
        }}
      >
        <MarkerClusterer averageCenter minLevel={10} styles={clustererStyle}>
          {properties?.map((property) => (
            <CustomOverlayMap
              key={property.id}
              position={{ lat: property.lat, lng: property.lng }}
            >
              <div
                className="flex items-center justify-center w-[60px] h-[60px]
                           bg-blue-600/80 text-white text-[16px] font-semibold
                           rounded-full hover:scale-110 transition-transform"
              >
                1
              </div>
            </CustomOverlayMap>
          ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
}
