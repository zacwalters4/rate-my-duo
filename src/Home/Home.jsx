import React from 'react'
import Search from '../Search/Search'
import './Home.css'

function Home() {

    return (
        <main className="home">
            <Search />
            <p>For example: wutt#1337</p>
            <div className="about-box">
                <h2>ABOUT</h2>
                <p>Welcome to Rate my Duo, a small web app designed to give a potential ranked duo partner a ranking, helping you evaluate whether or not you should duo with them! This is a for fun project that is by no means meant to be taken seriously. The rating system was thrown together rather quickly, so please do not put too much weight on your own or other's scores. Currently this site only supports Overwatch 2 PC accounts, but I would like to one day support other games and consoles as well. You MUST have stats from the current competitive season for this to work. When searching an account, the score will be shown underneath the battletag, the higher the score the better. Thanks for visiting!</p>
            </div>
        </main>
    )
  }
  
  export default Home