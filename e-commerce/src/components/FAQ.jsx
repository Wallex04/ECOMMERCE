import React from 'react'

const FAQ = () => {
  return (
    <div  className style={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', flexWrap:'wrap'}}>

<h2>Frequently Asked Questions</h2>
      <div className style={{}}>
        <p style={{fontWeight:'600'}}>Got questions? We've got answers! Check out our FAQ section to get your notable information:</p>
        <ul>
          <li>Starting an E-commerce: Learn more about our services</li>
          </ul>
          <p style={{fontWeight:'600'}}>Q: What is the warranty policy for the phones and laptops you sell?</p>
          <ul>
          <li>We offer a comprehensive warranty policy for the phones and laptops available on our platform.</li>
          </ul>
        <p>Need other help ? reach out to our friendly customer.</p>
      </div>
    </div>
  )
}

export default FAQ;