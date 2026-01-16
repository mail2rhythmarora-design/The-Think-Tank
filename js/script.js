const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");

checkBtn.addEventListener("click", () => {
  const newsText = newsInput.value.trim();

  if (newsText === "") {
    resultBox.innerHTML = "⚠️ Please enter some news text.";
    resultBox.style.color = "orange";
    return;
  }

  resultBox.innerHTML = "Analyzing...";
  resultBox.style.color = "white";

  setTimeout(() => {
    const fakeKeywords = [
      "shocking", "unbelievable", "click here", "miracle", 
      "you won", "breaking", "guaranteed", "secret", "100% true"
    ];

    let isFake = false;

    fakeKeywords.forEach(word => {
      if (newsText.toLowerCase().includes(word)) {
        isFake = true;
      }
    });

    if (isFake) {
      resultBox.innerHTML = "🚨 This news seems FAKE!";
      resultBox.style.color = "red";
    } else {
      resultBox.innerHTML = "✅ This news seems REAL.";
      resultBox.style.color = "lightgreen";
    }
  }, 1500);
});
