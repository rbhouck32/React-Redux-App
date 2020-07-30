import React from 'react';
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { Button, Container, Select, MenuItem, Grid, InputLabel, FormControl, Sizing, Box } from "@material-ui/core"
import { fetchEyes } from "../actions/index"
import { ColorPicker } from "material-ui-color"



const AvatarBuilder = props => {
     const [eyes, setEyes] = useState("eyes1");
     const [nose, setNose] = useState("nose1");
     const [mouth, setMouth] = useState("mouth1");
     const [avatar, setAvatar] = useState(null);
     const [color, setColor] = useState("A1A1A1");
     useEffect(() => {
        if(props.eyeOptions.length !== 0) {
            
            setEyes(props.eyeOptions[0])
            setNose(props.noseOptions[0])
            setMouth(props.mouthOptions[0])
            setColor(props.colorOptions)
            
        }
        
     },[props.eyeOptions])


     useEffect(() => {
         if(props.eyeOptions.length !== 0) {
             setAvatar(`https://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/${color}`)
         }

     },[eyes, nose, mouth, color])

    if (props.isFetching) {
        return <div>Fetching all the pieces and parts</div>;
    }



    const colorChangeHandler = (colors) => {
        console.log("colors",colors);
        setColor(colors.hex);
        colors.value = colors.hex;
        
      

    }
    
    
return ( 
        <>
            <Button color= "primary" onClick={() => props.fetchEyes()}>Click To Begin
            </Button>
            <Container style={{color: "red"}}>
                {props.error}
            </Container>
                    <Grid container spacing={2} xs={12}>
                        <Grid container  item xs={3}>
                            
                        <FormControl fullWidth>
                        <InputLabel htmlFor="demo-simple-select-label">Select Eyes</InputLabel>
                            <Select fullWidth onChange={(e)=> setEyes(e.target.value)} inputProps={{name:"eyes", id: "demo-simple-select-label" }}>
                                {props.eyeOptions.map(eyeOption => {
                                    return ( 
                                    <MenuItem key={eyeOption} value={eyeOption}>{eyeOption}</MenuItem>
                                    )
                                })}
                            </Select>
                            </FormControl>
                            
                        </Grid>
                        <Grid container item xs={3}>
                        <FormControl fullWidth>
                        <InputLabel htmlFor="demo-simple-select-label">Select Nose</InputLabel>
                            <Select onChange={(e)=> setNose(e.target.value)} inputProps={{name:"nose", id: "demo-simple-select-label" }}>
                                
                                {props.noseOptions.map(noseOption => {
                                    return ( 
                                    <MenuItem key={noseOption} value={noseOption}>{noseOption}</MenuItem>
                                    )
                                })}
                            </Select>
                            </FormControl>
                        </Grid>
                        <Grid container item xs={3}>
                        <FormControl fullWidth>
                        <InputLabel htmlFor="demo-simple-select-label">Select Mouth</InputLabel>
                            <Select onChange={(e)=> setMouth(e.target.value)} inputProps={{name:"mouth", id: "demo-simple-select-label" }}>
                                {props.mouthOptions.length === 0 && 
                                <MenuItem disabled selected value="Select Your Mouth!">
                                    Select Your Mouth!
                                </MenuItem>}
                                {props.mouthOptions.map(mouthOption => {
                                    return ( 
                                    <MenuItem key={mouthOption} value={mouthOption}>{mouthOption}</MenuItem>
                                    )
                                })}
                            </Select>
                            </FormControl>
                            
                        </Grid>
                        <Grid alignItems="flex-end" container item xs={3}>
                            <ColorPicker value={`#${color}`} mode="RGB" onChange={colorChangeHandler} />
                        </Grid>
                    </Grid>
{/* 
                <Select autoWidth="true" defaultValue="Blue" onChange={(e)=> {
                    console.log(e.target.value);
                    setColor(e.target.value)}}>
                    {props.colorOptions.length === 0 && 
                    <option disabled selected>
                        Select Your Color!
                    </option>}
                    {props.colorOptions.map(colorOption => {
                        return ( 
                        <option key={colorOption.value} value={colorOption.value}>{colorOption.label}</option>
                        )
                    })}
                </Select> */}
            
            
                
             
            <Box mt={10} style={{textAlign: "center"}} >
                {avatar && <img style={{textAlign: "center", margin: "0 auto"}} src={avatar}/>}
            </Box>
             
            
        
     </>
    )
}

const mapStatetoProps = state => {
    return {
        isFetching: state.isFetching,
        eyeOptions: state.eyeOptions,
        noseOptions: state.noseOptions,
        mouthOptions: state.mouthOptions,
        colorOptions: state.colorOptions
        
    };
};


export default connect(
    mapStatetoProps,
    {fetchEyes }
)(AvatarBuilder);



