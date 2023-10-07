import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { BsEmojiSmile } from "react-icons/bs";

const Emoji = () => {
  const [text, setText] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push(parseInt("0x" + el, 16)));
    let emoji = String.fromCodePoint(...codeArray);
    setText((prevText) => prevText + emoji);
  };

  return (
    <div>
      <h3
        style={{
          margin: "auto",
        }}
      >
        Add Emoji Picker
      </h3>
      <div>
        <input
          style={{
            fontSize: "1.3rem",
            padding: "5px 10px",
            margin: "5px 15px",
            marginLeft: "0",
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={() => setShowPicker((val) => !val)}>
          <BsEmojiSmile />
        </button>
        {showPicker && <EmojiPicker onEmojiClick={addEmoji} />}
      </div>
    </div>
  );
};

export default Emoji;
