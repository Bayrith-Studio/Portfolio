function isDarkMode() {
  return window.matchMedia &&
         window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function createClovers() {
  const cloverCount = 30;
  const cloverSrc = isDarkMode() ? "FiveClover.png" : "Clover.png";

  for (let i = 0; i < cloverCount; i++) {
    const clover = document.createElement("img");
    clover.src = cloverSrc;
    clover.classList.add("clover");

    clover.style.left = Math.random() * 100 + "vw";
    clover.style.top = "-150px";
    clover.style.position = "absolute";
    clover.style.animationDuration = (5 + Math.random() * 5) + "s";
    clover.style.animationDelay = Math.random() * 5 + "s";
    clover.style.width = (20 + Math.random() * 150) + "px";
    clover.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(clover);
  }
}

createClovers();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {

  document.querySelectorAll('.clover').forEach(el => el.remove());

  createClovers();
});