import Footer from "../Footer"
import NavBar from "../NavBar"
import './index.css'


const Home = () => {
    return(
        <div className='main-home-container'>
            <NavBar />
    
           <div  className='home-container1'>
            <div className="home-container1-content">
                <h1 className='home-heading'>Search Properties to rent</h1>
                <p className='home-description'>We have what it takes to get you the best deal for your ideal home.</p>
                <button className='home-button'>Get Started</button>
            </div>
            <img src="https://i.pinimg.com/236x/54/69/05/546905e41475af9adbae8419c963bcfe.jpg" alt="home img" className='home-img' />
          </div>

            
            <div className='home-container2'>
                <div className="home-container2-content">
                  <h1 className='home-heading2'>Property Appraisal</h1>
                    <p className='home-description2'>Highlight Specific services to or produce here. It can be a property appraisal service,
                    a consultation, or something uniquely yours. Give it room to shine here.
                   </p>
                <button className='home-button2'>Contact Us</button>
              </div>
              <img src="https://i.pinimg.com/564x/30/8a/ea/308aea3701362d8e92f7c968689658dc.jpg" alt="appraisal" className='home-img2' />
            </div>

           
            <div className='home-container3'>
                <h1 className='home-heading3'>Client Reviews</h1>
                <ul className='home-review-list'>
                    <li className='home-review-item'>
                        <p className='home-review-text'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                        <h2 className='home-review-name'>-Powell Finwood</h2>
                    </li>

                    <li className='home-review-item'>
                        <p className='home-review-text'>Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.</p>
                        <h2 className='home-review-name'>-Ingrid Correa</h2>
                    </li>

                    <li className='home-review-item'>
                        <p className='home-review-text'>Boost your product and service's credibility by adding testimonials from your clients.</p>
                        <h2 className='home-review-name'>-Hannah Elmore</h2>
                    </li>
                </ul>
            </div>
        
            
            <Footer />
        </div>
    )
}

export default Home 
