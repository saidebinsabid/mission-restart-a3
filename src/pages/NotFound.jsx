import { useNavigate } from 'react-router-dom';
import error404Img from '../assets/error-404.png';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <img src={error404Img} alt="404 Not Found" />
      <h1>Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <button id="go-back-btn" className="btn-primary" onClick={() => navigate('/')}>
        Go Back!
      </button>
    </div>
  );
}
