document.addEventListener("DOMContentLoaded", () => {
  // Project Data (Using Nested Lists for Description)
  const projects = {
    project1: {
      title: "Motrjim Academy",
      description: [
        {
          main: "Translation of two blood analyses containing of different tests:",
          sub: [
            "Inflammatory markers",
            "Liver function tests",
            "Kidney function tests",
            "Cardia Markers",
            "Complete blood picture",
          ],
        },
        // {
        //   main: "Fully responsive and mobile-friendly",
        //   sub: ["Optimized for all screen sizes", "Fast loading speed"],
        // },
        // {
        //   main: "Performance & accessibility",
        //   sub: ["SEO optimized", "Easy navigation", "Dark mode support"],
        // },
      ],
      image:
        "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/1-blood_analysis.jpg",
    },
    project2: {
      title: "Mockup Phone",
      description: [
        {
          main: "Translation of Articles about:",
          sub: [
            "Acute respiratory distress syndrome",
            "Mechanism of drug resistance in cancer.",
            "Epigenetic mechanism in cancer progression and therapy resistance.",
            "Advancements in biomedical devices : key components and functions.",
            "Translation of a brochure on Flagyl.",
            "Translation of a brochure on flu caused by H1N1",
          ],
        },
      ],
      image:
        "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/2-Articles%20.jpg",
    },
    project3: {
      title: "Scans Translation",
      description: [
        {
          main: "Translation of MRI, MRA, MRV of the brain",
        },
      ],
      image: "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/3-Brain.jpg",
    },
    project4: {
      title: "Multi slice non contrast CT",
      description: [
        {
          main: `Translation of
multi slice non contrast CT scan of the orbits, in
the axial and coronal
planes.`,
        },
      ],
      image: "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/4-CT.jpg",
    },
    project5: {
      title: "DUPLEX & COLOR ULTRASOUND",
      description: [
        {
          main: `Translation of
DUPLEX & COLOR ULTRASOUND of the deep venous system of both
lower limbs.`,
        },
      ],
      image: "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/5-Duplex.jpg",
    },
    project6: {
      title: "Projects for dental students",
      description: [
        {
          main: "Projects for dental student:",
          sub: [
            "Causes of teeth coloration Brochure by Microsoft word.",
            "Principle of smile design Brochure by Microsoft word.",
            "Anti-hypertensive drugs Brochure by Microsoft ward.",
            "NSAIDS Poster by Microsoft publisher.",
            "CAD/CAM technology in dentistry Poster by Microsoft publisher.",
            "Comparison between amaglam and composite restoration poster by Microsoft publisher.",
            "Gap analysis with action plan of GAHAR standards by Microsoft power point.",
          ],
        },
      ],
      image: "https://pub-b654b752a58b4406b9bea610769ffee4.r2.dev/6-dental.jpg",
    },
  };

  // Select Modal Elements
  const modal = document.getElementById("projectModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModalBtn = document.querySelector(".close");

  // Function to Open Modal
  function openModal(projectKey) {
    if (!projects[projectKey]) return; // Prevent errors

    const project = projects[projectKey];
    modalTitle.innerText = project.title;
    modalImage.src = project.image;

    // Convert the description array into flexbox lists
    modalDescription.innerHTML = `<div class="modal-flexbox">
  ${project.description
    .map(
      (item) => `
      <ul class="modal-list">
        <li class="main-item">${item.main}
          ${
            item.sub
              ? `<ul class="sub-list">
                  ${item.sub.map((subItem) => `<li>${subItem}</li>`).join("")}
                </ul>`
              : ""
          }
        </li>
      </ul>`
    )
    .join("")}
</div>`;

    modal.style.display = "flex"; // Show modal
  }

  // Function to Close Modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Attach Event Listeners for Opening Modal
  document.querySelectorAll(".project").forEach((project) => {
    project.addEventListener("click", function () {
      const projectKey = this.getAttribute("data-project");
      openModal(projectKey);
    });
  });

  // Attach Event Listener for Closing Modal
  closeModalBtn.addEventListener("click", closeModal);

  // Close Modal When Clicking Outside Content
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  // Allow Escape Key to Close Modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
});
