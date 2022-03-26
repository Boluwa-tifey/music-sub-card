
import React from "react"
import ReactDOM from "react-dom";
import image from '../src/assets/bg3.png'
import image2 from '../src/assets/music.jpeg'
import image3 from '../src/assets/music logo.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css'



const App = () => {
  return (

    <>

      <div className="img" >
        <img src={image} alt="image" className="w-100" />
      </div>
      <div className="card cardd">
        <div className="card-wrapper shadow-lg">
          <img className="card-img-top" src={image2} alt="card image" />
          <div className="card-body">
            <h4 className="card-title text-center font-weight-bold order">Order Summary</h4>
            <p className="card-text text-center font-weight-light you mb-0" style={{ padding: '20px' }}>You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
            <div className="bg-light d-flex justify-content-between top">
              <div className="annual">
                <div>
                  <img src={image3} alt="" />
                </div>
                <div className="plan">
                  <p className="m-0 p-0 annuall">Annual Plan</p>
                  <p className="m-0 p-0 year">$59.99/year</p>
                </div>
              </div>
              <u className="font-weight-bold  change">Change</u>
            </div>
            <button className="btn btn-lg mt-3 w-100 mb-3 text-white" style={{ background: '#382ae1' }}>Proceed to Payment</button>
            <div>
              <h6 className="text-center font-weight-bold cancel">Cancel Order</h6>
            </div>


          </div>
        </div>
      </div>



    </>
  );
}

export default App;
