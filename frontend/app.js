const detectorForm = document.getElementById('detectorForm');
const articleTextArea = document.getElementById('articleText');
const analyzeBtn = document.getElementById('analyzeBtn');
const btnText = document.getElementById('btnText');
const spinner = document.getElementById('spinner');
const resultsSection = document.getElementById('resultsSection');
const resultsContainer = document.getElementById('resultsContainer');
const analyzeAnotherBtn = document.getElementById('analyzeAnotherBtn');
const tryBtn = document.getElementById('tryBtn');

detectorForm.addEventListener('submit', handleDetect);
analyzeAnotherBtn.addEventListener('click', resetForm);
tryBtn.addEventListener('click', () => {
    document.getElementById('detector').scrollIntoView({ behavior: 'smooth' });
});

function handleDetect(e) {
    e.preventDefault();

    const text = articleTextArea.value.trim();
    if (!text) return;

    analyzeBtn.disabled = true;
    btnText.style.display = 'none';
    spinner.style.display = 'block';

    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    })
    .then(res => res.json())
    .then(data => {
        displayResults({
            isReal: data.result === "REAL",
            confidence: data.confidence,
            result: data.result,
            analysis:
                data.result === "REAL"
                    ? "The article appears legitimate based on learned linguistic patterns."
                    : data.result === "FAKE"
                        ? "The article shows patterns commonly associated with fake or misleading news."
                        : "The content could not be reliably analyzed."
        });
    })
    .catch(() => {
        alert("Backend server not reachable.");
    })
    .finally(() => {
        analyzeBtn.disabled = false;
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
    });
}

function displayResults(result) {
    const score =
        typeof result.confidence === "number" && !isNaN(result.confidence)
            ? Math.round(result.confidence)
            : 0;

    const type =
        result.result === "REAL"
            ? "legitimate"
            : result.result === "FAKE"
                ? "fake"
                : "fake";

    const title =
        result.result === "REAL"
            ? "Content Appears Legitimate"
            : result.result === "FAKE"
                ? "Warning: Potential Misinformation"
                : "Unable to Analyze Content";

    const icon =
        result.result === "REAL"
            ? '<i class="fas fa-check-circle"></i>'
            : '<i class="fas fa-exclamation-circle"></i>';

    resultsContainer.innerHTML = `
        <div class="result-card ${type}">
            <div class="result-icon ${type}">${icon}</div>
            <div class="result-content">
                <h3>${title}</h3>
                <p>${result.analysis}</p>
                <div class="confidence-section">
                    <div class="confidence-label">
                        <span>Authenticity Score</span>
                        <span class="confidence-score">${score}%</span>
                    </div>
                    <div class="confidence-bar">
                        <div class="confidence-fill ${type}" style="width:${score}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    articleTextArea.value = '';
    resultsSection.style.display = 'none';
    resultsContainer.innerHTML = '';
    articleTextArea.focus();
}

document.addEventListener('DOMContentLoaded', () => {
    articleTextArea.focus();
});
