const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const text = newsInput.value.trim();

  if (text === "") {
    resultBox.innerHTML = "⚠️ Please enter some news text!";
    resultBox.style.color = "orange";
    return;
  }

  resultBox.innerHTML = "Analyzing...";
  resultBox.style.color = "white";

  setTimeout(() => {
    const fakeWords = ["shocking", "click here", "guaranteed", "secret", "breaking", "unbelievable"];
    let isFake = false;

    fakeWords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        isFake = true;
      }
    });

    if (isFake) {
      resultBox.innerHTML = "🚨 This news looks FAKE!";
      resultBox.style.color = "red";
    } else {
      resultBox.innerHTML = "✅ This news looks REAL!";
      resultBox.style.color = "lightgreen";
    }
  }, 1500);
});
