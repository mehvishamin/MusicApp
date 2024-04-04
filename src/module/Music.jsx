import axios from "axios";

const fetchMusic=(async()=>{
try{
  const response=await axios.get("/data.json");
  return response;
}

catch(error){
    console.error(error);
    throw error;
}
})

export {fetchMusic}