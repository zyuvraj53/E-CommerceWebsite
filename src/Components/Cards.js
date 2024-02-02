import profilePic from "../Assets/profile.avif";
import "./Cards.css";
import AddButton from "./AddButton";

export default function Cards({ link, image, altText, productDetails }) {
  return (
    <div className="card border-2 border-black border-solid rounded-xl shadow-[2px_2px_2px_2px_rgba(0,0,0,0.1)] p-5 m-2 text-center max-w-56 inline-block hover:shadow-[4px_4px_4px_4px_rgba(0,0,0,0.25)]">
      <a href={link}>
        <img
          src={ profilePic }
          alt="some info"
          className="max-w-28 h-auto mb-2.5"
        />
        <h2 className="m-0 text-[#232323] text-xl font-semibold">
          The heading
        </h2>
        <p className="text-[#343434] text-lg font-normal">Some info</p>
      </a>
      <AddButton />
    </div>
  );
}
