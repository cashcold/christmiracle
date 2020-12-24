import React, { Component } from 'react';
import './style.css'
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
           <footer>
               <section className='footerMian'>
                   <div className='footer'>
                       <p>THE CHRIST MIRACLE CHURCH INTERNATION &copy; 2014</p>
                   </div>
               </section>
           </footer>
         );
    }
}
 
export default Footer;