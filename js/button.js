var count = 0;
document.getElementById("myButton").onclick = function () {
        count++;
        if (count % 2 == 0) { //проверка на четность
            document.getElementById("demo").innerHTML = "";//здесь будет описанно ,что произойдет
        } else {
            var img = document.createElement("img");
            img.src = "https://media1.tenor.com/m/Yp0KOBZZ9RYAAAAd/%D0%BA%D0%BE%D1%82-%D0%BF%D0%BE%D1%86%D0%B5%D0%BB%D1%83%D0%B9.gif";
            
            document.getElementById("demo").appendChild(img);
        }
    
}
