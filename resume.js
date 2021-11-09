const teamwhaleDuties = {
  name: "Teamwhale",
  firstRole: "Quality Control Manager",
  secondRole: "Specialist & Customer Excutive Manager",
  duties: [
    [
      "Specialists quality assessment",
      "Crafting efficient quality reports and analyses",
      "1 on 1 feedback and team feedbacks",
      "Performance management with KPI",
      "Coaching and training new members",
      "Writing new material articles, guides and templates",
      "Improving customer service for the client’s end",
    ],
    [
      "Provided customer support service through chat,tickets and via calls",
      "Geo locations handled are English, French and Arabic",
      "Claim requests resolution",
      "Internal second line and billing tasks creation",
    ],
  ],

  date: "Sept 2020 - Current (Remote)",
  link: "https://teamwhale.com/us",
};
const wikiumDuties = {
  name: "Wikium",
  firstRole: "Telesales Agent",
  duties: [
    [
      "Conducted phone calls and provided consultations to clients in the United States interested in Wikium in order to secure a sale (no cold calling)",
    ],
  ],
  date: "Apr. 2020 - Jul. 2020 (Remote)",
  link: "https://wikium.ru/",
};

const mountainMuddDuties = {
  name: "Mountain Mudd Espresso",
  firstRole: "Supervisor / Shop Keeper",
  duties: [
    [
      "Daily inventory management","Ensuring smooth continuous shop operations","Monthly Sale/Inventory report","Training newly recruited baristas","Resolving client's complaints and dispute","Maintaining team cooperation and schedule placement","Ensuring customer service and beverage quality"
    ],
  ],
  date: "Nov. 2017 - Aug. 2019 (Jounieh, Lebanon)",
  link: "https://www.mtnmudd.com/",
};

const dunkinDuties = {
  name : "Dunkin' Donuts",
  firstRole: "Barista",
  duties: [
    [
      "Operation checklists","Store Opening/Closing Duties","Customer Service Handling","Hospitality duties","Making wholesome beverages"
    ],
  ],
  date: "Apr. 2016 - May. 2017 (Jounieh, Lebanon)",
  link: "https://ddlebanon.com/",
};
const esportDuties = {
  name: "Leauge of Legends Tournament",
  firstRole: "Creator & Organizer",
  duties: [
    [
      "Organized and managed an independent eSport competition for ”League of Legends” that was featured on national television, with the help of Gamezone in Dekawneh Lebanon. The event was sponsored by Redbull, Razr, Thermaltake and Kingston."
    ],
  ],
  date: "July 2014 (Dekwaneh, Lebanon)",
  link: "https://bit.ly/3wjpHk5",
};

const ebookDuties = {
  name: "Humanity offered for atonement",
  firstRole: "Apple Ebook Publisher",
  duties: [
    [
      "Converting the book’s transcript to digital and formatting it for apple’s books platform then publishing it."
    ],
  ],
  date: "March 2016",
  link: "http://apple.co/1XbOHAs",
};

const iosAPP = {
  name: "iOS Mobile Application",
  firstRole: "Developer",
  duties: [
    [
      ""
    ],
  ],
  date: "March 2016",
  link: "http://apple.co/1XbOHAs",
};

const bachelor = {
  name: "Information Technology & Computing",
  firstRole: "Arab Open University",
  duties: [
    [
      "Graduated with second degree honors and a GPA of 3.67"
    ]
  ],

  date: "Sept 2015 - Sept 2019",
  link: "https://web.aou.edu.lb/",
};

const master = {
  name: "Software Engineering",
  firstRole: "Ural Federal University",
  duties: [
    [
      "Expected graduation date in Q4 2022"
    ]
  ],

  date: "Sept 2019 - In Progress (Distance Learning)",
  link: "https://urfu.ru/en/",
};

const programmingLanguages = {
  name: "Programming Languages & Technologies",
  firstRole: "Languages",
  secondRole: "Technologies/Frameworks",
  duties: [
    [
      "Java",
      "Javascript",
      "HTML",
      "CSS",
      "Swift"
    ],
    [
      "React",
      "Bootstrap",
      "NodeJS",
      "REST API",
      "MYSQL",
      "PHP",
      "Github"
    ]
  ],

  date: "Sept 2019 - In Progress (Distance Learning)",
  link: "https://urfu.ru/en/",
};


const initialHTML = document.getElementById("rightCard").innerHTML
var btn = document.getElementsByClassName("resumeRef");
const workExperience = Array.from(btn).slice(0, 4);
const projects = Array.from(btn).slice(4, 8);
const skills = Array.from(btn).slice(8, 11);
const education = Array.from(btn).slice(11, 15);
// const languages = Array.from(btn).slice(15, 19);


for (var i = 0; i < btn.length; i++) {
  const ref = btn[i];
  switch (i) {
    case 0:
      teamwhale();
      break;
    case 1:
      wikium();
      break;
    case 2:
      mountainMudd();
      break;
    case 3:
      dunkin();
      break;
    case 4:
      programming();
      break;
    case 5:
      software(5);
      break;
    case 6:
      aou();
      break;
    case 7:
      urfu();
      break;
    case 8:
      coursera(8);
      break;
    case 9:
      coursera(9);
    case 10:
      languages();
      break;
  }
}

function setActiveTab(button) {
  console.log("SETACTIVETAB");

  for (let i = 0; i < btn.length; i++) {
    if (btn[i] === button) {
      button.className = "resumeRef active";
      button.disabled = true;
    } else {
      btn[i].className = "resumeRef";
      btn[i].disabled = false;
    }
  }
}
function teamwhale() {
  workExperience[0].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[0]);
    workExp(0, teamwhaleDuties);
    document.getElementById("infoLink").innerText = teamwhaleDuties.link;
    document.getElementById("infoLink").href = teamwhaleDuties.link;
  });
}
function wikium() {
  workExperience[1].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[1]);
    workExp(1, wikiumDuties);
    document.getElementById("infoLink").innerText = wikiumDuties.link;
    document.getElementById("infoLink").href = wikiumDuties.link;
  });
}

function mountainMudd() {
    btn[2].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[2]);
    workExp(2, mountainMuddDuties);
    document.getElementById("infoLink").innerText = mountainMuddDuties.link;
    document.getElementById("infoLink").href = mountainMuddDuties.link;
  });
}
function dunkin() {
  btn[3].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[3]);
    workExp(3, dunkinDuties);
    document.getElementById("infoLink").innerText = dunkinDuties.link;
    document.getElementById("infoLink").href = dunkinDuties.link;
  });
}


function aou(){
  btn[6].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[6]);
    workExp(6, bachelor);


    document.getElementById("infoLink").innerText = bachelor.link;
    document.getElementById("infoLink").href = bachelor.link;
  });
}
function urfu(){
  btn[7].addEventListener("click", function () {
    event.preventDefault();
    setActiveTab(btn[7]);
    workExp(7, master);


    document.getElementById("infoLink").innerText = master.link;
    document.getElementById("infoLink").href = master.link;
  });
}

function languages(){
  btn[10].addEventListener("click", function(){
    event.preventDefault();
    setActiveTab(btn[10]);
    const rightCard = document.getElementById("rightCard");
    rightCard.innerHTML = "";
    
    /*ELEMENTS*/

    /*TITLE*/
    const title = document.createElement('h2');
    title.setAttribute("id", "companyName");
    title.innerText = "Language Proficiency";

    const progressTitles = ["English","Arabic","French","Russian"];

    /*PROGRESS BAR*/
    const skillsBar = document.createElement("div");
    skillsBar.className = "skills-bar";

    for (let i =0; i < 4; i++){
      
      const bar = document.createElement("div");
      bar.className = "bar";

      const info = document.createElement("div");
      info.className = "info";
      const text1 = document.createElement("span");
      text1.innerText = progressTitles[i];
      info.appendChild(text1);

      const line = document.createElement("div");
      line.className = `progress-line progress${i}`;
      console.log("LINE CLASS NAME", line.className);
      
      const text2 = document.createElement("span");
      line.appendChild(text2);


      bar.appendChild(info);
      bar.appendChild(line);

      skillsBar.appendChild(bar);
    }


    
    rightCard.appendChild(title);
    rightCard.appendChild(skillsBar);
  });
}

function programming(){
  btn[4].addEventListener("click", function(){
      event.preventDefault();
      setActiveTab(btn[4]);
      workExp(4, programmingLanguages);
  
  
      document.getElementById("workDate").remove();
      document.querySelector(".alert").remove();
  });
}

function coursera(btnIndex){
  const courseDescription = ['Apply core software engineering practices at conceptual level for a given problem','Compare and contrast traditional, agile, and lean development methodologies at high level. These include Waterfall, Rational Unified Process, V model, Incremental, Spiral models and overview of agile mindset','Propose a methodology best suited for a given situation'];
  const courseDescription2 = ['Define project management and describe what constitutes a project',
  'Explore project management roles and responsibilities across a variety of industries',
  'Detail the core skills that help a project manager be successful',
  'Describe the life cycle of a project and explain the significance of each phase',
  'Compare different program management methodologies and approaches and determine which is most effective for a given project',
  'Define organizational structure and culture and explain how it impacts project management',
  'Define change management and describe the role of the project manager in the process'];
  const imgSrc = ["miscImages/certificate1.jpg","miscImages/certificate2.jpg"];
  const courseraUrl =  ["https://coursera.org/share/c6985cbd1c20cc3d7391609f4221ca7a","https://coursera.org/share/390ab8c90d17d4366796f014acddde11"];

  btn[btnIndex].addEventListener("click", function(){
    event.preventDefault();
    setActiveTab(btn[btnIndex]);
    const rightCard = document.getElementById("rightCard");
    rightCard.innerHTML = "";

    /*Create Elements*/
    const title = document.createElement('h2');
    title.setAttribute("id", "companyName");
    title.innerText = btn[btnIndex].innerText;

    const description = document.createElement('p');
    description.innerText = "In this course, I learned the following:"

    /*Alert*/
    const alert = document.createElement("div");
    alert.className = "alert";
    var div = document.createElement("div");
    div.id =  "workList";
    var list = document.createElement("ul");
    list.className = "workDuties";
    

    if(btnIndex === 8 ){
    alert.innerHTML = `<i class="fas fa-info"></i> <a id= "infoLink" href=" ${courseraUrl[0]}" target="_blank"> ${courseraUrl[0]}</a>`;
    for (let i = 0; i < courseDescription.length; i++) {
      var li = document.createElement("li");
      li.className = "duty";
      li.innerText = courseDescription[i];
      list.appendChild(li);
    }
    } else {
      alert.innerHTML = `<i class="fas fa-info"></i> <a id= "infoLink" href=" ${courseraUrl[1]}" target="_blank"> ${courseraUrl[1]}</a>`;
      for (let i = 0; i < courseDescription2.length; i++) {
        var li = document.createElement("li");
        li.className = "duty";
        li.innerText = courseDescription2[i];
        list.appendChild(li);
      }
    }
    
    div.appendChild(list);

    rightCard.appendChild(title);
    rightCard.appendChild(description);
    rightCard.appendChild(div);
    
    rightCard.append(alert);


});
}
function software(btnIndex){
  const softwareList = ['Microsoft Office Packages','Adobe Premiere, Photoshop, Lightroom','Productivity: Slack, Trello, Notion', 'Helpdesk: ZenDesk, LiveTEX, LiveChat'];

  btn[btnIndex].addEventListener("click", function(){
    event.preventDefault();
    setActiveTab(btn[btnIndex]);
    const rightCard = document.getElementById("rightCard");
    rightCard.innerHTML = "";

    /*Create Elements*/
    const title = document.createElement('h2');
    title.setAttribute("id", "companyName");
    title.innerText = btn[btnIndex].innerText;

    const description = document.createElement('p');
    description.innerText = "In this course, I learned the following:"

    /*Alert*/
    var div = document.createElement("div");
    div.id =  "workList";
    var list = document.createElement("ul");
    list.className = "workDuties";

      for (let i = 0; i < softwareList.length; i++) {
        var li = document.createElement("li");
        li.className = "duty";
        li.innerText = softwareList[i];
        list.appendChild(li);
      }
    
    div.appendChild(list);

    rightCard.appendChild(title);
    rightCard.appendChild(description);
    rightCard.appendChild(div);

});
}



function workExp(btnIndex, work) {
  document.getElementById("rightCard").innerHTML = initialHTML
  
  try {
    const lists = document.querySelectorAll("[id=workList]");
    console.log('LISTS', lists);
    

    lists.forEach((element, index) => {
      lists[index].remove();
      console.log("DELETING LIST");
    });

    // lists[0].remove();
    // lists[1].remove();
  } catch {
    console.log("No list to remove");
  }

  document.getElementById("companyName").innerText = work.name;
  document.getElementById("firstRole").innerText = work.firstRole;
  document.getElementById("workDate").innerText = work.date;

  if (work.secondRole === undefined || null) {
    console.log("work.secondRole === undefined || null" + "is true");

    try {
      console.log("Removing secondRole HTML");

      document.getElementById("secondRole").remove();
    } catch {
      console.log("No second role to remove");
    }
  } else {
    if (document.getElementById("secondRole") != null) {
      console.log("work.secondRole === undefined || null" + "is false");
      console.log("work.secondRole" + work.secondRole);

      document.getElementById("secondRole").innerText = work.secondRole;
    } else {
      const card = document.getElementsByClassName("card");
      const secondRole = document.createElement("div");
      secondRole.setAttribute("id", "secondRole");
      secondRole.style = "font-weight: bold; margin-top: 10px;";

      secondRole.innerText = work.secondRole;
      const alert = document.getElementsByClassName("alert");
      card[1].insertBefore(secondRole, alert[0]);

      console.log("No secondRole to edit");
    }
  }

  for (let i = 0; i < work.duties.length; i++) {
    var card = document.getElementsByClassName("card");
    var alert = document.getElementsByClassName("alert");
    var div = document.createElement("div");
    div.id =  "workList";
    var list = document.createElement("ul");
    list.className = "workDuties";

    for (let j = 0; j < work.duties[i].length; j++) {

      var li = document.createElement("li");
      li.className = "duty";
      li.innerText = work.duties[i][j];
      list.appendChild(li);
    }

    div.appendChild(list);

    if (work.duties.length > 1) {
      if (i === 0) {
        card[1].insertBefore(div, secondRole);
      } else {
        card[1].insertBefore(div, alert[0]);
      }
    } else {
      card[1].insertBefore(div, alert[0]);
    }
  }
}
