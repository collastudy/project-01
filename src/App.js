import React from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';// bootstrap 모듈을 설치하고 임포트 해준다. npm install --save reactstrap bootstrap
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";//$ npm i @fortawesome/react-fontawesome, $ npm i @fortawesome/free-solid-svg-icons @fortawesome/free-regular-svg-icons @fortawesome/free-brands-svg-icons
import { faSquare } from "@fortawesome/free-regular-svg-icons"; //$ npm i @fortawesome/fontawesome-svg-core
// import OwlCarousel from 'react-owl-carousel';  //npm install react-owl-carousel --save  
// import 'owl.carousel/dist/assets/owl.carousel.css';  //npm install react-owl-carousel2
// import 'owl.carousel/dist/assets/owl.theme.default.css';  오류남 시발


function App() {
  return (<div className="App"><div>
  <title>COLLA</title>
  {/* meta */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  {/* css */}
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  {/* <link rel="stylesheet" href="css/ionicons.min.css"> */}
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/owl.carousel.css" />
  <link rel="stylesheet" href="css/owl.theme.css" />
  <link rel="stylesheet" href="css/owl.transitions.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="js/nivo-lightbox/nivo-lightbox.css" />
  <link rel="stylesheet" href="js/nivo-lightbox/nivo-lightbox-theme.css" />
  <link rel="stylesheet" href="css/custom.css" />
  {/* js */}
  {/* ****************************** Preloader ************************** */}
  <div id="preloader" />
  <div id="wrapper">
    <div id="overlay-1">
      <section id="navigation-scroll">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-example">
                <span className="sr-only">Toggle navigation</span>
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="#">COLLA</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-example">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#about" className="active">Main</a></li>
                <li><a href="#our_service">Service</a></li>
                <li><a href="#Meet">Member</a></li>
                <li><a href="#ScreenShot">Gallery</a></li>
                {/* <li><a href="#subscribe">Subscribe</a></li> */}
                <li><a href="#testimonial">Calendar</a></li>
                <li><a href="#download">etc</a></li>
                {/* <li><a href="#price_table">Price Table</a></li> */}
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </div>{/* /.container-fluid */}
        </nav>	{/* navbar */}
      </section>	{/* #navigation */}
      <section id="starting">
        <div className="text-center starting-text wow animated zoomInDown">
          <h2>Welcome COLLA web project-01 !!!</h2>
          <h1 className="rene">COLLA Web Project</h1>
        </div>
      </section>
      <div id="bottom" className="bottom text-center">
        <a href="#about"><i className="ion-ios7-arrow-down" /></a>
      </div>
    </div>{/* overlay-1 */}
  </div>	{/* wrapper */}
  {/* About Us */}
  <section id="about">
    <div className="container">
      <div className="row text-center heading">
        <div className="wow animated zoomInDown heading-text">
          <h3>About Us</h3>
          <hr className="full" />
          <br />
        </div>
      </div>	{/* row */}
      <div className="row about-us-text">
        <div className="col-md-12">
          <p className="text-center">This is the first project of COLLA to study React and TypeScript to create a website and introduce a new algorithm.</p>
        </div>
      </div>	{/* row */}
      <div className="row main_content">
        <div className="col-md-4 col-sm-4 wow animated zoomIn" data-wow-delay="0.1s">
          <figure>
            <img className="pro img-responsive center-block" src="img/3-col-icons-web.png" alt="image" />
          </figure>
          <h5 className="text-center">WEBSITE</h5>
        </div>	{/* col-md-4 */}
        <div className="col-md-4 col-sm-4 wow animated zoomIn" data-wow-delay="0.1s">
          <figure>
            <img className="pro img-responsive center-block" src="public/logo192.png" alt="image" />
          </figure>
          <h5 className="text-center">REACT</h5>
        </div>	{/* col-md-4 */}
        <div className="col-md-4 col-sm-4 wow animated zoomIn" data-wow-delay="0.1s">
          <figure>
            <img className="pro img-responsive center-block" src="img/3-col-icons-iphone.png" alt="image" />
          </figure>
          <h5 className="text-center">TYPESCRIPT</h5>
        </div>	{/* col-md-4 */}
      </div>{/* row main_content */}
    </div>	{/* container */}
  </section>	{/* about us */}
  {/* Our service */}
  <section id="our_service">
    <div className="container">
      <div className="row text-center heading">
        <div className="wow animated zoomInDown heading-text">
          <h3>Services</h3>
          <hr className="full" />
          <br />
        </div>
      </div>
      <div className="main_content">
        <div className="services">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <div className="service">
                <img src="img/service1.png" alt="service1" />
                <div className="text-center">
                  <h4>Web Application</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  </p>
                </div> {/* .text-center */}
              </div> {/* .service */}
            </div> {/* .col-md-3 */}
            <div className="col-md-3 col-sm-6">
              <div className="service">
                <img src="img/service2.png" alt="service1" />
                <div className="text-center">
                  <h4>Mobile Application</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  </p>
                </div> {/* .text-center */}
              </div> {/* .service */}
            </div> {/* .col-md-3 */}
            <div className="col-md-3 col-sm-6">
              <div className="service">
                <img src="img/service3.png" alt="service1" />
                <div className="text-center">
                  <h4>Mobile Game</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  </p>
                </div> {/* .text-center */}
              </div> {/* .service */}
            </div> {/* .col-md-3 */}
            <div className="col-md-3 col-sm-6">
              <div className="service">
                <img src="img/service4.png" alt="service1" />
                <div className="text-center">
                  <h4>Web Design</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  </p>
                </div> {/* .text-center */}
              </div> {/* .service */}
            </div> {/* .col-md-3 */}
          </div>	{/* row */}
        </div>	{/* services */}
      </div>	{/* main_content */}
    </div>	{/* container */}
  </section>	{/* our_service */}
  {/* Meet With Us */}
  <section id="Meet">
    <div className="container">
      <div className="row text-center heading">
        <div className="wow animated zoomInDown heading-text">
          <h3>Member</h3>
          <hr className="full" />
        </div>	{/* row */}
        <div className="row about-us-text">
          <div className="col-md-12">
            <p className="text-center">
              COLLA 첫번째 프로젝트 맴버 소개입니다.
            </p>
          </div>
        </div>	{/* row */}
      </div> {/* #heading-text */}
    </div>
    <div className="main_content">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="meet-item">
              <img src="img/member1.png" alt="meet1" />
              <div className="text-center">
                <h4>HUIWON</h4>
                <p>
                  First Runner
                </p>
                <a className="ico twitter" href="#"><i className="fa fa-twitter" /></a>
                <a className="ico facebook" href="#"><i className="fa fa-facebook" /></a>
                <a className="ico google-plus" href="#"><i className="fa fa-google-plus" /></a>
              </div> {/* .text-center */}
            </div> {/* .meet-item */}
          </div> {/* .col-md-3 */}
          <div className="col-md-3 col-sm-6">
            <div className="meet-item">
              <img src="img/member2.png" alt="meet1" />
              <div className="text-center">
                <h4>CHUNGHUI</h4>
                <p>
                  Second Runner
                </p>
                <a className="ico twitter" href="#"><i className="fa fa-twitter" /></a>
                <a className="ico facebook" href="#"><i className="fa fa-facebook" /></a>
                <a className="ico google-plus" href="#"><i className="fa fa-google-plus" /></a>
              </div> {/* .text-center */}
            </div> {/* .meet-item */}
          </div> {/* .col-md-3 */}
          <div className="col-md-3 col-sm-6">
            <div className="meet-item">
              <img src="img/member1.png" alt="meet1" />
              <div className="text-center">
                <h4>JONGUK</h4>
                <p>
                  Third Runner
                </p>
                <a className="ico twitter" href="#"><i className="fa fa-twitter" /></a>
                <a className="ico facebook" href="#"><i className="fa fa-facebook" /></a>
                <a className="ico google-plus" href="#"><i className="fa fa-google-plus" /></a>
              </div> {/* .text-center */}
            </div> {/* .meet-item */}
          </div> {/* .col-md-3 */}
          <div className="col-md-3 col-sm-6">
            <div className="meet-item">
              <img src="img/member1.png" alt="meet1" />
              <div className="text-center">
                <h4>CHANWOOL</h4>
                <p>
                  Fourth Runner
                </p>
                <a className="ico twitter" href="#"><i className="fa fa-twitter" /></a>
                <a className="ico facebook" href="#"><i className="fa fa-facebook" /></a>
                <a className="ico google-plus" href="#"><i className="fa fa-google-plus" /></a>
              </div> {/* .text-center */}
            </div> {/* .meet-item */}
          </div> {/* .col-md-3 */}
        </div>	{/* row */}
      </div>	{/* .container */}
    </div>	{/* main_content */}
    {/*</div>	 container */}
  </section>	{/* Meet */}
  <section id="ScreenShot">
    <div className="container">
      <div className="row text-center heading">
        <div className="wow animated zoomInDown heading-text">
          <h3>GALLERY</h3>
          <hr className="full" />
        </div> {/* #heading-text */}
      </div>
      <div className="main_content">
        <div className="container">
          <div className="col-xs-12">
            <div id="screenshots-wrap" className="owl-carousel owl-theme">
              <a href="img/screenShoot1.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot1.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot2.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot2.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot3.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot3.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot4.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot4.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot1.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot1.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot2.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot2.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot3.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot3.png" className="img_res wow animated zoomIn" alt="" />
              </a>
              <a href="img/screenShoot4.png" className="item" data-lightbox-gallery="screenshots">
                <img src="img/screenShoot4.png" className="img_res wow animated zoomIn" alt="" />
              </a>
            </div>
          </div>
        </div>	{/* row */}
      </div>	{/* .container */}
    </div>	{/* main_content */}
    {/*</div>	 container */}
  </section>	{/* #ScreenShot */}
  {/* Subscribe */}
  <section id="subscribe">
    <div className="container text-center">
      <h4>Subscribe For New Game</h4>
      {/* <label for="email">Email</label> */}
      <input type="email" name="email" placeholder="Eneter Your email address" /><br />
      <a className="btn btn-sub btn-primary" href="#" role="button">SUBSCRIBE</a>
    </div> {/* .container */}
  </section> {/* #subscribe */}
  <section id="testimonial">
    <div className="container">
      <div className="row text-center heading">
        <div className="bg-image col-md-12">
          <div className="wow animated zoomInDown heading-text">
            <h3>Testimonials</h3>
            <hr className="full" />
            <br />
          </div>
        </div>
      </div>
      <div className="row main_content">
        <div className="col-md-10 col-md-offset-1">
          <div id="client-speech" className="owl-carousel owl-theme">
            <div className="item">
              <img className="img-circle img-responsive center-block" src="img/test1.png" alt="text" />
              <p className="client-comment text-center">
                When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.
              </p>
              <div className="row text-center">
                <p className="client-name text-center"> ----- Noona Nuengthida Sophon</p>
              </div>
            </div>
            <div className="item">
              <img className="img-circle img-responsive center-block" src="img/test2.png" alt="text" />
              <p className="client-comment text-center">
                When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.
              </p>
              <div className="row text-center">
                <p className="client-name text-center"> ----- Noona Nuengthida Sophon</p>
              </div>
            </div>
            <div className="item">
              <img className="img-circle img-responsive center-block" src="img/test3.png" alt="text" />
              <p className="client-comment text-center">
                When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.When you form a team, why do you try to form a team? Because teamwork builds trust and trust builds speed.
              </p>
              <div className="row text-center">
                <p className="client-name text-center"> ----- Noona Nuengthida Sophon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>	{/* clients */}
  {/* Download now */}
  <section id="download">
    <div className="container">
      <div className="row text-center heading">
        <div className="wow animated zoomInDown heading-text">
          <h3>etc</h3>
          <hr className="full" />
        </div>	{/* row */}
        <div className="row about-us-text">
          <div className="col-md-12">
            <p className="text-center download-subtitle">
              etc..
            </p>
          </div>
        </div>	{/* row */}
      </div> {/* #heading-text */}
    </div>
    <div className="main_content">
      <div className="container text-center">
        <a href="#" className="bttn apple-store btn btn-lg">
        </a>
      </div>	{/* .container */}
    </div>	{/* main_content */}
    {/* </div>	container */}
  </section>	{/* Meet */}
  {/* contact */}
  <section id="contact">
    <div className="container text-center">
      <div className="row text-center">
        <div className="bg-image">
          <div className="col-md-6 col-md-offset-3 text-center share-text wow animated zoomInDown heading-text">
            <p className="heading">
              If you got any questions, please do not hesitate to send us a message.
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center main_content">
        <form method="post" action="#" className>
          <div className="col-md-4 col-md-offset-2 text-center">
            <div className="form">
              <div className="input-group margin-bottom-sm">
                <span className="input-group-addon">
                  <i className="fa fa-user fa-fw" />
                </span>
                <input className="form-control" type="text" placeholder="Name" required />
              </div>
              <div className="input-group margin-bottom-sm">
                <span className="input-group-addon">
                  <i className="fa fa-envelope-o fa-fw" />
                </span>
                <input className="form-control" name="email" type="email" placeholder="Email address" required />
              </div>
              <div className="input-group margin-bottom-sm">
                <span className="input-group-addon">
                  <i className="fa fa-tags fa-fw" />
                </span>
                <input className="form-control" type="text" placeholder="Subject" />
              </div>
            </div>
          </div>
          <div className="col-md-4 text-center">
            <div className="form">
              <div className="input-group margin-bottom-sm">
                <span className="input-group-addon">
                  <i className="fa fa-comment-o fa-fw" />
                </span>
                <input type="text" name="text" className="form-control message" placeholder="Your Message" />
              </div>
            </div>
          </div>
        </form>
      </div>
      <input className="btn btn-sub" type="submit" defaultValue="Send Message" />
    </div>
  </section>	{/* contacts */}
  {/* footer */}
  <section id="footer" className="main-footer">
    <div className="container">
      <p>© COLLA</p>
      <a href="#starting" className="up"><i className="fa fa-arrow-circle-up" /></a>
    </div>
  </section>{/* footer */}
  {/* js */}
</div>
</div>);
}

export default App;
