import styled from "styled-components";
import { IMG_URL } from "../constants";

const MainBanners = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url(${IMG_URL}/original/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg) no-repeat center/cover;
  h3, p{
    color: #fff;
  }
`;

export const Banners = ({data}) => {
    return<MainBanners $bg = {data.backdrop_path}>
    <h3>{data.title}</h3>
    <p>{data.overview.slice(0,100) + "..."}</p>
  </MainBanners>;
}