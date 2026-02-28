import logo from "../../public/logo.png";

const Logo = () => {
  return (
    <>
      <div className=" overflow-hidden  p-1 h-12 w-20 cursor-pointer sticky top-0 bg-white ">
        <img
          src={logo}
          alt="swaad sadan"
          className="h-full w-full object-cover"
        />
      </div>
    </>
  );
};

export default Logo;
