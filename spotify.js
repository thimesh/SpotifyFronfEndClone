export const authEndpoint = "https://accounts.spotify.com/authorize/";

const redirect_uri = "http://localhost:3000/";

const client_id = "enter your own client Id provided by spotify";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash // this will go to the hash
    .substring(1) // it will start from 1 character
    .split("&") // this will split at &
    .reduce((initial, item) => {
      // #accessToken=mysuperSceretley&name=hime

      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${client_id}
&redirect_uri=${redirect_uri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
