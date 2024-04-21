document.addEventListener('DOMContentLoaded', function() {
          const form = document.querySelector('.form2');
          const email = document.getElementById('email2');
          const password = document.getElementById('senha2');
          const mensagem = document.getElementById('resposta2');
      
          form.addEventListener('submit', (e) => {
              e.preventDefault();
      
              checkInputs();
          });
      
          function checkInputs() {
              const emailValue = email.value.trim();
              const passwordValue = password.value.trim();
      
              if (emailValue === 'ruanpedro9999@gmail.com' && passwordValue === 123456) {
                    window.location.href = 'home.html';
              } else {
                    mensagem.innerText = 'Dados incorretos';
              }   
          }
      });