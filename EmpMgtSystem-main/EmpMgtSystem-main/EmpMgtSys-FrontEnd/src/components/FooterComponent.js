import React from 'react'

const FooterComponent = () => {
    return (
        <div class="footer">
            <footer className = "footer ">
            {/* <p></p> */}
            <marquee behavior="scroll" direction="left" scrollamount="9">
            <h5>ExcelR - Feb 9, FSD Team-2. Project Review - All rights reserved. &copy; {new Date().getFullYear()} </h5>

  </marquee>
            
            </footer>
        </div>
    )
}

export default FooterComponent
