document.addEventListener('DOMContentLoaded', function() {
          const form = document.querySelector('.form');
          const username = document.getElementById('nome');
          const email = document.getElementById('email');
          const password = document.getElementById('senha');
          const mensagem = document.getElementById('resposta');
      
          form.addEventListener('submit', (e) => {
              e.preventDefault();
      
              checkInputs();
          });
      
          function checkInputs() {
              const usernameValue = username.value.trim();
              const emailValue = email.value.trim();
              const passwordValue = password.value.trim();
      
              if (usernameValue === '' || usernameValue.length <= 4) {
                  mensagem.innerText = '. O nome tem que ter mais de 4 letras';
                  return;
              }

      
              if (passwordValue === '') {
                  mensagem.innerText = '. O campo de senha não pode estar vazio';
                  return;
              }
      
              if (!isPasswordValid(passwordValue)) {
                  mensagem.innerText = '. A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula e um número';
                  return;
              }
      
              window.location.href = 'home.html';
          }
      
          function isPasswordValid(password) {
              return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
          }
      });
      

  