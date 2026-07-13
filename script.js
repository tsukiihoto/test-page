const butterfly = document.getElementById("butterfly");
const foo = document.getElementById("foo");

butterfly.addEventListener("mouseover", function(){

    butterfly.style.left =
        Math.random()*800 + "px";

    butterfly.style.top =
        Math.random()*420 + "px";

});

foo.addEventListener("mouseover", function(){

    foo.style.left = (360 + Math.random()*460) + "px";
    foo.style.top  = (190 + Math.random()*100) + "px";

});