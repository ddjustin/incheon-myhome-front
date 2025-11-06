"use client";

import { useEffect, useRef } from "react";
import {
  useKakaoLoader as useKakaoLoaderOrigin,
  Map,
} from "react-kakao-maps-sdk";

export default function MapContainer() {
  useKakaoLoaderOrigin({
    appkey: process.env.NEXT_PUBLIC_KAKAO_MAP_JAVASCRIPT_API_KEY!,
    libraries: ["clusterer", "drawing", "services"],
  });

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full h-[calc(100vh)]">
        <Map
          center={{ lat: 37.4563, lng: 126.7052 }}
          style={{
            width: "100%",
            height: "100%",
          }}
          level={6}
        />
      </div>
    </div>
  );
}
