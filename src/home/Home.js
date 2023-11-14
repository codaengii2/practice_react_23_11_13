import { useEffect, useState } from "react";
import { nowPlaying } from "../api";
import styled from "styled-components";

const MainBanners = styled.div``;

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
            <MainBanners>
              <h3>{nowPlayingData[0].title}</h3>
              <p>{nowPlayingData[0].overview}</p>
            </MainBanners>
          )}
        </>
      )}
    </>
  );
};
