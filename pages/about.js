import React, { Component } from 'react';
import Header from "../components/Header"
import Link from "next/link"
import Footer from '../components/Footer';
import Head from "next/head";
import { Container } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated} image={"header2.jpg"}/>
        <Container>
        <div className="about">
        {/* <div className="cardHeaderAbout">
          <span>About Me</span>
        </div> */}
        <div className="profileImageContainer">
          <img src="./2.jpg" />
        </div>
        <p className="aboutContext">
          Hello. I am Ahmet Dadak. I am a junior computer
          engineering student. I am currently working on
          data science. I am excited to find an opportunity
          to have an internship in that field. Here I write
          about my thoughts about things in life.
              </p>
      </div>
      </Container>
          <Footer/>
          <div>
        <Head>
          <title>Ahmet Dadak</title>
          <meta name = "viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet"/>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
            integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
            crossorigin="anonymous" />
            <link href="https://fonts.googleapis.com/css?family=Qwigley&display=swap" rel="stylesheet"/>
        </Head>
      </div>
      </div>
    )
  }
}
export default About;