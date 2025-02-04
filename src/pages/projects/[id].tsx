import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Detail = () => {
  const moreProjects = [
    {
      id: 1,
      title: "Metro Indonesia Software Company Profile",
      desc: "In this project, I developed a company profile website for Metro Indonesian Software, using React for the frontend and Laravel for the backend. The UI/UX design was crafted in Figma and seamlessly integrated via APIs. The website serves as a dynamic company profile for Metro Indonesian Software, showcasing an overview of the company, its clients, completed projects, team members, and other key information. Admins can easily update all displayed content, allowing for real-time adjustments to keep the information current.",
      img: "/images/projects/Metro Software Indonesia.png",
    },
    {
      id: 2,
      title: "Repository Asset Digital",
      desc: "The Digital Asset Repository Application, built with Laravel and Bootstrap, stores and manages digital assets in one place, making it easy for users to search, organize, and access their assets efficiently. With powerful features, it streamlines asset management for personal and professional use.",
      img: "/images/projects/Repository Asset Digital.png",
    },
    {
      id: 3,
      title:
        "Tourism Object Information Website and Accommodation Recommendations",
      desc: "his application is a decision support system designed to help tourists find the best accommodations, tour packages, and attractions, with a focus on promoting Alahan Panjang.",
      img: "/images/projects/SIOP.png",
    },
    {
      id: 4,
      title: "Extracurricular Decision Support System",
      desc: "This application is a decision support system designed to help students choose extracurricular activities that align with their interests and skills. Using the SMART (Simple Multi-Attribute Rating Technique) method, the application presents a series of questions for students to answer. These responses are then calculated to generate a tailored recommendation for the most suitable extracurricular activity.",
      img: "/images/projects/Ekskul.png",
    },
    {
      id: 5,
      title: "Transparency Information Website for Village Fund Usage",
      desc: "This application is built using Laravel for the backend and Tailwind CSS for the frontend. It serves as a transparency platform for village fund management, enabling administrators to provide real-time updates on fund allocations, expenditures, and financial reports. The system ensures accountability and easy access to crucial financial data for the public, fostering trust and transparency in local governance.",
      img: "/images/projects/WITPDD.png",
    },
    {
      id: 6,
      title: "ALaundry - Modern Laundry Service UI",
      desc: "ALaundry is a sleek and responsive user interface designed for a modern laundry service application. Built with React.js and styled using Tailwind CSS, this project focuses on delivering a clean and intuitive UI experience. While it currently serves as a front-end prototype.",
      img: "/images/projects/Alaundry.png",
    },
    {
      id: 7,
      title: "Url Shortening Website",
      desc: "This project is a URL shortening website that utilizes an API to generate short links efficiently. Built with Vue.js for the frontend and styled using Tailwind CSS, the application offers a clean and modern interface for users to shorten, manage, and track URLs. The seamless API integration ensures quick and reliable link generation, making it a practical solution for efficient URL management.",
      img: "/images/projects/shortlink.png",
    },
    {
      id: 8,
      title: "Easybank Landing Page",
      desc: "Easybank Landing Page is a fully responsive UI design created using Tailwind CSS. This project showcases a modern and clean landing page layout with smooth animations and an intuitive design, making it an ideal front-end template for digital banking services.",
      img: "/images/projects/easybank.png",
    },
    {
      id: 9,
      title: "Sunnyside Landing Page",
      desc: "Sunnyside Landing Page is a visually appealing and responsive UI built with Tailwind CSS. Designed for a creative agency, this landing page features engaging layouts, vibrant colors, and a structured content presentation to enhance user experience.",
      img: "/images/projects/sunnyside.png",
    },
    {
      id: 10,
      title: "Age Calculator App",
      desc: "Age Calculator App is a simple yet functional UI built with Vue.js and styled using Tailwind CSS. This application allows users to input their birth date and instantly calculate their exact age in years, months, and days with a clean and responsive interface.",
      img: "/images/projects/age.png",
    },
    {
      id: 11,
      title: "Interactive Card",
      desc: "Interactive Card is a modern and dynamic UI designed with Vue.js and Tailwind CSS. This project features real-time form validation and interactive previews, making it an ideal template for digital payment or credit card forms with a sleek and user-friendly design.",
      img: "/images/projects/interactive card.png",
    },
    {
      id: 12,
      title: "Pokedex",
      desc: "Pokedex is a web application that provides detailed information about Pokémon. Built with Vue.js and styled using Tailwind CSS, this app fetches real-time Pokémon data from an API, allowing users to search, browse, and explore various Pokémon along with their stats, abilities, and types in a clean and interactive interface.",
      img: "/images/projects/pokemon.png",
    },
    {
      id: 13,
      title: "Healthcare Landing Page",
      desc: "Healthcare Landing Page is a responsive and modern UI designed using Bootstrap. This project provides a clean and professional layout suitable for medical and healthcare services, featuring well-structured sections for services, testimonials, and contact information.",
      img: "/images/projects/healthcare.png",
    },
  ];

  const item = [
    {
      id: 1,
      title: "Metro Indonesia Software Company Profile",
      desc: "In this project, I developed a company profile website for Metro Indonesian Software, using React for the frontend and Laravel for the backend. The UI/UX design was crafted in Figma and seamlessly integrated via APIs. The website serves as a dynamic company profile for Metro Indonesian Software, showcasing an overview of the company, its clients, completed projects, team members, and other key information. Admins can easily update all displayed content, allowing for real-time adjustments to keep the information current.",
      imgs: [
        "/images/projects/Metro Software Indonesia.png",
        "/images/bg1.jpg",
        "/images/bg2.jpg",
        "/images/bg3.jpg",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Tailwind CSS", img: "/images/stack/tailwind.svg" },
        { name: "React", img: "/images/stack/react.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      link: "https://metrosoftware.vercel.app/",
      github: "https://github.com/arysyahbana/Metro-Company-Profile",
    },
    {
      id: 2,
      title: "Repository Asset Digital",
      desc: " The Digital Asset Repository Application, built with Laravel and Bootstrap, stores and manages digital assets in one place, making it easy for users to search, organize, and access their assets efficiently. With powerful features, it streamlines asset management for personal and professional use. With these features and more, the Digital Asset Repository Application aims to be an indispensable tool for efficient digital asset management.",
      imgs: [
        "/images/projects/Repository Asset Digital.png",
        "/images/bg1.jpg",
        "/images/bg2.jpg",
        "/images/bg3.jpg",
      ],
    },
    {
      id: 3,
      title:
        "Tourism Object Information Website and Accommodation Recommendations",
      desc: "his application is a decision support system designed to help tourists find the best accommodations, tour packages, and attractions, with a focus on promoting Alahan Panjang.",
      imgs: ["/images/projects/SIOP.png"],
    },
    {
      id: 4,
      title: "Extracurricular Decision Support System",
      desc: "This application is a decision support system designed to help students choose extracurricular activities that align with their interests and skills. Using the SMART (Simple Multi-Attribute Rating Technique) method, the application presents a series of questions for students to answer. These responses are then calculated to generate a tailored recommendation for the most suitable extracurricular activity.",
      imgs: ["/images/projects/Ekskul.png"],
    },
    {
      id: 5,
      title: "Transparency Information Website for Village Fund Usage",
      desc: "This application is built using Laravel for the backend and Tailwind CSS for the frontend. It serves as a transparency platform for village fund management, enabling administrators to provide real-time updates on fund allocations, expenditures, and financial reports. The system ensures accountability and easy access to crucial financial data for the public, fostering trust and transparency in local governance.",
      imgs: ["/images/projects/WITPDD.png"],
    },
    {
      id: 6,
      title: "ALaundry - Modern Laundry Service UI",
      desc: "ALaundry is a sleek and responsive user interface designed for a modern laundry service application. Built with React.js and styled using Tailwind CSS, this project focuses on delivering a clean and intuitive UI experience. While it currently serves as a front-end prototype.",
      imgs: ["/images/projects/Alaundry.png"],
    },
    {
      id: 7,
      title: "Url Shortening Website",
      desc: "This project is a URL shortening website that utilizes an API to generate short links efficiently. Built with Vue.js for the frontend and styled using Tailwind CSS, the application offers a clean and modern interface for users to shorten, manage, and track URLs. The seamless API integration ensures quick and reliable link generation, making it a practical solution for efficient URL management.",
      imgs: ["/images/projects/shortlink.png"],
    },
    {
      id: 8,
      title: "Easybank Landing Page",
      desc: "Easybank Landing Page is a fully responsive UI design created using Tailwind CSS. This project showcases a modern and clean landing page layout with smooth animations and an intuitive design, making it an ideal front-end template for digital banking services.",
      imgs: ["/images/projects/easybank.png"],
    },
    {
      id: 9,
      title: "Sunnyside Landing Page",
      desc: "Sunnyside Landing Page is a visually appealing and responsive UI built with Tailwind CSS. Designed for a creative agency, this landing page features engaging layouts, vibrant colors, and a structured content presentation to enhance user experience.",
      imgs: ["/images/projects/sunnyside.png"],
    },
    {
      id: 10,
      title: "Age Calculator App",
      desc: "Age Calculator App is a simple yet functional UI built with Vue.js and styled using Tailwind CSS. This application allows users to input their birth date and instantly calculate their exact age in years, months, and days with a clean and responsive interface.",
      imgs: ["/images/projects/age.png"],
    },
    {
      id: 11,
      title: "Interactive Card",
      desc: "Interactive Card is a modern and dynamic UI designed with Vue.js and Tailwind CSS. This project features real-time form validation and interactive previews, making it an ideal template for digital payment or credit card forms with a sleek and user-friendly design.",
      imgs: ["/images/projects/interactive card.png"],
    },
    {
      id: 12,
      title: "Pokedex",
      desc: "Pokedex is a web application that provides detailed information about Pokémon. Built with Vue.js and styled using Tailwind CSS, this app fetches real-time Pokémon data from an API, allowing users to search, browse, and explore various Pokémon along with their stats, abilities, and types in a clean and interactive interface.",
      imgs: ["/images/projects/pokemon.png"],
    },
    {
      id: 13,
      title: "Healthcare Landing Page",
      desc: "Healthcare Landing Page is a responsive and modern UI designed using Bootstrap. This project provides a clean and professional layout suitable for medical and healthcare services, featuring well-structured sections for services, testimonials, and contact information.",
      imgs: ["/images/projects/healthcare.png"],
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const [selectedImg, setSelectedImg] = useState("");
  const [randomProjects, setRandomProjects] = useState([]);

  useEffect(() => {
    if (!id) return;

    // Filter project yang sedang ditampilkan
    const filteredProjects = moreProjects.filter(
      (projectAll) => projectAll.id !== parseInt(id)
    );

    // Acak dan ambil 8 item
    const shuffled = filteredProjects
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);
    setRandomProjects(shuffled);
  }, [id]);

  // Ambil data berdasarkan id dari URL
  const project = item.find((p) => p.id === Number(id));

  useEffect(() => {
    if (project && project.imgs.length > 0 && !selectedImg) {
      setSelectedImg(project.imgs[0]); // Set gambar pertama sebagai default
    }
  }, [project]);

  if (!project)
    return <p className="text-center text-white">Data tidak ditemukan</p>;

  return (
    <div>
      <Navbar />
      <div className="bg-base-100 pb-16">
        <div className="container mx-auto pt-60 px-12">
          <div className="flex flex-col xl:flex-row gap-10 justify-center">
            <div className="flex flex-col gap-3 items-center">
              <div className="overflow-hidden lg:h-[400px] rounded-2xl">
                <img
                  src={selectedImg}
                  alt={project.title}
                  className="max-w-[300px] lg:max-w-[500px] xl:max-w-[700px] object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {project.imgs && project.imgs.length > 0 ? (
                  project.imgs.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImg(img)}
                      className={`cursor-pointer rounded-2xl overflow-hidden h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] transition duration-300 hover:scale-105 hover:shadow-xl hover:border-white hover:border-2 bg-slate-600 ${
                        selectedImg === img ? "border-2 border-white" : ""
                      }`}
                    >
                      <img src={img} className="object-cover w-full h-full" />
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold text-white">{project.title}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.stacks && project.stacks.length > 0 ? (
                  project.stacks.map((stack, index) => (
                    <div key={index} className="tooltip" data-tip={stack.name}>
                      <button className="bg-violet-500 p-1 rounded-lg hover:scale-105 transition duration-300">
                        <img src={stack.img} alt="" className="w-5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              <p>{project.desc}</p>

              <div className="flex flex-wrap gap-3 mt-5">
                {/* Tampilkan link website jika ada */}
                {project.link && (
                  <a
                    href={project.link}
                    className="mb-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-compact bg-slate-700 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-110 transition duration-300">
                      <div className="card-body">
                        <div className="flex items-center justify-between gap-2">
                          <img
                            src="/images/icons/arrow.svg"
                            alt="View Web"
                            className="w-3"
                          />
                          <p className="font-bold">View Web</p>
                        </div>
                      </div>
                    </div>
                  </a>
                )}

                {/* Tampilkan link GitHub jika ada */}
                {project.github && (
                  <a
                    href={project.github}
                    className="mb-3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="card card-compact bg-slate-700 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-110 transition duration-300">
                      <div className="card-body">
                        <div className="flex items-center justify-between gap-2">
                          <img
                            src="/images/icons/github.svg"
                            alt="GitHub"
                            className="w-5"
                          />
                          <p className="font-bold">GitHub</p>
                        </div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-32 px-12">
          <p className="text-center text-3xl font-bold text-white mb-8">
            More Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {randomProjects.map((project2) => (
              <a
                key={project2.id}
                href={`/project/${project2.id}`}
                className="mb-3"
              >
                <div className="card card-compact hover:bg-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-300">
                  <figure>
                    <img
                      src={project2.img}
                      alt={project2.title}
                      className="w-full h-40 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{project2.title}</h2>
                    <p>{project2.desc.substring(0, 100)}...</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
