// تمام، نأكد الأول إن الصفحة حملت وكل العناصر بقت جاهزة عشان مفيش حاجة تضرب
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. شغل أزرار "أضف للسلة" ---
    // هنا بنمسك كل الزراير اللي واخدة class اسمه btn
    const cartButtons = document.querySelectorAll('.btn');
    let cartCount = 0; // ده العداد اللي هيشيل عدد الكتب اللي اخترناها

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // مش عايزين الصفحة تعمل Refresh وتضيع علينا اللحظة دي
            event.preventDefault(); 

            // هنطلع نجيب اسم الكتاب من الـ card اللي الزرار جواه
            const bookCard = button.closest('.card');
            const bookTitle = bookCard.querySelector('h3').innerText;

            cartCount++;
            
            // رسالة سريعة لليوزر عشان يعرف إن الدنيا تمام
            alert(`يا مسهل! "${bookTitle}" انضافت للسلة. \nدلوقتي معاك ${cartCount} كتب.`);
            
            // حركة شياكة: نغير الزرار لعلامة صح ولون أخضر عشان اليوزر يتطمن
            button.innerText = 'تمت الإضافة ✔';
            button.style.background = '#4CAF50'; 
            
            // بعد ثانيتين نرجع الزرار لأصله عشان لو عايز يضيف تاني
            setTimeout(() => {
                button.innerText = 'أضف للسلة';
                button.style.background = ''; 
            }, 2000);
        });
    });

    // --- 2. شوية دلع لصور الكتب (Zoom effect) ---
    // الماوس لما ييجي على الصورة نكبرها شوية عشان تبان
    const bookImages = document.querySelectorAll('.card img');
    bookImages.forEach(img => {
        img.style.transition = '0.3s'; // عشان الحركة تكون ناعمة مش خبط لزق
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // سطر للتشيك بس في الـ Console عشان أتأكد إن السكربت اشتغل
    console.log("كله تمام.. المكتبة جاهزة للشغل!");
});
