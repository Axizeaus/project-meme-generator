export default function Main() {
  console.log("main running");
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input1" placeholder="top text" />
        <input type="text" className="form--input2" placeholder="bottom text" />
        <button className="form--button">make a meme</button>
      </form>
    </main>
  );
}
