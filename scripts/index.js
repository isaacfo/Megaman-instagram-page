// Instaclone

const Images = [
    "images/OGmegaman.png",
    "images/MegamanXreg.png",
    "images/MegamanVolnutt.png",
    "images/XCM.png",
    "images/EXE.png",
    "images/MegamanStarForce.png"
    
];

// Function that generaters the thumbnail div

function makeImages(arr) {
    const target = document.querySelector("[data-container]")
    arr.forEach(function(element) {
        target.appendChild(createThumbnail(element));
    });
}
makeImages(Images);
// function that generates an img element

function createImage(imageURL) {
    const theImage = document.createElement('img');

// theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    theImage.addEventListener('click', function(event) {
     const clickPic = document.querySelector("[data-output]");
     clickPic.setAttribute('src',event.target.src);
    //  theImage.setAttribute('class', )   
    })
    
    return theImage;

}

// function that generates the thumbnail div
function createThumbnail(imageURL) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');
    theContainer.appendChild(createImage(imageURL));

    return theContainer;
}