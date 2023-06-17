
// Get Elements 
movieCards = document.querySelectorAll('.popular .movies-content a')

// Get ID To All Movies Card

movieCards.forEach(card => {
   card.addEventListener('click', (e) => {
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


window.addEventListener('scroll', () => {

   let endOfPage = this.innerHeight + this.scrollY >= document.body.offsetHeight - 200

   if(endOfPage) {
      document.querySelector('.download-app .container > img').style.left = '200px'
   }else {
      document.querySelector('.download-app .container > img').style.left = '-1000px'

   }
})