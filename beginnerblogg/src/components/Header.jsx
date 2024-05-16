import Nav from "./Nav";
const Header = () => {
  return (
    <header className="grid grid-cols-2 bg-pink-200 px-6">
      <h1>Tja Tja Bloggen</h1>
      <Nav className="justify-self-end" />
    </header>
  );
};

export default Header;
