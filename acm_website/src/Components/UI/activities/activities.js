import React, { useEffect } from 'react';
import Aos from "aos";
import Tilt from "react-parallax-tilt";
import "aos/dist/aos.css";
import activitiesCSS from "./activities.module.css"
function Activities() {
  useEffect(() => {
    Aos.init({ duration: 1500 });

  }, []);

  return (
    <>
    
    <section id="activities" className={`mx-auto mt-4 ${activitiesCSS.new}`}>
        <div className={`text-center text-white pt-4 ${activitiesCSS.heading}`} data-aos="fade-up" data-aos-duration={2000} style={{marginBottom: '-50px'}}>Club Activities</div>
        <div className={`align-items-center mt-4 pb-5 ${activitiesCSS.container1}`}>
        <Tilt
                data-tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                gyroscope={true}
                glareBorderRadius={10}
            >
          <div className={`${activitiesCSS.box}`} data-aos="fade-right" data-aos-duration={2000} >
            
            <span />
            <div className={`${activitiesCSS.content} align-items-center text-center`}>
              <lord-icon src="https://cdn.lordicon.com/ybfcwnqv.json" trigger="loop" colors="primary:#121331,secondary:#4e8be7" style={{width: '90px', height: '90px'}}>
              </lord-icon>
              <h2 className="py-2">Code <br /> Together</h2>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam inventore maxime nihil non quasi. Eos alias deleniti nam ut accusamus ipsa, eum iste perspiciatis facilis placeat amet praesentium, similique ratione totam cum vero accusantium? Pariatur quia omnis temporibus est fuga adipisci tempore. Ad, aliquid ea. Iure aut neque aperiam!</div>
            </div>
          </div>
          </Tilt>

          <Tilt
                data-tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                gyroscope={true}
                glareBorderRadius={10}
            >
          <div className={`${activitiesCSS.box}`} data-aos="fade-up" data-aos-duration={2000} >
            <span />
            <div className={`${activitiesCSS.content} align-items-center text-center`}>
              <lord-icon src="https://cdn.lordicon.com/qhgmphtg.json" colors="primary:#121331,secondary:#4e8be7" trigger="loop" style={{width: '90px', height: '90px'}}>
              </lord-icon>
              <h2 className="py-2">Interactive Workshop</h2>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam inventore maxime nihil non quasi. Eos alias deleniti nam ut accusamus ipsa, eum iste perspiciatis facilis placeat amet praesentium, similique ratione totam cum vero accusantium? Pariatur quia omnis temporibus est fuga adipisci tempore. Ad, aliquid ea. Iure aut neque aperiam!</div>
            </div>
          </div>
          </Tilt>

          <Tilt
                data-tilt
                perspective={500}
                glareEnable={true}
                glareMaxOpacity={0.45}
                scale={1.05}
                gyroscope={true}
                glareBorderRadius={10}
            >
          <div className={`${activitiesCSS.box}`} data-aos="fade-left" data-aos-duration={2000} >
            <span />
            <div className={`${activitiesCSS.content} align-items-center text-center`}>
              <img src="./image/award.png" className={`${activitiesCSS.award}`} style={{rotate: '360deg'}} width="90px" alt="" />
              <h2 className="py-2">Exciting Hackathons</h2>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laboriosam inventore maxime nihil non quasi. Eos alias deleniti nam ut accusamus ipsa, eum iste perspiciatis facilis placeat amet praesentium, similique ratione totam cum vero accusantium? Pariatur quia omnis temporibus est fuga adipisci tempore. Ad, aliquid ea. Iure aut neque aperiam!</div>
            </div>
            
          </div>
          </Tilt>
        </div>
        
      </section>
    </>
  );
}

export default Activities;