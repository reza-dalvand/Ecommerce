import React, { useEffect, useRef } from "react";
import neshan_map_loader from "./loaders/neshan_map_loader";
import "./NeshanMap.css";

const NeshanMap = (props) => {
  const { style, options, onInit } = props;
  const mapEl = useRef(null);

  const defaultStyle = {
    width: "85%",
    height: "450px",
    margin: 0,
    padding: 0,
    background: "#eee",
  };

  const defaultOptions = {
    key: "web.M1yMBbisFE30ALheS5ZuekpUiDloBtTmG3k7TZVk",
    maptype: "dreamy",
    poi: true,
    traffic: false,
    center: [33.491255, 48.353301],
    zoom: 14,
  };

  useEffect(() => {
    neshan_map_loader({
      onLoad: () => {
        let map = new window.L.Map(mapEl.current, {
          ...defaultOptions,
          ...options,
        });
        if (onInit) onInit(window.L, map);
      },
      onError: () => {
        console.error(
          "Neshan Maps Error: This page didn't load Neshan Maps correctly"
        );
      },
    });
  });
  return <div ref={mapEl} style={{ ...defaultStyle, ...style }} />;
};

export default NeshanMap;
