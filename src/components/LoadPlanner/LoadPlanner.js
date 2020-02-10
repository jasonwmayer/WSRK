import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterSearchBy from './FilterSearchBy';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const LoadPlanner = () => {
    return(
        <div className='classes.root'>
            <FilterSearchBy />
        </div>   
    )
}

export default LoadPlanner;