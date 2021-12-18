import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Layouts/footer';
import Navigation from '../components/Layouts/navigation';
import Person1 from '../assets/person1.jpg';
import Person2 from '../assets/person2.jpg';
import Person3 from '../assets/person3.jpg';
import Person4 from '../assets/person4.jpg';

const About = (props) => {
    return (
        <>
            <Navigation />
            <main>
                <section className="section-about">
                    <div className="u-center-text u-margin-bottom-big">
                        <h2 className="heading-secondary">
                            Exciting tours for adventurous people
                        </h2>
                    </div>

                    <div className="row">
                        <div className="section-about__wrapper">
                            <div className="section-about__item">

                                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia incidunt voluptatem eum, qui nulla perferendis culpa, laborum praesentium necessitatibus iusto harum, aliquam vel? Nemo nihil non nisi quod nulla.
                                </p>
                            </div>
                            <div className="section-about__item">

                                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                                <p className="paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At voluptas consequatur tenetur sapiente accusantium vitae debitis rerum, laborum quam! Accusamus excepturi maxime sunt necessitatibus laboriosam adipisci ad dolore repudiandae? Tenetur!
                                </p>
                            </div>
                        </div>
                        {/* <div className="col-1-of-2">
                            <div className="composition">
                                <img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                                <img src="img/nat-2-large.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                                <img src="img/nat-3-large.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                                </div>
                            </div> */}

                    </div>
                </section>

                <section className="section-features">
                    <h2 className="heading-secondary text-center pb-5">Meet the people behind the dream</h2>
                    <div className="section-features__wrapper">
                        <div className="col-lg-3">
                            <div className="about-box">
                                <figure className="about-box__shape">
                                    <img src={Person1} alt="Person" className="about-box__img" />
                                </figure>
                                <h3 className="heading-tertiary u-margin-bottom-small">Beth Smith</h3>
                                <p className="about-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-box">
                                <figure className="about-box__shape">
                                    <img src={Person2} alt="Person" className="about-box__img" />
                                </figure>
                                <h3 className="heading-tertiary u-margin-bottom-small">Summer Mitsh</h3>
                                <p className="about-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-box">
                                <figure className="about-box__shape">
                                    <img src={Person3} alt="Person" className="about-box__img" />
                                </figure>
                                <h3 className="heading-tertiary u-margin-bottom-small">Mahattma Ahsiv</h3>
                                <p className="about-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="about-box">
                                <figure className="about-box__shape">
                                    <img src={Person4} alt="Person" className="about-box__img" />
                                </figure>
                                <h3 className="heading-tertiary u-margin-bottom-small">Ben Parker</h3>
                                <p className="about-box__text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <h3 className="heading-tertiary text-center my-5">Got any questions?</h3>
                    <div className="text-center">
                        <Link to="/contact" className="btn btn--green">Contact us</Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About