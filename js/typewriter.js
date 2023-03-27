export function typeWriter(element) {
  const textoArray = element.innerHTML.split("");
  element.innerHTML = " ";
  textoArray.forEach((words, i) => {
    setTimeout(() => {
      element.innerHTML += words;
    }, 75 * i);
  });
}
