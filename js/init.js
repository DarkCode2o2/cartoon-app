function navbar() {
    document.write(`
        <header class="container">
            <div>
                <i class="fa-solid fa-bars-staggered"></i>
                <ul class="navbar hide">
                    <li><a href="index.html">الصفحة الرئيسية</a></li>
                    <li><a href="index.html#latest">أحدث الأفلام</a></li>
                    <li><a href="index.html#popular">الأفلام الشائعة</a></li>
                    <li><a href="index.html#about-us">من نحن</a></li>            
                    <li><a href="index.html#download-app" class="last-child" >تطبيقنا</a></li>            
                </ul>
             </div>
            <div class="logo">
                <h3>Cartoonito</h3>
                <img src="images/logo2.png" alt="">
            </div>
        </header>
    `)
}