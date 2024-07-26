import { Link, Outlet } from "react-router-dom";
import { Component } from "react";
const About = () => {
  return (
    <div className="flex gap-32 align-middle justify-center w-full gap-0 mt-5">
      <div className=" flex flex-col flex-1 justify-center gap-3 pl-8 ">
        <h1
          className="uppercase tracking-tight text-4xl font-medium text-orange-400 text-center m-8">
          About
        </h1>
        <p className="px-2">
          Greetings! I'm Sri Om Sharan, a Front-end Developer with a passion for
          creating UI. My journey in learning has been a fascinating
          exploration, where I've had the opportunity to learn anything free
          from YouTube. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link
          to="profile"
          className="text-center mb-20 w-28 text-sm rounded bg-orange-500 p-4 mt-8 text-white"
        >
          View Profile
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

// 🧿 Life Cycle
// Step1. Parent(about page) Constructor
// Step2. Parent Render
// Step3. Child(class Component) Constructor
// Step4. Child Render
// Step5. Child componentDidMount
// Step6. Parent componentDidMount

class AboutClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor (parent)");
  }

  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>This is my About Section (made using class component).</p>
        <Outlet />
      </div>
    );
  }
}

export default About;
