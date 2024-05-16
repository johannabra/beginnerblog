import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
const Home = () => {
  return (
    <>
      <h1 className="text-pink-700">Home page</h1>
      <CreatePost />
      <Posts />
    </>
  );
};

export default Home;
