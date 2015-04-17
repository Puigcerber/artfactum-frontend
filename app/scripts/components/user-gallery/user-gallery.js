'use strict';

var Router = window.ReactRouter;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var TopNav = require('./../TopNav/TopNav.js');
var Footer = require('./../Footer/footer.js');

var UserGallery = React.createClass({
  render: function() {
    return (
      <div>
        <TopNav></TopNav>
        <div>
          <div className='text-center'>
            <h2>Pablo Picasso</h2>
            <ul>
              <li><Link to="following">Following</Link></li>
              <li><Link to="curated">Curated</Link></li>
              <li><Link to="followers">Followers</Link></li>
            </ul>
          </div>
          <ul className='nav nav-tabs'>
            <li><Link to="artworks">Artworks</Link></li>
            <li><Link to="collection">Collection</Link></li>
            <li><Link to="user-about">About</Link></li>
            <li><a href="#">Comments</a></li>
            <li><a href="#">Inspired</a></li>
            <li><a href="#">Facts</a></li>
          </ul>
        </div>
        <div className='container'>
          <RouteHandler/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
});

module.exports = UserGallery;
