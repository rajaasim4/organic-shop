import { motion } from "framer-motion";
import { fadeInFromLeft } from "../../utils/Helpers/Animation/FadeFromLeftAnimation";

const HeadingBtn = ({ title }) => {
  return (
    <motion.button
      {...fadeInFromLeft(0.3)}
      whileHover={{ scale: 1.1 }}
      className="rounded-xl text-white w-max px-3 h-10 bg-primary_green cursor-auto "
    >
      {title}
    </motion.button>
  );
};

export default HeadingBtn;
