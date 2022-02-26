Personal portfolio site built with React, Node, Express, and MongoDB.
Showcases lots of JavaScript animation wizardry and functionality to woo and impress.
This project uses class components. In the future it may be refactored to use functional components instead.
Code has undergone refactoring to split out CSS sections and to further modularize components.

Sections
  Title,
  About
    Introduction,
    Work Experience,
    Accolades,
    Skills,
  Testimonials,
  Contact,
  Projects,
  SingleProject,
  Authenticate,
  Compose

Title page features a random background that changes upon refresh or revisit.
Authenticate and Compose admin dashboard to enter new project entries; Authentication is cookie-based.


Routes
GET {
  /home,
  /linkedin,
  /projects,
  /authenticate,
  /compose,
  /unsplash,
  /singleproject,
  /project/:id,
  /projectss,
  /composes,
  /
}
POST: {
  /home,
  /authenticate,
  /compose
}

Middleware
  forceHttps: Forces SSL to be used if user tries to request an http resource.
  herokuredirect: Forces redirection if accessed through Heroku domain instead of custom domain.
  middleware: authentication middleware for Authenticate and Compose components.

Features
  Environment vars used to hide confidential values (or values that should be easily configurable).
  A concerted attempt to adhere to the DRY principle is in place.
  Comments are regrettably minimal.
  Input fields are validated.
  Responsive design is embodied through usage of flexbox, CSS grid, media queries, and relative units.
  Cross browser testing implemented with Selenium.
  Designed with accessibility in mind (intuitive tab order, alt descriptions on images, usage of landmarks, adherence to heading structure, accessible tap targets, tab indexing, ARIA labels, etc).
  Stores records of mail messages and uploaded projects in the database.
  Uses a mail relay to mail confirmation to form inputters and to deliver the mail to me, the recipient.
  Serves project images using cloudinary; Unsplash used for Title background.
  Basic SEO practices are in place (meta tags and mobile responsiveness).
  The project does not work on Internet Explorer at this time.
