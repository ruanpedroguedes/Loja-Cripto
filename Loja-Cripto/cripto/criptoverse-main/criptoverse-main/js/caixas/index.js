// Defina uma função para adicionar os event listeners
function adicionarEventListeners(imagem, tooltip) {
          imagem.addEventListener('mouseover', () => {
            tooltip.style.visibility = 'visible';
          });
          imagem.addEventListener('mouseout', () => {
            tooltip.style.visibility = 'hidden';
          });
        }
        
        // Array contendo os pares de imagem e tooltip
        const paresElementos = [
          { imagem: document.getElementById('imagem'), tooltip: document.getElementById('tooltip') },
          { imagem: document.getElementById('imagem1'), tooltip: document.getElementById('tooltip1') },
          { imagem: document.getElementById('imagem2'), tooltip: document.getElementById('tooltip2') },
          { imagem: document.getElementById('imagem3'), tooltip: document.getElementById('tooltip3') }
        ];
        
        // Adicione os event listeners para cada par de elemento
        paresElementos.forEach(par => {
          adicionarEventListeners(par.imagem, par.tooltip);
        });

adicionarEventListeners()
        