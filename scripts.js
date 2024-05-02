document.addEventListener('DOMContentLoaded', function() {
    // Array para armazenar os alimentos utilizados na receita
    const alimentosNaReceita = [];

    // Adiciona evento de envio para o formulário de criar receita
    document.getElementById('criarReceitaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário
        
        // Obter os valores dos campos do formulário
        const alimentoReceita = document.getElementById('alimentoReceita').value;
        const quantidadeReceita = parseFloat(document.getElementById('quantidadeReceita').value);
        const unidadeReceita = document.getElementById('unidadeReceita').value;
        
        // Adiciona o alimento à lista de alimentos na receita
        alimentosNaReceita.push({
            alimento: alimentoReceita,
            quantidade: quantidadeReceita,
            unidade: unidadeReceita
        });

        // Limpar campos do formulário
        document.getElementById('alimentoReceita').value = '';
        document.getElementById('quantidadeReceita').value = '';

        // Atualiza a tabela de alimentos na receita
        atualizarTabelaAlimentosNaReceita();
        
        // Exibir mensagem de sucesso (pode ser substituída por uma ação diferente no futuro)
        alert('Alimento adicionado à receita com sucesso!');
    });

    // Função para atualizar a tabela de alimentos na receita
    function atualizarTabelaAlimentosNaReceita() {
        const tabela = document.getElementById('alimentosNaReceitaTable');
        tabela.innerHTML = ''; // Limpa a tabela antes de atualizá-la

        // Cria as linhas da tabela com os alimentos utilizados na receita
        alimentosNaReceita.forEach(function(alimento) {
            const row = tabela.insertRow();
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);

            cell1.textContent = alimento.alimento;
            cell2.textContent = alimento.quantidade;
            cell3.textContent = alimento.unidade;
        });
    }
});
