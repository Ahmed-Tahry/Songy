import React from "react";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePlay,
  handlePause,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <BsFillPauseFill
      size={35}
      className=" text-gray-300"
      onClick={handlePause}
    />
  ) : (
    <BsFillPlayFill size={35} className=" text-gray-300" onClick={handlePlay} />
  );
};
export default PlayPause;
