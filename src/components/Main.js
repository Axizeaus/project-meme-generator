import { useState } from "react";
import memeData from "../memeData";

export default function Main() {

  const [memeImage, setMemeImage] = useState("http://i.imgflip.com/1bij.jpg");

  function getRandomMeme(){
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url
    setMemeImage(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" className="form--input1" placeholder="top text" />
        <input type="text" className="form--input2" placeholder="bottom text" />
        <button className="form--button" onClick={getRandomMeme}>make a meme</button>
      </div>
      <img src={memeImage} alt="meme image" className="meme--image" />
    </main>
  );
}