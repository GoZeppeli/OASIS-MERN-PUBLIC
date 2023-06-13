import { Link } from "react-router-dom";
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <>
      <Navbar />
      <p>Pomme</p>
      <Link to="/">Home</Link>
    </>
  );
}