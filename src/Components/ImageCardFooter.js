import React from "react";


class ImageCardFooter extends React.Component {
    render(){
        return( 
            <div className="footer">
                {this.props.data}
            </div>
        );
        
    }
    
}

export default ImageCardFooter;