import { useEffect } from "react";
import ClassComponent from "./ClassComponent";
const Profile = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Koi to roklo");
    }, 1000);

    //This return will run after You will leave this page.(Unmounting)
    return () => {
      clearInterval(timer);
      console.log("Don aa gya tumhe rokne");
    };
  });
  return (
      <ClassComponent name={"Sriom"} />
  );
};

export default Profile;

/*
  Parent Constructor
  Parent Render
     Child Constructor
     Child Render
    
  DOM is updated
  Parent componentDidMount - beacause of async
    Child componentDidMount

    Child Render - child will render again after getting data from API (Updating)
*/
