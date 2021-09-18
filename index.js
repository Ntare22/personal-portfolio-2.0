function toggle(btn) {
  btn.classList.toggle('toggle');
}

let colapseBtn = document.getElementsByClassName('collapse-btn');

for (let i = 0; i < colapseBtn.length; i++) {
  colapseBtn[i].addEventListener('click', function () {
    this.classList.toggle("active");
    let contentLang = this.nextElementSibling;

    if (contentLang.style.display === "block") {
      colapseBtn.value = 'collapse-btn'
      contentLang.style.display = "none";
    } else {
      contentLang.style.display = "block";
    }
  })
}