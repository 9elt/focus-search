document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState !== "complete") {
    return;
  }

  const inputs = document.querySelectorAll('input[type="text"], input[type="search"]');

  if (inputs.length === 0) {
    return;
  }

  for (let i = 0; i < inputs.length; i++) {
    if (/search/i.test(inputs[i].outerHTML)) {
      inputs[i].focus();
      return;
    }
  }

  inputs[0].focus();
});
