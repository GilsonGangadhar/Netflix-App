import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen'
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from './features/userSlice'
import MovieDetails from './screens/MovieDetails';

function App() {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        dispatch(login({
          uid : userAuth.uid, 
          email : userAuth.email,
        }))
        console.log(userAuth)
        
      } else {

        dispatch(logout())
      }
    })

    return unsubcribe;
  }, [dispatch]);

  return (
    // <div className="app">
    //   <Router>
    //     <Switch>
    //       <Route path="/" component={HomeScreen} exact={true} />
    //       <Route path="/login" component={LoginScreen} exact={true} />
    //     </Switch>
    //   </Router>
    // </div>

    <div className="app">
    <Router>
      {!user ? (
          <LoginScreen />
        ) : (
      <Switch>
        <Route path="/" component={HomeScreen} exact={true} />
        <Route path="/profile" component={ProfileScreen} exact={true} />
        <Route path='/details/:id' component={MovieDetails} exact={true} />
        {/* <Route path="/login" component={LoginScreen} exact={true} /> */}
      </Switch>
        )}
    </Router>
  </div>

  );
}

export default App;
