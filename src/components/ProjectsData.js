/**
 * Data Containing information on all the projects
 */
const allProjects = [
  {
    name: "Kimberly Hotels",
    image: require("../images/kimberly_hms.png"),
    links: {
      live: "https://ldrex1.github.io/HMS/",
      gitHub: "https://github.com/LDrex1/HMSF",
    },
    about: `A hotel management system website created by a team of web developers. I single-handedly 
                implemented the landing-page, reservation-bookings, reservation-summary, and card-input
                pages. I also worked with the team on some of the other pages. 
                All pages are fully responsive.`,
    resources: ["HTML", "Bootstrap", "and Javascript"],
  },
  {
    name: "Quotes",
    image: require("../images/Quotes.png"),
    links: {
      live: "https://ldrex1.github.io/Quotes/",
      gitHub: "https://github.com/LDrex1/Quotes",
    },
    about: `A webApp where you can post your favorite quote of all 
                time and also see quotes from others. Uses authetication 
                services from firebase`,
    resources: ["Reactjs,", "SCSS", "and Firebase"],
  },
  {
    name: "finsweet",
    image: require("../images/finsweet.png"),
    links: {
      live: "https://ldrex1.github.io/mechanic/",
      gitHub: "https://github.com/LDrex1/mechanic",
    },
    about:
      "A multipaged website on an automobile repair company based on an existing figma design. All pages are fully responsive.",
    resources: ["HTML", "and CSS"],
  },
  {
    name: "3D World",
    image: require("../images/canvas.png"),
    links: {
      live: "https://ldrex1.github.io/Rhythm/",
      gitHub: "https://github.com/LDrex1/Rhythm",
    },
    about: `A webApp where you can interact with a 3D canvas.`,
    resources: [
      "React Js,",
      "Material UI,",
      "Three Js,",
      "React-three-fiber,",
      "React-drei,",
    ],
  },
  {
    name: "CSUF",
    image: require("../images/cfuf.png"),
    links: {
      live: "https://ldrex1.github.io/CSUF/",
      gitHub: "https://github.com/LDrex1/CSUF",
    },
    about: `A tech brand website built based on an existing figma design.
             All pages are fully responsive.`,
    resources: ["HTML", "and Bootstrap"],
  },
  {
    name: "Utopia",
    image: require("../images/utopia.png"),
    links: {
      live: "https://ldrex1.github.io/countriesInfo/",
      gitHub: "https://github.com/LDrex1/countriesInfo",
    },
    about: `A two-paged webApp that shows all the countries of the world and their main data.
            Data is gotten from the "countries rest API".
             All pages are fully responsive.`,
    resources: ["HTML,", "CSS", "and JavaScript"],
  },
  {
    name: "My Portfolio",
    image: require("../images/my_portfolio.png"),
    links: {
      live: "https://ldrex1.github.io/my_portfolio/",
      gitHub: "https://github.com/LDrex1/my_portfolio",
    },
    about: `A portfolio that contains information about me as a frontend engineer,
      my projects and contact information. PS: The website your currently on :)
      `,
    resources: ["React Js,", "and SCSS"],
  },
  {
    name: "getMyPosts",
    image: require("../images/getmyposts.png"),
    links: {
      live: "https://ldrex1.github.io/posts_from_API/",
      gitHub: "https://github.com/LDrex1/posts_from_API",
    },
    about: `A webApp where you can check, update, delete and view posts, similar to a social media website. Data was gotten from "yourplaceholder API".
             All pages are fully responsive.`,
    resources: ["HTML,", "CSS", "and JavaScript"],
  },
];

//Projects to be rendered
export const sites = allProjects.filter(({ name }) => name !== "getMyPosts");
// export const sites = [
//   {
//     name: "Kimberly Hotels",
//     image: require("../images/kimberly_hms.png"),
//     links: {
//       live: "https://ldrex1.github.io/HMS/",
//       gitHub: "https://github.com/LDrex1/HMSF",
//     },
//     about: `A hotel management system website created by a team of web developers. I single-handedly
//             implemented the landing-page, reservation-bookings, reservation-summary, and card-input
//             pages. I also worked with the team on some of the other pages.
//             All pages are fully responsive.`,
//     resources: ["HTML", "Bootstrap", "and Javascript"],
//   },
//   {
//     name: "Quotes",
//     image: require("../images/Quotes.png"),
//     links: {
//       live: "https://ldrex1.github.io/Quotes/",
//       gitHub: "https://github.com/LDrex1/Quotes",
//     },
//     about: `A webApp where you can post your favorite quote of all
//             time and also see quotes from others. Uses authetication
//             services from firebase`,
//     resources: ["Reactjs,", "SCSS", "and Firebase"],
//   },
//   {
//     name: "finsweet",
//     image: require("../images/finsweet.png"),
//     links: {
//       live: "https://ldrex1.github.io/mechanic/",
//       gitHub: "https://github.com/LDrex1/mechanic",
//     },
//     about:
//       "A multipaged website on an automobile repair company based on an existing figma design. All pages are fully responsive.",
//     resources: ["HTML", "and CSS"],
//   },
//   {
//     name: "CSUF",
//     image: require("../images/cfuf.png"),
//     links: {
//       live: "https://ldrex1.github.io/CSUF/",
//       gitHub: "https://github.com/LDrex1/CSUF",
//     },
//     about: `A tech brand website built based on an existing figma design.
//          All pages are fully responsive.`,
//     resources: ["HTML", "and Bootstrap"],
//   },
//   {
//     name: "My Portfolio",
//     image: require("../images/getmyposts.png"),
//     links: {
//       live: "https://ldrex1.github.io/my_portfolio/",
//       gitHub: "https://github.com/LDrex1/my_portfolio",
//     },
//     about: `A portfolio that contains information about me as a frontend engineer,
//     my projects and contact information. PS: The website your currently on :)
//     `,
//     resources: ["React Js,", "and SCSS"],
//   },
//   {
//     name: "3D World",
//     image: require("../images/canvas.png"),
//     links: {
//       live: "https://ldrex1.github.io/Rhtyhm/",
//       gitHub: "https://github.com/LDrex1/Rhythm",
//     },
//     about: `A webApp where you can interact with a 3D canvas.`,
//     resources: [
//       "React Js,",
//       "Material UI",
//       "Three Js",
//       "React-three-fiber",
//       "React-drei",
//     ],
//   },
//   {
//     name: "Utopia",
//     image: require("../images/utopia.png"),
//     links: {
//       live: "https://ldrex1.github.io/countriesInfo/",
//       gitHub: "https://github.com/LDrex1/countriesInfo",
//     },
//     about: `A two-paged webApp that shows all the countries of the world and their main data.
//         Data is gotten from the "countries rest API".
//          All pages are fully responsive.`,
//     resources: ["HTML,", "CSS", "and JavaScript"],
//   },
// ];

/**
 * All projects name include
 * [Kimberly Hotels, Quotes, finsweet, 3D World, CUSF, Utopia, My Portfolio, and getMyPosts]
 */

//
