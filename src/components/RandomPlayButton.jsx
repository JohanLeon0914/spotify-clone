import { usePlayerStore } from "../store/playerStore";
import React, { useState } from "react";

const RandomIconDisabled = ({ className }) => (
  <svg
    width="42"
    height="42"
    className={className}
    viewBox="0 0 24 24"
    stroke="#fff"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 4l3 3l-3 3" />
    <path d="M18 20l3 -3l-3 -3" />
    <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
    <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
  </svg>
);

const RandomIconEnabled = ({ className }) => (
  <svg
    width="42"
    height="42"
    className={className}
    viewBox="0 0 24 24"
    stroke="#008000"
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 4l3 3l-3 3" />
    <path d="M18 20l3 -3l-3 -3" />
    <path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
    <path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
  </svg>
);

export function RandomPlayButton({ id }) {
  const { setIsRandomMode, isRandomMode } = usePlayerStore((state) => state);

  const handleClick = () => {
    setIsRandomMode({ active: !isRandomMode.active, playlistId: id });
  };

  return (
    <button
      onClick={handleClick}
      className={`card-play-button rounded-full align-middle ml-4`}
    >
      {isRandomMode.active && isRandomMode.playlistId === id ? (
        <RandomIconEnabled />
      ) : (
        <RandomIconDisabled />
      )}
    </button>
  );
}
