import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions';
import Smurf from './Smurf';

 const SmurfList = (props)=> {
    const { isLoading, smurfs } = props;
    

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return(<section className="display">
        <div>
        {
            smurfs.map((smurf)=>{
                return(<div key={smurf.id} >
                    <Smurf smurf={smurf}/>
                </div>)
            })
        }
        </div>
    </section>);
    
}
const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, {fetchSmurfs})(SmurfList);

//Task List:
//1. Connect the smurfs and loading state values to the SmurfList component.
//2. Replace the single Smurf component instance with a map return a Smurf component for each entry in the smurfs list.
//3. Replace the static isLoading variable with the state loading variable.