Movie Manager
Overview
Movie Manager is a simple web application that allows users to manage a collection of movies. Users can add, edit, and delete movie entries, including details such as the movie name, genre, release date, description, and an optional poster image. The application features a visually appealing interface with a modern design, including a dynamic background and smooth animations.
Features

Add Movies: Input movie details (name, genre, release date, description, and poster image) via a form.
Edit Movies: Update existing movie entries by pre-filling the form with selected movie data.
Delete Movies: Remove movies from the list with a single click.
Dynamic Table: Displays all movies in a responsive table with action buttons for editing and deleting.
Image Upload: Upload and preview movie posters with a custom file input interface.
Responsive Design: Optimized for both desktop and mobile devices.
Visual Effects: Includes a subtle animated background with a puzzle pattern and gradient effects, as well as hover animations for interactive elements.

Technologies Used

HTML5: Structure of the application.
CSS3: Styling with animations, gradients, and a custom SVG background.
JavaScript: Handles form submissions, movie management, and dynamic table rendering.
Font Awesome: Icons for the UI (e.g., film, upload, edit, and delete).
External Dependency: Font Awesome CDN for icons.

Setup Instructions

Clone or Download the Repository:
Clone the repository or download the project files to your local machine.


File Structure:movie-manager/
├── index.html       # Main HTML file
├── style.css        # CSS styles for the application
├── script.js        # JavaScript logic for movie management
└── README.md        # This file


Serve the Application:
Place the project files in a web server directory (e.g., using XAMPP, WAMP, or a simple HTTP server).
Alternatively, open index.html directly in a modern web browser (note: file uploads may not work correctly with the file:// protocol due to security restrictions).
For local development, you can use a simple server like:python -m http.server 8000

Then navigate to http://localhost:8000 in your browser.


Dependencies:
The application uses the Font Awesome CDN (https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css) for icons. Ensure an active internet connection for the icons to load, or host the Font Awesome files locally.



Usage

Adding a Movie:
Fill in the form fields: Movie Name, Genre, Release Date, Description, and optionally upload a Poster Image.
Click the "Add Movie" button to add the movie to the table.


Editing a Movie:
In the movies table, click the edit button (pencil icon) next to a movie.
The form will be pre-filled with the movie's details, and the submit button will change to "Update Movie".
Modify the desired fields and click "Update Movie" to save changes.


Deleting a Movie:
Click the delete button (trash icon) next to a movie in the table to remove it.


Image Upload:
Click the "Click to upload movie poster" area to select an image file.
The selected file name will be displayed, and the image will be temporarily stored as a URL for preview (note: images are not persisted in this version).



Notes

Data Persistence: The application stores movie data in memory (via a JavaScript array) and does not persist data across page refreshes. To add persistence, consider integrating a backend or local storage.
Image Handling: Uploaded images are displayed using URL.createObjectURL, which is temporary and not saved permanently. For production use, implement server-side image storage.
Form Submission: The form's action attribute is empty, as all logic is handled client-side. For a production environment, you may want to connect to a backend API.
Browser Compatibility: Tested on modern browsers (Chrome, Firefox, Edge). Ensure JavaScript is enabled for full functionality.

Screenshots
<img width="852" height="890" alt="image" src="https://github.com/user-attachments/assets/aa909e19-b71c-436a-be51-4a14bf94470c" />

Future Improvements

Add local storage or a backend database for persistent movie data.
Implement image preview in the table for uploaded posters.
Add form validation to ensure required fields are filled.
Enhance accessibility (e.g., ARIA labels, keyboard navigation).
Allow sorting and filtering of the movies table.
