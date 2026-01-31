function calcular() {
    // 1. Captura dos elementos e valores
    const checkbox = document.getElementById('meucheckbox');
    const bruto = Number(document.getElementById('pesobruto').value);
    const cobrado = Number(document.getElementById('valorcobrado').value);
    const campoIcms = document.getElementById('percentualIcms');
    
    // Operador ternário: se o campo existe, pega o valor; se não, usa 0
    const porcentagem = Number(campoIcms.value);

    // 2. Cálculo dos impostos (Baseado no valor total cobrado)
    const pis = cobrado * 0.0165; 
    const cofins = cobrado * 0.076; 
    const icms = cobrado * porcentagem;

    // "let resultado = 0" cria a variável que guardará o valor final por KG
    let resultado = 0; 

    // 3. Validação de segurança
    if (bruto <= 0) {
        // Se o peso for 0 ou negativo, não faz o cálculo para evitar erro matemático
        return; 
    }

    // 4. Lógica de decisão (Com ou sem ICMS)
    if (checkbox.checked) {
        // Deduz PIS, COFINS e ICMS antes de dividir pelo peso
        resultado = (cobrado - pis - cofins - icms) / bruto;
    } else {
        // Deduz apenas PIS e COFINS antes de dividir pelo peso
        resultado = (cobrado - pis - cofins) / bruto;
    }
    
    // 5. Saída de dados no input
    const campoResultado = document.getElementById('custo');
    if (campoResultado) {
        // toFixed(2) limita a duas casas decimais (ex: 10.55)
        campoResultado.value = 'R$ ' + resultado.toFixed(2) + ' /kg';
    }
}
