const envelope = document.getElementById("envelope");

const letterSection = document.getElementById("letterSection");
const invitationSection = document.getElementById("invitationSection");
const finalSection = document.getElementById("finalSection");

const continueBtn = document.getElementById("continueBtn");
const typewriterText = document.getElementById("typewriterText");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const fakeRejectScreen = document.getElementById("fakeRejectScreen");
const backBtn = document.getElementById("backBtn");

let text = `Parece que foi ontem que tudo começou...
Obrigada por cada momento 💙`;

let i = 0;

function typeWriter(){
    if(i < text.length){
        typewriterText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
    } else {
        continueBtn.classList.remove("hidden");
    }
}

envelope.addEventListener("click", () => {
    letterSection.classList.remove("hidden");
    typeWriter();
});

continueBtn.addEventListener("click", () => {
    letterSection.classList.add("hidden");
    invitationSection.classList.remove("hidden");
});

/* BOTÃO NÃO */
noBtn.addEventListener("click", () => {
    fakeRejectScreen.classList.add("show");
});

/* VOLTAR */
backBtn.addEventListener("click", () => {
    fakeRejectScreen.classList.remove("show");

    setTimeout(() => {
        noBtn.style.display = "none";
    }, 500);
});

/* SIM */
yesBtn.addEventListener("click", () => {
    invitationSection.classList.add("hidden");
    finalSection.classList.remove("hidden");
});
