const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");
const confidenceBox = document.getElementById("confidence");

checkBtn.addEventListener("click", () => {
    const text = newsInput.value.trim().toLowerCase();

    if (text === "") {
        resultBox.innerHTML = "⚠️ Please enter some news text.";
        confidenceBox.innerHTML = "";
        return;
    }

    const suspiciousWords = [
        "shocking",
        "breaking",
        "miracle",
        "secret",
        "click here",
        "guaranteed",
        "100% true",
        "unbelievable"
    ];

    let score = 10;

    suspiciousWords.forEach(word => {
        if (text.includes(word)) {
            score += 15;
        }
    });

    if (score > 100) {
        score = 100;
    }

    if (score >= 50) {
        resultBox.innerHTML = "🚨 This news looks suspicious";
        resultBox.style.color = "red";
    } else {
        resultBox.innerHTML = "✅ This news looks mostly genuine";
        resultBox.style.color = "lightgreen";
    }

    confidenceBox.innerHTML = "Confidence Score: " + score + "%";
});
