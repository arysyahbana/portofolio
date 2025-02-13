import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const Detail = () => {
  type ProjectType = {
    id: number;
    title: string;
    desc: string;
    img?: string;
    imgs?: string[];
    stacks?: { name: string; img: string }[];
    link?: string;
    github?: string;
  };

  const moreProjects: ProjectType[] = [
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

  const item: ProjectType[] = [
    {
      id: 1,
      title: "Metro Indonesia Software Company Profile",
      desc: "In this project, I developed a company profile website for Metro Indonesian Software, using React for the frontend and Laravel for the backend. The UI/UX design was crafted in Figma and seamlessly integrated via APIs. The website serves as a dynamic company profile for Metro Indonesian Software, showcasing an overview of the company, its clients, completed projects, team members, and other key information. Admins can easily update all displayed content, allowing for real-time adjustments to keep the information current.",
      imgs: [
        "/images/projectsdetail/metro/1.png",
        "/images/projectsdetail/metro/2.png",
        "/images/projectsdetail/metro/3.png",
        "/images/projectsdetail/metro/4.png",
        "/images/projectsdetail/metro/5.png",
        "/images/projectsdetail/metro/6.png",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Tailwind CSS", img: "/images/stack/tailwind.svg" },
        { name: "React", img: "/images/stack/react.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      link: "https://metrosoftware.id/",
      github: "https://github.com/arysyahbana/Metro-Company-Profile",
    },
    {
      id: 2,
      title: "Repository Asset Digital",
      desc: " The Digital Asset Repository Application, built with Laravel and Bootstrap, stores and manages digital assets in one place, making it easy for users to search, organize, and access their assets efficiently. With powerful features, it streamlines asset management for personal and professional use. With these features and more, the Digital Asset Repository Application aims to be an indispensable tool for efficient digital asset management.",
      imgs: [
        "/images/projectsdetail/digitalasset/1.png",
        "/images/projectsdetail/digitalasset/2.png",
        "/images/projectsdetail/digitalasset/3.png",
        "/images/projectsdetail/digitalasset/4.png",
        "/images/projectsdetail/digitalasset/5.png",
        "/images/projectsdetail/digitalasset/6.png",
        "/images/projectsdetail/digitalasset/7.png",
        "/images/projectsdetail/digitalasset/8.png",
        "/images/projectsdetail/digitalasset/9.png",
        "/images/projectsdetail/digitalasset/10.png",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      link: "https://vokasi.unp.ac.id/aset-digital/",
      github: "https://github.com/arysyahbana/MAAD-Laravel-10",
    },
    {
      id: 3,
      title:
        "Tourism Object Information Website and Accommodation Recommendations",
      desc: "his application is a decision support system designed to help tourists find the best accommodations, tour packages, and attractions, with a focus on promoting Alahan Panjang.",
      imgs: [
        "/images/projectsdetail/siop/1.png",
        "/images/projectsdetail/siop/2.png",
        "/images/projectsdetail/siop/3.png",
        "/images/projectsdetail/siop/4.png",
        "/images/projectsdetail/siop/5.png",
        "/images/projectsdetail/siop/6.png",
        "/images/projectsdetail/siop/7.png",
        "/images/projectsdetail/siop/8.png",
        "/images/projectsdetail/siop/9.png",
        "/images/projectsdetail/siop/10.png",
        "/images/projectsdetail/siop/11.png",
        "/images/projectsdetail/siop/12.png",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Tailwind CSS", img: "/images/stack/tailwind.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      github: "https://github.com/arysyahbana/siop",
    },
    {
      id: 4,
      title: "Extracurricular Decision Support System",
      desc: "This application is a decision support system designed to help students choose extracurricular activities that align with their interests and skills. Using the SMART (Simple Multi-Attribute Rating Technique) method, the application presents a series of questions for students to answer. These responses are then calculated to generate a tailored recommendation for the most suitable extracurricular activity.",
      imgs: [
        "/images/projectsdetail/ekskul/1.png",
        "/images/projectsdetail/ekskul/2.png",
        "/images/projectsdetail/ekskul/3.png",
        "/images/projectsdetail/ekskul/4.png",
        "/images/projectsdetail/ekskul/5.png",
        "/images/projectsdetail/ekskul/6.png",
        "/images/projectsdetail/ekskul/7.png",
        "/images/projectsdetail/ekskul/8.png",
        "/images/projectsdetail/ekskul/9.png",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Tailwind CSS", img: "/images/stack/tailwind.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      github: "https://github.com/arysyahbana/Ekskul",
    },
    {
      id: 5,
      title: "Transparency Information Website for Village Fund Usage",
      desc: "This application is built using Laravel for the backend and Tailwind CSS for the frontend. It serves as a transparency platform for village fund management, enabling administrators to provide real-time updates on fund allocations, expenditures, and financial reports. The system ensures accountability and easy access to crucial financial data for the public, fostering trust and transparency in local governance.",
      imgs: [
        "/images/projectsdetail/witpdd/1.png",
        "/images/projectsdetail/witpdd/2.png",
        "/images/projectsdetail/witpdd/3.png",
        "/images/projectsdetail/witpdd/4.png",
        "/images/projectsdetail/witpdd/5.png",
        "/images/projectsdetail/witpdd/6.png",
        "/images/projectsdetail/witpdd/7.png",
        "/images/projectsdetail/witpdd/8.png",
        "/images/projectsdetail/witpdd/9.png",
      ],
      stacks: [
        { name: "Figma", img: "/images/stack/figma.svg" },
        { name: "Bootstrap", img: "/images/stack/bootstrap.svg" },
        { name: "Tailwind CSS", img: "/images/stack/tailwind.svg" },
        { name: "Laravel", img: "/images/stack/laravel.svg" },
      ],
      link: "https://witpdd.kodingan-saya.com/",
      github: "https://github.com/arysyahbana/WITPDD",
    },
  ];

  const router = useRouter();
  const { id } = router.query;
  const [selectedImg, setSelectedImg] = useState("");
  const [randomProjects, setRandomProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    if (!id) return;

    // Filter project yang sedang ditampilkan
    const filteredProjects = moreProjects.filter(
      (projectAll) => projectAll.id !== parseInt(Array.isArray(id) ? id[0] : id)
    );

    // Acak dan ambil 8 item
    const shuffled = filteredProjects
      .sort(() => 0.5 - Math.random())
      .slice(0, 8);
    setRandomProjects(shuffled);
  }, [id]);

  // Ambil data berdasarkan id dari URL
  const project: ProjectType | undefined = item.find(
    (p) => p.id === Number(id)
  );

  useEffect(() => {
    if (project?.imgs && project.imgs.length > 0 && !selectedImg) {
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
                  className="max-w-[300px] lg:max-w-[500px] xl:max-w-[700px] h-full object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 justify-center items-center mt-5">
                {project.imgs && project.imgs.length > 0 ? (
                  project.imgs.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImg(img)}
                      className={`cursor-pointer rounded-2xl overflow-hidden h-[30px] w-[50px] lg:h-[80px] lg:w-[100px] transition duration-300 hover:scale-110 hover:shadow-xl hover:border-orange-500 hover:border-2 bg-slate-600 ${
                        selectedImg === img ? "border-2 border-orange-500" : ""
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
            {randomProjects.map((project2, index) => (
              <Link
                key={project2.id}
                href={`/projects/${project2.id}`}
                className="mb-3"
              >
                <motion.div
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#374151",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
                    transition: { duration: 0.3 },
                  }}
                  animate={{
                    scale: 1,
                    backgroundColor: "transparent",
                    boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
                    transition: { duration: 0.3 },
                  }}
                  className="card card-compact"
                >
                  <figure>
                    <img
                      src={project2.img}
                      alt={project2.title}
                      className="w-full h-40 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {project2.title.substring(0, 28)}
                    </h2>
                    <p>{project2.desc.substring(0, 80)}...</p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
