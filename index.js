function toggle(btn) {
  btn.classList.toggle('toggle');
  const navList = document.getElementById('mobile_nav');
  navList.classList.toggle('mobile_nav');
}

function goTo() {
  const hamburger = document.querySelector('.hamburger');
  toggle(hamburger);
}

const mobileNav = document.querySelectorAll('.mobile_nav_item');
mobileNav.forEach((item) => item.addEventListener('click', goTo));

const colapseBtn = document.getElementsByClassName('collapse-btn');

Object.values(colapseBtn).forEach((btn) => {
  btn.addEventListener('click', function () {
    this.classList.toggle('active');
    const contentLang = this.nextElementSibling;

    if (contentLang.style.display === 'block') {
      colapseBtn.value = 'collapse-btn';
      contentLang.style.display = 'none';
    } else {
      contentLang.style.display = 'block';
    }
  });
});

const projects = [
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Tonic',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'],
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0',
  },
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Tonic',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'],
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0',
  },
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Jim',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'],
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0',
  },
];

function modalExit() {
  document.getElementById('modal-container').style.display = 'none';
}
modalExit();

function viewProject(project) {
  document.getElementById('modal-container').style.display = 'block';

  const [company, role, year] = project.projectDetails;

  document.getElementById('modal-title').innerHTML = project.projectTitle;
  document.getElementById('project-det-tit').innerHTML = company;
  document.getElementById('project-det-desc').innerHTML = role;
  document.getElementById('project-det-yr').innerHTML = year;
  document.getElementById('modal-img').setAttribute('src', project.img);
  document.getElementById('project-desc').innerHTML = project.projectDesc;
  const parentTag = document.getElementById('project-tags');
  parentTag.innerHTML = '';
  project.projectTags.forEach((tag) => {
    const newListTag = document.createElement('li');
    newListTag.classList = 'project-tag';
    newListTag.innerHTML = tag;
    parentTag.appendChild(newListTag);
  });
}

function displayProjects(projects) {
  projects.forEach((project) => {
    const projectSection = document.querySelector('#works-sec');
    const projectContainer = document.createElement('div');
    projectContainer.classList = 'project flex';

    const projectImg = document.createElement('img');
    projectImg.classList = 'img-prg';
    projectImg.setAttribute('src', project.img);
    projectImg.setAttribute('alt', project.imgAlt);

    projectContainer.appendChild(projectImg);

    const projectInfo = document.createElement('div');
    projectInfo.classList = 'project-info';

    const projectTitle = document.createElement('h2');
    projectTitle.innerHTML = project.projectTitle;
    projectTitle.classList = 'project-title';
    projectInfo.appendChild(projectTitle);
    projectContainer.appendChild(projectInfo);

    const projectDetails = document.createElement('div');
    projectDetails.classList = 'project-det flex';

    const containerDiv = document.createElement('div');
    const containerDiv2 = document.createElement('div');
    const projectDetSeparator = document.createElement('div');
    projectDetSeparator.classList = 'prgt-det-circl';
    const projectDetSeparator2 = document.createElement('div');
    projectDetSeparator2.classList = 'prgt-det-circl';
    containerDiv.appendChild(projectDetSeparator);
    containerDiv2.appendChild(projectDetSeparator2);

    const [company, role, year] = project.projectDetails;

    const projectDetailTitle = document.createElement('div');
    projectDetailTitle.classList = 'project-det-tit';
    projectDetailTitle.innerHTML = company;

    const projectDescDetails = document.createElement('div');
    projectDescDetails.classList = 'project-det-desc';
    projectDescDetails.innerHTML = role;

    const projectDescYear = document.createElement('div');
    projectDescYear.classList = 'project-det-yr';
    projectDescYear.innerHTML = year;

    projectDetails.appendChild(projectDetailTitle);
    projectDetails.appendChild(containerDiv);
    projectDetails.appendChild(projectDescDetails);
    projectDetails.appendChild(containerDiv2);
    projectDetails.appendChild(projectDescYear);
    projectInfo.appendChild(projectDetails);

    const projectDescription = document.createElement('div');
    projectDescription.classList = 'project-desc';
    const descParagraph = document.createElement('p');
    descParagraph.innerHTML = project.projectDesc;
    projectDescription.appendChild(descParagraph);
    projectInfo.appendChild(projectDescription);

    const projectTags = document.createElement('ul');
    projectTags.classList = 'project-tags flex';

    project.projectTags.forEach((tag) => {
      const projectTag = document.createElement('li');
      projectTag.classList = 'project-tag';
      projectTag.innerHTML = tag;
      projectTags.appendChild(projectTag);
    });

    projectInfo.appendChild(projectTags);

    const projectBtn = document.createElement('button');
    projectBtn.classList = 'project-link';
    projectBtn.innerHTML = 'See Project';
    projectBtn.addEventListener('click', () => {
      viewProject(project);
    }, false);

    projectInfo.appendChild(projectBtn);

    projectSection.appendChild(projectContainer);
  });
}

displayProjects(projects);

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  const emailRegex = new RegExp('^[a-z0-9-]+@[a-z0-9-]+[a-z0-9-.]+$');

  const message = document.getElementById('error-message');

  if (!email.includes('@')) {
    message.innerHTML = 'you should submit a valid email';
    message.classList = 'error-visible';
    event.preventDefault();
  } else if (!emailRegex.test(email)) {
    message.innerHTML = 'email should be all in lower case';
    message.classList = 'error-visible';
    event.preventDefault();
  }
});

const inputs = form.querySelectorAll('#names, #email');

const getInput = () => {
  localStorage.setItem('names', inputs[0].value);
  localStorage.setItem('email', inputs[1].value);
};

inputs.forEach((input) => {
  input.addEventListener('input', getInput());
});

inputs.forEach((item) => item.setAttribute('value', localStorage.getItem(item.id)));