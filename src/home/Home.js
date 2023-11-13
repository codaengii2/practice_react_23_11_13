import { useEffect } from "react";
import { nowPlaying } from "../api";

export const Home = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await nowPlaying();
        console.log(data);
      } catch (error) {
        console.log("에러: " + error);
      }
    })();
  }, []);

  return <div></div>;
};
