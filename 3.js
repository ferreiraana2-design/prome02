document.getElementById("botao").addEventListener("click", function () {
  document.getElementById("mensagem").textContent = "Bem-vindo ao Prome!";
});
let nasc = prompt("Digite o ano do seu nascimento:");
nasc = parseInt(nasc);

let viva = confirm("Você está vivo? Clique ok.");

if(viva) {
    alert(`Você tem ${2026 - nasc} anos e está vivo.`);
} else {
    alert("Você não está vivo.");
}