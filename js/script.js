const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");
const confidenceBox = document.getElementById("confidence");

checkBtn.addEventListener("click", () => {
  const text = newsInput.value.trim();

  if (text === "") {
    resultBox.innerHTML = "⚠️ Please enter some news!";
    resultBox.style.color = "orange";
    confidenceBox.innerHTML = "";
    return;
  }

  resultBox.innerHTML = "Analyzing...";
  resultBox.style.color = "white";
  confidenceBox.innerHTML = "";

  setTimeout(() => {
    const fakeWords = [
      "shocking", "breaking", "unbelievable",
      "click here", "guaranteed", "secret", "100% true"
    ];

    let score = 0;

    fakeWords.forEach(word => {
      if (text.toLowerCase().includes(word)) {
        score += 15;
      }
    });

    if (score > 80) score = 85;

    if (score >= 50) {
      resultBox.innerHTML = "🚨 FAKE NEWS DETECTED!";
      resultBox.style.color = "red";
      confidenceBox.innerHTML = `Confidence: ${score}%`;
    } else {
      let realScore = 100 - score;
      resultBox.innerHTML = "✅ NEWS LOOKS REAL";
      resultBox.style.color = "lightgreen";
      confidenceBox.innerHTML = `Confidence: ${realScore}%`;
    }
  }, 1200);
});
 
