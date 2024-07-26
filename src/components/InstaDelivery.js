import { useState } from "react";

const Section = ({ title, isVisible, setIsvisible }) => {
  return (
    <div className="border-gray-300 rounded border p-2 my-3 mx-52 cursor-pointer"  onClick={() => setIsvisible()}>
      <div className="flex justify-between">
        <h1 className="text-1xl font-bold ">{title} </h1>
        <button
          className="ml-4 cursor-pointer text-gray-500 text-xs hover:text-black"
         
        >
          {isVisible ? "Hide ⩚" : "Show ⩛"}
        </button>
      </div>
      {isVisible && (
        <p className="text-sm p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      )}{" "}
    </div>
  );
};

const InstaDelivery = () => {
  const [visible, setVisiblity] = useState("about");

  return (
    <>
      <h1 className="text-4xl font-medium text-orange-400 text-center m-8">
        InstaDelivery
      </h1>

      <Section
        title={"About InstantDelivery"}
        isVisible={visible === "about"}
        setIsvisible={() => visible==="about"?setVisiblity(""): setVisiblity("about")}
      />
      <Section
        title={"Insta Team"}
        isVisible={visible === "team"}
        setIsvisible={() => visible==="team"?setVisiblity(""):setVisiblity("team")}
      />
      <Section
        title={"Carrers"}
        isVisible={visible === "carrer"}
        setIsvisible={() => visible==="carrer"?setVisiblity(""):setVisiblity("carrer")}
      />
      <Section
        title={"Sponsors"}
        isVisible={visible === "sponsor"}
        setIsvisible={() => visible==="sponsor"?setVisiblity(""):setVisiblity("sponsor")}
      />
    </>
  );
};

export default InstaDelivery;
