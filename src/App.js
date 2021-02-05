import React, {Fragment,useState} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



const App = () => {
  AOS.init({
    easing: 'ease-out-back',
    duration: 1000
  }); //Animate on Scroll


  function handleScroll() {
    window.scroll({
      top: 700,
      left: 0, 
      behavior: 'smooth',
    });
  }
   return(
      <Fragment>
        	<div className="backgrounds overlay">
			<div className="background" data-aos="fade-in" data-aos-duration="1500" data-aos-anchor=".section--hero"></div>
		</div>

		<header className="hero"> 
			<div className="hero-center">
				<h1 className="hero__logo" data-aos="zoom-in">AOS</h1>
				<h2 className="hero__text" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Animate On Scroll <span>Library</span></h2>
			</div>
			<span className="hero__scroll" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="800">
				Click to Scroll<br/>
			 <i onClick={handleScroll} className="chevron bottom"></i>
			</span>
		</header>

    <section className="section section--more">
			<div className="container">
		
				<div className="section-group">
					<h3>Install using Yarn, Npm, Bower</h3>

					<pre><code><b className="code-color">yarn</b> add aos</code></pre>

					<pre><code><b className="code-color">npm</b> install aos --save</code></pre>

					<pre><code><b className="code-color">bower</b> install aos --save</code></pre>
				</div>

				<div className="section-group">
					<h3>CDN sources</h3>
					<h4>CSS</h4>
					<pre><code><b className="code-color">&lt;link href=</b>"https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"<b className="code-color">&gt;</b></code></pre>

					<h4>JS</h4>
					<pre><code><b className="code-color">&lt;script src=</b>"https://unpkg.com/aos@2.3.1/d<b className="codeclr">ist/aos.js"</b>&gt;&lt;/script<b className="code-color">&gt;</b></code></pre>
        </div>

				<div className="section-group">
					<h3>Initialize AOS</h3>
					<pre><code><b className="code-color">&lt;script&gt;&#13;</b>&nbsp;AOS.init();&#13;<b className="code-color">&nbsp;&lt;/script&gt;</b></code></pre>
				</div>

			</div>
		</section>

    <section className="section">
			<div className="container">
				<h2 className="section-title">Fade</h2>
				<div className="code code--small aoscode code--left" data-aos="fade-up">
					<pre><code className="html">&lt;div data-aos=<b className="codeclr">"fade-up"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="fade-down">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-down"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="fade-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="fade-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-left"</b>&gt;&lt;div</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="fade-up-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="fade-up-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up-left"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="fade-down-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-down-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="fade-down-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-down-left"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
			</div>
		</section>

    <section className="section">
			<div className="container">
				<h2 className="section-title">Flip</h2>
				<div className="code code--small aoscode code--left" data-aos="flip-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"flip-left"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="flip-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"flip-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="flip-up">
					<pre><code>&lt;div data-aos=<b className="codeclr">"flip-up"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="flip-down">
					<pre><code>&lt;div data-aos=<b className="codeclr">"flip-down"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container">
				<h2 className="section-title">Zoom</h2>
				<div className="code code--small aoscode code--left" data-aos="zoom-in">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-in"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="zoom-in-up">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-in-up"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="zoom-in-down">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-in-down"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="zoom-in-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-in-left"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="zoom-in-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-in-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>

				<div className="code code--small aoscode code--right" data-aos="zoom-out">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-out"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="zoom-out-up">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-out-up"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="zoom-out-down">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-out-down"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--left" data-aos="zoom-out-right">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-out-right"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code code--small aoscode code--right" data-aos="zoom-out-left">
					<pre><code>&lt;div data-aos=<b className="codeclr">"zoom-out-left"</b>&gt;&lt;/div&gt;</code></pre>
				</div>
			</div>
		</section>

		<section className="section">
			<div className="container">
				<h2 className="section-title">Different settings examples</h2>
				<div className="code aoscode code--left" data-aos="fade-up" data-aos-duration="3000">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>   data-aos-duration=<b className="codeclr">"3000"</b>&#13;&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--right" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"fade-down"</b>&#13;<br/>   data-aos-easing=<b className="codeclr">"linear"</b>&#13;<br/>   data-aos-duration=<b className="codeclr">"1500"</b>&#13;&gt;&lt;/div&gt;</code></pre>
				</div>
				<div id="example-anchor" className="code aoscode code--left" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"fade-right"</b>&#13;<br/>   data-aos-offset=<b className="codeclr">"300"</b>&#13;<br/>   data-aos-easing=<b className="codeclr">"ease-in-sine"</b>&#13;&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--right" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"fade-left"</b>&#13;<br/>   data-aos-anchor=<b className="codeclr">"#example-anchor"</b>&#13;<br/>   data-aos-offset=<b className="codeclr">"500"</b>&#13;<br/>   data-aos-duration=<b className="codeclr">"500"</b>&#13;&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--left" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="300" data-aos-offset="0">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"fade-zoom-in"</b>&#13;<br/>   data-aos-easing=<b className="codeclr">"ease-in-back"</b>&#13;<br/>   data-aos-delay=<b className="codeclr">"300"</b>&#13;<br/>   data-aos-offset=<b className="codeclr">"0"</b>&#13;&gt;&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--right" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
					<pre><code><br/>&lt;div data-aos=<b className="codeclr">"flip-left"</b>&#13;<br/>   data-aos-easing=<b className="codeclr">"ease-out-cubic"</b>&#13;<br/>   data-aos-duration=<b className="codeclr">"2000"</b>&#13;&gt;&lt;/div&gt;</code></pre>
				</div>
			</div>
		</section>

    <section className="section">
			<div className="container">
				<h2 className="section-title">Anchor placement</h2>

				<div className="code aoscode code--wider code--left" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"top-bottom"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--wider code--right" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"center-bottom"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--wider code--left" data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"bottom-bottom"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>

				<div className="code aoscode code--wider code--right" data-aos="fade-up" data-aos-anchor-placement="top-center">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"top-center"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--wider code--left" data-aos="fade-up" data-aos-anchor-placement="center-center">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"center-center"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
				<div className="code aoscode code--wider code--right" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;<br/>data-aos-anchor-placement=<b className="codeclr">"bottom-center"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
        <div className="code code--wider code--right" data-aos="fade-up" data-aos-anchor-placement="bottom-center">
					<pre><code>&lt;div data-aos=<b className="codeclr">"fade-up"</b>&#13;data-aos-anchor-placement=<b className="codeclr">"bottom-center"</b>&#13;&gt;<br/><i className="codeclr">...</i><br/>&lt;/div&gt;</code></pre>
				</div>
			</div>
		</section>

    <div className="section-group">
					<pre><code><b className="code-color"><center> &#xa9;2021 All right reserved <br/> Design by SANPAGE</center></b></code></pre>
				</div>
      </Fragment>
    )
}
export default App;
