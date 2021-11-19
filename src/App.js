import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Admin from "./Pages/Admin/Admin";
import AdminAuth from "./Pages/AdminLogin/AdminLogin";
import NavBar from './Components/Nav/Nav';
import Bbn from "./Pages/BBN/Bbn";
import { Podcast } from "./Pages/Podcast/Podcast";
import PodcastNav from "./Components/PodcastNav/PodcastNav";
import ComingPodcast from "./Pages/Coming Podcast/ComingPodcast";
import PodcastFooter from "./Components/PodcastFooter/PodcastFooter";
import PodcastEpisode from "./Pages/PodcastEpisode/PodcastEpisode";
import PodcastEpisodes from "./Pages/PodcastEpisodes/PodcastEpisodes";
import PodcastAdmin from "./Pages/Podcast Admin/PodcastAdmin";
import PodcastEdit from "./Pages/Podcast Edit/PodcastEdit";
function App() {
  
  return (
    <Router>
      <React.Fragment>
        <Route key={'/'} exact path={'/'}>
        <NavBar />
          <Home />
        </Route>

        <Route key={'/admin'} exact path={'/admin'}>
            <Admin />
        </Route>

        <Route key={'/auth/admin'} exact path={'/auth/admin'}>
            <AdminAuth />
        </Route>

        <Route path='/bbnlive' exact key={"bbnlive"}>
          <Bbn />
        </Route>
        <Route path='/podcast' exact key={"podcast"}>
          {/* <ComingPodcast /> */}
          <PodcastNav />
          <Podcast />
          <PodcastFooter />
        </Route>

        <Route path='/podcast/episodes' exact key={"podcast/episodes"}>
          {/* <ComingPodcast /> */}
          <PodcastNav />
          <PodcastEpisodes />
          <PodcastFooter />
        </Route>

        <Route path='/podcast/episode/:id' exact key={"podcast/episode"}>
          {/* <ComingPodcast /> */}
          <PodcastNav />
          <PodcastEpisode />
          <PodcastFooter />
        </Route>

        <Route  path={'/admin/podcast'} exact key={'/admin/podcast'} >
            <PodcastAdmin />
        </Route>

        <Route path={'/admin/podcast/edit/:id'} exact key={'/admin/podcast/edit/'}>
            <PodcastEdit />
        </Route>
      </React.Fragment>
    </Router>
  );
}

export default App;
