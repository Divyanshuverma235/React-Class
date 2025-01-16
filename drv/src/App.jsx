import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';  
import { FaPhoneFlip } from 'react-icons/fa6';

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1>This is my first react project</h1>
          <FaWhatsapp size={50} color="#25D366" className="text-danger" /> 
          <FaFacebook size={50} color='#25D366' className="text-danger" />
          <FaTwitter size={50} color='#25D366' className="text-danger" />
          <FaPhoneFlip size={50} color='#25D366' className="text-danger" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">This is some card content. Card number 1</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title 2</h5>
              <p className="card-text">This is some card content. Card number 2</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title 3</h5>
              <p className="card-text">This is some card content. Card number 3</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card Title 4</h5>
              <p className="card-text">This is some card content. Card number 4</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
