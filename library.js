document.addEventListener('DOMContentLoaded', () => {

     
    const cartButtons = document.querySelectorAll('.btn');
    let cartCount = 0;       

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            
            event.preventDefault(); 

             const bookCard = button.closest('.card');
            const bookTitle = bookCard.querySelector('h3').innerText;

            cartCount++;
            
             alert(`يا مسهل! "${bookTitle}" انضافت للسلة. \nدلوقتي معاك ${cartCount} كتب.`);
            
             button.innerText = 'تمت الإضافة ✔';
            button.style.background = '#4CAF50'; 
            
             setTimeout(() => {
                button.innerText = 'أضف للسلة';
                button.style.background = ''; 
            }, 2000);
        });
    });

 
    const bookImages = document.querySelectorAll('.card img');
    bookImages.forEach(img => {
        img.style.transition = '0.3s';  
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

     console.log("كله تمام.. المكتبة جاهزة للشغل!");
});

