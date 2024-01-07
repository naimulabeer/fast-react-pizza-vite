import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

const inputVariants = {
  clicked: { scale: 1.9 },
  hover: { scale: 1.05 },
};

const buttonVariants = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-sm md:text-xl mt-[70px] mb-6">
        👋 Welcome! Please start by telling us your name:
      </p>

      <motion.input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input w-72  text-center mb-8"
        variants={inputVariants}
        whileTap="clicked"
        whileHover="hover"
      />

      {username !== "" && (
        <motion.div
          className="mb-3"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Button type="primary">Start ordering</Button>
        </motion.div>
      )}
    </form>
  );
}

export default CreateUser;
