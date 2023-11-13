import { HashRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./home/Home";
import { Detail } from "./home/Detail";
import { Search } from "./home/Search";
import { PageNotFound } from "./home/PageNotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.search} element={<Search />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default Router;
