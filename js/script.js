 // --- Accordion Functionality ---
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});


// --- Team Data ---

const teamMembers = [
  { name: "Carvin Moopong", role: "Founder & CEO",  bio: "Leads the vision and strategy for sustainable organic trade in South Africa." },
  { name: "Sipho Dlamini", role: "Operations Manager", img: "../Assets/2.jpg", bio: "Oversees supply chain, logistics, and vendor management." },
  { name: "Thandi Nkosi", role: "Marketing Lead", img: "../Assets/3.jpg", bio: "Heads campaigns promoting organic lifestyle and farmer engagement." },
  { name: "Johan Mthethwa", role: "Sales Executive", img: "../Assets/4.jpg", bio: "Connects customers with the right organic products and deals." },
  { name: "Ayanda Ndlovu", role: "Customer Support", img: "../Assets/5.jpg", bio: "Ensures smooth communication and problem resolution for all clients." },
  { name: "Nomsa Khumalo", role: "Content Creator", img: "../Assets/6.jpg", bio: "Writes educational blogs and manages online brand storytelling." },
  { name: "Zanele Radebe", role: "Finance Officer", img: "../Assets/7.jpg", bio: "Maintains budget, payroll, and financial reports for transparency." },
  { name: "Bongani Sithole", role: "IT Specialist", img: "../Assets/8.jpg", bio: "Handles website maintenance, tech integrations, and digital security." }
];



// --- Populate Team Cards ---
const teamContainer = document.getElementById("teamContainer");

function displayTeam(members) {
  teamContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML = `
      <img src="${member.img}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p class="role">${member.role}</p>
    `;
    card.addEventListener("click", () => openModal(member));
    teamContainer.appendChild(card);
  });
}

displayTeam(teamMembers);

// --- Search Functionality ---
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  const searchValue = e.target.value.toLowerCase();
  const filtered = teamMembers.filter(m =>
    m.name.toLowerCase().includes(searchValue) ||
    m.role.toLowerCase().includes(searchValue)
  );
  displayTeam(filtered);
});

// --- Modal Functionality ---
const modal = document.getElementById("profileModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const closeBtn = document.querySelector(".close-btn");

function openModal(member) {
  modalImage.src = member.img;
  modalName.textContent = member.name;
  modalRole.textContent = member.role;
  modalBio.textContent = member.bio;
  modal.style.display = "flex";
}

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

