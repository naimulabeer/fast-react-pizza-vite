import CreateUser from "../features/user/CreateUser";
import Carousel from "./Carousel";

function Home() {
  return (
    <div className="my-10 text-center">
      <Carousel />
      <h1 className="mt-4 mb-4 text-sm md:text-xl font-bold">
        The best pizza.
        <br />
        <span className="text-amber-600">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
