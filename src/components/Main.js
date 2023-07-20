import { useState } from "react";
import memeData from "../memeData";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event){
    const {name, value} = event.target;
    setMeme( prevMeme => {
      return {
        ...prevMeme,
        [name] : value
      }
    }
    )
  }

  // const [allMemeImages, setAllMemeImages] = useState(memeData);

  function getMeme() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme({ ...meme, randomImage: url });
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input1"
          placeholder="top text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          className="form--input2"
          placeholder="bottom text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button className="form--button" onClick={getMeme}>
          get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" alt="meme" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
