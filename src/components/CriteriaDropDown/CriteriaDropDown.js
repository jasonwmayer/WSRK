import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Menu
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    // margin: theme.spacing(3),
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));


const CriteriaDropDown = () => {
   
    const classes = useStyles();
    const [value, setValue] = React.useState('');  
    const handleChange = event => {   
      setValue(event.target.value);
    };

    return(
      <div className='classes.root'>
        <FormControl component="fieldset" className={classes.formControl}>
          <RadioGroup aria-label="" name="" value={value} onChange={handleChange}>
              <FormControlLabel 
                value="StartingWith" 
                control={<Radio />} 
                label="Starting Width" 
              />
              <FormControlLabel 
                value="Containing" 
                control={<Radio />} 
                label="Containing" 
              />
              <FormControlLabel 
                value="EndingWidth" 
                control={<Radio />} 
                label="Ending Width" 
              />
            </RadioGroup>
        </FormControl>
      </div>   
    )
}

export default CriteriaDropDown;