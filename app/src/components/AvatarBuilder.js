import React from 'react';
import { connect } from "react-redux"
import { Button } from "@material-ui/core"
import { fetchEyes } from "../actions/index"



const AvatarBuilder = props => {
    if (props.isFetching) {
        return <div>Fetching all the pieces and parts</div>;
    }




    return ( 
        <>
        <Button color= "primary" onClick={() => props.fetchEyes()}>Click To Begin
        </Button>
        
        
        
        
        
        
        
        
        </>
    )
}

const mapStatetoProps = state => {
    return {
        isFetching: state.isFetching,
        
    };
};


export default connect(
    mapStatetoProps,
    {fetchEyes }
)(AvatarBuilder);



