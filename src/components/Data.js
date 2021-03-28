import ff from '../images/ff.jpeg';
import fp from '../images/fp.png';
import nd from '../images/nd.png';

export const PersonalData = [
    {
        name: "Aleksandra",
        lastname: "Bystranowska-Takahashi",
        location: "Queens, NY, USA",
        languages: "Polish, English",
        coding: "JavaScript, Java, Ruby, SQL, CSS, HTML",
        frameworks: "React, Ruby on Rails, Sinatra",
        tools: "GitHub, GitHub Desktop, Postgres, Docker, VSCode",
        email: "a.bystranowska.takahashi@gmail.com",
        blog: "https://aleksandra-bystranowska.medium.com/",
        linkedin: "https://www.linkedin.com/in/aleksandra-bystranowska-takahashi-26635a89/",
        github: "https://github.com/aleksandra-b-t",
        description: "Enthusiastic and detail-oriented software engineer with experience in full-stack development. With an education in psychology of management, my passion is applying my technical skills to create impactful projects to make a change. I continuously focus on self-improvement and pride myself on being agile, organized, and thriving in a team enviroment."
    }
]

export const ExperienceData = [
    {
        name: "DoinGud",
        position: "Engineering Lead",
        dates: "03/2021 – actual",
        location: "",
        description: "Coordinating communications between teams and processes to help sync development among engineers, product managers, and designers. Owning development knowledge of Org Management tool features.",
        image: {fp}
    },
    {
        name: "DoinGud",
        position: "Frontend Engineer",
        dates: "01/2021 – actual",
        location: "",
        description: "Collaborated with the engineering team to redesign the profile page for a more user-friendly experience. An analyzed and updated database of the Fight Pandemics to improve resource search.",
        image: {}
    },
    {
        name: "ND CHANNEL",
        position: "Office Manager",
        dates: "04/2019 – 03/2020",
        location: "New York City Metropolitan Area",
        description: "Created and implemented a prioritization and order status management system which helped improve the order status tracking and made customer communications smoother resulting in less mistakes. Adapted customer service policy to make sure every customer was taken care of in an unconditional standard system, which in turn helped create an impeccable company reputation.",
        image: {nd}
    },
    {
        name: "Fabryka Formy S.A.",
        position: "General Manager",
        dates: "03/2016 – 11/2017",
        location: "Bytom, Śląskie, Poland",
        description: "Accomplished department objectives by creating a timetable for all necessary documentation, which helped improve communication between organization and accounting stuff. Implemented “Name” policy towards customers to ameliorate friendly atmosphere which helped maintain membership roster despite the high prices.",
        image: {ff}
    }
];

export const EducationData = [
    {
        name: "Flatiron School",
        location: "New York, NY",
        dates: "05/2020 - 08/2020",
        profile: "Full Stack Web Development, Software Engineering "
    },
    {
        name: "Upper Silesian Academy of Entrepreneurship",
        location: "Chorzow, Poland",
        dates: "09/2014 - 07/2017",
        profile: "Modern Business - Management and Accounting (major in Organizational Psychology)"
    }
];

export const ProjectsData = [
    {
        name: "One Step",
        language: "React, RoR",
        description: "React web application with Rails back-end that helps users research new activities to try. Includes evaluation which automatically surfaces activities that were matched best for the user. Use of design tools such as CSS. Utilized JSON Web Tokens and localStorage to store encrypted user information client-side. Active Model Serializers to provide a convention-based approach to serializing resources in Rails.",
        link: "",
        photo: "",
    },
    {
        name: "Finder",
        language: "React ",
        description: "React single-page app. This project is a simplified front end clone of Netflix. Hosted by firebase. Created with React and CSS using Grid and Flexbox and React hooks. Leveraged MovieDB APIs to search for movies and display real-time database details (TMDB API).",
        link: "",
        photo: "",
    },
    {
        name: "Movie Awards",
        language: "React",
        description: "JavaScript framework React single-page app. Built for the Summer 2021 Shopify UX and Web Developer Challenge. Fetched API from OMDb database, and use of localStorage to save nominations. Styled with CSS.",
        link: "",
        photo: "",
    },
    {
        name: "Sudoku",
        language: "Java Script",
        description: "Multiple difficulty levels Sudoku game build with CSS, HTML, and vanilla JavaScript. Created with CSS. Conditional rendering to include three levels of difficulty, three timeline options, and two themes.",
        link: "",
        photo: "",
    }
]
	
