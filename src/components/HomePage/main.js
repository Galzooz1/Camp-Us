import { Tooltip } from 'antd';
import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react/cjs/react.development';
import storeMain from '../../stores/mainStore';
import { URL_API } from '../../services/apiService';
import Countries from './countries';

const Main = (props) => {
    useEffect(() => {
        let url = URL_API + "/countries";
        storeMain.getCountriesData(url);
    }, []);
    const [chosenBg, setChosenBg] = useState(null);
    const countriesRef = useRef(null)
    const toursRef = useRef(null)

    const [currentContinent, setCurrentContinent] = useState("");

    //Set method to prevent duplicate continents
    // let setCountriesData = new Set(storeMain.countriesData);
    const uniqueContinents = Array.from(new Set(storeMain.countriesData.map(a => a.mainland.fields.mainland_name.stringValue)))
        .map(id => {
            return storeMain.countriesData.find(a => a.mainland.fields.mainland_name.stringValue === id)
        })

    return (
        <main id="section-tours">
            <section ref={toursRef} className="section-tours">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay loop muted>
                        <source src="/videos/video.mp4" type="video/mp4" />
                        <source src="/videos/video.webm" type="video/webm" />
                        Your browser is not supported!
                    </video>
                </div>

                <div className="u-center-text u-margin-bottom-big">
                    <h2 className="heading-secondary">Choose your desired continent</h2>
                </div>

                <div className="section-tours__row u-container">
                    {uniqueContinents.map((item, i) => {
                        return (
                            <div className="col-lg-3 section-tours__item m-4" key={i}>
                                    <Tooltip title={item.mainland.fields.mainland_name.stringValue}>
                                        <div
                                            className={chosenBg === i ? "section-tours__btn-bg" : "section-tours__btn"}
                                            onClick={() => { 
                                                setChosenBg(i); 
                                                storeMain.getCountriesContinentData(item.mainland.fields.mainland_name.stringValue);
                                                 setCurrentContinent(item.mainland.fields.mainland_name.stringValue);
                                                 }}
                                        >
                                            <Link to="#countries">
                                            <img src={item.mainland.fields.mainland_image.stringValue} alt={item.mainland.fields.mainland_name.stringValue} style={{ width: 200, height: 200 }} />
                                             </Link>
                                        </div>
                                    </Tooltip>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section ref={countriesRef} className="section-countries">
                {storeMain.numOfCountriesInContinent > 0 &&
                    <div className="section-countries__inner">
                        <div id="countries" className="u-center-text u-margin-bottom-medium">
                            <h2 className="heading-secondary-white">{currentContinent}</h2>
                        </div>
                        <Countries />
                        <div className="section-countries__link u-center-text">
                            <h3 className="section-countries__link-text">Not what you're looking for?</h3>
                            <button onClick={() => {
                                toursRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
                                setChosenBg(null)
                            }} className="btn btn--animated btn--white">
                                Go back
                            </button>
                        </div>
                    </div>
                }
            </section>
        </main>
    )
}

export default observer(Main)