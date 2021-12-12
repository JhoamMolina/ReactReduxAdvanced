import React, {Component} from "react";
import { connect } from "react-redux";
/* import { useNavigate } from 'react-router-dom'; */





export default (ChildComponent) => {
/*     let navigate = useNavigate(); */
    class CompossedComponent extends Component {

        componentDidMount(){
            this.shoudlNavigateAway();
        }
    
        componentDidUpdate(){
            this.shoudlNavigateAway();
        }
    
        shoudlNavigateAway(){
            if(!this.props.auth) {
/*                {navigate("/")} */
               console.log(this.props.auth + " I shoula been redirected")
        }
    }
        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStateToProps(state){
        return {auth: state.auth}
    }

    return connect(mapStateToProps)(CompossedComponent);
};