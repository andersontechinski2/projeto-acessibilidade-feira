
const campo = document.getElementById("texto");
const seletor = document.getElementById("voz");
const velocidade = document.getElementById("velocidade");
const status = document.getElementById("status");

let tamanhoFonte = 20;

// Carregar vozes disponíveis

function carregarVozes() {

    const vozes = speechSynthesis.getVoices();

    seletor.innerHTML = "";

    const portugues = vozes.filter(voz =>
        voz.lang.toLowerCase().startsWith("pt")
    );

    if (portugues.length === 0) {
        seletor.innerHTML =
        '<option value="">Voz padrão do navegador</option>';
        return;
    }

    portugues.forEach((voz) => {

        const opcao = document.createElement("option");

        opcao.value = vozes.indexOf(voz);

        opcao.textContent =
            voz.name + " (" + voz.lang + ")";

        seletor.appendChild(opcao);

    });
}

speechSynthesis.onvoiceschanged = carregarVozes;

carregarVozes();

// Ler texto

function falar() {

    const texto = campo.value.trim();

    if (!texto) {
        status.textContent =
        "Por favor, digite um texto primeiro.";
        return;
    }

    if (!("speechSynthesis" in window)) {
        status.textContent =
        "Seu navegador não suporta leitura de voz.";
        return;
    }

    speechSynthesis.cancel();

    const leitura = new SpeechSynthesisUtterance(texto);

const campo = document.getElementById("texto");
const seletor = document.getElementById("voz");
const velocidade = document.getElementById("velocidade");
const status = document.getElementById("status");

let tamanhoFonte = 20;

// Carregar vozes disponíveis

function carregarVozes() {

    const vozes = speechSynthesis.getVoices();

    seletor.innerHTML = "";

    const portugues = vozes.filter(voz =>
        voz.lang.toLowerCase().startsWith("pt")
    );

    if (portugues.length === 0) {
        seletor.innerHTML =
        '<option value="">Voz padrão do navegador</option>';
        return;
    }

    portugues.forEach((voz) => {

        const opcao = document.createElement("option");

        opcao.value = vozes.indexOf(voz);

        opcao.textContent =
            voz.name + " (" + voz.lang + ")";

        seletor.appendChild(opcao);

    });
}

speechSynthesis.onvoiceschanged = carregarVozes;

carregarVozes();

// Ler texto

function falar() {

    const texto = campo.value.trim();

    if (!texto) {
        status.textContent =
        "Por favor, digite um texto primeiro.";
        return;
    }

    if (!("speechSynthesis" in window)) {
        status.textContent =
        "Seu navegador não suporta leitura de voz.";
        return;
    }

    speechSynthesis.cancel();

    const leitura = new SpeechSynthesisUtterance(texto);

    const vozes = speechSynthesis.getVoices();

    const indice = seletor.value;

    if (indice !== "" && vozes[indice]) {
        leitura.voice = vozes[indice];
    }

    leitura.lang = "pt-BR";
    leitura.rate = Number(velocidade.value);
    leitura.pitch = 1;

    leitura.onstart = function() {
        status.textContent = "🔊 Lendo seu texto...";
    };

    leitura.onend = function() {
        status.textContent = "Leitura concluída!";
    };

    leitura.onerror = function() {
        status.textContent =
        "Não foi possível realizar a leitura.";
    };

    speechSynthesis.speak(leitura);
}

// Pausar leitura

function pausar() {

    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        status.textContent = "Leitura pausada.";
    }
}

// Continuar leitura

function continuar() {

    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        status.textContent = "Continuando a leitura...";
    }
}

// Parar leitura

function parar() {

    speechSynthesis.cancel();
    status.textContent = "Leitura interrompida.";
}

// Aumentar letras

function aumentar() {

    tamanhoFonte += 2;
    campo.style.fontSize = tamanhoFonte + "px";
}

// Diminuir letras

function diminuir() {

    tamanhoFonte = Math.max(12, tamanhoFonte - 2);
    campo.style.fontSize = tamanhoFonte + "px";
}

// Ativar alto contraste

function contraste() {

    document.body.classList.toggle("contraste");
}

// Limpar texto

function limpar() {

    parar();
    campo.value = "";
    status.textContent = "Texto apagado.";
}

    const vozes = speechSynthesis.getVoices();

    const indice = seletor.value;

    if (indice !== "" && vozes[indice]) {
        leitura.voice = vozes[indice];
    }

    leitura.lang = "pt-BR";
    leitura.rate = Number(velocidade.value);
    leitura.pitch = 1;

    leitura.onstart = function() {
        status.textContent = "🔊 Lendo seu texto...";
    };

    leitura.onend = function() {
        status.textContent = "Leitura concluída!";
    };

    leitura.onerror = function() {
        status.textContent =
        "Não foi possível realizar a leitura.";
    };

    speechSynthesis.speak(leitura);
}

// Pausar leitura

function pausar() {

    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        status.textContent = "Leitura pausada.";
    }
}

// Continuar leitura

function continuar() {

    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        status.textContent = "Continuando a leitura...";
    }
}

// Parar leitura

function parar() {

    speechSynthesis.cancel();
    status.textContent = "Leitura interrompida.";
}

// Aumentar letras

function aumentar() {

    tamanhoFonte += 2;
    campo.style.fontSize = tamanhoFonte + "px";
}

// Diminuir letras

function diminuir() {

    tamanhoFonte = Math.max(12, tamanhoFonte - 2);
    campo.style.fontSize = tamanhoFonte + "px";
}

// Ativar alto contraste

function contraste() {

    document.body.classList.toggle("contraste");
}

// Limpar texto

function limpar() {

    parar();
    campo.value = "";
    status.textContent = "Texto apagado.";
}

const campo = document.getElementById("texto");
const seletor = document.getElementById("voz");
const velocidade = document.getElementById("velocidade");
const status = document.getElementById("status");

let tamanhoFonte = 20;

// Carregar vozes disponíveis

function carregarVozes() {

    const vozes = speechSynthesis.getVoices();

    seletor.innerHTML = "";

    const portugues = vozes.filter(voz =>
        voz.lang.toLowerCase().startsWith("pt")
    );

    if (portugues.length === 0) {
        seletor.innerHTML =
        '<option value="">Voz padrão do navegador</option>';
        return;
    }

    portugues.forEach((voz) => {

        const opcao = document.createElement("option");

        opcao.value = vozes.indexOf(voz);

        opcao.textContent =
            voz.name + " (" + voz.lang + ")";

        seletor.appendChild(opcao);

    });
}

speechSynthesis.onvoiceschanged = carregarVozes;

carregarVozes();

// Ler texto

function falar() {

    const texto = campo.value.trim();

    if (!texto) {
        status.textContent =
        "Por favor, digite um texto primeiro.";
        return;
    }

    if (!("speechSynthesis" in window)) {
        status.textContent =
        "Seu navegador não suporta leitura de voz.";
        return;
    }

    speechSynthesis.cancel();

    const leitura = new SpeechSynthesisUtterance(texto);

    const vozes = speechSynthesis.getVoices();

    const indice = seletor.value;

    if (indice !== "" && vozes[indice]) {
        leitura.voice = vozes[indice];
    }

    leitura.lang = "pt-BR";
    leitura.rate = Number(velocidade.value);
    leitura.pitch = 1;

    leitura.onstart = function() {
        status.textContent = "🔊 Lendo seu texto...";
    };

    leitura.onend = function() {
        status.textContent = "Leitura concluída!";
    };

    leitura.onerror = function() {
        status.textContent =
        "Não foi possível realizar a leitura.";
    };

    speechSynthesis.speak(leitura);
}

// Pausar leitura

function pausar() {

    if (speechSynthesis.speaking) {
        speechSynthesis.pause();
        status.textContent = "Leitura pausada.";
    }
}

// Continuar leitura

function continuar() {

    if (speechSynthesis.paused) {
        speechSynthesis.resume();
        status.textContent = "Continuando a leitura...";
    }
}

// Parar leitura

function parar() {

    speechSynthesis.cancel();
    status.textContent = "Leitura interrompida.";
}

// Aumentar letras

function aumentar() {

    tamanhoFonte += 2;
    campo.style.fontSize = tamanhoFonte + "px";
}

// Diminuir letras

function diminuir() {

    tamanhoFonte = Math.max(12, tamanhoFonte - 2);
    campo.style.fontSize = tamanhoFonte + "px";
}

// Ativar alto contraste

function contraste() {

    document.body.classList.toggle("contraste");
}

// Limpar texto

function limpar() {

    parar();
    campo.value = "";
    status.textContent = "Texto apagado.";
}
