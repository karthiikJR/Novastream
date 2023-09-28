<<<<<<< HEAD
import { MdUpload } from "react-icons/md";
import SearchBar from "../components/SearchBar";
import TagTray from "../components/TagTray";
const Navbar = () => {
  return (
    <nav className="w-full bg-background h-[5rem] md:gap-10 flex items-center px-2 justify-between  sm:px-10 md:px-10">
      <img src="/logo.svg" alt="logo" className="h-10 aspect-square" />
      <TagTray />
      <SearchBar />
      <div className="bg-dark-gray p-2 rounded-full hover:bg-light-gray transition-all cursor-pointer ">
        <MdUpload className="text-light text-[1.6rem] " />
      </div>
    </nav>
  );
};
=======
import { useState } from "react";
// import React from "react";

import { GoHomeFill } from "react-icons/go";
import { MdExplore } from "react-icons/md";
import { BsMusicNoteList } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

import { IconContext } from "react-icons";

import { Profile } from "../assets";

import "./navbar.css";

function Navbar() {
	const [active, setActive] = useState(0);
	const icons = [
		{
			icon: (
				<GoHomeFill className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
			),
		},
		{
			icon: (
				<MdExplore className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
			),
		},
		{
			icon: (
				<BsMusicNoteList className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
			),
		},
		{
			icon: (
				<BiSolidLike className="opacity-50 hover:scale-[1.2] transition-all duration-200" />
			),
		},
	];

	const handleClick = (index) => {
		setActive(index);
	};

	return (
		<>
			<div className="flex absolute w-full h-[5rem] bottom-0 bg-background justify-evenly sm:h-[100vh] sm:w-[5.5rem] sm:flex-col gap-10 sm:justify-around px-auto items-center">
				<IconContext.Provider
					value={{
						className: "global-class-name ",
						color: "#EFEFEF",
						size: "1.5em",
					}}
				>
					<div className="flex left-0 self-center items-center w-full justify-evenly sm:w-full sm:h-[20rem] sm:flex-col sm:justify-around">
						{icons.map((item, index) => (
							<div
								key={index}
								onClick={() => handleClick(index)}
								className={`flex justify-center items-center w-[3.5em] h-[3.5em] ${
									index === active ? "active" : ""
								} cursor-pointer transition-all ease-in-out duration-500 rounded-full`}
							>
								{icons[index].icon}
							</div>
						))}
						<img
							src={Profile}
							alt=""
							className="w-12 cursor-pointer sm:absolute sm:bottom-0 my-auto sm:mb-3 bg-white rounded-full border border-white"
						/>
					</div>
				</IconContext.Provider>
			</div>
		</>
	);
}
>>>>>>> 7d0ade3ebb2a22e2ecf5d3a03f81ca78eaecdfaa

export default Navbar;
