import React from "react";
import "./Experience.css";
import fiverr from "../../assets/fiverr-logo.png";
import avalanchio from "../../assets/ava-logo.png";
import planedu from "../../assets/planedu-logo.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience">
      <h2 style={{ fontWeight: "bolder", fontSize: "2rem", color: "black" }}>
        Work <span style={{ color: "#0c90c8" }}>Experience</span>
      </h2>
      <VerticalTimeline lineColor="#53c2f2">
        <VerticalTimelineElement
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #232631" }}
          date={"Augest 2022 - Present"}
          dateClassName="text-neutral-950 font-bold"
          iconStyle={{ background: "#01b522" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={fiverr}
                alt={"Fiverr"}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {"Freelance Developer"}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {"Fiverr"}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Done more than 7 projects with full satisfaction.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Developed the Full-stack website of the client for their new
              business.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              I also Deployed the website on AWS.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Used Docker containers for running images locally.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #232631" }}
          date={"May 2023 - June 2024"}
          dateClassName="text-neutral-950 font-bold"
          iconStyle={{ background: "black" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={avalanchio}
                alt={"avalanchio"}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {"Frontend Developer (Intern)"}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {"Avalanchio"}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              I redesigned their old website, into a modern and updated version.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              I learned and worked with Angular to develop the website.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "#1d1836",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid  #232631" }}
          date={"September 2023 - Present"}
          dateClassName="text-neutral-950 font-bold"
          iconStyle={{ background: "rgb(230, 222, 221)" }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={planedu}
                alt={"PlanEdu"}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {"Full-stack Engineer"}
            </h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {"PlanEdu"}
            </p>
          </div>

          <ul className="mt-5 list-disc ml-5 space-y-2">
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Develop a project from scratch for a new product and handle the
              overall development of the website.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Created a new HRM to manage the record with various functionality.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              I led a team in developing new projects and assisted my
              co-developers in their development process.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Scaled the backend to handle more users and implemented
              rate-limiting to curb unwanted requests.
            </li>
            <li className="text-white-100 text-[14px] pl-1 tracking-wider">
              Learned alot of new technologies like Postgresql, MySQL, AWS and
              more...
            </li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
