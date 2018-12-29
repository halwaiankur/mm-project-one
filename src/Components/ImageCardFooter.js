import React from "react";


class ImageCardFooter extends React.Component {
    render(){
        return( 
            <footer>
                {this.props.data}
            </footer>
        );
        
    }
    
}

export default ImageCardFooter;