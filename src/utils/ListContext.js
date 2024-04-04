import { createContext } from "react";

const ListContext=createContext({
    selectedTab:"",
    selectedTrack:{},
    songsList:[],
    searchSong:[],
    recentlyPlayed:[]
})

export default ListContext;