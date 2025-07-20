import { useState } from "react";
import { BottomSection } from "./BottomSection";
import { TopSection } from "./TopSection";

const sliderData = [
  {
    body: " I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ",
    image: "F",
    name: "Tanya Sinclair",
    title: "UX Engineer",
  },
  {
    body: " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ",
    image: "M",
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
  },
];

export function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(sliderData[0]);

  function handleClick() {
    if (currentSlide.image == "F") {
      setCurrentSlide(sliderData[1]);
    } else {
      setCurrentSlide(sliderData[0]);
    }
  }
  return (
    <main className="w-full h-screen  flex flex-col md:flex-row-reverse">
      <TopSection image={currentSlide.image} onClick={handleClick} />
      <BottomSection
        name={currentSlide.name}
        body={currentSlide.body}
        title={currentSlide.title}
      />
    </main>
  );
}
