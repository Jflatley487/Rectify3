import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Therapists from "./pages/Therapists";
import Profile from "./pages/Profile";
import Home from "./pages/Home"; // Import the Home component
import About from "./pages/About";

import Header from "./components/Header";
import Auth from "./utils/auth";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(Auth.loggedIn());

  const handleLogout = () => {
    Auth.logout();
    setIsLoggedIn(false);
  };

  return (
    <ApolloProvider client={client}>
      <Router basename="/">
        <div className="flex-column justify-flex-start min-100-vh">
          <Header handleLogout={handleLogout} />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="login"
                element={isLoggedIn ? <Navigate to="/" /> : <Login />}
              />
              <Route
                path="signup"
                element={isLoggedIn ? <Navigate to="/" /> : <SignUp />}
              />
              <Route
                path="/"
                element={isLoggedIn ? <Therapists /> : <Navigate to="/login" />}
              />
              <Route path="profile/:therapistId" element={<Profile />} />
              <Route path="therapists" element={<Therapists />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
