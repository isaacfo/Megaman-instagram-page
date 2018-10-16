// Instaclone

const Images = [
    "images/OGmegaman.png",
    "images/MegamanXB.png",
    "images/MegamanVolnutt.png",
    "images/XCM.png",
    "images/EXE.png",
    "images/MegamanStarForce.png"
    
];

// Array "navigation" functions

function getNextImage(currentURL) {
// find the current URL's index in the Images array
    let index = Images.indexOf(currentURL);
// Increment the index
    index++;
// check if it's within bounds, reset if necessary
    if(index === Images.length) {
        index = 0;
    }
// then return the image URL at the new index
return Images[index];
};



function getPrevImage(currentURL) {
    // find the current URL's index in the Images array
    let index = Images.indexOf(currentURL);
// Decrement the index
    index--;
// check if it's within bounds, reset if necessary
    if(index < 0) {
        index = Images.length - 1;
    }
// then return the image URL at the new index
return Images[index];

}

// Function that generaters the thumbnail div

function makeImages(arr) {
    const target = document.querySelector("[data-container]")
    arr.forEach(function(element) {
        target.appendChild(createThumbnail(element));
    });
};
makeImages(Images);
// function that generates an img element

function createImage(imageURL) {
    const theImage = document.createElement('img');

// theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    theImage.addEventListener('click', function(event) {
     const clickPic = document.querySelector("[data-output]");
     clickPic.setAttribute('src',event.target.src);
     modalElement.classList.toggle('modal-hidden');
     clickPic.addEventListener('click', function(){
         modalElement.classList.add('modal-hidden');

     })

      
    
    });
    
    return theImage;

}

// function that generates the thumbnail div
function createThumbnail(imageURL) {
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');
    theContainer.appendChild(createImage(imageURL));

    return theContainer;
};


const modalElement = document.querySelector('[data-modal]');


window.addEventListener('keydown', function (event) {
    // console.log('you pressed a key');
    // console.log(event);
    // Key: "Escape"
    // Keycode: 27
    if (event.keyCode === 27) {
        console.log('I want to hide the modal!');
        modalElement.classList.add('modal-hidden');
    }
});


// add global previous/next keyboard listeners
const outputElement = document.querySelector("[data-output]")
window.addEventListener('keydown', function(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 37) {
        console.log('go to previous image');
        let curr = outputElement.getAttribute('src');
        let prev = getPrevImage(curr);
        outputElement.setAttribute('src', prev);
    } else if (event.keyCode === 39) {
        console.log('go to the next image');
        let curr = outputElement.getAttribute('src');
        let next = getNextImage(curr);
        outputElement.setAttribute('src', next);
    }
});



main();