import React from "react"
import "./Home.css"
import hero from "../pic/vandyyy.jpeg"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Vandita Chauhan</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Student.", " Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I’m a collaborative, team-focused culture, opportunities to learn and grow my skills from a technical standpoint, and a chance to learn more leadership skills over time.
            I have been a part of girl script summer of code and done internship in web development. Aslo practicing competitive coding and been shortlisted for APAC Generation Google Schoralship .Contributed well in openSource and shortlisted from college to take part in smart india hackathon</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
