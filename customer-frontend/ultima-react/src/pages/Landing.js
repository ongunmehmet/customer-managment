import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom';

const Landing = () => {

    const history = useHistory();
    const [isMenuActive, setMenuActive] = useState(false);
    const menu = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (isMenuActive) {
                removeClass(menu.current, 'fadeInDown');
            }
            else {
                removeClass(menu.current, 'menu-active fadeOutUp');
            }
        }, 100)
    }, [isMenuActive])

    const onMenuButtonClick = (e) => {

        if (isMenuActive) {
            addClass(menu.current, 'fadeOutUp');
            setMenuActive(false)
        }
        else {
            addClass(menu.current, 'menu-active fadeInDown');
            setMenuActive(true);
        }
        e.preventDefault();
    }

    const smoothScroll = (id) => {
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });
    }

    const addClass = (element, classNames) => {
        let classNamesArr = classNames.split(' ');
        for (var i = 0; i < classNamesArr.length; i++) {
            let className = classNamesArr[i];
            if (element.classList)
                element.classList.add(className);
            else
                element.className += ' ' + className;
        }
    }

    const removeClass = (element, classNames) => {
        let classNamesArr = classNames.split(' ');
        for (var i = 0; i < classNamesArr.length; i++) {
            let className = classNamesArr[i];
            if (element.classList)
                element.classList.remove(className);
            else
                element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }

    return (
        <div className="landing-container">
            <div id="header" className="section flex flex-column">
                <div className="header-menu-container flex align-items-center justify-content-between">
                    <button className="layout-topbar-logo p-link" onClick={() => history.push('/')}>
                        <img src="assets/layout/images/logo2x.png" alt="ultima-layout" style={{ height: '24px' }} />
                    </button>

                    <button id="menu-button" className="lg:hidden p-link" onClick={(event) => onMenuButtonClick(event)}>
                        <i className="pi pi-bars fs-xlarge"></i>
                    </button>
                    <ul ref={menu} id="menu">
                        <li><button className="flex p-3 p-link">Home</button></li>
                        <li><button onClick={() => smoothScroll('#header')} className="flex p-3 p-link">Introduction</button></li>
                        <li><button onClick={() => smoothScroll('#features')} className="flex p-3 p-link">Features</button></li>
                        <li><button onClick={() => smoothScroll('#promotion')} className="flex p-3 p-link">Promotion</button></li>
                        <li><button onClick={() => smoothScroll('#pricing')} className="flex p-3 p-link">Pricing</button></li >
                        <li><button onClick={() => smoothScroll('#video')} className="flex pl-3 py-3 p-link">Video</button></li >
                    </ul >
                </div >

                <div className="header-text flex flex-column align-items-center justify-content-center">
                    <h1 className="mb-6 white-color">Your application slogan comes here</h1>
                    <Button type="button" label="Sign Up Now" className="p-button-secondary"></Button>
                </div>
            </div >

            <div id="features" className="section flex flex-column align-items-center">
                <h2>The Ultimate Material Application Template for PrimeReact</h2>
                <p className="text-center">PrimeReact is a collection of rich UI components for Angular. PrimeReact is developed by PrimeTek Informatics, a vendor with years of expertise in developing open source UI solutions.
                Allocate your valuable time on business logic rather than dealing with the complex user interface requirements.</p>

                <div className="grid mt-3 mx-0">
                    <div className="col-12 md:col-4 text-center">
                        <h3>Creative</h3>
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-pencil fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                    </div>
                    <div className="col-12 md:col-4 text-center">
                        <h3>Responsive</h3>
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-mobile fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                    </div>
                    <div className="col-12 md:col-4 text-center">
                        <h3>Cross Browser</h3>
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-upload fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                    </div>

                    <div className="col-12 md:col-4 text-center">
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-tag fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                        <h3>Well Organized</h3>
                    </div>
                    <div className="col-12 md:col-4 text-center">
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-palette fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                        <h3>Beautiful</h3>
                    </div>
                    <div className="col-12 md:col-4 text-center">
                        <Button type="button" className="feature-button p-button-rounded p-button-plain p-button-text p-button p-component p-button-icon-only">
                            <span className="p-button-icon pi pi-check-circle fs-xlarge" aria-hidden="true"></span>
                            <span aria-hidden="true" className="p-button-label">&amp;nbsp;</span>
                        </Button>
                        <h3>Just For you</h3>
                    </div>
                </div>
            </div>

            <div id="promotion" className="flex flex-column align-items-center">
                <div className="grid m-0 py-3 xl:pl-6">
                    <div className="col-12 lg:col-8 flex flex-column justify-content-center align-items-center xl:align-items-center pl-6">
                        <h1 className="white-color">Boost Your Productivity.</h1>
                        <Button type="button" className="p-button-raised p-button p-component">
                            <span className="p-button-label">Sign Up Now</span>
                        </Button>
                    </div>
                    <div className="col-12 lg:col-4">
                        <div className="card mt-3 mb-0">
                            <h3>Just</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab perferendis nesciunt ad reiciendis
                        explicabo consequatur sapiente odit ipsa harum illum</p>
                        </div>

                        <div className="card mt-3 mb-0">
                            <h3>Like</h3>
                            <p>Ab perferendis nesciunt ad reiciendis explicabo consequatur sapiente odit ipsa harum illum</p>
                        </div>

                        <div className="card my-3">
                            <h3>That</h3>
                            <p>Necessitatibus quaerat voluptates aspernatur iure, aperiam possimus sint sit mollitia! </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pricing" className="section flex flex-column align-items-center">
                <h2>Pricing</h2>
                <p>Esse delectus sit velit, aspernatur voluptates molestiae, enim recusandae. Odit dicta, maiores quas ad
            nesciunt, illum expedita veritatis illo quam odio id!</p>

                <div className="grid m-0 pricing-content">
                    <div className="col-12 xl:col-4">
                        <div className="card p-0">
                            <div className="flex flex-column align-items-center indigo-bgcolor white-color p-6 fs-large">
                                <span>BASIC</span>
                                <h1 className="font-bold">$5</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 xl:col-4">
                        <div className="card p-0">
                            <div className="flex flex-column align-items-center pink-bgcolor white-color p-6 fs-large">
                                <span>STANDARD</span>
                                <h1 className="font-bold">$25</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                                <li><i className="pi pi-check"></i><span>7/24 Support</span></li>
                                <li><i className="pi pi-check"></i><span>Free Shipping</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 xl:col-4 pricing-box pricing-professional">
                        <div className="card p-0">
                            <div className="flex flex-column align-items-center cyan-bgcolor white-color p-6 fs-large">
                                <span>PROFESSIONAL</span>
                                <h1 className="font-bold">$50</h1>
                                <span>Monthly</span>
                            </div>
                            <ul className="options">
                                <li><i className="pi pi-check"></i><span>Responsive</span></li>
                                <li><i className="pi pi-check"></i><span>Push Messages</span></li>
                                <li><i className="pi pi-check"></i><span>7/24 Support</span></li>
                                <li><i className="pi pi-check"></i><span>Free Shipping</span></li>
                                <li><i className="pi pi-check"></i><span>Unlimited Bandwidth</span></li>
                                <li><i className="pi pi-check"></i><span>Unlimited Storage</span></li>
                                <li><i className="pi pi-check"></i><span>Gift Cards</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div id="video" className="section flex flex-column align-items-center justify-content-center">
                <h2>Video</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                <div className="m-3">
                    <iframe src="https://www.youtube.com/embed/B_lYGUtCd0g" title="title" frameBorder="0" className="videoFrame"></iframe>
                </div>
            </div>

            <div id="footer" className="section flex align-items-center justify-content-between flex-column lg:flex-row">
                <p>PrimeReact ULTIMA</p>

                <div className="py-3 flex align-items-center">
                    <ul className="my-3 mx-6">
                        <li><button type="button" className="p-link">Promotion</button></li>
                        <li><button type="button" className="p-link">Pricing</button></li>
                        <li><button type="button" className="p-link">Video</button></li>
                    </ul>
                    <ul className="my-3 ml-3">
                        <li><button type="button" className="p-link">Home</button></li>
                        <li><button type="button" className="p-link">Introduction</button></li>
                        <li><button type="button" className="p-link">Features</button></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(Landing, comparisonFn);
