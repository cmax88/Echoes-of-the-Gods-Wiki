import Header from './components/Header';
import Nav from './components/Nav';
import ContentBox from './components/ContentBox';
import ImageUploader from './components/ImageUploader';
import TextEditor from './components/TextEditor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <ContentBox />
      <br></br>
      <ImageUploader />
      <br></br>
      <TextEditor />
      <br></br>
      <button onClick={savePage}>Save Page</button>
      <Footer />
    </div>
  );
}

function savePage() {
  const htmlContent = `<!DOCTYPE html>

  <html lang="en">
  <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>Page Title - EOTG Wiki</title>
  <link href="../style.css" rel="stylesheet"/>
  </head>
  <body>
  <header>
  <h1><a class="header-link" href="../homepage.html">Echoes of the Gods Wiki</a></h1>
  </header>
  <nav>
      <ul>
      <li><a href="../homepage.html">Home</a></li>
      <li><a href="../index.html">Index</a></li>
      <li><a href="../gaia.html">Gaia</a></li>
      <li><a href="../gods.html">Gods</a></li>
      <li><a href="../regions.html">Regions</a></li>
      <li><a href="../cities.html">Cities</a></li>
      <li><a href="../classes.html">Classes</a></li>
      <li><a href="../races.html">Races</a></li>
      <!-- Add more links for other pages as needed -->
      </ul>
      </nav>
      <div class="content-box">
    <h2>${pageHeading}</h2>
  <!-- Image container - Uncomment when needed
          <div class="image-container">
              <img src="path-to-your-image.jpg" alt="Image Description" height="400" width="600" class="clickable-image">
              <div id="myModal" class="modal">
                  <span class="close">&times;</span>
                  <input type="range" id="zoom-slider" min="1" max="3" step="0.01" value="1">
                  <img class="modal-content" id="img01">
                  <div id="caption"></div>
              </div>
          </div>
          -->
  </div>
  <main>
  <div class="content-container">
  <section>
  <h3>Section Title</h3>
  <p>Section content goes here.</p>
  </section>
  <!-- Add more sections with relevant content -->
  </div>
  </main>
  <footer>
  <p>© 2024 Echoes of the Gods D&amp;D Campaign</p>
  </footer>
  <script src="../link.js"></script>
  </body>
  </html>
  `;
  const blob = new Blob([htmlContent], { type: 'text/html' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'static-page.html'; // This will be the name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
}


export default App;
