// Debouncing ensures that a function is only executed after a certain period of inactivity. If the event is triggered again within that time, the timer resets.

// Use Case:

// Search box auto-suggestions (wait until the user stops typing).

// Debounce → "Wait until things stop happening."

import React, { useState, useEffect } from "react";

function DebounceExample() {
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, 500); // wait 500ms after user stops typing

    return () => clearTimeout(handler); // cleanup on every keystroke
  }, [text]);

  return (
    <div>
      <h2>Debounce Example</h2>
      <input
        type="text"
        placeholder="Type to search..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Searching for: {debouncedText}</p>
    </div>
  );
}


// Clean up function will run when the effect will trigger again and when the component unmounts 
export default DebounceExample;
