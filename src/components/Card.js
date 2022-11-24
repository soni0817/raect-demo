import React from "react";
import { FiChevronRight } from "react-icons/fi";
const Card = () => {
  return (
   <>
     <div className="card-main">
      <div className="card-main-wrap">
        <div className="card-boxs card-boxs-one">
          <div>
            <p className="qlink">
              Quick Links <FiChevronRight />
            </p>
          </div>

          <p className="card-title">Lorem Ipsum</p>
          <div className="card-sec-1">
            <p>Level 1</p>
            <p>Level 2</p>
          </div>
          <div className="card-sec-2">
            <p>Level 3</p>
            <p>Enquiry</p>
          </div>
        </div>
        <div className="card-boxs card-boxs-two">
          <p className="card-title">Lorem Ipsum</p>
          <div className="card-sec-1">
            <p>Level 1</p>
            <p>Level 2</p>
          </div>
          <div className="card-sec-2">
            <p>Level 3</p>
            <p>Enquiry</p>
          </div>
        </div>
        <div className="card-boxs card-boxs-three">
          <p className="card-title">Lorem Ipsum</p>
          <div className="card-sec-1">
            <p>Level 1</p>
            <p>Level 2</p>
          </div>
          <div className="card-sec-2">
            <p>Level 3</p>
            <p>Enquiry</p>
          </div>
        </div>
      </div>
    </div>
    <section className="exam">
        <div className="container">
            <div className="exam-main">
            <div className="exam-shed">
                <h3>Upcoming Examinations</h3>
                <p>Enquire about the examination & register for the exams</p>
            </div>
            <div className="exam-box">
            <img src={`/images/event.png`}/>
                <div>
                <h4>02th October 2014</h4>
                <p>Level 1 exam</p>
                </div>
            </div>
            <div className="exam-box">
            <img src={`/images/event.png`}/>
                <div>
                <h4>Nov-Dec 2016</h4>
                <p className="exam-sec"> Level 2 <p>Lorem Ipsum</p> <p>Lorem Ipsum</p></p>
                </div>
            </div>
            <div className="exam-box">
            <img src={`/images/event.png`}/>
                <div>
                <h4>Ongoing this year </h4>
                <p>Level 3 (Grad)</p>
                </div>
            </div>
            
         </div>  
        </div>
    </section>
   </>
  );
};

export default Card;
