import React from 'react';
import classes from './Login.module.css'
import firebase from 'firebase';
function Login() {
  return (
   <section className={classes.Container}>
<div  className={classes.Content}>
    <div className={classes.CTA}>
          <img className={classes.CTALogoOne} src="/images/cta-logo-one.svg" alt="" />
          <p className={classes.Signup}>GET ALL THERE</p>
          <p className={classes.Description}>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </p>
          <img  className={classes.CTALogoTwo} src="/images/cta-logo-two.png" 
        alt="" />
    </div>
    <div className={classes.BgImg}></div> 
</div>
   </section>
  )
}

export default Login;