const images = () => {

    const imgPopUp = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImages = document.createElement('img');

    imgPopUp.classList.add('popup')
    workSection.appendChild(imgPopUp)

    imgPopUp.style.justifyContent = 'center';
    imgPopUp.style.alignItems = 'center';
    imgPopUp.style.display = 'none';

    bigImages.style.maxWidth = '720px';
    bigImages.style.width = '100%';


    imgPopUp.appendChild(bigImages)

    workSection.addEventListener('click', (e) => {
        e.preventDefault();


        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopUp.style.display = 'flex'

            const path = target.parentNode.getAttribute('href')
            bigImages.setAttribute('src', path)
        }

        if (target && target.matches('div.popup')) {
            imgPopUp.style.display = 'none'
        }
    })



}

export default images