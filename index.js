var colorRed = document.querySelector('#red').value
var colorBlue = document.querySelector('#blue').value
var colorGreen = document.querySelector('#green').value
var colordiv = document.querySelector('#right')
var rgbtxt = document.querySelector('#rgbvalues')
var hexavalues = document.querySelector('#hexavalues')


function changeRed(red){
    colorRed = red
    definergb(colorRed, colorGreen, colorBlue)
}

function changeGreen(green){
    colorGreen = green
    definergb(colorRed, colorGreen, colorBlue)
}

function changeBlue(blue){
    colorBlue = blue
    definergb(colorRed, colorGreen, colorBlue)
}

function RGBToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substr(4).split(")")[0].split(sep);
  
    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
  
    return "#" + r + g + b;
}

function definergb(red, green, blue){
    let rgb = "rgb(" + red + "," + green + "," + blue + ")"; 
    colordiv.style.backgroundColor = rgb;
    rgbtxt.innerHTML= rgb
    let convertrgb = RGBToHex(rgb)
    hexavalues.innerHTML = convertrgb
}


