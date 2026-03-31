const checkBtn = document.getElementById("checkBtn");
const newsInput = document.getElementById("newsInput");
const resultBox = document.getElementById("result");

const API_KEY = "PASTE_YOUR_API_KEY_HERE";

checkBtn.addEventListener("click", async () => {
    const text = newsInput.value.trim();

    if (text === "") {
        resultBox.innerHTML = "⚠ Please enter some news text.";
        return;
    }

    resultBox.innerHTML = "Analyzing with AI...";

    try {
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: `Analyze the following news and tell if it is FAKE or REAL. Also give confidence percentage:\n\n${text}`
                                }
                            ]
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        const output = data.candidates[0].content.parts[0].text;

        resultBox.innerHTML = output;

    } catch (error) {
        resultBox.innerHTML = "❌ Error connecting to AI.";
        console.error(error);
    }
});
