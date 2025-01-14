import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

const Projects = () => {
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
            <Link href="projects/details" className="mb-3">
              <div className="card card-compact hover:bg-gray-700 hover:shadow-xl transform hover:scale-105 transition duration-300">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Repository Assets Digital App</h2>
                  <p>
                    The Digital Asset Repository Application, built with Laravel
                    and Bootstrap, stores and manages...
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Projects;
