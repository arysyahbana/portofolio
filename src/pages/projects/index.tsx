import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Link from "next/link";
import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const Projects = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const items = [
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
  ];
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div>
      <Navbar />

      <div className="bg-base-100 pb-16">
        <div className="container mx-auto pt-52 px-12">
          <p className="text-center text-3xl font-bold text-white mb-8">
            My Projects
          </p>
          <div className="flex justify-center mt-7 mb-20">
            <GitHubCalendar username="arysyahbana" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {paginatedItems && paginatedItems.length > 0 ? (
              paginatedItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/projects/${item.id}`}
                  className="mb-3"
                >
                  <div className="card card-compact hover:bg-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-300">
                    <figure>
                      <img src={item.img} alt={item.title} />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        {item.title && item.title.length > 28
                          ? `${item.title.substring(0, 28)}...`
                          : item.title}
                      </h2>
                      <p>
                        {item.desc && item.desc.length > 80
                          ? `${item.desc.substring(0, 90)}...`
                          : item.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div className="flex justify-center mt-12">
            <div className="join">
              <button
                className={`join-item btn ${
                  currentPage === 1 ? "btn-disabled" : ""
                }`}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`join-item btn ${
                    currentPage === index + 1 ? " bg-violet-500" : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              <button
                className={`join-item btn ${
                  currentPage === totalPages ? "btn-disabled" : ""
                }`}
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Projects;
