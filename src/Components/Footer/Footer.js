import React from "react";
//import { Link } from "react-router-dom";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="flex-container">
              <div className="flex-item">
                <h1 className="footer-title"><a href="#">2022</a></h1>
                <p>All rights Reserved</p>
              </div>
              <div className="flex-item">
                <div className="module-body">
                  <ul className="list-unstyled">
                    <li><a href="/sitemap/" tooltip="Карта сайта">Карта сайта</a></li>
                    <li><a href="/sitemap.xml/" target="_blank" tooltip="Контакты">Контакты</a></li>
                    <li><a href="d">Гарантии</a></li>
                    <li><a href="s"></a>О сервисе</li>
                    <li><a href="o"></a>Условия возврата</li>
                    <li><a href="p"></a>Соглашение о использовании сервиса</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">
              <ul className="link">
              </ul>
            </div>
            <div className="flex-item">
              <div className="clearfix payment-methods">
                <ul>
                  <img src="" data-toggle="tooltip" data-placement="top" data-origin-title="www.monobank.ua" alt="" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
        
}

export default Footer;