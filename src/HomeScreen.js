import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import requests from './Request'

function HomeScreen() {
    return (
        <div className="homeScreen" >
        <Nav/>

        <Banner />

        {/* <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="TOP RATED" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Action Movies" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Comedy Movies" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Horror Movies" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Romance Movies" fetchURL={requests.fetchNetflixOriginals} />
        <Row title="Documentaries" fetchURL={requests.fetchNetflixOriginals} /> */}
           
        </div>
    )
}

export default HomeScreen
