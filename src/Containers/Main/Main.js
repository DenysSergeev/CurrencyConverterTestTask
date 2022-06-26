import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

import "./Main.css";

class Main extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="site">
        <Header />
        <div className="main">
          <h3>Курс валют на </h3>
              <div className="flex-container">
                <div className="block flex-item">
                  <div className="currency-name">USD</div>
                  <div className="currency-in">1500</div>
                  <div className="currency-out">1200</div>
                </div>
                <div className="block flex-item">
                  <div className="currency-name">EUR</div>
                  <div className="currency-in">1500</div>
                  <div className="currency-out">1200</div>
                </div>
                <div className="block flex-item">
                  <div className="currency-name">UAH</div>
                  <div className="currency-in">1500</div>
                  <div className="currency-out">1200</div>
                </div>
              </div>
              <h3>Калькулятор обмена</h3>
              <div className="block">
                <div>Я хочу</div>
                <div><label htmlFor=""><input type="radio" name="radio" defaultValue="0" /> купить</label></div>
                <div><label htmlFor=""><input type="radio" name="radio" defaultValue="1" /> продать</label></div>
              </div>
              <div>
                <input type="number" defaultValue="150" />
                <select name="" id="">
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="UAH">UAH</option>
                </select>
              </div>
              <div>
                <h4>Результат</h4>
                <ul className="calc-res">
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                  <li>EUR 150</li>
                </ul>
              </div>
              <div className="container" id="cookie-info">
                <div className="site-content">
                  <div className="well">Мы используем cookie для сбора информации технического характера.&nbsp;
                    <button><a className="btn btn-primary btn-sm">OK</a></button>
                  </div>
                </div>
              </div>
          </div>
        <Footer />
      </div>
    )
    
  }

  /*
  useEffect (() => {
    fetch('https://api.exchangeratesapi.io/v1/latest?access_key=ZTmyn3FXk2A2yI1C1hZ627ax6PfZ0EH3')
    .then(data => {
      return data.json();
    })
    .then(data => {
      console.log(data);
      setState({ data : data.date });
    });
  }, [])

  */
}

export default Main;