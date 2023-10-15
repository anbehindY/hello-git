function hello()
{
    var p = document.querySelector("p");
    p.textContent = "Hello Git!";
    p.style.color = "White";
    p.style.backgroundColor = "Black";
}
document.querySelector("button").onclick = hello;