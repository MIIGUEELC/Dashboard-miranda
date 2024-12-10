import { signIn, setLoginError } from './LoginSlice'; 
import users from '../data/users.json'; 


export const loginThunk = (username, password) => (dispatch) => {
  try {
   
    const user = users.find((user) => user.user === username && user.password === password);

    if (user) {
      const userData = { user: user.user, name: user.name };
      dispatch(signIn(userData)); 
    } else {
      dispatch(setLoginError("Credenciales incorrectas"));
    }
  } catch (error) {
    dispatch(setLoginError("Error en datos")); 
  }
};
