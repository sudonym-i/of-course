import React, { useState } from 'react';

const navbar = () => {
    return(
  <nav class="navbar">
    <div class="navbar-logo">
      <a href="/">MyApp</a>
    </div>
    
    <ul class="navbar-links">
      <li><a href="/home">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
    );

};

export default navbar;