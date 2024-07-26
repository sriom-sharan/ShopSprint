import { useContext } from 'react';
import insta from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import github from '../assets/github.png';
import UserContext from '../utils/UserContext';



 const Footer = () => {
  const {email} = useContext(UserContext);

  return (
    <div className="flex justify-around w-full align-middle items-center p-4 text-center my-8">

    <h1 className="">Created with 🧡💚💝</h1>
    
    <div className="flex gap-2 justify-center mt-3">
    <p className='font-thin text-sm'>Follow on - </p>
      <img src={insta}></img>
      <img src={twitter}></img>
      <img src={github}></img>
    </div>
    <p className='font-thin text-sm'>{email} </p>

    </div>
  )
}

export default Footer;