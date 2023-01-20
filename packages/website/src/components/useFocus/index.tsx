import { useFocus } from "@reactuses/core";
import { useRef } from "react";
import Layout from "../Layout";

import file from "./README.md";

const Page = () => {
  return (
    <Layout file={file}>
      <Demo />
    </Layout>
  );
};

export default Page;

const Demo = () => {
  const text = useRef<HTMLParagraphElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  const [paragraphFocus, setParagraphFocus] = useFocus(text);
  const [inputFocus, setInputFocus] = useFocus(input, true);
  const [buttonFocus, setButtonFocus] = useFocus(button);
  return (
    <div>
      <p ref={text} style={paragraphFocus ? { opacity: 0.5 } : {}} tabIndex={0}>
        Paragraph that can be focused
      </p>
      <input ref={input} placeholder="Input that can be focused" />
      <br />
      <br />
      <button ref={button} style={buttonFocus ? { opacity: 0.5 } : {}}>
        Button that can be focused
      </button>
      <br />
      <br />
      <hr />
      <p style={{ height: "2rem" }}>
        {paragraphFocus && "The paragraph has focus"}
        {inputFocus && "The input control has focus"}
        {buttonFocus && "The button has focus"}
      </p>
      <div>
        <button
          onClick={() => {
            setParagraphFocus(!paragraphFocus);
          }}
        >
          Focus text
        </button>
        <button
          onClick={() => {
            setInputFocus(!inputFocus);
          }}
        >
          Focus input
        </button>
        <button
          onClick={() => {
            setButtonFocus(!buttonFocus);
          }}
        >
          Focus button
        </button>
      </div>
    </div>
  );
};
