document.addEventListener('DOMContentLoaded', function() {
  const cpfInput = document.getElementById('cpf');
  cpfInput.addEventListener('input', function() {
    validarCPF(this);
  });

  iniciarTimer();
});

function validarCPF(input) {
  let cpf = input.value;
  cpf = cpf.replace(/\D/g, ""); // Remove tudo que não é dígito

  if (cpf.length <= 11) {
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  input.value = cpf; // Atualiza o valor no campo de texto

  const btnCadastrar = document.getElementById("btnCadastrar");
  if (cpf.length === 14) { // CPF completo com máscara tem 14 caracteres
    btnCadastrar.disabled = false;
  } else {
    btnCadastrar.disabled = true;
  }
}

function iniciarTimer() {
  const fim = new Date("2024-09-21T15:00:00").getTime();

  setInterval(function () {
    const agora = new Date().getTime();
    const distancia = fim - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `Faltam ${dias}d ${horas}h ${minutos}m ${segundos}s para o término do cadastramento.`;

    if (distancia < 0) {
      document.getElementById("timer").innerHTML = "Período de cadastramento encerrado.";
      document.getElementById("btnCadastrar").disabled = true;
    }
  }, 1000);
}


