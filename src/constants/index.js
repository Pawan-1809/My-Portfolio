import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  ml,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  python,
  numpy,
  pandas,
  sklearn,
  matplot,
  tensor,
  langchain,
  hugging,
  pytorch,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  genai,
  blue,
  cloud,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend-Developer",
    icon: web,
  },
  {
    title: "ML-Engineer",
    icon: ml,
  },
  {
    title: "Basic Backend Developer",
    icon: backend,
  },
  {
    title: "Gen-AI Learner",
    icon: genai,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "Sk-learn",
    icon: sklearn,
  },
  {
    name: "TensorFlow",
    icon: tensor,
  },
  {
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "Hugging Face",
    icon: hugging,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "BlueStock, Kolkata, India",
    icon: blue,
    iconBg: "#383E56",
    date: "July 2025 – August 2025",
    points: [
      "Researched and analyzed emerging technologies to design innovative solutions for real-world development challenges.",  
      "Integrated RESTful APIs and optimized data flow to enhance scalability and maintainability of existing applications.",  
      "Collaborated with the development team to deliver efficient, user-focused features and improve overall system performance.",
    ],
  },
  {
    title: "Google Cloud Skill Boost Program",
    company_name: "Remote",
    icon: cloud,
    iconBg: "#383E56",
    date: "Oct 2024 – Nov 2024",
    points: [
      "Gained hands-on experience with Google Cloud services including Cloud Vision API, Cloud Speech API, and API Gateway to analyze images, process speech, and manage API traffic efficiently.",
      "Explored AI/ML capabilities by developing Generative AI applications using Gemini and Streamlit, improving prompt design in Vertex AI for better AI responses.",
      "Built and deployed cloud-based applications on Google App Engine, Cloud Functions, and Cloud Storage, implementing scalable and serverless architectures.",
    ],
  },
];

const techQuotes = [
  {
    quote:
      "Technology is best when it brings people together.",
    name: "Matt Mullenweg",
    image: firstTestimonial,
  },
  {
    quote:
      "It has become appallingly obvious that our technology has exceeded our humanity.",
    name: "Albert Einstein",
    image: secondTestimonial,
  },
  {
    quote:
      "The science of today is the technology of tomorrow.",
    name: "Edward Teller",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "College Student Management Portal",
    description:
      "Role-based web app for students, staff, and HODs with Bootstrap UI and integrated charts.",
    tags: [
      { name: "django", color: "blue-text-gradient" },
      { name: "bootstrap", color: "white-text-gradient" },
      { name: "charts", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Pawan-1809/College-Student-Management-Portal",
  },
  {
    name: "Disease Prediction Model",
    description:
      "ML model predicting diseases using Random Forest, XGBoost, and voting classifiers.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "ml", color: "green-text-gradient" },
      { name: "xgboost", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Pawan-1809/Disease-Prediction-Model",
  },
  {
    name: "Web Scraping Amazon Product Reviews",
    description:
      "Python tool extracting product reviews and ratings for sentiment analysis.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scraping", color: "green-text-gradient" },
      { name: "sentiment", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Pawan-1809/Amazon-Product-Review-Scraper",
  },
  {
    name: "AgroHelp (Smart Farming Assistant)",
    description:
      "Website detecting plant diseases, providing weather forecasts, crop suggestions, and IoT-based automations.",
    tags: [
      { name: "website", color: "blue-text-gradient" },
      { name: "iot", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Pawan-1809/AgroHelp-Smart-Farming-Assistant",
  },
  {
    name: "Resume Rating using Machine Learning",
    description:
      "ML model evaluating resumes and scoring them based on relevance to job descriptions.",
    tags: [
      { name: "ml", color: "blue-text-gradient" },
      { name: "python", color: "green-text-gradient" },
      { name: "resume", color: "pink-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Pawan-1809/Resume-Rating-ML",
  },
  {
    name: "Weather Web App",
    description:
      "Web app fetching weather data and forecast built using FastAPI and Streamlit.",
    tags: [
      { name: "fastapi", color: "blue-text-gradient" },
      { name: "streamlit", color: "green-text-gradient" },
      { name: "weather", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Pawan-1809/Weather-Web-App",
  },
];

export { services, technologies, experiences, techQuotes, projects };
