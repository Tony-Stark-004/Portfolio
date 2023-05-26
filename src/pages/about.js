import AnimatedText from "@/components/AnimatedText";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Layout from "@/components/Layout";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";
import React from "react";

import profile from "../../public/images/profile/pic.png";

const about = () => {
  return (
    <>
      <Head>
        <title>Aditya | About Page</title>
        <meta name="description" content="about me" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-8">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                Hi, I&#39;m Aditya, a web developer with a passion for creating
                beautiful, functional, and user-centered digital experiences.
                With 1 years of experience in the field. I am always looking for
                new and innovative ways to bring my clients visions to life.
              </p>

              <p className="font-medium my-4">
                I believe that design is about more than just making things look
                pretty – it&#39;s about solving problems and creating intuitive,
                enjoyable experiences for users.
              </p>

              <p className="font-medium">
                When I&#39;m working on a website, for every websites, I bring
                my commitment to design excellence and user-centered thinking to
                every project I work on. I look forward to the opportunity to
                bring my skills and passion to your next project.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profile}
                alt="profile-image-2"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">40+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Handson completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">5+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">1+</span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  year of coding Exp..
                </h2>
                {/* <span className='text-xl font-medium capitalize text-dark/75'> experience</span> */}
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
