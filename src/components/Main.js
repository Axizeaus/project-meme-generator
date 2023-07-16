import { useState } from "react";
import memeData from "../memeData";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function getMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme({ ...meme, randomImage: memesArray[randomNumber].url });
  }

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input1" placeholder="top text" />
        <input type="text" className="form--input2" placeholder="bottom text" />
        <button className="form--button" onClick={getMeme}>
          make a meme
        </button>
      </div>
      <img src={meme.randomImage} alt="meme image" className="meme--image" />
    </main>
  );
}
