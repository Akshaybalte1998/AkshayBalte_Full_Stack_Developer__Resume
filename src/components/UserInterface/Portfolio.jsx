import React, { useState, useEffect } from 'react';
import data from "../../assets/dada/portfolioData";
import Modal from './Modal';
import Header from '../Header/Header'
const Portfolio = () => {
    const [nextItems, setNextItems] = useState(6);
    const [portfolios, setPortfolios] = useState(data);
    const [selectTab, setSelectTab] = useState('ALL');
    const [showModal, setShowModal] = useState(false);
    const [activeID, setActiveID] = useState(null);

    const showModalHandler = id => {
        setShowModal(true);
        setActiveID(id);
    };

    useEffect(() => {
        if (selectTab === 'ALL') {
            setPortfolios(data);
        } else if (selectTab === 'Web Design') {
            const filteredData = data.filter(item => item.category === 'Web Design');
            setPortfolios(filteredData);
        } else if (selectTab === 'Ux Design') {
            const filteredData = data.filter(item => item.category === 'Ux');
            setPortfolios(filteredData);
        }
    }, [selectTab]);

    return (
        <div id="Portfolio">
            <div className="container">
            <div className="header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4CAF50', padding: '10px' }}>
    <h3 className="title" style={{ color: '#FFFFFF', margin: 0 }}>Certification</h3>
</div>

                <div className='portfolio-grid'>
                    {
                        portfolios?.slice(0, nextItems)?.map((portfolio, index) => (
                            <div key={index} className='portfolio-item'>
                                <figure>
                                    <img className="portfolio-img" src={portfolio.imgUrl} alt="" />
                                </figure>
                                <div className='overlay'>
                                    <div className='overlay-content'>
                                        <button onClick={() => showModalHandler(portfolio.id)} className='details-button'>
                                            See details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
            </div>
            {
                showModal && <Modal setShowModal={setShowModal} activeID={activeID} />
            }
            <style jsx>{`
                #Portfolio {
                    font-family: Arial, sans-serif;
                }

                .container {
                    width: 90%;
                    margin: 0 auto;
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .title {
                    font-size: 2rem;
                    font-weight: 700;
                    color: #333;
                }

                .tabs {
                    display: flex;
                    gap: 1rem;
                }

                .tab-button {
                    border: 1px solid #ccc;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    background-color: #f8f8f8;
                    color: #333;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                }

                .tab-button.active {
                    background-color: #333;
                    color: #fff;
                }

                .portfolio-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1rem;
                }

                .portfolio-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 8px;
                    transition: transform 0.3s;
                }

                .portfolio-item:hover {
                    transform: scale(1.05);
                }

                .portfolio-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .portfolio-item:hover .overlay {
                    opacity: 1;
                }

                .overlay-content {
                    text-align: center;
                }

                .details-button {
                    background-color: #333;
                    color: #fff;
                    border: none;
                    padding: 0.5rem 1rem;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }

                .details-button:hover {
                    background-color: #555;
                }
            `}</style>
        </div>
    );
};

export default Portfolio;
