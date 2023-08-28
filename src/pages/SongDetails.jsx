import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
const SongDetails = () => {
  const dispatch = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { songid } = useParams();
  const { data: songData, isFetching: isFetchhingSongDetails } =
    useGetSongDetailsQuery(songid);
  const {
    data,
    isFetching: isFetchhingRelatedSongs,
    error,
  } = useGetSongRelatedQuery(songid);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  if (isFetchhingRelatedSongs || isFetchhingSongDetails)
    return <Loader title="Searching song details" />;
  if (error) return <Error />;
  return (
    <div className=" flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className=" mb-10">
        <h2 className=" text-white text-3xl font-bold "> Lyrics:</h2>
        <div className=" mt-5">
          {songData ? (
            songData.sections[1].type === "LYRICS" ? (
              songData.sections[1].text.map((line, i) => (
                <p key={i} className=" text-gray-400 text-base ">
                  {line}
                </p>
              ))
            ) : (
              <p className=" text-gray-400 text-base ">
                {" "}
                Sorry, no lyrics found!
              </p>
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
