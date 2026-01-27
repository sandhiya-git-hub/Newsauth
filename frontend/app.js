// DOM Elements
const detectorForm = document.getElementById('detectorForm');
const articleTextArea = document.getElementById('articleText');
const analyzeBtn = document.getElementById('analyzeBtn');
const btnText = document.getElementById('btnText');
const spinner = document.getElementById('spinner');
const resultsSection = document.getElementById('resultsSection');
const resultsContainer = document.getElementById('resultsContainer');
const analyzeAnotherBtn = document.getElementById('analyzeAnotherBtn');
const tryBtn = document.getElementById('tryBtn');

// Event Listeners
detectorForm.addEventListener('submit', handleDetect);
analyzeAnotherBtn.addEventListener('click', resetForm);
tryBtn.addEventListener('click', () => {
    document.getElementById('detector').scrollIntoView({ behavior: 'smooth' });
});

// Handle form submission
function handleDetect(e) {
    e.preventDefault();

    const text = articleTextArea.value.trim();
    if (!text) return;

    analyzeBtn.disabled = true;
    btnText.style.display = 'none';
    spinner.style.display = 'block';

fetch("https://newsauth-backend.onrender.com/predict", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
        displayResults({
            isReal: data.result === "REAL",
            confidence: data.confidence,
            analysis: data.result === "REAL"
                ? "The article appears legitimate based on NLP patterns learned from verified news sources."
                : "The article shows linguistic patterns commonly associated with fake or misleading news. Cross-check with reliable sources."
        });
    })
    .catch(error => {
        alert("Error: Backend server is not running.");
        console.error(error);
    })
    .finally(() => {
        analyzeBtn.disabled = false;
        btnText.style.display = 'inline';
        spinner.style.display = 'none';
    });
}

// Display results (UNCHANGED LOGIC – works with your UI)
function displayResults(result) {
    const resultType = result.isReal ? 'legitimate' : 'fake';
    const resultTitle = result.isReal
        ? 'Content Appears Legitimate'
        : 'Warning: Potential Misinformation';

    const resultIcon = result.isReal
        ? '<i class="fas fa-check-circle"></i>'
        : '<i class="fas fa-exclamation-circle"></i>';

  const scorePercentage =
    typeof result.confidence === "number" && !isNaN(result.confidence)
        ? Math.round(result.confidence)
        : 0;


    const resultHTML = `
        <div class="result-card ${resultType}">
            <div class="result-icon ${resultType}">
                ${resultIcon}
            </div>
            <div class="result-content">
                <h3>${resultTitle}</h3>
                <p>${result.analysis}</p>
                <div class="confidence-section">
                    <div class="confidence-label">
                        <span>Authenticity Score</span>
                        <span class="confidence-score">${scorePercentage}%</span>
                    </div>
                    <div class="confidence-bar">
                        <div class="confidence-fill ${resultType}" style="width: ${scorePercentage}%"></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    resultsContainer.innerHTML = resultHTML;
    resultsSection.style.display = 'block';

    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset form
function resetForm() {
    articleTextArea.value = '';
    resultsSection.style.display = 'none';
    resultsContainer.innerHTML = '';
    articleTextArea.focus();
}

// Page load behavior
document.addEventListener('DOMContentLoaded', () => {
    articleTextArea.focus();

    articleTextArea.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
            detectorForm.dispatchEvent(new Event('submit'));
        }
    });
});
