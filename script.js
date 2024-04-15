// type js plugin
let typeJsText = document.querySelector(".typeJsText");
let textArray = typeJsText.dataset.typetext.split("");
let counter = -1;

typeJsText.innerHTML = "";

function typeJs() {
  if (counter < typeJsText.dataset.typetext.length) {
    counter++;
    typeJsText.innerHTML += typeJsText.dataset.typetext.charAt(counter);
    textArray = typeJsText.dataset.typetext.split("");
  } else {
    textArray.pop();
    typeJsText.innerHTML = textArray.join("");
    if (textArray.length == 0) {
      counter = -1;
    }
  }
}

setInterval(() => {
  typeJs();
}, 200);

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = Number(counter.getAttribute("data-target"));
    const c = Number(counter.innerText);
    const increment = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

//Scroll reveal
window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 1000 });


AOS.init({
  duration: 1200,
})

