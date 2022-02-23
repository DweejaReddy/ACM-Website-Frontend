import React, { useEffect } from 'react';
import Aos from "aos";
import timelineCSS from "./timeline.module.css"
import "aos/dist/aos.css";
function Timeline() {
  useEffect(() => {
    Aos.init({ duration: 1500 });

  }, []);

  return (
    <>
      <section className={`${timelineCSS.timeline} mx-auto`} style={{borderRadius: '20px', maxWidth:'95%'}}>
        <div className={`${timelineCSS.heading} text-center py-5`} data-aos="fade-up" data-aos-duration={2000}>Vertical Timeline</div>
        <div className={`${timelineCSS.wrapper} pb-5`}>
          <div className={`${timelineCSS.centerLine}`}/>
          <div className={`${timelineCSS.row} ${timelineCSS.row1}`} data-aos="fade-right" data-aos-duration={2000}>
            <section>
              <i className={`${timelineCSS.icon}`} style={{fontWeight: 900}}>1</i>
              <div className={`${timelineCSS.details}`}>
                <span className={`${timelineCSS.title}`}>Title of Section 1</span>
                <span>1st Jan 2021</span>
              </div>
              <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
              <div className={`${timelineCSS.bottom}`}>
                <i>- Date 1</i>
              </div>
            </section>
            
          </div>
          <div className={`${timelineCSS.row} ${timelineCSS.row2}`} data-aos="fade-left" data-aos-duration={2000}>
            <section>
              <i className={`${timelineCSS.icon}`} style={{fontWeight: 900}}>2</i>
              <div className={`${timelineCSS.details}`}>
                <span className={`${timelineCSS.title}`}>Title of Section 2</span>
                <span>2nd Jan 2021</span>
              </div>
              <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
              <div className={`${timelineCSS.bottom}`}>
                <i>- Date 2</i>
              </div>
            </section>
          </div>
          <div className={`${timelineCSS.row} ${timelineCSS.row1}`} data-aos="fade-right" data-aos-duration={2000}>
            <section>
              <i className={`${timelineCSS.icon}`} style={{fontWeight: 900}}>3</i>
              <div className={`${timelineCSS.details}`}>
                <span className={`${timelineCSS.title}`}>Title of Section 3</span>
                <span>3rd Jan 2021</span>
              </div>
              <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
              <div className={`${timelineCSS.bottom}`}>
                <i>- Date 3</i>
              </div>
            </section>
          </div>
        </div></section>
    </>
  );
}

export default Timeline;