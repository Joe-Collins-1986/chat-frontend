import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/home/LandingPage";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import MyProfile from "./pages/profile/MyProfile";
import EditProfilePassword from "./pages/profile/EditProfilePassword";
import ChatGptRequest from "./components/ChatGptRequest";
import Footer from "./components/Footer";
import WorkInProgress from "./pages/WorkInProgress";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/wip" render={() => <WorkInProgress />} />
          <Route
            exact
            path="/chatgptrequest"
            render={() => <ChatGptRequest />}
          />
          <Route exact path="/myprofile" render={() => <MyProfile />} /> */}
          <Route
            exact
            path="/editprofile-password"
            render={() => <EditProfilePassword />}
          />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
