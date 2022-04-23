document.addEventListener("DOMContentLoaded", function() {
    changeText("This is really cool!");
  });

  function changeText(newText) {
      let text = document.getElementById('text');
      text.textContent = newText;
  }