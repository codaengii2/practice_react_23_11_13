import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import { Banners } from "./Banners";



export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { results } = await nowPlaying();
        setNowPlayingData(results);
        setIsloading(false);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  console.log(isloading);
  console.log(nowPlayingData);

  return (
    <>
      {isloading ? (
        "loading..."
      ) : (
        <>
          {nowPlayingData && (
            <Banners data = {nowPlayingData[0]}/>
          )}
        </>
      )}
    </>
  );
};
