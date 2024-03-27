
import MyFooter from "@/components/myfooter";

export default function index() {
  return (
    <div>
    

      <div className="wrapper">
        <div className="content">
          <div className="image-container">
          <img class="image" src="demo.png"/>
          </div>

          <h1> The Overview </h1>
            <p>
                For this project, I designed and developed a interactive poster website based on a movie. 
                One Piece Film: RED showcase the Straw Hat Pirates' adventure on the "Island of Music", 
                where Uta (world's greatest diva) holds her first ever live concert to the public.
                As the UI/UX designer, I created SVG images and wireframes to get a sense of what the layout of the website is like.
                As the developer, I used HTML, CSS and Javascript to make interactive and animation components from the SVG images for the website.
            </p>

            <div class="image-container">
                <img class="hero-image"/>
            </div>

            <h1> The Context &amp Challenge </h1>
            <h2>Background</h2>
            <p>This project is for an interactive graphics class where students learn how to 
                use development techniques to create responsive and scalable two-dimensional graphics 
                with support for interactivity and dynamic animations.
            Over 10 weeks, I worked on refining the design, developing and debugging an interactive poster for the movie, One Piece Film: RED. 
            </p>

            <h2>The Problem</h2>
            <p>This project seeks to provide an interactive website design to the original movie poster. 
                As the UI/UX designer, I reserached about the movie and the different graphics that it released to 
                make SVG images for interactive use.
                As the developer, I programmed the website layout to be responsible across different breakpoints 
                as well as making it asethetically pleasing.
            </p>

            <h2>Goals &amp Objective</h2>

            <p>
  My goal was to design and develop a responsive and interactive website for One Piece Film: RED movie across different breakpoints.
</p>
<div>
  <p>For the first 5 weeks, my weekly objectives were to:</p>
  <ul>
    <li>Setup domain,</li>
    <li>Conduct research on the movie,</li>
    <li>Build a basic static responsive website containing the research,</li>
    <li>Create SVG images,</li>
    <li>And add meaningful animation effects to the SVG images</li>
  </ul>
  <br />
  <p>For the last 5 weeks, my weekly objectives were to:</p>
  <ul>
    <li>Create a static wireframe design for the website with all the components,</li>
    <li>Convert the wireframe designs to a responsive website poster,</li>
    <li>Add audio to the website poster,</li>
    <li>Incorporating interactive and animation elements,</li>
    <li>As well as refining and debugging the website.</li>
  </ul>
  </div>
            <h1> Process &amp Insight</h1>
            <p>
                To begin, I researched about the movie's showtime, theater location, exisiting posters, and website. 
            </p>
            <div class="btn-container">
                <a class="button" target="blank"
                    href="https://bzonepiece1.netlify.app/">
                    View Research</a>
            </div>

            <p>
                Next, I created potential SVG images that I can use for my website.
            </p>
            <br></br>
            <div class="btn-container">
                <a class="button" target="blank"
                    href="https://bzonepiece2.netlify.app/">
                    View SVG Images</a>
            </div>
            <p>
                Then, I add hover effects to some of the SVG images.
            </p>
            <div class="btn-container">
                <a class="button" target="blank"
                    href="https://bzonepiece3.netlify.app">
                    View SVG Effects</a>
            </div>
            <p>
                After that, I created a static website wireframes:
            </p>
            <div class="image-container">
                <img class="image" src="desktop.png"/>
            </div>
            <div class="image-container">
                <img class="image" src="tablet.png"/>
            </div>
            <div class="image-container">
                <img class="image" src="mobile.png"/>
            </div>
            <p>
            I coverted those designs into a website using HTML and CSS.
            </p>
            <div class="btn-container">
                <a class="button" target="blank"
                    href="https://bzonepiece4.netlify.app">
                    View Website</a>
            </div>

            <p>
                To continue the development, I add audio to the webiste using Javascript and refine the page.
            </p>
            <div class="btn-container">
                <a class="button" target="blank"
                    href="https://bzonepiece5.netlify.app">
                    View Website</a>
            </div>

            <h1> The Solution </h1>
            <p>
                One issue was learning how to integrate Javascript to HTML/CSS as well as 
                how to layout contents nicely original the website. To combat, I seeked for help 
                from the professor as well as debugging on my own time. 
            </p>
            <div class="btn-container">
                <a class="button" target="blank" href="https://bzonepiece.netlify.app"> View Final Website </a>
            </div>

            <h1> The Results</h1>
            <p>
                This project was a success in some way but it was a huge learning experience for me. 
                The final responsive webstie was interactive and aesthetically pleasing with a focus on simplicity.
                I was able to achieve my goal of designing and developing an interactive website poster by myself.
            </p>
            <p>
                I was able to strengthen my programming skills by learning how to
                layout contents in an orderly manner way that is asethetically pleasing.
                I was also able to meet my weekly objectives on time with completion. 
                Overall, I learned a lot about debugging, which help me gain a 
                deeper understanding of the code that I wrote.
            </p>
            
        </div>
      </div>

      <MyFooter />
    </div>
  );
}