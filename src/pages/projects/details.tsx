import Footer from "@/layouts/Footer";
import Navbar from "@/layouts/Navbar";
import { useState } from "react";

const Detail = () => {
  const stacks = [
    {
      id: 1,
      img: "/images/stack/bootstrap.svg",
      name: "Bootstrap",
    },
    {
      id: 2,
      img: "/images/stack/tailwind.svg",
      name: "Tailwindcss",
    },
    {
      id: 3,
      img: "/images/stack/react.svg",
      name: "React Js",
    },
    {
      id: 4,
      img: "/images/stack/figma.svg",
      name: "Figma",
    },
    {
      id: 5,
      img: "/images/stack/laravel.svg",
      name: "Laravel",
    },
  ];

  const imgsProd = [
    {
      id: 1,
      img: "/images/bg1.jpg",
    },
    {
      id: 2,
      img: "/images/bg2.jpg",
    },
    {
      id: 3,
      img: "/images/bg3.jpg",
    },
    {
      id: 4,
      img: "/images/bg4.jpg",
    },
    {
      id: 5,
      img: "/images/bg5.jpg",
    },
    {
      id: 6,
      img: "/images/bg.svg",
    },
  ];

  const [selectedImg, setSelectedImg] = useState("/images/bg1.jpg");

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
                  alt="Shoes"
                  className="max-w-[300px] lg:max-w-[500px] xl:max-w-[700px] object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-3 justify-center items-center">
                {imgsProd && imgsProd.length > 0 ? (
                  imgsProd.map((imgProd) => (
                    <div
                      key={imgProd.id}
                      onClick={() => setSelectedImg(imgProd.img)}
                      className={`cursor-pointer rounded-2xl overflow-hidden h-[50px] w-[50px] lg:h-[100px] lg:w-[100px] transition duration-300 hover:scale-105 hover:shadow-xl hover:border-white hover:border-2 bg-slate-600 ${
                        selectedImg === imgProd.img
                          ? "border-2 border-white"
                          : ""
                      }`}
                    >
                      <img
                        src={imgProd.img}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-4xl font-bold text-white">
                Repository Assets Digital App
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {stacks && stacks.length > 0 ? (
                  stacks.map((stack) => (
                    <div
                      key={stack.id}
                      className="tooltip"
                      data-tip={stack.name}
                    >
                      <button className="bg-violet-500 p-1 rounded-lg hover:scale-105 transition duration-300">
                        <img src={stack.img} alt="" className="w-5" />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>

              <p>
                The Digital Asset Repository Application, built with Laravel and
                Bootstrap, stores and manages digital assets in one place,
                making it easy for users to search, organize, and access their
                assets efficiently. With powerful features, it streamlines asset
                management for personal and professional use.
              </p>
              <p>
                With these features and more, the Digital Asset Repository
                Application aims to be an indispensable tool for efficient
                digital asset management.
              </p>

              <div className="flex flex-wrap gap-3 mt-5">
                <a href="" className="mb-3">
                  <div className="card card-compact bg-slate-700 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-110 transition duration-300">
                    <div className="card-body">
                      <div className="flex items-center justify-between gap-2">
                        <img
                          src="/images/icons/arrow.svg"
                          alt="Responsive"
                          className="w-3"
                        />
                        <p className="font-bold">View Web</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  href="https://github.com/arysyahbana"
                  className="mb-3"
                  target="_blank"
                >
                  <div className="card card-compact bg-slate-700 hover:text-white hover:bg-sky-500 hover:shadow-xl transform hover:scale-110 transition duration-300">
                    <div className="card-body">
                      <div className="flex items-center justify-between gap-2">
                        <img
                          src="/images/icons/github.svg"
                          alt="Responsive"
                          className="w-5"
                        />
                        <p className="font-bold">Github</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto pt-32 px-12">
          <p className="text-center text-3xl font-bold text-white mb-8">
            More Projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <a href="/src/pages/projectdetail.html" className="mb-3">
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
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
