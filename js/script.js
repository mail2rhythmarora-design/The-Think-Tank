const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const newsText = newsInput.value.toLowerCase().trim();

    if (newsText === "") {
        resultBox.innerHTML = "⚠ Please enter some news text.";
        return;
    }

    const fakeKeywords = [
        "shocking",
        "unbelievable",
        "click here",
        "miracle",
        "breaking",
        "guaranteed",
        "secret",
        "100% true"
    ];

    let score = 10;   // default low fake chance

    fakeKeywords.forEach(word => {
        if (newsText.includes(word)) {
            score += 15;
        }
    });

    if (score > 100) {
        score = 100;
    }

    resultBox.innerHTML = "⚠ Fake probability: " + score + "%";
});
