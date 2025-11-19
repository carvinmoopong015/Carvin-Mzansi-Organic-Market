 // --- Accordion Functionality ---
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});


// --- Team Data ---

const teamMembers = [
  { name: "Carvin Moopong", role: "Founder & CEO",  bio: "Leads the vision and strategy for sustainable organic trade in South Africa." },
  { name: "Sipho Dlamini", role: "Operations Manager", bio: "Oversees supply chain, logistics, and vendor management." },
  { name: "Thandi Nkosi", role: "Marketing Lead", bio: "Heads campaigns promoting organic lifestyle and farmer engagement." },
  { name: "Johan Mthethwa", role: "Sales Executive", bio: "Connects customers with the right organic products and deals." },
  { name: "Ayanda Ndlovu", role: "Customer Support", bio: "Ensures smooth communication and problem resolution for all clients." },
  { name: "Nomsa Khumalo", role: "Content Creator", bio: "Writes educational blogs and manages online brand storytelling." },
  { name: "Zanele Radebe", role: "Finance Officer", bio: "Maintains budget, payroll, and financial reports for transparency." },
  { name: "Bongani Sithole", role: "IT Specialist", bio: "Handles website maintenance, tech integrations, and digital security." }
];



// --- Populate Team Cards ---
const teamContainer = document.getElementById("teamContainer");

function displayTeam(members) {
  teamContainer.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("team-card");
    card.innerHTML = `
     
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

