import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify.js";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player.js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi(); // creating instance of SpotifyWebApi to use services.

console.log(spotify);

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue(); // we can pull anything from compenent tree to data layer using dispatch
  //useEffect will run code(which function returns) on given condition
  useEffect(() => {
    //code
    const hash = getTokenFromUrl();
    console.log("hash receieved:", hash);

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token); // every account has its own specific token
      spotify.getMe().then((user) => {
        //     console.log("quazi person is", user);
        dispatch({
          type: "SET_USER", // reducer contains listener when type is SET_USER it performs action.
          user: user, // user value is coming from getMe().
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
      spotify.getPlaylist("5iOzkINOmqyflOSVYv5jkS").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);
  console.log("vale of user fetched:", user);
  console.log("token is this:", token);
  //  console.log("here is the playlists", playlists);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
