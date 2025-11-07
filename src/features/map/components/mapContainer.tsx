"use client";

import {
  Map,
  MarkerClusterer,
  CustomOverlayMap,
  useKakaoLoader,
} from "react-kakao-maps-sdk";
import { useMemo } from "react";

const clustererStyle = [
  {
    width: "80px",
    height: "80px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: "rgba(37, 99, 235, 0.8)",
    color: "#fff",
    textAlign: "center",
    lineHeight: "60px",
    borderRadius: "50%",
    fontSize: "24px",
    fontWeight: "700",
    border: "2px solid #fff",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)",
    transition: "transform 0.15s ease-in-out",
  },
];

const useClusterPositions = () =>
  useMemo(
    () => [
      { lat: 37.4563, lng: 126.7052 },
      { lat: 37.507, lng: 126.7218 },
      { lat: 37.3871, lng: 126.642 },
      { lat: 37.464, lng: 126.6793 },
      { lat: 37.4489, lng: 126.7314 },
      { lat: 37.5335, lng: 126.653 },
      { lat: 37.5425, lng: 126.7379 },
      { lat: 37.4061, lng: 126.6789 },
      { lat: 37.4003, lng: 126.734 },
      { lat: 37.432, lng: 126.665 },
    ],
    []
  );

export default function MapContainer() {
  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_API_KEY!,
    libraries: ["clusterer"],
  });

  const positions = useClusterPositions();

  return (
    <div className="relative w-full h-screen">
      <Map
        center={{ lat: 37.4563, lng: 126.7052 }}
        style={{ width: "100%", height: "100%" }}
        level={7}
      >
        <MarkerClusterer averageCenter minLevel={10} styles={clustererStyle}>
          {positions.map((pos, i) => (
            <CustomOverlayMap key={i} position={pos}>
              <div
                className="
                  flex items-center justify-center
                  w-[60px] h-[60px]
                  bg-blue-600/80 text-white
                  text-[18px] font-semibold
                  rounded-full 
                  hover:scale-110
                "
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
