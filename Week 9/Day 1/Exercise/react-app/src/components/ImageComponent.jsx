import {Component} from "react"


class ImageComponent extends Component {
    // constructor(props){
    //     super(props) 
    // }

    render() {
        return (
            <img style={{width: "80px", marginLeft: "2rem"}} src={this.props.link} alt={this.props.alt} />
        )
    }
}

export default ImageComponent

