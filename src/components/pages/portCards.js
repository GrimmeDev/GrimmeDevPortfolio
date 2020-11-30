import React from "react";

function PortCard(props) {
    // destruct props to contain:
    // name, image, repo, desc
    // console.log('props==>>', props )
    const { name, image, repo, desc } = props.props;
    // console.log('name==>>', name)
    // console.log('image==>>', image)
    // console.log('repo==>>', repo)
    // console.log('desc==>>', desc)
    return (
        <div className="card">
            <img className="card-img-top custImgStyle" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{desc}</p>
                <a href={repo} className="btn btn-primary">{name} repo</a>
            </div>
        </div>
    )
}

export default PortCard;