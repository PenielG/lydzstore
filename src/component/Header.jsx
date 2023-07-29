

export const Header = () => {
    return (
    <>
          <header>
    <div className="collapse custom" id="navbarHeader">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">About</h4>
            <p className="text-white about_us">
            Lydz Store is a Home of Varieties where we tend to deliver quality
            products to our esteemed customers from personal items, Household
            items to Natural Skin Care Products. Our business is not limited to
            a particular location as we have a reliable logistic team that
            enables products delivery accross the states easy.
            </p>
          </div>
          <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">Contact</h4>
            <ul className="list-unstyled">
              <li>
                <a href="https://wa.me/2348106869875" className="text-white" target="blank">
                  Message us on Whatsapp
                </a>
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="navbar navbar-dark shadow-sm custom">
      <div className="container">
        <a href="#" className="navbar-brand d-flex align-items-center">
          <i className="fa-solid fa-cart-shopping" /> &nbsp;&nbsp;
         
          <strong>Lydz Store</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarHeader"
          aria-controls="navbarHeader"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </div>
  </header>
  
  
    
    
    
    </>
      
    )
  }
  