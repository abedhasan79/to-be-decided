import React from "react";
import {Banner} from '../components/Banner'


const style={
    hw:{
        marginTop: '20vh'
    }
}
const Home = () => {
    return (
      <div style={style.hw}>
        <Banner />
      </div>
    );
  };
  
  export default Home;
  