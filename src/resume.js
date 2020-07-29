const aboutMe = {
    key: 0,
    name: "Abraham Sesay",
    title: "Computer Science Student"
} 

const contact = {
    key: 1,
    email: "abrahamsesay96@gmail.com",
    github: "https://github.com/Absesay"
}

const education = {
    key: 2,
    title: "Education",
    degree: "Bachelor of Science in Computer Science",
    school: "St. Cloud State University (SCSU) — St Cloud MN",
    year: "Dec 2022 "
}

const skills = {
    key: 3,
    languages: {
        title: "Programming Languages",
        content: "C++, Java, Python, Javascript(ES6), HTML5, CSS, MySQL, Bash"
    },
    libraries: {
        title: "Libraries & Frameworks",
        content: "Flask, Node.js, Express, MongoDB, Mongoose, React"
    },
    tools: {
        title: "Tools & Platforms",
        content: "Git, Heroku, Linux/Unix CLI"
    },
    classes: {
        title: "Relevant Courses",
        content: "Object-Oriented Programming, Recursion, Data Structures  & Algorithms, Computer Architecture, Discrete Math, Calculus"
    }
}

const experiences = {   
    key: 5,
    title: "Experience",
    exps: [
        {
            exp1: "Full-stack Web Development online Bootcamp - Udemy",
            time: "DEC 2019 - PRESENT",
            bPoints: [
                "Implemented  a RESTful API for a wiki service using Node, Express and MongoDB with Mongoose",
                "Used a variety of NPM  packages and Google Auth to encrypt user passwords in a MongoDB database",
                "Built portfolio a website using HTML and CSS and hosted the site using GitHub pages"
            ]
        },
        {
            exp2: "Exploring Algorithms & Data Structures",
            time: "AUG 2019 - MAY 2020",
            bPoints: [
                "Developed a strong understanding of object-oriented design, data structures, and algorithms by building syntactically correct programs using C++",
                "Design and implemented an employee database using a sorting algorithm and binary search",
                "Adept at handling ambiguous or undefined challenges through strong problem-solving skills and effective communication"
            ]
        },
        {
            exp3: "Information Services Intern -  The Toro Company",
            time: "MAY 2018 - AUG 2018",
            bPoints: [
                "Responsible for working with internal company partners to create awareness about services provided by the Information Technology Department",
                "Scheduled and led meetings to facilitate ideas about creating video tutorials that could be used in teaching over 125 employees"
            ]
        },

    ]
}

const activities = [
    {
        title: "Volunteer - Tedx St Cloud",
        date: "2017 & 2018",
        content: "Responsible for helping over 300 guests register for the event and handing out gifts bags"
    },
    {
        title: "President -National Society of Black Engineers, SCSU ",
        date: "JUNE 2019 - DEC 2019",
        content: "Led and coordinated a group of 25 students in bi-weekly meetings"
    }
]

export {aboutMe, contact, education, skills, experiences, activities}
