import React, { Component } from 'react';
import Header from "../components/Header"
import Footer from '../components/Footer';
import Head from "next/head";
import {getBlogBySlug} from '../actions';
import { Container } from 'react-bootstrap';
import parse from 'html-react-parser';

class About extends Component {
  static async getInitialProps({query}) {
    let blog = {};
    const slug = query.slug;
    try {
      blog = await getBlogBySlug(slug);
    } catch(err){
      console.error(err);
    }
    return {blog}
  }


  render() {
    // progress in forward
    const stringParse = (stringP) => {
      let string = stringP;
      let stringTotal = "";
      while (string.indexOf(',')!==-1) {
        let indexOfComma = string.indexOf(',');
        if(string.charAt(indexOfComma-1 === '>') && string.charAt(indexOfComma-+1 === '<')){
          stringTotal += string.substring(0, indexOfComma);
          string = string.substring(indexOfComma+1);
        }

      }
      stringTotal += string;
      return stringTotal;
    }
    const {blog} = this.props;
    const parsedString =stringParse(blog.story);
    console.log(blog.story);
    console.log(parsedString);

    return (
      <div>
        <Header isAuthenticated={this.props.auth.isAuthenticated} image={"../header2.jpg"}/>
          <Container>
          <div dangerouslySetInnerHTML={{__html: parsedString}}></div>

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