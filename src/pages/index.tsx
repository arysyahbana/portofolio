import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Comp from "../../public/Comp";
import Link from "next/link";
import { HiDownload } from "react-icons/hi";
export default function Home() {
  const services = [
    {
      id: 1,
      img: "/images/service/responsive-design 1.png",
      name: "Responsive Design",
      desc: "Creating flexible websites that look perfect on all devices",
    },
    {
      id: 2,
      img: "/images/service/web-development 1.png",
      name: "Web Development",
      desc: "Building functional and dynamic websites with optimal performance and scalability",
    },
    {
      id: 3,
      img: "/images/service/convert 1.png",
      name: "Slicing from Design",
      desc: "Converting visual designs into clean, responsive, and efficient web code",
    },
  ];

  const stacks = [
    {
      id: 1,
      img: "/images/stack/html.svg",
      name: "HTML",
    },
    {
      id: 2,
      img: "/images/stack/css.svg",
      name: "CSS",
    },
    {
      id: 3,
      img: "/images/stack/js.svg",
      name: "Javascript",
    },
    {
      id: 4,
      img: "/images/stack/bootstrap.svg",
      name: "Bootstrap",
    },
    {
      id: 5,
      img: "/images/stack/tailwind.svg",
      name: "Tailwindcss",
    },
    {
      id: 6,
      img: "/images/stack/react.svg",
      name: "React Js",
    },
    {
      id: 7,
      img: "/images/stack/figma.svg",
      name: "Figma",
    },
    {
      id: 8,
      img: "/images/stack/laravel.svg",
      name: "Laravel",
    },
  ];

  const contacts = [
    {
      id: 1,
      link: "https://github.com/arysyahbana",
      img: "/images/icons/github.svg",
      name: "Github",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/ary-syahbana-b6a7bb2aa/",
      img: "/images/icons/linkedin.svg",
      name: "Linkedin",
    },
    {
      id: 3,
      link: "https://www.instagram.com/arysyahbana_/",
      img: "/images/icons/ig.svg",
      name: "Instagram",
    },
    {
      id: 4,
      link: "https://www.facebook.com/ary.syahbana.520/",
      img: "/images/icons/fb.svg",
      name: "Facebook",
    },
    {
      id: 5,
      link: "mailto:arysyahbana1@gmail.com",
      img: "/images/icons/email.svg",
      name: "Gmail",
    },
  ];

  return (
    <div className="">
      <Navbar />

      {/* Hero */}
      <div className="relative overflow-hidden min-h-[650px] bg-gradient-to-b from-sky-800 to-base-100">
        {/* <Image
          src="/images/bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        /> */}
        <video
          className="absolute inset-0 w-full h-full lg:h-screen object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/shenhe.mp4" type="video/mp4" />
          Browser Anda tidak mendukung tag video.
        </video>
        {/* Overlay Transparan untuk Pencampuran */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Gradien untuk Transisi */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-base-100"></div>

        <div className="relative z-10 container mx-auto mt-60 px-12 flex flex-col lg:flex-row overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="lg:w-1/2"
          >
            <h1 className="text-5xl font-bold text-white">
              Hello, I&apos;am Ary Syahbana
            </h1>
            <h1 className="py-3 text-4xl font-bold text-white">
              I&apos;am a{" "}
              <span className="text-sky-500">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "UI/UX Designer",
                  ]}
                  loop={0} // 0 = infinite loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="pb-6 text-white">
              As a Fullstack Developer, I specialize in building scalable and
              efficient web applications using modern technologies. I strive to
              deliver high-quality solutions that meet user needs.
            </p>
            <button className="text-white bg-violet-500 hover:bg-sky-500 transition duration-200 hover:scale-105 px-5 py-2 rounded-lg">
              <div className="flex gap-1 items-center">
                <span>
                  <HiDownload />
                </span>
                <Link
                  href="/cv/Ary Syahbana-resume.pdf"
                  download="Ary Syahbana-resume.pdf"
                  className="text-sm font-bold"
                  target="_blank"
                >
                  Curiculum Vitae
                </Link>
              </div>
            </button>
          </motion.div>
          {/* tempat 3d */}
          {/* <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="lg:w-1/2"
          >
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls />
                <Comp />
              </Suspense>
            </Canvas>
          </motion.div> */}
        </div>
      </div>

      {/* Content */}
      <div className="bg-base-100">
        {/* About */}
        <section id="about" className="container mx-auto py-44 px-12">
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="border-4 border-sky-500 hover:border-violet-500 p-1 rounded-full transition-all duration-300">
              <img
                src="/images/Foto2.png"
                alt=""
                className="rounded-full transition-transform duration-300 rotate-0 hover:-rotate-6"
              />
            </div>

            {/* <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 rounded-full">
              <img src="/images/Foto.svg" alt="" className="rounded-full" />
            </div> */}
            <div className="w-full lg:w-1/2">
              <p className="text-3xl font-bold text-white mb-6">About Me</p>
              <p className="mb-3">
                Hello! I&apos;m Ary from Padang, Indonesia, with a
                Bachelor&apos;s in Informatics Engineering Education from
                Universitas Negeri Padang. I&apos;m passionate about web
                development and eager to keep improving my skills. I plan to add
                more projects to this portfolio and look forward to contributing
                my expertise to impactful work.
              </p>
              <p className="mb-3">Tech stack i use :</p>
              <div className="flex flex-wrap gap-5">
                {stacks && stacks.length > 0 ? (
                  stacks.map((stack, index) => (
                    <motion.div
                      key={stack.id}
                      className="tooltip"
                      data-tip={stack.name}
                      transition={{
                        duration: 1,
                        delay: 0.5 + index * 0.2,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: -50 }}
                      viewport={{ once: true, amount: 0.5 }}
                    >
                      <button className="bg-gradient-to-r from-violet-500 to-sky-500 p-2 rounded-lg hover:scale-110 transition duration-300">
                        <img src={stack.img} alt="" className="w-8" />
                      </button>
                    </motion.div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Experiences */}
        <section className="container mx-auto mb-32 px-12">
          <p className="text-center text-3xl font-bold text-white mb-12">
            My Experiences
          </p>
          <ul className="timeline timeline-vertical">
            {/* Metro */}
            <li>
              <motion.div
                transition={{
                  duration: 0.5,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  borderColor: "rgb(255,255,255)",
                  transition: { duration: 0.4 },
                  x: -10,
                }}
                className="timeline-start timeline-box border-transparent border-2 py-5"
              >
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-white">
                    Metro Indonesian Software
                    <span className="text-slate-500 font-reguler pl-2">
                      - Padang
                    </span>
                  </p>
                  <p className="text-sky-300">Sep 2024 - Present</p>
                </div>
                <p className="mb-5 text-pink-500 ml-2">Freelance</p>
                <ul className="list-disc ml-5">
                  <li>
                    Designing and implementing efficient databases to support
                    web applications.
                  </li>
                  <li>
                    Developing dynamic and responsive frontends using React,
                    along with Tailwind CSS and Bootstrap, to ensure a seamless
                    and engaging user experience.
                  </li>
                  <li>
                    Building and maintaining backends with Laravel, focusing on
                    robust business logic and smooth API integrations.
                  </li>
                  <li>
                    Actively learning and experimenting with Nuxt.js to expand
                    my skills in full-stack development.
                  </li>
                  <li>
                    Performing regular maintenance and optimizations to improve
                    application performance and ensure security.
                  </li>
                </ul>
              </motion.div>

              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-primary" />
            </li>

            {/* Arge */}
            <li>
              <hr className="bg-primary" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <motion.div
                transition={{
                  duration: 0.6,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  // scale: 1.05, // Skala saat hover
                  borderColor: "rgb(255,255,255)",
                  transition: { duration: 0.4 },
                  x: 10,
                }}
                className="timeline-end timeline-box border-transparent border-2 py-5"
              >
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-white">
                    PT. Argenesia
                    <span className="text-slate-500 font-reguler">
                      - Padang
                    </span>
                  </p>
                  <p className="text-sky-300">Apr 2024 - Jul 2024</p>
                </div>
                <p className="mb-5 text-pink-500 ml-2">Freelance</p>
                <ul className="list-disc ml-5">
                  <li>
                    Designing and implementing robust databases to support
                    application functionality.
                  </li>
                  <li>
                    Building responsive and user-friendly frontends using HTML,
                    CSS, and JavaScript to enhance user experience.
                  </li>
                  <li>
                    Developing backend solutions with frameworks such as Node.js
                    and Laravel, focusing on business logic and seamless API
                    integration.
                  </li>
                  <li>
                    Supporting application maintenance, performing routine bug
                    fixes, and optimizing performance to ensure a secure and
                    smooth user experience.
                  </li>
                </ul>
              </motion.div>

              <hr className="bg-primary" />
            </li>

            {/* Trueverse */}
            <li>
              <hr className="bg-primary" />

              <motion.div
                transition={{
                  duration: 0.7,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                  borderColor: "rgb(255,255,255)",
                  transition: { duration: 0.4 },
                  x: -10,
                }}
                className="timeline-start timeline-box border-transparent border-2 py-5"
              >
                <div className="flex justify-between items-center">
                  <p className="text-xl font-bold text-white">
                    Truverse Global Kreatif
                    <span className="text-slate-500 font-reguler">
                      - Padang
                    </span>
                  </p>
                  <p className="text-sky-300">Jan 2023 - Jun 2023</p>
                </div>
                <p className="mb-5 text-pink-500 ml-2">Internship</p>
                <ul className="list-disc ml-5">
                  <li>
                    Designing reliable databases to support application
                    functionality.
                  </li>
                  <li>
                    Building responsive and engaging frontends with HTML, CSS,
                    and JavaScript to create a satisfying user experience.
                  </li>
                  <li>
                    Developing backends using frameworks such as Node.js and
                    Laravel to manage business logic and enable smooth API
                    interactions.
                  </li>
                  <li>
                    Assisting in ensuring performance and security through
                    routine maintenance and proactive bug fixes, delivering a
                    reliable and highquality user experience.
                  </li>
                </ul>
              </motion.div>

              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-primary h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="container mx-auto mb-44 px-12">
          <p className="text-center text-3xl font-bold text-white mb-8">
            Services
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {services && services.length > 0 ? (
              services.map((service) => (
                <div
                  key={service.id}
                  className="card card-compact w-60 py-5 text-sky-500 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <figure>
                    <img src={service.img} alt={service.name} />
                  </figure>
                  <div className="card-body">
                    <h2 className="font-bold text-xl text-center">
                      {service.name}
                    </h2>
                    <p className="text-center text-slate-300">{service.desc}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading services...</p>
            )}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto pb-44 px-12">
          <p className="text-center text-3xl font-bold text-white mb-8">
            Contact Me
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {contacts && contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <motion.a
                  key={contact.id}
                  href={contact.link}
                  className="mb-3"
                  target="_blank"
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -50 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="card card-compact bg-slate-700 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-110 transition duration-300">
                    <div className="card-body">
                      <div className="flex items-center justify-between gap-2">
                        <img
                          src={contact.img}
                          alt={contact.name}
                          className="w-8"
                        />
                        <p className="font-bold">{contact.name}</p>
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))
            ) : (
              <p>Loading contacts...</p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
