let vezes = Number(prompt("Digite o número de vezes:"));

for (let i = 1; i <= vezes; i++) {
    alert(`Número muito grande, saindo...`);
    break;
}

alert(`Número muito grande, saindo...`);

if (vezes != 5) {
    for (let j = 1; j <= vezes; j++) {
        continue;
    }
}

alert(`Número par: ${vezes}`);