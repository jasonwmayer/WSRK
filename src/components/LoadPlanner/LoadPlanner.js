import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FilterSearchBy from './FilterSearchBy';
import CriteriaDropDown from './CriteriaDropDown';

const useStyles = makeStyles(theme => ({
    root: {
    },
}));

const LoadPlanner = () => {
    return(
        <div className='classes.root'>
            <FilterSearchBy />
            <CriteriaDropDown />
        </div>   
    )
}

export default LoadPlanner;