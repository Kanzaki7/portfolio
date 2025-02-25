import { useState, useEffect } from 'react'
import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
// import Avatar from './Avatar'
import Loader from './Loader/Loader';
import LeApp from './LeApp';

function App() {
// const [openMenu, setOpenMenu] = useState(false)
// const [showWork, setShowWork] = useState(1)
// const [showMore, setShowMore] = useState(false)
const [loading, setLoading] = useState(true);


// useEffect(() => {
//   console.log("Menu state changed:", openMenu);
// }, [openMenu]);

useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 5000);
}, []);

if (loading) {
  return <Loader />;
} else {
    return (
      <LeApp />
    )
  }
}

export default App
