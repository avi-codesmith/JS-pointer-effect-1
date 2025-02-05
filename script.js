"use strict";

document.addEventListener("mousemove", (e) => {
  let trail = document.createElement("div");
  trail.className = "trail";
  trail.innerText = "⚪";
  document.body.appendChild(trail);

  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  //

  setTimeout(() => {
    trail.remove();
  }, 300);
});
