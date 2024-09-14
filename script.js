let index = 0;

function changeColours() {
    let colours = ["red", "blue","orange","yellow","green","purple"];
    
    document.getElementsByTagName("body")[0].
    style.background = colours[index++];

    if(index > colours.length-1)
        index = 0;
}