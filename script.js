/* =====================================================
   ELEMENTOS
===================================================== */

const heroScreen = document.getElementById("heroScreen");
const envelope = document.getElementById("envelope");

const letterSection = document.getElementById("letterSection");
const invitationSection = document.getElementById("invitationSection");
const finalSection = document.getElementById("finalSection");

const continueBtn = document.getElementById("continueBtn");

const typewriterText = document.getElementById("typewriterText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const funnyMessage = document.getElementById("funnyMessage");

const particlesContainer = document.getElementById("particles-container");

const heartsContainer = document.getElementById("heartsContainer");


/* =====================================================
   TEXTO DA CARTA
===================================================== */

const letter = `Parece que foi ontem que tudo começou...

E, ao mesmo tempo, parece que já vivemos tantas histórias juntos.

Obrigada por cada risada.

Por cada abraço.

Por cada conversa até tarde.

Por cada momento em que você fez meus dias mais felizes.

Nosso aniversário é dia 05 de julho.

Mas como não poderemos sair nesse dia...

Gostaria de comemorar um dia antes.

Porque um momento tão especial merece ser celebrado.

Então...

Tenho uma perguntinha para você: `;

/* =====================================================
   VARIÁVEIS
===================================================== */

let typingIndex = 0;

let typingFinished = false;

let noAttempts = 0;

let cursorX = 0;

let cursorY = 0;

/* =====================================================
   EFEITO MÁQUINA DE ESCREVER
===================================================== */

function typeWriter() {

    if (typingIndex < letter.length) {

        typewriterText.innerHTML += letter.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 35);

    } else {

        typingFinished = true;

        continueBtn.classList.remove("hidden");

    }

}


/* =====================================================
   ABRIR ENVELOPE
===================================================== */

function openEnvelope() {

    envelope.style.pointerEvents = "none";

    const flap = envelope.querySelector(".envelope-flap");

    flap.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        heroScreen.classList.add("hidden");

        letterSection.classList.remove("hidden");

        typeWriter();

    }, 900);

}


/* =====================================================
   CONTINUAR PARA O CONVITE
===================================================== */

function showInvitation() {

    letterSection.classList.add("hidden");

    invitationSection.classList.remove("hidden");

}


/* =====================================================
   EVENTOS
===================================================== */

envelope.addEventListener("click", openEnvelope);

continueBtn.addEventListener("click", showInvitation);

/* =====================================================
   PARTÍCULAS
===================================================== */

function createParticle() {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    const size = (Math.random() * 5) + 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.animationDuration =
        (8 + Math.random() * 8) + "s";

    particle.style.opacity =
        0.25 + Math.random() * 0.5;

    particlesContainer.appendChild(particle);

    setTimeout(() => {

        particle.remove();

    }, 16000);

}


/* =====================================================
   INICIAR PARTÍCULAS
===================================================== */

setInterval(createParticle, 350);


/* =====================================================
   CORAÇÕES
===================================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.bottom = "-40px";

    heart.style.fontSize =
        (18 + Math.random() * 18) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 2) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 5000);

}


/* =====================================================
   EXPLOSÃO DE CORAÇÕES
===================================================== */

function heartExplosion(quantity = 35) {

    for (let i = 0; i < quantity; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 80);

    }

}

/* =====================================================
   BOTÃO NÃO
===================================================== */

let escapeCount = 0;

let noUnlocked = false;

const funnyTexts = [

"Calma... pensa melhor",

"Esse botão aí nem funciona direito",

"Você clicou errado",

"Tem certeza? Acho que você continua clicando errado",

"Você realmente quer apertar esse botão?",

"Você não vai conseguir",

"Tá insistindo mesmo muito",

"Tá, já entendi"

];

function escapeNoButton() {

    if (noUnlocked) return;

    escapeCount++;

    funnyMessage.textContent =
        funnyTexts[(escapeCount - 1) % funnyTexts.length];

    const container = document.querySelector(".buttons-area");

    const maxX = container.clientWidth - noBtn.offsetWidth;

    const maxY = 120;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";

    if (escapeCount >= 8) {

        noUnlocked = true;

        funnyMessage.textContent = "Tá bom... você venceu 😂";

        noBtn.style.position = "relative";
        noBtn.style.left = "0";
        noBtn.style.top = "0";

    }

}

// Computador
noBtn.addEventListener("mouseenter", escapeNoButton);

// Celular
noBtn.addEventListener("touchstart", (e) => {

    if (noUnlocked) return;

    e.preventDefault();

    escapeNoButton();

}, { passive: false });

noBtn.addEventListener("click", () => {

    document.body.style.transition = "1.2s";

    document.body.style.opacity = "0";

    setTimeout(() => {

        alert("Brincadeirinha, negar esse convite é proibido pela constituição do namoro");

        document.body.style.opacity = "1";

        noBtn.style.display = "none";

        funnyMessage.textContent = "Agora só resta uma opção... 💙";

    },1200);

});
   
});

/* =====================================================
   BOTÃO SIM
===================================================== */

yesBtn.addEventListener("click", () => {

    heartExplosion(45);

    invitationSection.classList.add("hidden");

    setTimeout(() => {

        finalSection.classList.remove("hidden");

    },1200);

});
