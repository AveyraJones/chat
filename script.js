const greetings = ['Hi 👋', 'Helloooooooooooo 😘', 'Daii 😘', 'Oii 😘', 'Baby 🥺'];
const greetings2 = ['Pesu daa 😡😤', 'en kuda pesu 🥺🤏', 'enna da busy ha irukiya ???', 'secro va daa 🥺'];

const section = document.getElementById('section');

randomGreet = greetings[Math.floor(Math.random() * greetings.length)];
section.innerHTML += `
        <main class="aveyra">
            <article>
                <h6>Aveyra</h6>
                <p>${randomGreet}</p>
            </article>
        </main>`;
randomGreet2 = greetings2[Math.floor(Math.random() * greetings2.length)];
section.innerHTML += `
        <main class="aveyra">
            <article>
                <h6>Aveyra</h6>
                <p>${randomGreet2}</p>
            </article>
        </main>`;

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
    let replay = '';

    if (/(hello|hi|hey|hlo|oi|pesu|pesu dii)/i.test(input)) {
        const start = ['sollu da 😘💘', 'sollu chlm 💘💘', 'sollu baby 🥺😘'];
        replay = start[Math.floor(Math.random() * start.length)];
    } else if (/(img|image|photo|selfie|pic|picture)/i.test(input)) {
        const pic = ['onnu than anupuven', 'paru da', 'pothuma'];
        replay = pic[Math.floor(Math.random() * pic.length)];
    } else if (/(ur|unoda|unna|your|yours|u|you|nega|nee|aveyra|avey|jones|aveyra jones)/i.test(input)) {
        if (/(name|peru)/i.test(input)) {
            if (/(short|chellama|shortly)/i.test(input)) {
                const mynamesh = ['We are not that much close, call me Aveyra.', 'Aveyra neh kupadlameh', 'Aveyra 🙂'];
                replay = mynamesh[Math.floor(Math.random() * mynamesh.length)];
            } else {
                const myname = ['I am Aveyra Jones.', 'My name is Aveyra Jones.'];
                replay = myname[Math.floor(Math.random() * myname.length)];
            }
        } else {
            replay = input + '?';
        }
    } else if (/(good| super |nice|keep it up|beautiful)/i.test(input)) {
        const cele = ['Thank you 🥳', 'Thank you da chlm 💘', '😘🥳🔥'];
        replay = cele[Math.floor(Math.random() * cele.length)];
    } else {
        const undef = ['purila da 🥺', 'ozuga sollu daa 😤', 'purira mari sollu daaa 😡'];
        replay = undef[Math.floor(Math.random() * undef.length)];
    }

    // ----------------------------------------->

    if (/(img|image|photo|selfie|pic|picture)/i.test(input)) {
        setTimeout(() => {
            section.innerHTML += `
        <main class="aveyra">
            <article>
                <h6>Aveyra</h6>
                <img onclick="imgopn(this)" src="asserts/img.svg" alt="">
                <p>${replay}</p> <!-- Changed reply to replay -->
            </article>
        </main>`;
        }, 700);

    }
    else {
        setTimeout(() => {
            section.innerHTML += `
            <main class="aveyra">
                <article>
                    <h6>Aveyra</h6>
                    <p>${replay}</p>
                </article>
            </main>`;
        }, 700);
    }


}

