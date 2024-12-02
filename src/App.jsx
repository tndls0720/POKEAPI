/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import "./App.scss";
import { useEffect } from "react";
import { fetchMultiplePokemonById } from "./RTK/thunk";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./pages/main";
import Detail from "./pages/detail";

function App() {
  const ditpatch = useDispatch();

  useEffect(() => {
    ditpatch(fetchMultiplePokemonById(151));
  }, []);

  return (
    <>
      <h1 className="text-[40px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-[10px] justify-center">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail/1"}>상세정보</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap gap-[20px] justify-center pt-[20px]">
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:pokemonId"} element={<Detail />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/favorite"} element={<Favorite />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
