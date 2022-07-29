import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p> I’m a collaborative, team-focused culture, opportunities to learn and grow my skills from a technical standpoint, and a chance to learn more leadership skills over time.<br></br> I have been a part of girl script summer of code and done internship in web development. Also practicing competitive coding and been shortlisted for APAC Generation Google Schoralship .Contributed well in openSource and shortlisted from college to take part in smart india hackathon</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C/C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>AWS</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
export default Skills;