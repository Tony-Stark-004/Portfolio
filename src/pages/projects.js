import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// images
import project1 from "../../public/images/projects/techerp.png";
import project2 from "../../public/images/projects/js-todo.png";
import project3 from "../../public/images/projects/java-clock.png";
import project4 from "../../public/images/projects/react-vlog.png";
import project5 from "../../public/images/projects/css.png";

// github='https://github.com/Tony-Stark-004'

const FeaturedProject = ({ type, tittle, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid
             border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl"
    >
      <Link
        href={link}
        target={"_blank"}
        className="w-1/2 curser-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={tittle} className="w-full h-auto" />
      </Link>
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{tittle}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target={"_blank"} className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg bg-dark text-light p-2.5 px-6 text-sm font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, tittle, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <Link
        href={link}
        target={"_blank"}
        className="w-full curser-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={tittle} className="w-full h-auto" />
      </Link>
      <div className="absolute top-0 -right-2 -z-10 w-[102%] h-[101%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target={"_blank"}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold">{tittle}</h2>
        </Link>

        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 text-sm font-semibold"
          >
            Visit
          </Link>
          <Link href={github} target={"_blank"} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Aditya | About Page</title>
        <meta name="description" content="about me" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-col-s-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeaturedProject
                tittle="ERP Application"
                link="https://techerp.in/"
                github="https://github.com/nikucse/Technu-ERP"
                img={project1}
                type="Management Project"
                summary="A feature-rich ERP App using React, MaterialUi, Redux-Thunk, React-hooks, and Formik. 
                            You can manage the inventory and track the records of  
                            employees, vendors, and clients."
              />
            </div>

            <div className="col-span-6">
              <Project
                tittle="Javascript Todo"
                link="https://tony-stark-004.github.io/TODO-Javadcript/"
                github="https://github.com/Tony-Stark-004/TODO-Javadcript.git"
                img={project2}
                type="Featured Project"
                summary="A feature based javascript todo project using document object model and events listener. You can interact with this web app which has ability to add your tasks, once you completed the task it will be removed from daily task and you can also see your specific task choosing specific one."
              />
            </div>

            <div className="col-span-6">
              <Project
                tittle="Javascript Clock"
                link="https://tony-stark-004.github.io/clock/"
                github="https://github.com/Tony-Stark-004/clock.git"
                img={project3}
                type="Featured Project"
                summary="A feature based javascript project using document object model. You can interact with this web app which has tiny feature to set alram along with picture changing behaviour."
              />
            </div>

            <div className="col-span-6">
              <Project
                tittle="React Dummy Application"
                link="https://relaxed-starburst-694e53.netlify.app/"
                github="https://github.com/Tony-Stark-004/React-Vlog.git"
                img={project4}
                type="Content Projects"
                summary="This dummy app includes capabilities React.JS and React Router mainly.Used React hooks and how to render compoent using map function."
              />
            </div>

            <div className="col-span-6">
              <Project
                tittle="CSS Static Web Page"
                link="https://tony-stark-004.github.io/CSS-assessment-6/"
                github="https://github.com/Tony-Stark-004/CSS-assessment-6.git"
                img={project5}
                type="Static Projects"
                summary="The static web page using cascading style sheet features like flex and animation. "
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
