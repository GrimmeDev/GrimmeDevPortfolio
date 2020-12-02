import React from "react";

function PortCard(props) {
    const { name, image, repo, desc } = props;
    // console.log('name==>>', name)
    // console.log('image==>>', image)
    // console.log('repo==>>', repo)
    // console.log('desc==>>', desc)
    // console.log(__dirname);
    return (
        <div className="col">
            <div className="card custBGC-2">
                <img className="card-img-top custImgStyle" src={image} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={repo} className="btn btn-primary">{name} repo</a>
                </div>
            </div>
        </div>
    )
}

export default PortCard;