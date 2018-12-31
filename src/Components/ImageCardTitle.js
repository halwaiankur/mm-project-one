import React from "react";


class ImageCardTitle extends React.Component{
    render(){
        let extraTextFlag;
        if(this.props.extraText === "text"){
            extraTextFlag = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>;
        }
    return (
         <div className="content container">
            <p className="category">category</p>
            <p className="cardTitle" >Card Title</p>
            <div className="cardDesc">
            <p>The title above should use the same style as the h2 at the top of this page but not be an H2 itself.</p>
            {extraTextFlag}
            </div>
        </div>

    );
    }
}

export default ImageCardTitle;