import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [{
        title: "Home",
        path: "/dashboard/",
        icon: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "Registration",
        path: "/dashboard/registration",
        icon: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "Reports",
        path: "/dashboard/reports",
        icon: < IoIcons.IoIosPaper / > ,
        cName: "nav-text",
    },
    {
        title: "feeds",
        path: "#",
        icon: < FaIcons.FaCartPlus / > ,
        cName: "nav-text",
    },
    {
        title: "Team",
        path: "/dashboard/team",
        icon: < IoIcons.IoMdPeople / > ,
        cName: "nav-text",
    },
];