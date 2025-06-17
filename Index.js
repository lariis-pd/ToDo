const botaoAdicionar = document.querySelector('button');
const entrada = document.getElementById('entrada');
const lista = document.getElementById('listaTarefas');

botaoAdicionar.addEventListener('click', adicionarTarefa);

function adicionarTarefa() {
  const texto = entrada.value;

  const item = document.createElement('li');
  item.className = 'list-group-item d-flex justify-content-between align-items-center';

  const ladoEsquerdo = document.createElement('div');
  ladoEsquerdo.className = 'form-check';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'form-check-input me-2';
  checkbox.addEventListener('change', function () {
    textoSpan.classList.toggle('concluida', checkbox.checked);
  });

  const textoSpan = document.createElement('span');
  textoSpan.textContent = texto;

  ladoEsquerdo.appendChild(checkbox);
  ladoEsquerdo.appendChild(textoSpan);

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'btn btn-sm btn-danger';
    botaoRemover.addEventListener('click', function () {item.remove();});

  item.appendChild(ladoEsquerdo);
  item.appendChild(botaoRemover);

  lista.appendChild(item);
  entrada.value = '';
  entrada.focus();
}
