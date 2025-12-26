const certificates = [
  {
    title: "AI Technologies Intern",
    issuer: "Shell",
    category: "Data Science",
    date: "July 24, 2025",
    image: "certificate1.jpg",
    description: "4-week internship focused on AI, ML and sustainability.",
    skills: ["AI", "Python", "ML"]
  },
  {
    title: "IBM SkillsBuild",
    issuer: "IBM",
    category: "Data Analytics",
    date: "Sept 6, 2025",
    image: "certificate2.jpg",
    description: "Project-based learning in Data Analytics.",
    skills: ["Data Analysis", "Power BI"]
  }
];

const grid = document.getElementById("certificateGrid");
const filter = document.getElementById("filter");
const search = document.getElementById("search");

let views = localStorage.getItem("views") || 0;
document.getElementById("views").innerText = views;

function render(certList) {
  grid.innerHTML = "";
  certList.forEach((c, i) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${c.image}">
      <div class="card-body">
        <h3>${c.title}</h3>
        <p>${c.issuer}</p>
        <div class="badges">${c.skills.map(s=>`<span>${s}</span>`).join("")}</div>
        <button class="view-btn" onclick="openModal(${i})">View</button>
      </div>`;
    grid.appendChild(card);
  });
}

function openModal(i) {
  views++;
  localStorage.setItem("views", views);
  document.getElementById("views").innerText = views;

  const c = certificates[i];
  modal.style.display = "block";
  modalImg.src = c.image;
  modalTitle.innerText = c.title;
  modalDesc.innerText = c.description;
  modalDate.innerText = c.date;
  modalSkills.innerText = c.skills.join(", ");
}

document.querySelector(".close").onclick = () => modal.style.display = "none";

render(certificates);

// Stats
document.getElementById("totalCerts").innerText = certificates.length;
document.getElementById("categories").innerText =
  new Set(certificates.map(c=>c.category)).size;
document.getElementById("recent").innerText = certificates.length;
