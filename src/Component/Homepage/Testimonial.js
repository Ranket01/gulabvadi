import React from 'react';
import './Testimonial.css';
import essarlogo from '../Homepage/Images/essarlogo.png'
import bapslogo from '../Homepage/Images/bapslogo.png'

import rzlogo from '../Homepage/Images/rzlogo.png'
import logotwo from '../Homepage/Images/logotwo.png'
import logothree from '../Homepage/Images/logothree.png'

const Testimonial = () => {
  return (<>
    <h2 className='myheadingoftestimonial'>What our clients says</h2>
  <div className="graphics-container"> 
  <div className="graphic">
    <img src="https://1000logos.net/wp-content/uploads/2021/09/Reliance-Industries-Limited-Logo-768x483.png" alt="Nature" style={{height: "62%", marginTop:"45px"}} />
    <div className="overlay">
      <h3>Reliance</h3>
      <p>Healthy, vibrant mango plants from Gulabvadi nursery with excellent customer service and timely delivery.</p>
    </div>
  </div>
  <div className="graphic">
    <img src={essarlogo} alt="Nature"  style={{height: "56%", marginTop:"82px"}}/>
    <div className="overlay">
      <h3>Essar</h3>
      <p>Mango plants arrived in great condition and are growing beautifully.</p>
    </div>
  </div>
  <div className="graphic">
    <img src={bapslogo} alt="Nature"  style={{height: "72%", marginTop:"36px"}}/>
    <div className="overlay">
      <h3>BAPS</h3>
      <p>Great selection of mango plants at Gulabvadi nursery and reasonable prices.</p>
    </div>
  </div>
  <div className="graphic">
    <img src={rzlogo} alt="Nature" />
    <div className="overlay">
      <h3>Razia Exports Pvt. Ltd</h3>
      <p>Gulabvadi nursery provided helpful advice on how to care for our mango plants.</p>
    </div>
  </div>

  <div className="graphic">
    <img src={logotwo} alt="Animals" />
    <div className="overlay">
      <h3>D.M.R. Green valley Agro
Fresh Pvt. Ltd.
</h3>
      <p>Prompt delivery of healthy mango plants from Gulabvadi nursery.</p>
    </div>
  </div>
  <div className="graphic">
    <img src={logothree} alt="Architecture" />
<div className="overlay">
  <h3>Srilatha
SSK Fruits and Farms Pvt
Ltd</h3>
  <p>Highly recommend Gulabvadi nursery for their quality mango plants and exceptional service.</p>
</div>
</div>
</div>

<div id="divforbeforecontenttestimonial" />
  </>);
};

export default Testimonial;
