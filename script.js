const form = document.getElementById('login-form');
const codeInput = document.getElementById('code');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const music = document.getElementById('bgMusic');

const secretCode = 'Sona'; 
const nextPageUrl = 'main.html';

// Play music on first click (browser policy fix)
document.body.addEventListener("click", () => {
    if (music) {
        music.play().catch(() => {});
    }
}, { once: true });

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const userInput = codeInput.value.trim();

	if (userInput === secretCode) {
		resultDiv.innerHTML = 'Baby ❤️';

        // Ensure music is playing
        if (music) {
            music.play().catch(() => {});
        }

		setTimeout(() => {
			window.location.href = nextPageUrl;
		}, 800);

	} else {
		resultDiv.innerHTML =
			"Naa Tum meri baby nhi hoo kon hooo tum kaha hai meri sona , don't entry 😾🤬 ";
	}
});
