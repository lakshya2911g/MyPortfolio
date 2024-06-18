import styled from "./Home.module.css";

import { languages, socialLinks, tools } from "./Home.config";
import { techStack } from "./Home.config";
import { workHistory } from "./Home.config";
import { projects } from "./Home.config";
import { skills } from "./Home.config";
import MaxWidth from "../utils/MaxWidth/MaxWidth";
import profileImage from "../../../assets/pp_small.jpg";

const Home = () => {
  return (
    <MaxWidth maxWidth={800}>
      <div className={styled["home"]}>
        <div className={styled["header"]}>
          <div className={styled["header-img-container"]}>
            <img alt="profile-img" src={profileImage} />
          </div>
          <div className={styled["header-metadata"]}>
            <h2 className={styled["name"]}>
              <span className={styled["highlight"]}>LAKSHYA GUPTA</span>
            </h2>
            <p className={styled["description"]}>
              Software Enginner with experience in
              <span className={styled["highlight"]}> Frontend </span> designing
              technologies. Passionate about building dynamic and responsive web
              designs. Eager to learn new technologies and enhance my
              development skills.
            </p>

            <a
              href="mailto:lakshyaguptamech@gmail.com"
              className={styled["mail"]}
            >
              lakshyaguptamech@gmail.com
            </a>
            <div className={styled["social-links"]}>
              {socialLinks.map((link) => {
                const { text, href } = link;
                return (
                  <a
                    key={text}
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    className={styled["social-link"]}
                  >
                    {text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styled["skills"]}>
          <h2>Skills & Qualification</h2>
          <ul className={styled["skills-list"]}>
            {skills.map((skill, index) => {
              return (
                <li
                  key={`skill-number-${index + 1}`}
                  className={styled["skills-list-item"]}
                >
                  ✔️ {skill}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styled["tech-stack"]}>
          <h2>Programming languages</h2>
          <ul className={styled["tech-stack-list"]}>
            {languages.map((tech, index) => {
              return (
                <li
                  key={`teach-stack-number-${index + 1}`}
                  className={styled["tech-stack-list-item"]}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styled["tech-stack"]}>
          <h2>Development</h2>
          <ul className={styled["tech-stack-list"]}>
            {techStack.map((tech, index) => {
              return (
                <li
                  key={`teach-stack-number-${index + 1}`}
                  className={styled["tech-stack-list-item"]}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styled["tech-stack"]}>
          <h2>Tools</h2>
          <ul className={styled["tech-stack-list"]}>
            {tools.map((tech, index) => {
              return (
                <li
                  key={`teach-stack-number-${index + 1}`}
                  className={styled["tech-stack-list-item"]}
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styled["work-history"]}>
          <h2>Experince</h2>
          <ul className={styled["work-history-list"]}>
            {workHistory.map((work, index) => {
              const { from, to, role, company, descriptions, skills } = work;

              return (
                <li
                  key={`work-item-${index}`}
                  className={styled["work-history-list-item"]}
                >
                  <h3 className={styled["work-title"]}>
                    {role} | {company}
                  </h3>
                  <p className={styled["work-joining"]}>
                    {from} - {to}
                  </p>
                  <ul className={styled["work-description-list"]}>
                    {descriptions.map((description, index) => {
                      return (
                        <li
                          className={styled["work-description-list-item"]}
                          key={`work-description-${index + 1}`}
                        >
                          {description}
                        </li>
                      );
                    })}
                  </ul>
                  <p className={styled["work-skills"]}> Skills - {skills}</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styled["projects"]}>
          <h2>Personal Projects</h2>
          <ul className={styled["projects-list"]}>
            {projects.map((project, index) => {
              const { name, live, github, techStack, descriptions } = project;

              return (
                <li
                  key={`project-item-${index}`}
                  className={styled["project-list-item"]}
                >
                  <h3 className={styled["project-title"]}>{name} </h3>

                  <ul className={styled["project-description-list"]}>
                    {descriptions.map((description, index) => {
                      return (
                        <li
                          className={styled["project-description-list-item"]}
                          key={`project-description-${index + 1}`}
                        >
                          {description}
                        </li>
                      );
                    })}
                  </ul>
                  <p className={styled["project-stack"]}>
                    {" "}
                    Tech Stack - {techStack}
                  </p>

                  <div className={styled["project-links"]}>
                    <a rel="noreferrer" target="_blank" href={github}>
                      Github
                    </a>
                    <a rel="noreferrer" target="_blank" href={live}>
                      Live
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </MaxWidth>
  );
};

export default Home;
