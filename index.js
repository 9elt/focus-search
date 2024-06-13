(() => {
  function focus() {
    if (document.readyState !== "complete") {
      return;
    }

    const inputs = document.querySelectorAll('input[type="text"], input[type="search"]');

    if (inputs.length === 0) {
      return cleanup();
    }

    for (let i = 0; i < inputs.length; i++) {
      if (/search/i.test(inputs[i].outerHTML)) {
        inputs[i].focus();
        return cleanup();
      }
    }

    inputs[0].focus();
    cleanup();
  }

  function cleanup() {
    document.removeEventListener("readystatechange", focus);
  }

  document.addEventListener("readystatechange", focus);
  focus();
})();
