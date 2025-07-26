document.querySelector(".upload-label").addEventListener("click", function () {
  document.getElementById("imageUpload").click();
});

document.getElementById("imageUpload").addEventListener("change", function (e) {
  const label = document.querySelector(".upload-label");
  if (this.files.length > 0) {
    label.innerHTML = `<i class="fas fa-check-circle"></i><span>${this.files[0].name}</span>`;
    label.style.color = "#088a96";
    label.style.borderColor = "#088a96";
  }
});
let movies = [];
let currentEditingId = null;

// Form submission handler
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const movieData = {
    id: currentEditingId || Date.now().toString(),
    name: document.getElementById("movieName").value,
    genre: document.getElementById("genre").value,
    releaseDate: document.getElementById("releaseDate").value,
    description: document.getElementById("movieDesc").value,
    image: document.getElementById("imageUpload").files[0]
      ? URL.createObjectURL(document.getElementById("imageUpload").files[0])
      : "",
  };

  if (currentEditingId) {
    // Update existing movie
    const index = movies.findIndex((m) => m.id === currentEditingId);
    movies[index] = movieData;
  } else {
    // Add new movie
    movies.push(movieData);
  }

  renderMovies();
  resetForm();
  currentEditingId = null;
});

// Render movies to table
function renderMovies() {
  const tableBody = document.getElementById("movies-table-body");
  tableBody.innerHTML = "";

  movies.forEach((movie) => {
    const row = document.createElement("tr");

    row.innerHTML = `
                    <td>${movie.name}</td>
                    <td>${movie.genre}</td>
                    <td>${movie.releaseDate}</td>
                    <td>${movie.description.substring(0, 50)}...</td>
                    <td>
                        <button class="action-btn edit-btn" data-id="${
                          movie.id
                        }">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="action-btn delete-btn" data-id="${
                          movie.id
                        }">
                            <i class="fas fa-trash"></i>
                        </button>
                    </td>
                `;

    tableBody.appendChild(row);
  });

  // Add event listeners to new buttons
  document.querySelectorAll(".edit-btn").forEach((btn) => {
    btn.addEventListener("click", editMovie);
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", deleteMovie);
  });
}

// Edit movie
function editMovie(e) {
  const id = e.currentTarget.getAttribute("data-id");
  const movie = movies.find((m) => m.id === id);

  document.getElementById("movieName").value = movie.name;
  document.getElementById("genre").value = movie.genre;
  document.getElementById("releaseDate").value = movie.releaseDate;
  document.getElementById("movieDesc").value = movie.description;

  currentEditingId = id;
  document.querySelector('button[type="submit"]').textContent = "Update Movie";
  window.scrollTo(0, 0);
}

// Delete movie
function deleteMovie(e) {
  const id = e.currentTarget.getAttribute("data-id");
  movies = movies.filter((movie) => movie.id !== id);
  renderMovies();
}

// Reset form
function resetForm() {
  document.querySelector("form").reset();
  document.querySelector('button[type="submit"]').textContent = "Add Movie";
  const label = document.querySelector(".upload-label");
  label.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Click to upload movie poster</span>`;
  label.style.color = "";
  label.style.borderColor = "";
}

// File upload handler
document.querySelector(".upload-label").addEventListener("click", function () {
  document.getElementById("imageUpload").click();
});

document.getElementById("imageUpload").addEventListener("change", function () {
  const label = document.querySelector(".upload-label");
  if (this.files.length > 0) {
    label.innerHTML = `<i class="fas fa-check-circle"></i><span>${this.files[0].name}</span>`;
    label.style.color = "#088a96";
    label.style.borderColor = "#088a96";
  }
});
