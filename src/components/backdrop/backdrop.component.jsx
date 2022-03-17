import { StyledBackdrop } from "./backdrop.styles";
import { motion, AnimatePresence } from "framer-motion";

const MotionBackdrop = motion(StyledBackdrop);

const Backdrop = ({ show, toggleShow }) => (
  <AnimatePresence
    // Disable any initial animations on children that
    // are present when the component is first rendered
    initial={false}
    // only render on component at a time.
    // The existing component will finish its exit
    // animation before entering component is rendered
    exitBeforeEnter={true}
    // Fires when all exiting nodes have completed animating out
    onExitComplete={() => null}
  >
    {show && (
      <MotionBackdrop
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        onClick={toggleShow}
      ></MotionBackdrop>
    )}
  </AnimatePresence>
);

export default Backdrop;
