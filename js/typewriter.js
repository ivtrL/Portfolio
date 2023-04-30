export function typeWriter(element) {
  const textoArray = element.innerHTML.split("");
  element.innerHTML = " ";
  setTimeout(() => {
    textoArray.forEach((words, i) => {
      setTimeout(() => {
        element.innerHTML += words;
      }, 75 * i);
    });
  }, 2000);
}
