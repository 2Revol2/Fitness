import { SelectedPage,ClassesType } from "../../shared/types";
import image1 from "../../assets/image1.webp";
import image2 from "../../assets/image2.webp";
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.webp";
import image5 from "../../assets/image5.webp";
import image6 from "../../assets/image6.webp";
import { motion } from "framer-motion";
import { HText } from "../../shared/HText";
import { Class } from "./Class";
const classes: Array<ClassesType> = [
  {
    name: "Weigth Training Classes",
    descriotion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, neque facilis minus sequi saepe dolorem deserunt tenetur dicta perferendis totam repellat! Ut, doloribus. Quaerat dicta explicabo praesentium numquam assumenda.",
    img: image1,
  },
  {
    name: "Yoga Classes",
    img: image2,
  },
  {
    name: "Ab Core Classes",
    descriotion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, neque facilis minus sequi saepe dolorem deserunt tenetur dicta perferendis totam repellat! Ut, doloribus. Quaerat dicta explicabo praesentium numquam assumenda.",
    img: image3,
  },
  {
    name: "Adventure Classes",
    descriotion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, neque facilis minus sequi saepe dolorem deserunt tenetur dicta perferendis totam repellat! Ut, doloribus. Quaerat dicta explicabo praesentium numquam assumenda.",
    img: image4,
  },
  {
    name: "Fitness Classes",
    descriotion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, neque facilis minus sequi saepe dolorem deserunt tenetur dicta perferendis totam repellat! Ut, doloribus. Quaerat dicta explicabo praesentium numquam assumenda.",
    img: image5,
  },
  {
    name: "Training Classes",
    descriotion:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas ab, neque facilis minus sequi saepe dolorem deserunt tenetur dicta perferendis totam repellat! Ut, doloribus. Quaerat dicta explicabo praesentium numquam assumenda.",
    img: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5 ">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassesType, index) => {
              return <Class 
              key={`${item.name}-${index}}`}
              name={item.name}
              descriotion={item.descriotion}
              img={item.img}
              />;
            
            })}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
