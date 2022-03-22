import { Loader } from "./spinner.styles.js";
import { motion } from "framer-motion";

const transition = {
  duration: 0.7,
  ease: "easeInOut",
  opacity: { delay: 2 },
};

const Spinner = ({ height, width, borderWidth, success }) =>
  success ? (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="28.484"
      height="20.329"
      viewBox="0 0 28.484 20.329"
      initial={{ opacity: 1, display: "inline" }}
      transition={transition}
      key={"check"}
      exit={{ opacity: 0 }}
      className="spinner"
    >
      <motion.path
        id="Path_188"
        d="M-18199.854-5871.817l7.764,7.7,16.479-16.708"
        transform="translate(18201.975 5882.944)"
        fill="none"
        stroke="var(--primary-color)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={transition}
      />
    </motion.svg>
  ) : (
    <Loader className="spinner" height={height} width={width} borderWidth={borderWidth}></Loader>
  );

export default Spinner;
