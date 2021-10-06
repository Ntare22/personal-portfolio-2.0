function toggle(btn) {
  btn.classList.toggle('toggle');
  let navList = document.getElementById('mobile_nav');
  navList.classList.toggle("mobile_nav")
}

function goTo(link) {
  const hamburger = document.querySelector('.hamburger');
  toggle(hamburger)
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

const projects = [
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Tonic',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'], 
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0'
  },
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Tonic',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'],
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0'
  },
  {
    img: './assets/landscape.png',
    imgAlt: 'canopy',
    projectTitle: 'Jim',
    projectDetails: ['CANOPY', 'Backend End Dev', '2015'],
    projectDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required',
    projectTags: ['html', 'javascript', 'css'],
    viewDemo: 'https://github.com/Ntare22/personal-portfolio-2.0',
    viewSource: 'https://github.com/Ntare22/personal-portfolio-2.0'
  },
]

function modalExit() {
  document.getElementById('modal-container').style.display = 'none';
}

function viewProject(project) {
  document.getElementById('modal-container').style.display = 'block';

  document.getElementById('modal-title').innerHTML = project.projectTitle;
  document.getElementById('project-det-tit').innerHTML = project.projectDetails[0];
  document.getElementById('project-det-desc').innerHTML = project.projectDetails[1];
  document.getElementById('project-det-yr').innerHTML = project.projectDetails[2];
  document.getElementById('modal-img').setAttribute('src', project.img);
  document.getElementById('project-desc').innerHTML = project.projectDesc;
  const parentTag = document.getElementById('project-tags')
  parentTag.innerHTML = '';
  project.projectTags.map(tag => {
    let newListTag = document.createElement('li');
    newListTag.classList = 'project-tag';
    newListTag.innerHTML = tag;
    parentTag.appendChild(newListTag)
  });
}

function displayProjects(projects) {
  projects.map(project => {

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

    const projectDetailTitle = document.createElement('div');
    projectDetailTitle.classList = 'project-det-tit';
    projectDetailTitle.innerHTML = project.projectDetails[0];

    const projectDescDetails = document.createElement('div');
    projectDescDetails.classList = 'project-det-desc';
    projectDescDetails.innerHTML = project.projectDetails[1]
    
    const projectDescYear = document.createElement('div');
    projectDescYear.classList = 'project-det-yr';
    projectDescYear.innerHTML = project.projectDetails[2];
    
    projectDetails.appendChild(projectDetailTitle);
    projectDetails.appendChild(containerDiv);
    projectDetails.appendChild(projectDescDetails);
    projectDetails.appendChild(containerDiv2);
    projectDetails.appendChild(projectDescYear);
    projectInfo.appendChild(projectDetails);

    const projectDescription = document.createElement('div');
    projectDescription.classList = 'project-desc';
    const descParagraph = document.createElement('p')
    descParagraph.innerHTML = project.projectDesc;
    projectDescription.appendChild(descParagraph);
    projectInfo.appendChild(projectDescription);

    const projectTags = document.createElement('ul');
    projectTags.classList = 'project-tags flex';
    const projectTag = document.createElement('li');
    projectTag.classList = 'project-tag';
    projectTag.innerHTML = project.projectTags[0];

    const projectTag2 = document.createElement('li');
    projectTag2.classList = 'project-tag';
    projectTag2.innerHTML = project.projectTags[1];

    const projectTag3 = document.createElement('li');
    projectTag3.classList = 'project-tag';
    projectTag3.innerHTML = project.projectTags[2];
    

    projectTags.appendChild(projectTag);
    projectTags.appendChild(projectTag2);
    projectTags.appendChild(projectTag3);
    projectInfo.appendChild(projectTags);

    const projectBtn = document.createElement('button');
    projectBtn.classList = 'project-link';
    projectBtn.innerHTML = 'See Project';
    projectBtn.addEventListener('click', function() {
      viewProject(project);
    }, false);

    projectInfo.appendChild(projectBtn);

    projectSection.appendChild(projectContainer);
  });

  
}

displayProjects(projects)
