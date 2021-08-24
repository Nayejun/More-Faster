import React from "react";
import Loadable from "react-loadable";

const Loading = () => {
    return <div>Loading..</div>;
}
export const Home = Loadable({
    Loader: () => import('./Home'),
    Loading: Loading
});
export const About = Loadable({
    Loader: () => import('./About'),
    Loading: Loading
});
