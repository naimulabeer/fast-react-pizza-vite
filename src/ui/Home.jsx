import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 text-center">
      <h1 className="mb-4  text-xl font-bold">
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
