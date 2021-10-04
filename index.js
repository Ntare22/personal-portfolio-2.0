function toggle(btn) {
  btn.classList.toggle('toggle');
  let navList = document.getElementById('mobile_nav');
  navList.classList.toggle("mobile_nav")
}

let colapseBtn = document.getElementsByClassName('collapse-btn');

// Creating a collapsible button to ensure toggle
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
