import { Link } from 'react-router-dom'
import './ExtraContent.css'
const ExtraContent = () => {
  return (
    <>
<section className='section-space'>
    <div className='custom-container'>

    </div>
      <div className='custom-container'>
      <div className='row'>
      <div className='col'>
      <div>
        <img src='/background.jpeg' alt='image' />
      </div>
      </div>
      <div className='col2'>
         <div>
            <div className='heading-in heading-in--with-subtitle'>
                <h2 className='heading-in__title'>
                  Buy at
                  <br />
                  Best
                </h2>
                <div className='button-wrap'>
                <Link to={'/login'}>
                <input
                  type="text"
                  placeholder="Search here"
                  />
                  </Link>  
                </div>
                <p className='heading-in__subtitle'>A place to Buy at best prices...</p>
            </div>
         </div>
      </div>

      </div>

      </div>
    </section>
    </>
    

    
  )
}

export default ExtraContent