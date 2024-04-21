document.addEventListener("DOMContentLoaded", function() {
          const carouselSlide = document.querySelector('.carousel-slide');
          const prevBtn = document.getElementById('prevBtn');
          const nextBtn = document.getElementById('nextBtn');
          const images = document.querySelectorAll('.carousel-slide img');
      
          let counter = 0;
          const size = images[0].clientWidth; // largura da imagem
      
          // Avança para a próxima imagem
          nextBtn.addEventListener('click', () => {
              if (counter >= images.length - 1) return;
              counter++;
              carouselSlide.style.transition = "transform 0.5s ease";
              carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          });
      
          // Retorna para a imagem anterior
          prevBtn.addEventListener('click', () => {
              if (counter <= 0) return;
              counter--;
              carouselSlide.style.transition = "transform 0.5s ease";
              carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
          });
      
          // Reinicia o carrossel quando chegar na última imagem
          carouselSlide.addEventListener('transitionend', () => {
              if (images[counter].id === 'lastClone') {
                  carouselSlide.style.transition = "none";
                  counter = images.length - 2;
                  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
              }
              if (images[counter].id === 'firstClone') {
                  carouselSlide.style.transition = "none";
                  counter = images.length - counter;
                  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
              }
          });
      });
      