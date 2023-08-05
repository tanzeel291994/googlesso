import { signInWithGoogle ,signInWithFaceBook,signInWithMicrosoft} from '../service/firebase';

import '../App.css';

const Login = () => {
  return (
    <div>
      <button className="button" onClick={signInWithGoogle}><i className="fab fa-google"></i>Sign in with google</button>
      <button className="button" onClick={signInWithFaceBook}><i className="fab fa-facebook"></i>Sign in with Facebook</button>
      <button className="button" onClick={signInWithMicrosoft}><i className="fab fa-facebook"></i>Sign in with Microsoft</button>
    </div>
  )
}

export default Login;