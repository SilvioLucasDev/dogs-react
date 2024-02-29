import { Route, Routes } from "react-router-dom";
import UserHeader from "./Header/UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStats from "./UserStats";

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="postar" element={<UserPhotoPost />} />
      </Routes>
    </section>
  );
};

export default User;
