const foxImage = document.getElementById('foxImage');
const loading = document.getElementById('loading');
const button = document.getElementById('getNewBtn');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');

async function getRandomFox() {
    try {
        loading.textContent = 'Loading fox...';
        loading.style.display = 'block';
        foxImage.classList.remove('loaded');

        // Fetch random fox from API
        const response = await fetch('https://randomfox.ca/floof/');
        const data = await response.json();

        // Update image source
        foxImage.src = data.image;

        // Wait for image to load
        return new Promise((resolve, reject) => {
            foxImage.onload = function() {
                loading.style.display = 'none';
                foxImage.classList.add('loaded');
                resolve();
            };
            foxImage.onerror = reject;
        });

    } catch (error) {
        loading.textContent = 'Oops! Failed to load fox. Try again!';
        console.error('Error fetching fox:', error);
        throw error;
    }
}

async function getRandomQuote() {
    try {
        quoteText.textContent = 'Loading quote...';
        quoteText.className = 'quote-text quote-loading';
        quoteAuthor.textContent = '';

        // Fetch random Breaking Bad quote from API
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
        const data = await response.json();

        // Update quote and author with "fox" suffix
        quoteText.textContent = `"${data[0].quote}"`;
        quoteText.className = 'quote-text';
        quoteAuthor.textContent = `— ${data[0].author} Fox`;

    } catch (error) {
        quoteText.textContent = 'Oops! Failed to load quote. Try again!';
        quoteText.className = 'quote-text';
        console.error('Error fetching quote:', error);
        throw error;
    }
}

async function getNew() {
    button.disabled = true;

    try {
        // Fetch both fox and quote simultaneously
        await Promise.all([getRandomFox(), getRandomQuote()]);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        button.disabled = false;
    }
}

// Load a fox and quote when page loads
window.addEventListener('load', getNew);
