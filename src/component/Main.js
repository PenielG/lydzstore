export const Main = ()=>{
    return(

        <>
        <main>
  <section>
    <div className="container-fluid">
        <div className="row gy-4">
    <div
     className="col-lg-12 p-0 m-0"
     style={{
     backgroundImage: 'url("assets/images/store.png")',
     minHeight: 600,
     backgroundSize: "cover",
     
     }}
    ></div>
    </div>

      <div
      className="row"
      style={{  height: "inherit" }}>
          
      <div className="col-md my-5">
          <h1 className="text-center text-light mt-4 text">
          LYDZ STORE
          </h1>
          <strong><i className="text">Home of Varieties!</i></strong>
      </div>
      </div>
      </div>
  </section>

  <>
{/*  <!-- ======= About Section ======= --> */}
<section id="about" classname="about">
  <div className="container-fluid" data-aos="fade-up">
    <div className="section-header">
      <h2>About Us</h2>
      <p>
        Learn More <span>About Us</span>
      </p>
    </div>
    <div className="row gy-4">
    <div
     className="p-0 m-0"
     style={{
     backgroundImage: 'url("assets/images/capture.png")',
     minHeight: 600,
     backgroundSize: "cover",
     
     }}>
        
      </div>
      <div
        className="col-lg-5 d-flex align-items-end"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="content ps-0 ps-lg-5">
          <p className="fst-italic cont">
            Lydz Store is a Home of Varieties where we tend to deliver quality
            products to our esteemed customers from personal items, Household
            items to Natural Skin Care Products. Our business is not limited to
            a particular location as we have a reliable logistic team that
            enables products delivery accross the states easy.
          </p>
          
          <h5 className="gold">What we Sell</h5>
          <ul>
            <li>
              <i className="bi bi-check2-all" /> Personal Items
            </li>
            <li>
              <i className="bi bi-check2-all" /> Household Items
            </li>
            <li>
              <i className="bi bi-check2-all" />
              Natural Skin Care Products(Oriflame)
            </li>
          </ul>
          <div className="position-relative mt-4">
            <iframe id="iframeID" src="assets/video/lydz.mp4" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    {/* <!-- End About Section --> */}

   {/*  <!-- ======= Why Us Section ======= --> */}
   <section id="why-us" className="why-us section-bg">
  <div className="container-fluid" data-aos="fade-up">
    <div className="row gy-4">
      <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="why-box">
          <h3>Why Choose Lydz Store?</h3>
       <strong>   <p className="cont">
            At Lydz Store, we save you the stress of getting to source for
            products from different vendors as we sell varities of products you
            could think of, hence why we are called home of varieties.
          </p></strong>
          <div className="text-center">
            <a href="#" className="more-btn">
              Learn More <i className="bx bx-chevron-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="col-lg-8 d-flex align-items-center">
        <div className="row gy-4">
          <div className="col-xl-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <i className="fa-solid fa-check fa-bounce fa-2xl" style={{ color: "#ffffff" }}/>

              <h4>Quality and Affordability</h4>
              <p className="cont">
                Our Products are highly quality and affordable helping you to
                get great things at an economical price.{" "}
              </p>
            </div>
          </div>
          <div className="col-xl-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
          <i
          className="fa-solid fa-person fa-bounce fa-2xl"
          style={{ color: "#ffffff" }}
        />
              <h4>Great Customer Experience</h4>
              <p>
                At Lydz Store, we value our customer as they are the reason why
                we remain in business hence the reason we make them enjoy a
                great customer service experience.
              </p>
            </div>
          </div>
          <div className="col-xl-4" data-aos="fade-up" data-aos-delay={400}>
            <div className="icon-box d-flex flex-column justify-content-center align-items-center">
            <i
          className="fa-solid fa-truck fa-bounce fa-2xl"
          style={{ color: "#ffffff" }}
          />
              <h4>Fast Delivery</h4>
              <p>
                Our fast and swift delivery team are very realible to get your
                order accross to your location as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    {/* <!-- End Why Us Section --> */}

    <>
  {/* ======= Stats Counter Section ======= */}
  <section id="stats-counter" className="stats-counter"  
     style={{
     backgroundImage: 'url("assets/images/real.jpg")',
     minHeight: 600,
     backgroundSize: "cover",}}>
    <div className="container" data-aos="zoom-out">
      <div className="row gy-4">
        <div className="col-lg-3 col-md-6">
      
        </div>
        {/* End Stats Item */}
        <div className="col-lg-3 col-md-6">
       
        </div>
    
    
        {/* End Stats Item */}
      </div>
    </div>
  </section>
  {/* End Stats Counter Section */}

  
  {/* <!-- ======= Menu Section ======= --> */}
  <section id="menu" className="menu">
  <div className="container-fluid" data-aos="fade-up">
    <div className="section-header">
      <h2>Our Products</h2>
      <p>
        Check Our <span classname="cat">Products Categories</span>
      </p>
    </div>
    <ul
      className="nav nav-tabs d-flex justify-content-center"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <li className="nav-item">
        <a
          className="nav-link active show"
          data-bs-toggle="tab"
          data-bs-target="#menu-starters"
        >
          <h4>Personal Items</h4>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#menu-lunch"
        >
          <h4>Household Items</h4>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target="#menu-dinner"
        >
          <h4>Skin Care Products</h4>
        </a>
      </li>
    </ul>
    <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
      <div className="tab-pane fade active show" id="menu-starters">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Personal Items</h3>
        </div>

        <div className="row gy-5" style={{ paddingTop: "10x", paddingBottom: 20 }}>
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/hoodie.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Hoodie</h4>
      <p className="description">Available in light pink and black</p>
      <p className="price">₦13,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/hoodie2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Hoodie</h4>
      <p className="description">Available in light pink and black</p>
      <p className="price">₦13,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

{/* Double */}
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/boy1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>6 Months - 2 Years Male Cloth </h4>
      <p className="description">Available in all uploaded colors.</p>
      <p className="price">₦5,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/boy2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>6 Months - 2 Years Male Cloth </h4>
      <p className="description">Available in all uploaded colors.</p>
      <p className="price">₦5,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

{/* Single */}
  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/hand_bag.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Medium Sized Ladies Bag</h4>
      <p className="description">Ladies bag available in displayed color.</p>
      <p className="price">₦5,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

{/* Triple */}
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/long_purse1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Wallet</h4>
      <p className="description">Unisex Wallet available in displayed colors.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/long_purse2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Wallet</h4>
      <p className="description">Unisex Wallet available in displayed colors.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/long_purse3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Wallet</h4>
      <p className="description">Unisex Wallet available in displayed colors.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_wrist_two1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Male Chain Watch</h4>
      <p className="description">Male chain wristwatch available as displayed.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_wrist_two.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Male Chain Watch</h4>
      <p className="description">Male chain wristwatch available as displayed.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_wristwatch1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Male Leather Watch + 2 Bead Bracelet + Box</h4>
      <p className="description">Male leather watch and bead available in black and brown.</p>
      <p className="price">₦6,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_wristwatch3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Male Leather Watch + 2 Bead Bracelet + Box</h4>
      <p className="description">Male leather watch and bead available in black and brown.</p>
      <p className="price">₦6,000</p>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_wristwatch2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
     <h4>Male Leather Watch + 2 Bead Bracelet + Box</h4>
      <p className="description">Male leather watch and bead available in black and brown.</p>
      <p className="price">₦6,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

{/* Eight */}
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/nails6.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Press On Nails</h4>
      <p className="description">Press on nails available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/male_turtle.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Unisex Turtle Neck</h4>
      <p className="description">Unisex turtle neck available in all colors.</p>
      <p className="price">₦4,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

{/* Five */}
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_holder1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Phone Holder</h4>
      <p className="description">Mini foldable phone holder for outdoor travel.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_holder2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Phone Holder</h4>
      <p className="description">Mini foldable phone holder for outdoor travel.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_holder3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Phone Holder</h4>
      <p className="description">Mini foldable phone holder for outdoor travel.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_holder4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Phone Holder</h4>
      <p className="description">Mini foldable phone holder for outdoor travel.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_holder5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Phone Holder</h4>
      <p className="description">Mini foldable phone holder for outdoor travel.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/phone_wall_hold1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Wall Phone Holder</h4>
      <p className="description">Wall phone holder makes your phone safe while charging.</p>
      <p className="price">₦1,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/selfie1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Selfie Stick</h4>
      <p className="description">Quality selfie stick comes with a bluetooth remote for control.</p>
      <p className="price">₦10,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/straightner.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>2 in 1 Hair Straightner</h4>
      <p className="description">2 in 1 hair straightner available as displayed.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/touchperf.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Perfume Oil</h4>
      <p className="description">Touch perfume oil available in varieties of fragrance.                                                                                                      </p>
      <p className="price">₦700</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
     <img
          src="assets/images/baby_shoe2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_shoe5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 years Children Headband + Socks </h4>
      <p className="description">0 - 1 years Children Headband + Socks available in displayed.</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/big_phone_holder.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Ringlight</h4>
      <p className="description">Quality ringlight for pictures and video quality.</p>
      <p className="price">₦6,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/masserger.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Face Massager</h4>
      <p className="description">Face massager for both male and female.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/masserger1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Face Massager</h4>
      <p className="description">Face massager for both male and female.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/masserger3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Face Massager</h4>
      <p className="description">Face massager for both male and female.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/masserger4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Face Massager</h4>
      <p className="description">Face massager for both male and female.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/remote1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Bluetooth Shutter</h4>
      <p className="description">Bluetooth remote control for selfies, group pictures and hands-free.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/remote2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Bluetooth Shutter</h4>
      <p className="description">Bluetooth remote control for selfies, group pictures and hands-free.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/remote3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Bluetooth Shutter</h4>
      <p className="description">Bluetooth remote control for selfies, group pictures and hands-free.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/scrubber.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Callous Remover</h4>
      <p className="description">Callous Remover for your comfortability.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/table1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>2 Chairs and a Table </h4>
      <p className="description"> Chairs and Tables available as displayed.</p>
      <p className="price">₦28,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/table2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>2 Chairs and a Table </h4>
      <p className="description"> Chairs and Tables available as displayed.</p>
      <p className="price">₦28,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/geneva_wrist1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Geneva Unisex Rubber Watch</h4>
      <p className="description">Geneva unisex rubber watch available as displayed</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/geneva_wrist2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Geneva Unisex Rubber Watch</h4>
      <p className="description">Geneva unisex rubber watch available as displayed</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/bracelet.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Bracelets</h4>
      <p className="description">Fashionable bracelets to beautify your wrist.</p>
      <p className="price">₦1,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/bracelet2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Bracelets</h4>
      <p className="description">Fashionable bracelets to beautify your wrist.</p>
      <p className="price">₦1,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/perfume_caton.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Perfumes</h4>
      <p className="description">Perfume available as displayed.</p>
      <p className="price">₦2,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
  <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/show_rack.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Quality Shoe Rack</h4>
      <p className="description">Quality shoe rack, can contain up to 20 pairs of shoes.</p>
      <p className="price">₦9,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
   
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/3_pcs_nighty.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>3 Pieces Night Wear</h4>
      <p className="description">3 pieces night wear available in different designs and sizes.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/3_pcs_nighty1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>3 Pieces Night Wear</h4>
      <p className="description">3 pieces night wear available in different designs and sizes.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/3_pcs_nighty2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>3 Pieces Night Wear</h4>
      <p className="description">3 pieces night wear available in different designs and sizes.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/hanger1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Wall Adhesive Hanger</h4>
      <p className="description">Wall adhesive hanger, 12 pieces in a pack, available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/hanger2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Wall Adhesive Hanger</h4>
      <p className="description">Wall adhesive hanger, 12 pieces in a pack, available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/tees1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Kanin Brand Plain Tshirt</h4>
      <p className="description">Kanin brand plain tshirt available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/tees.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Kanin Brand Plain Tshirt</h4>
      <p className="description">Kanin brand plain tshirt available as displayed.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/cap.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Kanin Brand Face Cap</h4>
      <p className="description">Kanin brand face cap available as displayed.</p>
      <p className="price">₦1,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
     

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  
  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/female_turtle.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Female Bodycon Turtle Neck</h4>
      <p className="description">Female bodycon turtle neck, can fit medium - xtralarge. Available in royal blue, green, black, white and red.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
     

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/female_shoe1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year baby(girl) Shoe</h4>
      <p className="description">Available in silver, black and gold.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/female_shoe2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year baby(girl) Shoe</h4>
      <p className="description">Available in silver, black and gold.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/female_shoe3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year baby(girl) Shoe</h4>
      <p className="description">Available in silver, black and gold.</p>
      <p className="price">₦4,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/men_bracelet.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Make Leather Bracelet</h4>
      <p className="description">Available in silver, gold and black.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/men_bracelet1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Make Leather Bracelet</h4>
      <p className="description">Available in silver, gold and black.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/men_bracelet3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Make Leather Bracelet</h4>
      <p className="description">Available in silver, gold and black.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/men_bracelet4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Make Leather Bracelet</h4>
      <p className="description">Available in silver, gold and black.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/baby_headwrap5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>0 - 1 year Baby Set Headwraps</h4>
      <p className="description">Available in displayed colors.</p>
      <p className="price">₦3,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>






</div>


      </div>

      <div className="tab-pane fade" id="menu-lunch">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Household Items</h3>
        </div>
        <div className="row gy-5">
         
 <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/dish_washer1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Dish Brush With Soap Dispenser</h4>
      <p className="description">Dish brush with soap dispenser for shiny dish and pots  <strong>Souvenir idea. </strong>   </p>
      <p className="price">₦500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/dish_washer2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Dish Brush With Soap Dispenser</h4>
      <p className="description">Dish brush with soap dispenser for shiny dish and pots  <strong>Souvenir idea. </strong>   </p>
      <p className="price">₦500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/f_table1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Multipurpose Table</h4>
      <p className="description">A Table suitable for different purposes.</p>
      <p className="price">₦8,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/f_table2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Multipurpose Table</h4>
      <p className="description">A Table suitable for different purposes.</p>
      <p className="price">₦8,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/f_table3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Multipurpose Table</h4>
      <p className="description">A Table suitable for different purposes.</p>
      <p className="price">₦8,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/f_table4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Multipurpose Table</h4>
      <p className="description">A Table suitable for different purposes.</p>
      <p className="price">₦8,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/f_table5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Multipurpose Table</h4>
      <p className="description">A Table suitable for different purposes.</p>
      <p className="price">₦8,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/kettle.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Silicone Electric Kettle</h4>
      <p className="description">Travel size foldable silicone electric kettle, comes with a charger and boils water within 5 min.</p>
      <p className="price">₦6,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
         <img
          src="assets/images/kettle1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Silicone Electric Kettle</h4>
      <p className="description">Travel size foldable silicone electric kettle, comes with a charger and boils water within 5 min.</p>
      <p className="price">₦6,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/kettle3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Silicone Electric Kettle</h4>
      <p className="description">Travel size foldable silicone electric kettle, comes with a charger and boils water within 5 min.</p>
      <p className="price">₦6,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/kitchen_towel1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Kitchen Napkin</h4>
      <p className="description">Kitchen Napkin, shop a dozen for ₦3500 and 6 pieces for ₦1800 <strong>Souvenir worthy. </strong>  </p>
      <p className="price">₦350</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/kitchen_towel2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Kitchen Napkin</h4>
      <p className="description">Kitchen Napkin, shop a dozen for ₦3500 and 6 pieces for ₦1800 <strong>Souvenir worthy. </strong>  </p>
      <p className="price">₦350</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/turning_stick.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Wooden Kitchen Spoon</h4>
      <p className="description">Wooden kitchen spoon to spice up your kitchen, portable and lightweight.</p>
      <p className="price">₦2,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
     

      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/laundry.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Mini Laundry Basket</h4>
      <p className="description">Mini Laundry Basket, available as displayed..</p>
      <p className="price">₦1,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
     

      </div>

  
 
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/light.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Glow in the Dark</h4>
      <p className="description">Glow in dark available as displayed, 100 pices per pack</p>
      <p className="price">₦1,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/butterfly.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Butterfly Light</h4>
      <p className="description">Butterfly light available as displayed.</p>
      <p className="price">₦300</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/butterfly1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Butterfly Light</h4>
      <p className="description">Butterfly light available as displayed.</p>
      <p className="price">₦300</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

      
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/wooden_hanger.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Wooden Hanger</h4>
      <p className="description">Wooden Hanger available as displayed, 100 pices per pack</p>
      <p className="price">₦3,500</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/blender.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Silver Crest Blender</h4>
      <p className="description">Qualityblender(4500 watts - 8000 watts), 4500w for ₦20,000</p>
      <p className="price">₦20,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/blender1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Silver Crest Blender</h4>
      <p className="description">Qualityblender(4500 watts - 8000 watts), 4500w for ₦20,000</p>
      <p className="price">₦20,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/blender2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Silver Crest Blender</h4>
      <p className="description">Qualityblender(4500 watts - 8000 watts), 4500w for ₦20,000</p>
      <p className="price">₦20,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
   <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/foldable_fan.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Foldable Rechargeable Fan</h4>
      <p className="description">Foldable rechargeable fan available as displayed, comes with a USB cord.</p>
      <p className="price">₦11,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/fruit_blender.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Rechargeable Fruit Blender</h4>
      <p className="description">Rechargeable fruit blender available as displayed, comes with a USB cord.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>

        
        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/fruit_blender1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Rechargeable Fruit Blender</h4>
      <p className="description">Rechargeable fruit blender available as displayed, comes with a USB cord.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/fruit_blender2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Rechargeable Fruit Blender</h4>
      <p className="description">Rechargeable fruit blender available as displayed, comes with a USB cord.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/fruit_blender3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Rechargeable Fruit Blender</h4>
      <p className="description">Rechargeable fruit blender available as displayed, comes with a USB cord.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

        <div className="carousel-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/fruit_blender4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Rechargeable Fruit Blender</h4>
      <p className="description">Rechargeable fruit blender available as displayed, comes with a USB cord.</p>
      <p className="price">₦5,000</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>

          <div className="carousel-caption d-none d-md-block text-info"> </div>
        </div>

   
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  </div>
</div>

<div className="tab-pane fade" id="menu-dinner">
        <div className="tab-header text-center">
          <p>Menu</p>
          <h3>Skin Care Products</h3>
        </div>
        <div className="row gy-5">
         
 <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/oriflame1.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Delicious Natural Treats for Skin and Lips</h4>
      <p className="description">Delicious Natural Treats for Skin and Lips helps soften dry skin and nourish dry lips. </p>
      <p className="price">₦4,390</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
       
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

           
 <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/oriflame2.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Glow Essentials</h4>
      <p className="description">Glow essentials face cream with vitamins E & B3 SPF 10 50ml. </p>
      <p className="price">₦5,290</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
       
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/oriflame3.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Love Nature Caring Body Lotion</h4>
      <p className="description">Love nature caring body lotion with organic oat & apricot 500ml </p>
      <p className="price">₦16,990</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
       
      </div>

    
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/oriflame4.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Optifresh Natural Oils Tootpaste</h4>
      <p className="description">Optifresh natural oils toothpaste 100ml.</p>
      <p className="price">3,490</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
       
      </div>

    
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>

  <div className="col-lg-4 menu-item">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="col-lg-4  carousel-item active menu-item">
        <a href="https://wa.me/2348106869875" className="glightbox" target="blank">
        <img
          src="assets/images/oriflame5.png"
          className="menu-img img-fluid"
          alt=""
        />
      </a>
      <h4>Love Nature Shampoo for Dandruff Control</h4>
      <p className="description">Love nature shampoo for dandruff control with organic tea tree oil & aloe vera 250ml</p>
      <p className="price">6,990</p>
      <a href="https://wa.me/2348106869875" class="button" target="blank">Buy Now</a>
        </div>
       
      </div>

    
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>




 
  </div>
</div>

</div>
  </div>
</section>

<>
  {/* ======= Testimonials Section ======= */}
  <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Testimonials</h2> 
      <p>
          What Are They <span>Saying About Us</span>
        </p>
      </div>
      <div className="slides-1 swiper" data-aos="fade-up" data-aos-delay={100}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="testimonial-item">
              <div className="row gy-4 justify-content-center">
                <div className="col-lg-6">
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                   Lydz Store is a place to go as their customer service experience is so wonderful!
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Adenike Ajayi</h3>
              
                  </div>
                    <br/>
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                   Lydz Store items are so nice and of great quality!
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Wura</h3>
              
                  </div>
                  <br/>
                  <div className="testimonial-content">
                    <p>
                      <i className="bi bi-quote quote-icon-left" />
                  I so much love the earrings and the smell of the perfume, they are everything and much more!
                      <i className="bi bi-quote quote-icon-right" />
                    </p>
                    <h3>Kemi</h3>
              
                  </div>
                </div>
                {/* <div className="col-lg-2 text-center">
                  <img
                    src="assets/images/waist_bag.png"
                    className="img-fluid testimonial-img"
                    alt=""
                  />
                </div> */}
              </div>
            </div>
          </div>
          {/* End testimonial item */}
         
          {/* End testimonial item */}
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" className="testimonials section-bg">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
      <p>
          Meet the CEO <span>of Lydz Store</span>
        </p>
        <div className="row">
            <div className="col-lg-5">
        <img src="assets/images/ceo1.png" className=""></img>
            </div>
            <div className="col-lg-5">
        <img src="assets/images/cac1.png"></img>
            </div>  



        </div>
        
      
      </div>
     
    </div>
  </section>

  <>
  {/* ======= Contact Section ======= */}
  <section id="contact" className="contact">
    <div className="container" data-aos="fade-up">
      <div className="section-header">
        <h2>Contact</h2>
        <p>
          Need Help? <span>Contact Us</span>
        </p>
      </div>
      <div className="mb-3">
        <iframe
          style={{ border: 0, width: "100%", height: 350 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8963561661417!2d3.3562924732050567!3d6.53477199345796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8dc803c7a599%3A0xbe247cbc01cb523d!2s2%2F4%20Ayantuga%20St%2C%20off%20olateju%2C%20Mushin%20100001%2C%20Lagos!5e0!3m2!1sen!2sng!4v1690580356088!5m2!1sen!2sng"
       
        />
      </div>
      {/* End Google Maps */}
      <div className="row gy-4">
        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
        <i
      className="fa-solid fa-book-open fa-bounce fa-2xl"
      style={{ color: "#f9e406" }}
      />

            <div>
              <h3>Our Address</h3>
              <p>2, Ayantuga Street, off Olateju Onipanu</p>
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item d-flex align-items-center">
          <i className="fa-solid fa-envelope fa-bounce fa-2xl"
           style={{ color: "#f9e406" }} />
            <div>
              <h3>Email Us</h3>
              <a href="mailto:lydzstore@gmail.com" className="btn">lydzstore@gmail.com</a>
            
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
            <i className="fa-solid fa-phone  fa-bounce fa-2xl"   style={{ color: "#f9e406" }}/>
            <div>
              <h3>Call Us</h3>
              <p>+2348106869875</p>
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div className="info-item  d-flex align-items-center">
          <i class="fa-solid fa-share-from-square fa-bounce fa-2xl" style={{ color: "#f9e406" }}></i>
            <div>
              <h3>Opening Hours</h3>
              <div>
                <strong>24 hrs</strong> 
              </div>
            </div>
          </div>
        </div>
        {/* End Info Item */}
      </div>
     
    </div>
  </section>
  {/* End Contact Section */}
  {/* End #main */}
  {/* ======= Footer ======= */}
  <footer id="footer" className="footer">
    <div className="container">
      <div className="row gy-3">
        <div className="col-lg-3 col-md-6 d-flex">
          <div>
          <i className="fa-solid fa-location-dot fa-lg" style={{ color: "#ffffff" }} />
            <h4>Address</h4>
            <p>
              2/4 Ayantuga Street off Olateju <br />
              Onipanu, Lagos
              <br />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links d-flex">
      
          <div>
          <i className="fa-solid fa-phone fa-lg mx-3"   style={{ color: "#ffffff" }}/>
            <h4 >Contact Us</h4>
            <p>
              <strong>Phone:</strong> +2348106869875
              <br />
              <strong>Email:</strong>lydzstore@gmail.com
              <br />
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links d-flex"> 
          <div>
          <i class="fa-solid fa-share-from-square  fa-lg" style={{ color: "#ffffff" }}></i>
            <h4>Opening Hours</h4>
            <p>
              <strong>24 hrs</strong>
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          
         
          <div className="social-links d-flex">
        
            <a href="https://wa.me/2348106869875" className="facebook" target="blank">
            <i
          className="fa-brands fa-whatsapp fa-2xl"
          style={{ color: "#ffffff" }}
          classname="facebook"
          />  </a>
           <h4>Follow Us</h4>

       
       
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        © Copyright{" "}
        <strong>
          <span>Lydzstore</span>
        </strong>
        . All Rights Reserved
      </div>

    </div>
  </footer>
  {/* End Footer */}
</>

</>


</>

</>



</main>
        
        
        
        </>
       
    )
}