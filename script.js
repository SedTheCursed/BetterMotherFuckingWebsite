setTimeout(() => {
    if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please\nVeux-tu aller sur xxxvidsxxx ?")) {
        document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
},10000);

document.querySelector("#psyche").addEventListener("click", (e) => {
    document.body.classList.add("psy");
    e.target.style.display = "none";
    document.getElementById("normal").style.display= "initial";
});

document.getElementById("normal").addEventListener("click", (e) => {
    document.body.classList.remove("psy");
    e.target.style.display = "none";
    document.getElementById("psyche").style.display= "initial";
});