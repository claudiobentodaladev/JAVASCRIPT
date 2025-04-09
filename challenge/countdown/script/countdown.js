// contador.js

// Definir a data de destino (exemplo: 10 dias a partir de hoje)
const dataDestino = new Date();
dataDestino.setDate(dataDestino.getDate() + 10); // Adiciona 10 dias

// Função para atualizar a contagem regressiva
function atualizarContagem() {
    // Obter o tempo atual
    const agora = new Date();
    
    // Calcular a diferença entre a data de destino e o momento atual
    const distancia = dataDestino - agora;
    
    // Calcular dias, horas, minutos e segundos restantes
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    // Atualizar a interface com o tempo restante
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    
    // Se o tempo acabou, exibe mensagem
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById('tempo').textContent = "Tempo Esgotado!";
    }
}

// Atualizar a contagem regressiva a cada segundo
const intervalo = setInterval(atualizarContagem, 1000);

// Chamar a função uma vez para exibir o tempo imediato
atualizarContagem();
