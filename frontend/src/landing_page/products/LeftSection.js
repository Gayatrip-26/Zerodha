import React from "react";

const LeftSection = ({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 ">
                    <img src={imageURL} alt={productName} />
                </div>
                <div className="col-6 p-5 mt-5">
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div>
                     <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-right-long"></i>{" "}</a>
                     <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More<i class="fa-solid fa-right-long"></i>{" "}</a>
                    </div>
                    <div className="mt-3">
                    <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="Google Play" /></a>
                    <a href={appStore}><img src="media/appstoreBadge.svg" alt="App Store" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;
