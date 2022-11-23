const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://main--sparkling-lily-63070f.netlify.app',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Kateryna Tsymbal',
  role: 'Software Engineer',
  description:
    "Hello there, I'm Kat. I graduated from App Academy not so long ago and now I'm looking for my first Software Engineering opportunity. After years of observing how the world changes so quickly, and new technologies appearing every day, I want to be part of this great progress. I am always open to challenges and constructive feedback, open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to developing high-quality and unique products.",
  resume: 'https://docs.google.com/document/d/144spJqQPp88vD34UEXY8SU-qjBW9Mxn-A3JckK5QU48/edit?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/kateryna-tsymbal-2824b219a/',
    github: 'https://github.com/TKat72',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'ArtStagram',
    description:
      "This is a clone of Instagram ( Not pixel perfect), this is a full stuck application with two full crud. You can create an account, log in and sign out. As a login user, you can create a post by choosing up to 3 pictures. The newly created post will appear on top of the feed, if post belongs to the user, you can update or delete your post. You can leave a comment on any post including yours, if the comment belongs to the user, you can update the post or delete it. As a login user, you can check your profile page with all your posts and comments. The project was created with Pothun, Flask, SqlAlckemy, and Alembic for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with Docker, GitHub, and Heroku. File storage AWS",
    stack: ['React', 'Redux', 'Python', 'Flask', 'SqlAlckemy'],
    sourceCode: 'https://github.com/TKat72/artStagramPj',
    livePreview: 'https://artstagram7.herokuapp.com',
    url: 'https://artstargarm2-backet.s3.amazonaws.com/169609150-8151cb10-c755-4629-b654-a694f81626f8.png'
  },
  {
    name: 'Boss-Shots',
    description:
      "This is a clone of Flicker ( Not pixel perfect), this is a full stuck application with two full crud and tree parsley crud futures. You can create an account, log in and sign out. As a login user, you can add a photo and it will be displayed in the main Feed, if a photo belongs to the user you will see a list of them o the right side of the main page, you can update or delete your photos, for the file storage we used AWS. You can add tags to your photo, by selecting a tag from the given list of tags or creating a new one, the new tag will be added to the list of tags. You can leave a comment on the photo. Also as a login user, you can create an album and add photos to it, from all photos that were added by you or others users. All of your albums will be displayed on the right side of the main page right below your photos, you can update and delete your albums. The project was created with Pothun, Flask, SqlAlckemy, and Alembic for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with Docker, GitHub, and Heroku. File storage AWS",
    stack: ['React', 'Redux', 'Python', 'Flask', 'SqlAlckemy'],
    sourceCode: 'https://github.com/zavadev/boss-shots',
    livePreview: 'https://boss-shots.herokuapp.com/',
    url: 'https://artstargarm2-backet.s3.amazonaws.com/Screen+Shot+2022-05-25+at+12.30.53+PM.png'
  },
  {
    name: 'Give In ',
    description:
      "This is a simple full stuck application, for posting upcoming events or give away free products for people in need. You can register , sign-in or use demo user to see functionality . As login user you can see all events , post event if event belong to you u can edit and delete. As login user you can register for event , delete your registration or edit it . If event belong to you you can se all registrations for this event This project was created with Express, Sequelize, and PostSql for the backend and React.js, Redux.js, HTML, and CSS for the frontend development. Deployed with GitHub, and Heroku.",
    stack: ['React', 'Redux','JavaScript','Express'],
    sourceCode: 'https://github.com/TKat72/project-GiveIn',
    livePreview: 'https://givein1.herokuapp.com',
    url: 'https://artstargarm2-backet.s3.amazonaws.com/Screen+Shot+2022-05-31+at+12.17.20+AM.png'
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'Python',
  'Flask',
  'SQLAlchemy',
  'Alembic',
  'jQuery',
  'SQL',
  'PostgreSQL',
  'AWS',
  'Heroku',
  'Docker',
  'Express',
  'Postgres',
  'Postman',
  'Sequelize'



]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tsymbal.katena@gmail.com',
}

export { header, about, projects, skills, contact }
