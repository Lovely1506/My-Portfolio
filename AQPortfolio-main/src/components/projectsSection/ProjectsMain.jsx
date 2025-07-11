import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

import websiteImg2 from '../../assets/website-imge-2.png';
import websiteImg1 from '../../assets/website-image-1.png';
import websiteImg3 from '../../assets/website-image-3.png';
import websiteImg4 from '../../assets/website-img-4.jpg';


const projects = [
  {
    name: "Foodie restaurant",
    year: "April2024",
    align: "right",
    image: websiteImg2,
    link: "https://lovely1506.github.io/foodie_Restaurent/",
  },
  {
    name: "Netflix Clone",
    year: "April2025",
    align: "left",
    image: websiteImg1,
    link: "https://lovely1506.github.io/netflix-clone/",
  },
  {
    name: "TO-Do-List",
    year: "Sep2024",
    align: "right",
    image: websiteImg3,
    link: "https://github.com/Lovely1506/TO-DO-LIST",
  },
  {
    name: "Website for a local business",
    year: "July2025",
    align: "left",
    image: websiteImg4,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
