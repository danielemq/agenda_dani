const form = document.getElementById('form-contato');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaQuantidade();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome');
    const inputDDD = document.getElementById('ddd');
    const inputTelefone = document.getElementById('telefone');
    const telComDDD = '(' + inputDDD.value + ') ' + inputTelefone.value
    const telefoneAjustado = inputTelefone.value.replace(/\-/g, '');

    inputTelefone.value = telefoneAjustado;

    if (nomes.includes(inputNome.value)){
        alert(`O contato ${inputNome.value} já foi inserido.`);
    } else {
        if (inputDDD.value.length != 2) {
            alert('O DDD é inválido');
        } else {
            if (inputTelefone.value.length < 8 || inputTelefone.value.length > 9) {
                alert('O Telefone é inválido');
            } else {
                nomes.push(inputNome.value);
                telefones.push(telComDDD);
            
                let linha = '<tr>';
                linha += `<td>${inputNome.value}</td>`;
                linha += `<td>${telComDDD}</td>`;
                linha += '</tr>';
            
                linhas += linha;
            }
        }
    }

    inputNome.value = '';
    inputDDD.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaQuantidade(){
    const qtd = calculaQuantidade();
    document.getElementById('quantidade-contatos').innerHTML = qtd;
}

function calculaQuantidade(){
    return telefones.length;

}
