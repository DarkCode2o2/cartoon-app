
// Get Elements 
movieCards = document.querySelectorAll('.movies-content  a')

// Add ID To All Movie Card

movieCards.forEach(card => {
   card.addEventListener('click', () => {
      localStorage.setItem('cardId', card.id)
   })
});



// Typing Code

if(document.getElementById('element')) {
   var typed = new Typed('#element', {
      strings: [
         'انضم إلى شخصيات الكرتون المفضلة لديك في رحلة مثيرة مليئة بالمغامرات والإثارة.'
            ,
         'احجز تذكرتك الآن لمشاهدة أحدث أفلام الكرتون الممتعة والمشوقة واستمتع بتجربة ترفيهية لا تنسى.'
         ,
         'تابع مغامرات شخصياتك المفضلة مع أحدث أفلام الكرتون.'
         ,
         'استمتع بعوالم الخيال المثيرة مع أفلام الكرتون الجديدة.'
         ,
         'استمتع بأحدث أفلام الكرتون المذهلة التي تجمع بين القصص الملهمة والشخصيات الكرتونية الرائعة.'
        ],
        typeSpeed: 40,
        loop: true,
        showCursor: false,
   });
}

// Check If Get To Last Of The Page 

if(document.querySelector('.download-app .container > img')) {

   window.addEventListener('scroll', () => {

      let endOfPage = this.innerHeight + this.scrollY >= document.body.offsetHeight - 200
   
      if(endOfPage) {
         document.querySelector('.download-app .container > img').style.left = '200px'
      }else {
         document.querySelector('.download-app .container > img').style.left = '-1000px'
   
      }
   })
}

// Toggle Btn Navbar 

toggleBtn = document.querySelector('header > div i') 
navigation = document.querySelector('header .navbar') 

toggleBtn.addEventListener('click', () => {
   navigation.classList.toggle('hide')

   // Turn Bar Button To (X) When Click On It
   if(navigation.classList.contains('hide')) {

      toggleBtn.style.transform = 'rotate(0deg)'
      toggleBtn.className = 'fa-solid fa-bars-staggered'

   }else {

      toggleBtn.style.transform = 'rotate(360deg)'
      toggleBtn.className = 'fa-solid fa-xmark'
   }
})

