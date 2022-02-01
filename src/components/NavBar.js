import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {links.map(link => {
        return (<a key={link} href={`#${link}`}>{link}</a>)
      })}
      {/* <a href="#home">home</a>
      <a href="#about">about</a>
      <a href="#projects">projects</a> */}
    </nav>
  );
}

export default NavBar;
