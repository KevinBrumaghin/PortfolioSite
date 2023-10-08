import './App.css'
window.addEventListener('load', () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");
})
function App() {
  return (
    <>
    <div className='loader'>

    </div>
      <me-info>
        <a className="imagelink" href="https://github.com/KevinBrumaghin"><img src="pics/icons8-github-100.png" alt="GitHub" /></a>
        <title-name>
            <h1 className="titleLg">KEVIN BRUMAGHIN</h1>
            <h2 className="titleSm">front-end web developer</h2>
        </title-name>
        <a className="imagelink" href="https://www.linkedin.com/in/kevinbrumaghin/"><img src="pics/icons8-linkedin-100.png" alt="LinkedIn" /></a>
    </me-info>
    <top-nav>
            <a href="#aboutme"><img className="pic1" src="pics/about.jpg" alt="" /></a>
            <a href="#projects"><img className="pic2" src="pics/projects.jpg" alt="" /></a>
            <a href="#motivation"><img className="pic3" src="pics/motivation.jpg" alt="" /></a>
            <a href="#contact"><img className="pic4" src="pics/contact.jpg" alt="" /></a>
    </top-nav>
    <top-text>
        <h2 className="picNav1">ABOUT ME</h2>
        <h2 className="picNav2">PROJECTS</h2>
        <h2 className="picNav3">MY MOTIVATION</h2>
        <h2 className="picNav4">CONTACT ME</h2>
    </top-text>
    <section className="aboutme" id="aboutme">
        <h2 className="sectionHeader">About Me</h2>
        <pic-bio>
            <img className="me" id="me" src="pics/me.jpg" alt="" width="250" height="250" />
            <p>
            Growing up around computers, I&aposve always wanted to be invovled in anything tech.<br />
            My favorite hobby as a kid, and even now, was playing video games. I was fascinated<br />
            with the thought of understanding how games were made and how they worked. This mindset<br />
            led me down a creative path of learning about Game Design and eventually going to school<br />
            for Computer Science. while still pursing a job in tech I decided to pick up a job<br />
            in social media marketing and worked as an intern for around 2 years. I found that it<br />
            didn&apost excite me as much as Game Design did, and after my girlfriend suggested I try out<br />
            Web Development I gave it a go and have been feeling that passion for my work again!<br />
            I am excited to continue this journey and see where it can take me!
            </p>
        </pic-bio>
        <my-skills>
            <skills-list>
                <h3>My Skills</h3>
                <ul>
                    <li id="html">HTML</li>
                    <li id="css">CSS</li>
                    <li id="js">JavaScript</li>
                    <li id="react">React.js</li>
                </ul>
            </skills-list>
            <tools-used>
                <h3>Tools Used</h3>
                <ul>
                    <li id="vs">VS Code</li>
                    <li id="git">GitHub</li>
                    <li id="code">CodePen</li>
                </ul>
            </tools-used>
        </my-skills>
    </section>
    <section className="projects" id="projects">
        <h2 className="sectionHeaderP">Projects</h2>
        <project-slot>
            <a href="https://twinbelle.netlify.app/"><img className="projPic" src="pics/twinbelle.jpg" alt="" width="384" height="216" /></a>
                <desc-text>
                    A re-design of the website for the local<br />
                    plumbing business Twin Belle. My first<br />
                    website after finishing my Udemy course<br />
                    on web development <br /><br />
                    <a className="ogsite" href="https://www.twinbelle.com/">Original Site</a>
                </desc-text><br /><br />
                <proj-details>
                    Skills & Tools Used: HTML, CSS, VS Code, Photoshop<br /><br />
                    Published: <strong>August 24th, 2023</strong>
                </proj-details>
        </project-slot>
        <project-slot>
            <a href="https://youtu.be/6kqXeiinBKw"><img className="projPic" src="pics/shb.jpg" alt="" width="384" height="216" /></a>
                <desc-text>
                    Battle your favorite heros against<br />
                    eachother. Compare stats of popular<br />
                    super heros with a simple search!<br />
                    My first real use of JavaScript &<br />
                    diving into API&aposs
                </desc-text><br /><br />
                <proj-details>
                    Skills & Tools Used: HTML, CSS, JavaScript, VS Code, Superhero API<br /><br />
                    Published: <strong>September 5th, 2023</strong>
                </proj-details>
        </project-slot>
        <project-slot>
            <a href="https://kevinbrumaghin.netlify.app/"><img className="projPic" src="pics/portfolio.jpg" alt="" width="384" height="216" /></a>
                <desc-text>
                    My personal portfolio site<br />
                    custom built by me. After <br />
                    using a site builder at first <br />
                    I thought it would be better <br />
                    for me to develop my skills <br />
                    and build my own site from the ground up
                </desc-text><br /><br />
                <proj-details>
                    Skills & Tools Used: HTML, CSS, JavaScript, VS Code<br /><br />
                    Published: <strong>Work In Progress</strong>
                </proj-details>
        </project-slot>
    </section>
    <section className="motivation" id="motivation">
        <h2 className="sectionHeaderM">My Motivation</h2>
        <pic-bio>
            <img className="me" id="me" src="pics/motivation2.jpg" alt="" width="375" height="375" />
            <p className="motiv">
            My motivation for being the best Web Developer I can be comes<br />
            through the support and encouragement I get from my family, <br />
            friends and most importantly my girlfriend. We have dreams of<br /> building a
            life together and that invovles a wedding ring, buying a <br />house and
            eventually raising kids of our own. I am constantly thinking <br />about
            our future together and how I want to be able to support<br /> our dreams!
            I believe this path, in Web Development, is one that <br />I am meant to take
            and I know that I am passionate and skilled<br /> enought to do it!
            I am so excited for the future, and the dreams I&aposm chasing!
            </p>
        </pic-bio>
    </section>
    <section className="contact" id="contact">
        <h2 className="sectionHeaderC">Contact Me</h2>
        <form id="contact" action="https://formsubmit.co/probrum30@gmail.com" method="post">
            <h3>Send A Mesage</h3>
            <h4>Contact me for more info!</h4>
            <fieldset>
              <input placeholder="Your name" name="_subject" type="text" tabIndex="1" required />
            </fieldset>
            <fieldset>
              <input placeholder="Your Email Address" name="email" type="email" tabIndex="2" required />
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." name="textarea" tabIndex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" value="Send">Submit</button>
            </fieldset>
            <fieldset>
                <input type="hidden" name="_next" value="https://portfolio.kbrumaghin.com/" />
            </fieldset>
          </form>
    </section>
    </>
  )
}

export default App
