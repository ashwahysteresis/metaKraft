import React from "react";
import Error404 from "../pages/404";
import Boost from "../pages/Boost";
import Earn from "../pages/Earn";
import Home from "../pages/Home";
import Play from "../pages/Play";
import Referral from "../pages/Referral";
import Tweet from "../pages/Tweet";

export const Links = [
    {
        name: "Play",
        path: "/",
        element: <Home />,
        showInNavigation: true,
    },
    {
        name: "Play-Button",
        path: "/play",
        element: <Play />,
        showInNavigation: true,
    },
    {
        name: "Tweet",
        path: "/tweet",
        element: <Tweet />,
        showInNavigation: true,
    },
    {
        name: "Earn",
        path: "/earn",
        element: <Earn />,
        showInNavigation: true,
    },
    {
        name: "Boost",
        path: "/boost",
        element: <Boost />,
        showInNavigation: true,
    },
    {
        name: "Referral",
        path: "/referral",
        element: <Referral />,
        showInNavigation: true,
    },
    {
        name: "Error404",
        path: "*",
        element: <Error404 />,
        showInNavigation: false,
    },
];
