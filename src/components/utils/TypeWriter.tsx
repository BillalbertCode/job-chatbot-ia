// Component of writter / effect of typing
// Primarily created for growing text strings
"use client"
import { useState, useEffect, HTMLAttributes } from "react";
// styles
import animation from "@/styles/animation.module.css" // animation typing for loading state

interface TypeWriterProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;      // Text of reder 
  speed?: number;    // Speed of typing letter
  className?: string
}

const TypeWriter: React.FC<TypeWriterProps> = ({ text, speed = 50, className, ...props }) => {
  const [displayedText, setDisplayedText] = useState<string>("");  // Text currenty displayed

  const [load, setLoad] = useState<boolean>(false) // state of load component for writing

  const timer = (ms: number) => new Promise(res => setTimeout(res, ms)) // timer for function

  // Function Typing letter of the text, parameter is the number of init Typing
  async function writer(index: number) {
    setLoad(true)
    let currentIndex: number = index // Index of text
    for (currentIndex; currentIndex < text.length; currentIndex++) {
      setDisplayedText((prev) => prev + text[currentIndex]) // add letter
      await timer(speed) // timer/sleep
    }
    setLoad(false)
    return currentIndex // Return Last Index on the text 
  }

  useEffect(() => {
    // If new text appears, update it
    if (text.length > displayedText.length && !load) {
      writer(displayedText.length) // writer displayedText.lenght as index init 
    }
  }, [text, displayedText, load]);

  return <p {...props} className={className}>{displayedText}<span className={`${load && animation.typing}`}></span></p>;  // Reder of text is progress
};

export default TypeWriter;
