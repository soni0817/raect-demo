import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CounterUP = () => {
  const[CounterOn,setCounterOn]=useState(false);
  return (
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>

    
    <div className='counter-wrapper'>
    <div className='container'>
     <div className='counter-main'>
      <div className='counter-box'>
      <p>Lorem ipsum</p>
        <h2>
        {CounterOn && <CountUp start={0} end={123} duration={2} delay={0}/>}
        +
        </h2>
        <h5>Lorem ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
      </div>
      <div className='counter-box'>
      <p>Lorem ipsum</p>
        <h2>
        {CounterOn && <CountUp start={0} end={123} duration={2} delay={0}/>}
        +
        </h2>
        <h5>Lorem ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
      </div>
      <div className='counter-box'>
      <p>Lorem ipsum</p>
        <h2>
        {CounterOn && <CountUp start={0} end={123} duration={2} delay={0}/>}
        +
        </h2>
        <h5>Lorem ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
      </div>
      <div className='counter-box'>
      <p>Lorem ipsum</p>
        <h2>
        {CounterOn && <CountUp start={0} end={123} duration={2} delay={0}/>}
        +
        </h2>
        <h5>Lorem ipsum</h5>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
      </div>
     </div>
    </div>

    </div>

    
    </ScrollTrigger>
  )
}

export default CounterUP