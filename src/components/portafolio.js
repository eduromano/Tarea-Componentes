import React from 'react';
import a from '../img/portfolio/cabin.png';
import b from '../img/portfolio/cake.png';
import c from '../img/portfolio/game.png';
import d from '../img/portfolio/circus.png';
import e from '../img/portfolio/safe.png';
import f from '../img/portfolio/submarine.png';

const Portafolio = () => {
    return(
        <div className="mt-5">
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    {/* <!-- Portfolio Section Heading--> */}
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    {/* <!-- Icon Divider--> */}
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    {/* <!-- Portfolio Grid Items--> */}
                    <div className="row">
                        {/* <!-- Portfolio Item 1--> */}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={a} alt="" />
                            </div>
                        </div>
                        {/* <!-- Portfolio Item 2--> */}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={b} alt="" />
                            </div>
                        </div>
                        {/* <!-- Portfolio Item 3--> */}
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={c} alt="" />
                            </div>
                        </div>
                        {/* <!-- Portfolio Item 4--> */}
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={d} alt="" />
                            </div>
                        </div>
                        {/* <!-- Portfolio Item 5--> */}
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={e} alt="" />
                            </div>
                        </div>
                        {/* <!-- Portfolio Item 6--> */}
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={f} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Portafolio;