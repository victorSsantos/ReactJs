import React from 'react'
import "./LandingPage.css";
import {Component} from 'react';
import EbookImage from '../images/ebook_img.png';

export default class LandingPage extends Component {
    render() {
        return(
        <div className="LandingPage">
            <span>
               <img className="Image" src={EbookImage} alt="Ebook"/>
            </span>
            <span className="Form">
                <span>
                    <input className="Search-Input" placeholder="Digite seu nome" />
                </span>
                <span>
                    <input className="Search-Input" placeholder="Digite seu e-mail" />
                </span>
                <span>
                    <button className="Button-Submit"><b>QUERO MEU E-BOOK GRATUITO</b></button>
                </span>
            </span>
        </div>
        )
    }
}
