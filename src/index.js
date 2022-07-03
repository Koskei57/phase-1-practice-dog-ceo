//console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //const = document.querySelector('#breed-dropdown')
const ulContainer = document.querySelector('#dog-breeds')
const container = document.querySelector('#dog-image-container')
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function getImages() {
    fetch(imgUrl)
        .then(res => res.json())
        .then(imageData => {
            const imgs = imageData.message
            let imgArray = createImgElement(imgs)
            renderImg(imgArray)
        })
}

function createImgElement(imageData) {
    return imageData.map((img) => {
        let i = `<img src=${img}>`
        return i
    })

}

function renderImgs(imgArray) {
    imgArray.forEach(element => {
        renderImg(element)
    })
}

function renderImg(element) {
    container.innerHTML += element
}
//Challenge-2
function getBreed() {
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            const breedArr = Object.keys(breeds.message)
            const breedLis = createLiElement(breedArr)
            renderLis(breedLis)
        })
}

function createLiElement(breedArr) {
    return breedArr.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLis(breedLis) {
    breedLis.forEach(element => {
        renderImg(element)
    })

}


getBreed();

// const renderImage = (imageData) => {
//     imageData.forEach(element => {
//         let image = document.createElement('img');
//         image.src = element;
//         //imageContainer.appendChild(image);
//     });
// }

// fetchImage()