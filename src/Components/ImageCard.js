import React from "react";
import ImageCardTitle from "./ImageCardTitle";
import ImageCardFooter from "./ImageCardFooter";


class ImageCard extends React.Component {
    render(){
        var filler;
        switch(this.props.footerType) {
            case 'button':
                      filler = <button className="btn-primary">A Button!</button>;
                      break;
            case 'link':
                      filler = <b><a href="www.google.com">A Link!</a></b>;
                      break;
            case 'text':
                      filler = <div><p>Just text</p><p>legal text</p></div>;
                      break;
            default:
              return null;
          }
        return(
    <div className="col-xs-12 col-md-3 mm-card row-eq-height" >
    <div className=" bg-light">
        <img src="http://via.placeholder.com/778x368" className="image" alt="A Button!" />
        <ImageCardTitle extraText={this.props.footerType} />
        <ImageCardFooter data={filler}/>
        </div>
        </div>
        );
        
    }
    
}

export default ImageCard;