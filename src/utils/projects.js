import evillage from '/evillage.jpg'
import tictactoe from '/tic-tac-toe.png'
import travel_dest from '/travel-destination.jpg'
import cgpa_calc from '/cgpa-calculator.webp'
import portfolio from '/profile.jpg'
export const PROJECTS = [
    {
        title: "E-Village through Digital-Connectivity",
        image: evillage,
        description: "A website where Village panchayat can share/display information of village to the outer world",
        technologies: ["HTML", "CSS", "Js", "JQuery", "PHP", "PostgreSQL"]
    },
    {
        title: "Tic-Tac-Toe Game",
        image: tictactoe,
        description: "A ReactJs website to play tic tac toe game",
        technologies: ["ReactJs", "TailwindCSS"]
    },
    {
        title: "Travel Destination",
        image: travel_dest,
        description: "A fully functional travel destination website where users can share/suggest their favourite places to travel with features like CRUD operation, and user Authentication",
        technologies: ["ReactJs", "TailwindCSS", "NodeJs", "ExpressJs", "MongoDB"]
    },
    {
        title: "CGPA to Percentage Calculator",
        image: cgpa_calc,
        description: "A ReactJs website to convert CGPA to Percentage",
        technologies: ["ReactJs", "TailwindCSS"]
    },
    {
        title: "Personal Portfolio",
        image: portfolio,
        description: "A ReactJs website to convert CGPA to Percentage",
        technologies: ["ReactJs", "TailwindCSS", "Framer Motion"]
    },
]