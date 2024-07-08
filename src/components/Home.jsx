import React from 'react'
import vg from "../assets/2.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
   <>
    <div className='home' id='home' >
        <main>
            <h1>TechHorizon</h1>
            <p>Solution To All Your Problems</p>
        </main>
    </div>

    <div className="home2">
    <img src={vg} alt="Graphics" />
    <div>
      <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
    </div>

    </div>


    <div className="home3" id='about'>
      <div>
        <h1>Who We Are?</h1>
        <p>Welcome to TechHorizon, your trusted partner in innovative technology solutions. We specialize in delivering cutting-edge services tailored to meet the unique needs of businesses and individuals alike. From blockchain development and NFT projects to cloud services and cybersecurity, our team of experts is dedicated to helping you navigate the ever-evolving tech landscape. With a commitment to excellence and a passion for technology, we provide personalized, scalable solutions that drive growth and efficiency. At TechyFied, we believe in empowering our clients with the tools and knowledge they need to succeed in today's digital world.</p>
      </div>
    </div>

    <div className="home4" id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{animationDelay:"0.3s"}}>
            <AiFillGoogleCircle/>
            <p>Google</p>
          </div>
          <div style={{animationDelay:"0.5s"}}>
            <AiFillAmazonCircle/>
            <p>Amazon</p>
          </div>
          <div style={{animationDelay:"0.7s"}}>
            <AiFillYoutube/>
            <p>Youtube</p>
          </div>
          <div style={{animationDelay:"1s"}}>
            <AiFillInstagram/>
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
   </>
  )
}

export default Home