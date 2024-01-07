import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <motion.div
      className="my-20 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="mt-4 mb-4 text-sm md:text-3xl font-semibold">
        The best pizza.
        <br />
        <span className="text-[#2ec4b6]">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button to="/menu" type="primary">
            Continue Ordering, {username}
          </Button>
        </motion.div>
      )}
      {/* <Carousel /> */}
    </motion.div>
  );
}

export default Home;
