const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('') // split the text into an array of letters
    .map(
      (letter, idx) =>
        `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`
    ) // wrap each letter in a span
    .join('') // join the array back into a string  with no separator
})
