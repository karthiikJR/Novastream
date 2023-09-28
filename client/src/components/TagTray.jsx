import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const TagTray = () => {
  const trayItems = [
    "All",
    "Gaming",
    "Sports",
    "Gaming",
    "Technology",
    "Education",
    "Movies",
    "Songs",
    "Reading",
  ];
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    const container = document.getElementById("tagTray");
    container.addEventListener("scroll", () => {
      let pos = container.scrollLeft;
      if (pos > 50) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    });
  }, [scrollActive]);

  const scrollRight = () => {
    const container = document.getElementById("tagTray");
    console.log(container.offsetWidth);
    container.scrollBy(container.offsetWidth / 2, 0);
  };
  const scrollLeft = () => {
    const container = document.getElementById("tagTray");
    container.scrollLeft -= 200;
  };

  return (
    <div className=" md:flex md:flex-[2] w-[20rem]  text-white hidden items-center relative gap-2">
      <div
        className="flex w-[100%] overflow-x-scroll no-scrollbar gap-3  "
        id="tagTray"
      >
        {scrollActive && (
          <div
            className="p-2  transition-all absolute h-full  bg-background z-10 "
            onClick={scrollLeft}
          >
            <AiOutlineLeft className=" right-0 text-light text-xl" />
          </div>
        )}
        {trayItems.map((item, key) => {
          return (
            <div
              key={key}
              className="bg-dark-gray py-2 w-fit px-3 rounded-lg flex items-center justify-center hover:bg-light-gray transition-all cursor-pointer "
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="p-2 transition-all" onClick={scrollRight}>
        <AiOutlineRight className=" right-0 text-light text-xl" />
      </div>
    </div>
  );
};

export default TagTray;
