const greetings = ['Hi 👋', 'Helloooooooooooo 😘', 'Daii 😘', 'Oii 😘', 'Pesu daa 😡😤', 'Dai Dai Dai 🥹', 'enna da busy ha irukiya ???'];
const section = document.getElementById('section');

for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreet = greetings[randomIndex];
    section.innerHTML += `
        <main class="aveyra">
            <article>
                <h6>Aveyra</h6>
                <p>${randomGreet}</p>
            </article>
        </main>`;
}

function send() {
    const userin = document.getElementById('userin').value.trim();
    if (userin !== '') {
        section.innerHTML += `
            <main class="you">
                <article>
                    <h6>You <strong>✓</strong></h6>
                    <p>${userin}</p>
                </article>
            </main>`;
        document.getElementById('userin').value = '';
        response(userin);
    }
}
// ----------------------------------->
function response(input) {
    const section = document.getElementById('section');
    if (/(hello|hi|hey|hlo)/i.test(input)) {
        const start = ['sollu da 😘💘', 'sollu chlm 💘💘', 'sollu baby 🥹😘'];
        replay = start[Math.floor(Math.random() * start.length)];
    }
    else {
        const undef = ['purila da 🥹', 'ozuga sollu daa 😤', 'purira mari sollu daaa 😡'];
        replay = undef[Math.floor(Math.random() * undef.length)];
    }



    // ----------------------------------------->


    setTimeout(() => {
        section.innerHTML += `
            <main class="aveyra">
                <article>
                    <h6>Aveyra</h6>
                    <p>${replay}</p>
                </article>
            </main>`;
    }, 700);
    body.scrollTop = section.scrollHeight;

}
