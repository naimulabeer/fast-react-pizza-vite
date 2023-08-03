import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Carousel from "./Carousel";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-12 text-center">
      <h1 className="mt-4 mb-4 text-sm md:text-xl font-bold">
        The best pizza.
        <br />
        <span className="text-amber-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
      {/* <Carousel /> */}
    </div>
  );
}

export default Home;
