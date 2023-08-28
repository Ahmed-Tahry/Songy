import { Link } from "react-router-dom";
const DetailsHeader = ({ artistId, artistData, songData }) => {
  const artist = artistData?.artists[artistId]?.attributes;
  return (
    <div className=" relative w-full flex flex-col ">
      <div className=" w-full bg-gradient-to-l from-transparent to-[#191414] sm:h-48 h-28 rounded-lg" />
      <div className=" absolute inset-0 flex items-center ">
        <img
          src={
            songData
              ? artistId
                ? artist.artwork.url
                    .replace("{W}", "500")
                    .replace("{h}", "{500}")
                : songData.images.coverart
              : null
          }
          className=" sm:w-48 w-28 sm:h-48 h-28 rounded-full object-fit border-2 shadow-xl shadow-black"
          alt="art"
        />
        <div className=" ml-5">
          <p className=" font-bold sm:text-3xl text-xl text-white ">
            {songData ? (artistId ? artist.name : songData.title) : null}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className=" text-base text-gray-400 mt-2 ">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className=" text-base text-gray-400 mt-2 ">
            {songData
              ? artistId
                ? artist.genreNames[0]
                : songData.genres.primary
              : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsHeader;
