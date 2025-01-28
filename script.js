//the JS code for image gallery functionality 
const images = [...document.querySelectorAll('.pto')];
        const popup = document.querySelector('.popup');
        const closeBtn = document.querySelector('.close-btn');
        const largeImage = document.querySelector('.large-image');
        const imageIndex = document.querySelector('.index');
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');

        let index = 0;
        const updateImage = (i) => {
            const path = images[i].src;
            largeImage.src = path;
            imageIndex.innerHTML = `0${i+ 1}`;
            index = i;
        }
        images.forEach((item, i) => {
            item.addEventListener('click', () => {
                updateImage(i);
                popup.classList.add('active');
            });
        });
        closeBtn.addEventListener('click',() => {
            popup.classList.remove('active');
        });
        leftArrow.addEventListener('click', ()=> {
            if (index > 0) {
                updateImage(index - 1);
            }
        });
        rightArrow.addEventListener('click', () => {
            if (index < images.length - 1) {
                updateImage(index + 1);
            }
        });
