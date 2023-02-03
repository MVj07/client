import 'bootstrap/dist/css/bootstrap.min.css';
import { InputAdornment,Rating, Button, Grid, Box, Typography, InputLabel, Select, FormControl, Divider, addProjectAllow, notAllowProject, Link, Switch, Tooltip, TextField, CircularProgress} from "@mui/material";
import './keywords.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { Search} from '@mui/icons-material';
import { IconButton } from '@material-ui/core';

function Keywords(){
    const [initial, setInitial] = useState('');

    const handleChange = (event) => {
        setInitial(event.target.value);
      };

    //   comparision information
    const comInfo=`View the state of Keywords that are categorized based on top positions. The 'Today' and 'Best' for each category denotes the number of keywords. It also provides you details on the number of keywords that haven't ranked.`

    // menuprops
    const MenuProps = {
        PaperProps: {
           style: {
              maxHeight: 220, 
              maxWidth: 220,
              width: 220,
              marginTop: 5,
              boxShadow: "0px 2px 4px #00000029",
              borderRadius: 5,
           },
        },
        anchorOrigin: {
           vertical: "bottom",
           horizontal: "right",
        },
        transformOrigin: {
           vertical: "top",
           horizontal: "right",
        },
        classes : {paper: "project-dropList"}, 
        // getcontentanchorel: null, 
     };



    const listItem=[
        {image:"https://www.google.com/s2/favicons?sz=64&domain_url=https://www.dell.com/",name:"Dell ware"},
        {image:"https://www.google.com/s2/favicons?sz=64&domain_url=https://www.amazon.com/",name:"Demo"}
      ]

    return(
        <>
            <div class="icon-bar">
                <a href="#"><img src='https://lab.serpple.com/static/media/logo-symbol.d492941b.svg'/></a> 
                    <ul style={{listStyle:'none',paddingLeft:'0px'}}>
                        <li><a href="#"><img src='https://lab.serpple.com/static/media/all-projects.853ac8f4.svg'/></a></li>
                        <li><a href="#contact"><img src="https://lab.serpple.com/static/media/dashboard.33fa6812.svg"/></a></li>
                        <li><a className="active" href="#about"><img src="https://lab.serpple.com/static/media/rank.1e8f199c.svg"/></a></li>
                        <li><a href="#about"><img src="https://lab.serpple.com/static/media/aii.edb64b45.svg"/></a></li>
                        <li><a href="#about"><img src="https://lab.serpple.com/static/media/rSearch.429ea436.svg"/></a></li>
                        <li><a href="#about"><img src="https://lab.serpple.com/static/media/1_report_unfill.0a895a8b.svg"/></a></li>
                        <li><a href="#about"><img src="https://lab.serpple.com/static/media/setting.8e7eeb5a.svg"/></a></li>
                    </ul>
            </div>



{/* <div className="sidebar">
    <a href="#home" className="mb-4">
        <img src="https://lab.serpple.com/static/media/logo-symbol.d492941b.svg"/>
    </a>
    <div className="justify-content-center p-0">
            <a href="#news"><img src="https://lab.serpple.com/static/media/all-projects.853ac8f4.svg"/></a>
            <a href="#contact"><img src="https://lab.serpple.com/static/media/dashboard.33fa6812.svg"/></a>
            <a className="active" href="#about"><img src="https://lab.serpple.com/static/media/rank.1e8f199c.svg"/></a>
            <a href="#about"><img src="https://lab.serpple.com/static/media/aii.edb64b45.svg"/></a>
            <a href="#about"><img src="https://lab.serpple.com/static/media/rSearch.429ea436.svg"/></a>
            <a href="#about"><img src="https://lab.serpple.com/static/media/1_report_unfill.0a895a8b.svg"/></a>
            <a href="#about"><img src="https://lab.serpple.com/static/media/setting.8e7eeb5a.svg"/></a>
    </div>
    
    <div className="pro-sidebar-footer">
        <Button sx={{border:'0px solid black',mt:7,mb:2}}>
            <div className="profileimage ml-10 mr-10">
                <div className="img">N</div>
            </div>
        </Button>
    </div>
</div> */}

{/* header content */}
<div className=" inside-content">
    <div>
        <header>
            <div id='header-row' className="d-flex flex-wrap justify-content-between gap-3">
                <div className="d-flex align-items-center gap-3">
                    <div className="whiteBox dell-icon d-flex align-items-center justify-content-center"><img src="https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.dell.com/&size=64"/></div>
                    <div>
                        <Typography  className='vijay fsM'>Keywords' Ranking</Typography>
                        <Typography className='vijay1' sx={{color:'#868080',fontSize:'15px'}}>Dell ware I Updated: 14 days ago</Typography>
                    </div>
                </div>
                <div className="d-flex gap-2">
                    <div>
                        <Button className='msg-btn' variant="outlined" style={{padding:'19px',border:'1px solid rgb(215, 215, 217)'}} sx={{backgroundColor:'white',minWidth:0,pt:1,pb:1}}><svg width="18" height="15.855" xmlns="http://www.w3.org/2000/svg"><path d="M8.367,12.34H2.813a1.408,1.408,0,0,1-1.406-1.406V2.961l6.109,3.8a2.8,2.8,0,0,0,2.97,0l6.109-3.8V7.242a.7.7,0,1,0,1.406,0V2.812A2.816,2.816,0,0,0,15.188,0H2.813A2.816,2.816,0,0,0,0,2.812v8.121a2.816,2.816,0,0,0,2.812,2.812H8.367a.7.7,0,1,0,0-1.406Zm6.82-10.934a1.4,1.4,0,0,1,.819.264l-6.264,3.9a1.4,1.4,0,0,1-1.485,0l-6.264-3.9a1.4,1.4,0,0,1,.819-.264Zm2.52,11.07-.677-.488c0-.035,0-.07,0-.106s0-.085,0-.128c0-.014,0-.028,0-.041s0-.027,0-.04l.7-.533a.7.7,0,0,0,.165-.939L17.5,9.6a.7.7,0,0,0-.848-.274l-.757.3c-.069-.052-.142-.1-.215-.145l-.008,0-.1-.056-.029-.016-.089-.045-.042-.02-.041-.02-.149-.831a.7.7,0,0,0-.692-.579h-.615a.7.7,0,0,0-.692.577l-.151.825a2.792,2.792,0,0,0-.589.354l-.809-.276a.7.7,0,0,0-.849.336l-.345.652a.7.7,0,0,0,.233.915l.69.457c0,.044,0,.089,0,.133s0,.086,0,.129c0,.015,0,.029,0,.044s0,.029,0,.044l-.674.534a.7.7,0,0,0-.179.891l.33.6a.7.7,0,0,0,.875.314l.764-.3a2.786,2.786,0,0,0,.334.215l.021.012.093.048.039.019.043.021.15.831a.7.7,0,0,0,.692.579h.633a.7.7,0,0,0,.694-.592l.129-.809a2.782,2.782,0,0,0,.632-.388l.784.278a.7.7,0,0,0,.877-.376l.284-.636a.7.7,0,0,0-.231-.857Zm-3.923.743-.034-.011-.052-.02-.05-.021-.046-.021-.039-.02-.037-.02-.052-.031-.045-.029L13.4,13.02l-.036-.027-.031-.024-.057-.05-.026-.024-.039-.039a1.4,1.4,0,0,1-.354-.646c0-.02-.009-.039-.013-.059s0-.016,0-.024-.006-.038-.009-.057l0-.025c0-.02,0-.039-.005-.059s0-.015,0-.022c0-.027,0-.054,0-.081s0-.052,0-.078c0,0,0-.006,0-.01,0-.023,0-.047.006-.07v-.006q0-.037.011-.074v0q.006-.037.015-.073a1.4,1.4,0,0,1,.366-.668l.013-.014.044-.041.009-.008q.045-.04.093-.077l.006,0a1.418,1.418,0,0,1,.161-.1l.012-.007.054-.028.017-.008c.029-.013.058-.026.088-.037l.036-.014.043-.014.059-.017a1.4,1.4,0,0,1,.747,0l.058.017.034.012.051.019.047.02.05.023.036.019.04.022.034.019.063.04.03.021.042.031.026.021.06.052.018.018.045.045a1.4,1.4,0,0,1,.356.649c0,.019.009.038.012.057l0,.026c0,.018.006.037.009.055s0,.017,0,.026,0,.039.005.058,0,.015,0,.023c0,.027,0,.054,0,.081a1.436,1.436,0,0,1-.007.146v.006c0,.022,0,.043-.008.065l0,.026c0,.015,0,.029-.008.043a1.4,1.4,0,0,1-.32.641c-.02.023-.041.046-.063.067l-.015.014-.052.048-.028.025-.06.047-.039.027-.034.023-.064.04-.039.022-.043.022-.047.022-.05.021-.061.023-.03.01c-.029.009-.058.018-.087.025a1.405,1.405,0,0,1-.722-.009l-.06-.018Zm0,0"></path></svg></Button>
                    </div>
                        {/* <div><img width='24px' height='24px' src="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.dell.com/&size=64"/></div> */}
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel variant='standard' htmlFor='uncontrolled-native'>{initial}</InputLabel>
                                <Select
                                // labelId="demo-simple-select-label"
                                // id="demo-simple-select"
                                value={initial}
                                // label="Age"
                                onChange={handleChange}
                                MenuProps={MenuProps}
                                sx={{display:'flex',width:'170px'}}
                                >
                                {listItem.map((list)=>(
                                    <MenuItem sx={{display:'flex',pt:1.5,pb:1.5}} className='gap-2'  value={list.name}><img width="25px" src={list.image}/><p className='mb-0'>{list.name}</p></MenuItem>
                                ))}
                                    <div className="project-gridButtons">
                                            <Link underline='none' to="/" className="textClr vijay">
                                                All project
                                            </Link>
                                        <Divider className="project-divider" orientation="vertical" flexItem/> 
                                            <Link underline='none' sx={{color:'#8959cf'}} to="/addproject" className="pClr fB">
                                                Add project
                                            </Link>                    
                                    </div>
                                </Select>
                            </FormControl>
                        </Box>
                    
                    <Box sx={{minWidth:'145px'}}>
                        <Button className='add-key' variant="contained" sx={{padding:'15px',backgroundColor:'rgb(137, 89, 207)'}}>
                            <span className="d-flex" style={{marginRight:'10px'}}>
                                <svg  xmlns="http://www.w3.org/2000/svg" width='16' height='16' viewBox='0 0 16 16'>
                                    <path fill="#ffffff" transform="translate(-3 -3)" d="M17.222,3H4.778A1.777,1.777,0,0,0,3,4.778V17.222A1.777,1.777,0,0,0,4.778,19H17.222A1.783,1.783,0,0,0,19,17.222V4.778A1.783,1.783,0,0,0,17.222,3Zm0,14.222H4.778V4.778H17.222Zm-7.111-1.778h1.778V11.889h3.556V10.111H11.889V6.556H10.111v3.556H6.556v1.778h3.556Z"></path>
                                </svg>
                            </span>
                            <span className="vijay2" style={{textTransform:'capitalize'}}>Add keyword</span>
                        </Button>
                    </Box>
                </div>
            </div>
        </header>




        {/* center content */}
        <Grid sx={{pr:1,pl:1}}>
            <Grid sx={{border:'1px solid black',padding:'14px',marginBottom:'30px',backgroundColor: '#f6f9fe',borderRadius: '5px'}}>
                <div className="d-flex justify-content-between">
                    <Typography className='vijay fsmd'>Overview</Typography>
                    <Switch className='switch-hide' value='hide' sx={{width:'100px',height:'50px',border:'1px solid red'}}>Hide</Switch>
                </div>

                <Grid container sx={{mt:2.5,marginLeft:'-16px'}}>

                    {/* comparision */}

                    <Grid xl='4' lg='4' md='12' sm='12' xs='12' className='pad'>
                        <div className='whiteCard' style={{paddingBottom:'0px',height:'100%'}}>
                            <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                <Typography className='vijay fsmd1'>Comparision 
                                <Tooltip placement='bottom-end' title={comInfo}><span className='m-l5'>
                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                        </svg>
                                    </span></Tooltip>
                                </Typography>
                                <div></div>
                            </div>

                            <div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <span className='w40'>STATUS</span>
                                        <div className='w30' style={{textAlign:'center'}}>TODAY</div>
                                        <div className='w30' style={{textAlign:'right',marginRight:"5px"}}>BEST</div>
                                    </div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <div className='w40 d-flex align-items-center '>Top 1</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>7</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>7</div>
                                    </div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <div className='w40 d-flex align-items-center '>Top 3</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>7</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>7</div>
                                    </div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <div className='w40 d-flex align-items-center '>Top 10</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>7</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>7</div>
                                    </div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <div className='w40 d-flex align-items-center '>Top 50</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>8</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>8</div>
                                    </div>
                                    <div className='brdBottom d-flex justify-content-between align-items-center m-b10 p-b10'>
                                        <div className='w40 d-flex align-items-center '>Top 100</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>8</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>8</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div className='w40 d-flex align-items-center '>Not Ranked</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-center '>0</div>
                                        <div className='w30 vijay d-flex align-items-center justify-content-end m-r15'>0</div>
                                    </div>
                            </div>        

                        </div>
                                
                    </Grid>

                        <Grid xl='8' lg='8' md='12' sm='12' xs='12' className='pad '>
                            <Grid container className='css-isbt42'>


                                {/* device */}
                                
                                <Grid xl='3' lg='3' md='12' sm='12' xs='12' className='pad' sx={{width:'190px'}}>
                                    <div className='whiteCard'>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10'>
                                            <Typography className='vijay'>Device
                                                <Tooltip placement='bottom-end' title={comInfo}>
                                                    <span className='m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                                        </svg>
                                                    </span>
                                                </Tooltip>
                                            </Typography>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10'>
                                            <div className='d-flex align-items-center'>
                                                <span className='m-r5'>
                                                    <svg xmlns='http://www.w3.org/2000/svg' width='14' height='12.25' viewBox='0 0 14 12.25'>
                                                        <path d='M13.125,2H.875A.875.875,0,0,0,0,2.875V10.75a.875.875,0,0,0,.875.875H5.249a3.649,3.649,0,0,1-.267,1.75H4.805a.438.438,0,0,0,0,.875H9.194a.438.438,0,0,0,0-.875H9.018a3.638,3.638,0,0,1-.267-1.75h4.374A.875.875,0,0,0,14,10.75V2.875A.875.875,0,0,0,13.125,2Zm-7,9.625v0Zm1.751,0v0h0v0Zm5.249-1.752H.875v-7h12.25Z' fill='#34234f' transform='translate(0,-2)'/>
                                                    </svg>
                                                </span>
                                                <span>Desktop</span>
                                            </div>
                                            <div className='vijay'>8</div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center '>
                                            <div className='d-flex align-items-center'>
                                                <span style={{width:'15px'}} className='m-r5'>
                                                    <svg xmlns='http://www.w3.org/2000/svg' width='9.625' height='14' viewBox='0 0 9.625 14'>
                                                        <path d='M15.177,1.928H7.3a.878.878,0,0,0-.875.875v12.25a.878.878,0,0,0,.875.875h7.875a.878.878,0,0,0,.875-.875V2.8A.878.878,0,0,0,15.177,1.928ZM11.239,15.3a.681.681,0,1,1,.681-.681A.681.681,0,0,1,11.239,15.3ZM15.177,13.3H7.3V3.678h7.875Z' fill='#34234f' transform='translate(-6.427 -1.928)'/>
                                                    </svg>
                                                </span>
                                                <span>Mobile</span>
                                            </div>
                                            <div className='vijay'>0</div>
                                        </div>
                                    </div>
                                </Grid>

                                {/* Today's performance */}
         
                                <Grid xl='5' lg='5' md='12' sm='12' xs='12' className='pad'>
                                    <div className='whiteCard'>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b15 p-b10'>
                                            <Typography className='vijay'>Today's Performance
                                                <Tooltip placement='bottom-end' title={comInfo}>
                                                    <span className='m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                                        </svg>
                                                    </span>
                                                </Tooltip>
                                            </Typography>
                                        </div>
                                        <Grid className='d-flex justify-content-between'>
                                            <Grid className='p-l0'>
                                                <div className='status bg-transparent p-0'>
                                                    <Typography className='MuiTypography-root MuiTypography-p MuiTypography-gutterBottom mb-2 d-flex align-items-center gap-1 justify-content-center css-zlwonk'>
                                                        <span className='lineHT'>Improved</span>
                                                    </Typography>
                                                    <Typography className='MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom my-1 d-flex align-items-center gap-2 justify-content-center css-1mn8ni8'>
                                                        <div className='vijay fsM d-flex align-items-center gap-2'><span>0</span></div>
                                                    </Typography>
                                                </div>
                                            </Grid>
                                            <Grid>
                                                <div className='status bg-transparent'>
                                                    <Typography className='MuiTypography-root MuiTypography-p MuiTypography-gutterBottom mb-2 d-flex align-items-center gap-1 justify-content-center css-zlwonk'>
                                                        <span className='lineHT'>Declined</span>
                                                    </Typography>
                                                    <Typography className='MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom my-1 d-flex align-items-center gap-2 justify-content-center css-1mn8ni8'>
                                                        <div className='vijay fsM d-flex align-items-center gap-2'><span>0</span></div>
                                                    </Typography>
                                                </div>
                                            </Grid>
                                            <Grid>
                                                <div className='status bg-transparent'>
                                                    <Typography className='MuiTypography-root MuiTypography-p MuiTypography-gutterBottom mb-2 d-flex align-items-center gap-1 justify-content-center css-zlwonk'>
                                                        <span className='lineHT'>No Change</span>
                                                    </Typography>
                                                    <Typography className='MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom my-1 d-flex align-items-center gap-2 justify-content-center css-1mn8ni8'>
                                                        <div className='vijay fsM d-flex align-items-center gap-2'><span>8</span></div>
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>

                                {/* Serpple score */}


                                <Grid xl='4' lg='4' md='12' sm='12' xs='12' className='pad'>
                                    <div className='whiteCard'>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b15 p-b10'>
                                            <Typography className='vijay'>Serpple Scoring
                                                <Tooltip placement='bottom-end' title={comInfo}>
                                                    <span className='m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                                        </svg>
                                                    </span>
                                                </Tooltip>
                                            </Typography>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center position-relative' style={{height:'57px'}}>
                                            <div className=''>
                                                <Typography className='lineHT vijay m-b7 d-flex'>
                                                    <div>Raising</div>
                                                    <span className='arrow m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='9' height='6.944' viewBox='0 0 8 5.944'>
                                                            <path d='M12.8,13.026H7.193a1.173,1.173,0,0,1-1.06-.667,1.4,1.4,0,0,1,.173-1.473l2.806-3.4a1.173,1.173,0,0,1,1.773,0l2.806,3.4a1.4,1.4,0,0,1,.173,1.473A1.173,1.173,0,0,1,12.8,13.026Z' fill='#8959cf' transform='translate(-5.999 -7.083)'></path>
                                                        </svg>
                                                    </span>
                                                </Typography>
                                                <Typography className='vijay d-flex align-items-center'>
                                                    <div className='m-r5 mb-0 d-flex align-items-center fssma'>Best : 88</div>
                                                </Typography>
                                            </div>
                                            <div className='' style={{position:'absolute', right:'-8px',top:'0px',height:'60px'}}>
                                                <svg width='65' heigh='65'>
                                                    <g transform='rotate(-90 25 25)'>
                                                    <circle r="25" cx="20" cy="30" fill="transparent" stroke="#C8B6EB" stroke-width="4px" stroke-dasharray="157.07963267948966" stroke-dashoffset="0" stroke-linecap="round"></circle>
                                                    <circle r="25" cx="20" cy="30" fill="transparent" stroke="#8959CF" stroke-width="4px" stroke-dasharray="157.07963267948966" stroke-dashoffset="18.84955592153876" stroke-linecap="round"></circle>
                                                    </g>
                                                    <text x="47%" y="20%" dominant-baseline="central" text-anchor="middle" font-size="20px" font-family="Bold">88</text>                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Grid> 

                                    {/* SERP Features */}
                                
                            <Grid xl='6' lg='6' md='12' sm='12' xs='12' className='pad'>
                                    <div className='whiteCard'>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b15 p-b10'>
                                            <Typography className='vijay'>SERP Features
                                                <Tooltip placement='bottom-end' title={comInfo}>
                                                    <span className='m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                                        </svg>
                                                    </span>
                                                </Tooltip>
                                            </Typography>
                                        </div>
                                        <Box className='rBox'>
                                            <div>
                                                <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                    <span>Your Ratings</span>
                                                    <div>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='12' height='11.44' viewBox='0 0 12 11.44'>
                                                            <path d='M13.991,7.04a.562.562,0,0,0-.48-.659L10.094,5.9,8.535,2.783a.468.468,0,0,0-.24-.24.607.607,0,0,0-.839.24L5.957,5.9l-3.417.48a.363.363,0,0,0-.36.18.58.58,0,0,0,0,.839L4.638,9.8l-.6,3.417a.76.76,0,0,0,.06.36.607.607,0,0,0,.839.24L8,12.2l3.058,1.619a.449.449,0,0,0,.3.06h.12a.622.622,0,0,0,.48-.719l-.6-3.417,2.458-2.4A.33.33,0,0,0,13.991,7.04Z' fill='#cf7343' transform='translate(-2 -2.459)'></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                    <span className='d-flex align-items-center'>
                                                        <div>
                                                            <Rating name="size-small" defaultValue={2} size="small" readOnly/>
                                                            <span style={{fontSize:'10px',position:'fixed',paddingTop:'3px'}}>(0-2)</span>
                                                        </div>
                                                   </span>
                                                   <div class="vijay d-flex align-items-center">0</div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                    <span className='d-flex align-items-center'>
                                                        <div>
                                                            <Rating name="size-small" defaultValue={3} size="small" readOnly/>
                                                            <span style={{fontSize:'10px',position:'fixed',paddingTop:'3px'}}>(2-4)</span>
                                                        </div>                                                    
                                                    </span>
                                                    <div class="vijay d-flex align-items-center">0</div>
                                                </div>
                                                <div className='d-flex justify-content-between align-items-center '>
                                                    <span className='d-flex align-items-center'>
                                                        <div>
                                                            <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                                                            <span style={{fontSize:'10px',position:'fixed',paddingTop:'3px'}}>(4-5)</span>
                                                        </div>                                                    
                                                    </span>
                                                    <div class="vijay d-flex align-items-center">8</div>
                                                </div>
                                            </div>
                                                <div>
                                                    <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                        <span class="fM">Feature Snippet</span>
                                                        <div>
                                                            <svg xmlns='http://www.w3.org/2000/svg' width='14' height='9.692' viewBox='0 0 14 9.692'>
                                                                <path d='M10.13,7.016a.491.491,0,0,1,.3.2l2.8,3.734,2.8-3.734a.63.63,0,0,1,.4-.214A.565.565,0,0,1,17,7.538v8.615a.568.568,0,0,1-.538.538H5.692a.558.558,0,0,1-.407-.891.546.546,0,0,1,.305-.176.538.538,0,0,1,.1-.01H15.923c-2.477-3.186-9.246-3.037-11.846.538a.63.63,0,0,1-.186.407.558.558,0,0,1-.743-.036A.537.537,0,0,1,3,16.154V7.538a.558.558,0,0,1,.9-.4.546.546,0,0,1,.069.076l2.8,3.734,2.8-3.734.033-.04a.534.534,0,0,1,.078-.07A.54.54,0,0,1,9.974,7,.411.411,0,0,1,10.13,7.016Z' fill='#436DCF' transform='translate(-3 -7)'></path>
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                        <span>Available</span>
                                                        <div class="fB">0</div>
                                                    </div>
                                                    <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                                        <span>Yours</span>
                                                        <div class="fB">0</div>
                                                    </div>
                                                </div>
                                        </Box>
                                    </div>
                            </Grid>

                                        {/* Google Search ads */}

                                <Grid xl='6' lg='6' md='12' sm='12' xs='12' className='pad'>
                                    <div className='whiteCard'>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b15 p-b10'>
                                            <Typography className='vijay'>Google Search Ads
                                                <Tooltip placement='bottom-end' title={comInfo}>
                                                    <span className='m-l5'>
                                                        <svg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'>
                                                            <path id='Path_49' data-name='Path-49' d='M7.5,2A5.5,5.5,0,1,0,13,7.5,5.5,5.5,0,0,0,7.5,2Zm0,8.25a.552.552,0,0,1-.55-.55V7.5a.55.55,0,1,1,1.1,0V9.7A.552.552,0,0,1,7.5,10.25Zm.55-4.4H6.95V4.75h1.1Z' transform='translate(-2,-2)' fill="#b4aebe"></path>
                                                        </svg>
                                                    </span>
                                                </Tooltip>
                                            </Typography>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                            <span className='w55'>AREA</span>
                                            <div className='text-center w20'>YOU</div>
                                            <div className='text-right w20 m-r5'>OTHERS</div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                            <div className='d-flex align-items-center w55 gap-1'>
                                                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='12' viewBox='0 0 14 12'>
                                                    <g transform='translate(-904 -400)'>
                                                        <g id="ads" transform="translate(903 400)"><path id="Path_513" data-name="Path 513" d="M8.893,7.5a.393.393,0,0,0-.393.393v.786h.786V7.893A.393.393,0,0,0,8.893,7.5Z" transform="translate(-2.675 -2.512)" fill="#81798f"></path><path id="Path_514" data-name="Path 514" d="M14.5,7.5V9.857a1.178,1.178,0,1,0,0-2.357Z" transform="translate(-5.179 -2.666)" fill="#81798f"></path><path id="Path_515" data-name="Path 515" d="M13.336,2H2.664A1.666,1.666,0,0,0,1,3.664V8.257A1.666,1.666,0,0,0,2.664,9.921c.035.072,4.767,0,4.767,0h5.9A1.666,1.666,0,0,0,15,8.257V3.664A1.666,1.666,0,0,0,13.336,2ZM7.395,7.377a.454.454,0,0,1-.908,0V6.923H5.882v.454a.454.454,0,0,1-.908,0V5.41a1.21,1.21,0,1,1,2.421,0Zm2.118.454H9.059a.454.454,0,0,1-.454-.454V4.654A.454.454,0,0,1,9.059,4.2h.454a1.816,1.816,0,1,1,0,3.631Z" transform="translate(0)" fill="#81798f"></path></g>
                                                        <g id="Rectangle_151" data-name="Rectangle 151" transform="translate(904 400)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                        <g id="Rectangle_152" data-name="Rectangle 152" transform="translate(904 411)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                    </g>
                                                </svg>Above & below the fold
                                            </div>
                                            <div class="fB d-flex align-items-center w20 justify-content-center">0</div>
                                            <div class="fB d-flex align-items-center w20 justify-content-end m-r15">0</div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center brdBottom m-b10 p-b10 '>
                                            <div className='d-flex align-items-center w55 gap-1'>
                                                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='11.953' viewBox='0 0 14 11.953'>
                                                    <g transform='translate(-904 -400)'>
                                                        <g id="ads" transform="translate(903 402)"><path id="Path_513" data-name="Path 513" d="M8.893,7.5a.393.393,0,0,0-.393.393v.786h.786V7.893A.393.393,0,0,0,8.893,7.5Z" transform="translate(-2.675 -2.512)" fill="#81798f"></path><path id="Path_514" data-name="Path 514" d="M14.5,7.5V9.857a1.178,1.178,0,1,0,0-2.357Z" transform="translate(-5.179 -2.666)" fill="#81798f"></path><path id="Path_515" data-name="Path 515" d="M13.336,2H2.664A1.666,1.666,0,0,0,1,3.664V8.257A1.666,1.666,0,0,0,2.664,9.921c.035.072,4.767,0,4.767,0h5.9A1.666,1.666,0,0,0,15,8.257V3.664A1.666,1.666,0,0,0,13.336,2ZM7.395,7.377a.454.454,0,0,1-.908,0V6.923H5.882v.454a.454.454,0,0,1-.908,0V5.41a1.21,1.21,0,1,1,2.421,0Zm2.118.454H9.059a.454.454,0,0,1-.454-.454V4.654A.454.454,0,0,1,9.059,4.2h.454a1.816,1.816,0,1,1,0,3.631Z" transform="translate(0)" fill="#81798f"></path></g>
                                                        <g id="Rectangle_151" data-name="Rectangle 151" transform="translate(904 400)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                        <g id="Rectangle_152" data-name="Rectangle 152" transform="translate(904 402)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                    </g>
                                                </svg>Above the fold
                                            </div>
                                            <div class="fB d-flex align-items-center w20 justify-content-center">0</div>
                                            <div class="fB d-flex align-items-center w20 justify-content-end m-r15">2</div>
                                        </div>
                                        <div className='d-flex justify-content-between align-items-center p-b5 '>
                                            <div className='d-flex align-items-center w55 gap-1'>
                                                <svg xmlns='http://www.w3.org/2000/svg' width='14' height='12' viewBox='0 0 14 12'>
                                                    <g transform='translate(-904 -401)'>
                                                        <g id="ads" transform="translate(903 399)"><path id="Path_513" data-name="Path 513" d="M8.893,7.5a.393.393,0,0,0-.393.393v.786h.786V7.893A.393.393,0,0,0,8.893,7.5Z" transform="translate(-2.675 -2.512)" fill="#81798f"></path><path id="Path_514" data-name="Path 514" d="M14.5,7.5V9.857a1.178,1.178,0,1,0,0-2.357Z" transform="translate(-5.179 -2.666)" fill="#81798f"></path><path id="Path_515" data-name="Path 515" d="M13.336,2H2.664A1.666,1.666,0,0,0,1,3.664V8.257A1.666,1.666,0,0,0,2.664,9.921c.035.072,4.767,0,4.767,0h5.9A1.666,1.666,0,0,0,15,8.257V3.664A1.666,1.666,0,0,0,13.336,2ZM7.395,7.377a.454.454,0,0,1-.908,0V6.923H5.882v.454a.454.454,0,0,1-.908,0V5.41a1.21,1.21,0,1,1,2.421,0Zm2.118.454H9.059a.454.454,0,0,1-.454-.454V4.654A.454.454,0,0,1,9.059,4.2h.454a1.816,1.816,0,1,1,0,3.631Z" transform="translate(0)" fill="#81798f"></path></g>
                                                        <g id="Rectangle_151" data-name="Rectangle 151" transform="translate(904 410)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                        <g id="Rectangle_152" data-name="Rectangle 152" transform="translate(904 412)" fill="#81798f" stroke="#81798f" stroke-width="1"><rect width="14" height="1" rx="0.5" stroke="none"></rect><rect x="0.5" y="0.5" width="13" fill="none"></rect></g>
                                                    </g>
                                                </svg>Below the fold
                                            </div>
                                            <div class="fB d-flex align-items-center w20 justify-content-center">0</div>
                                            <div class="fB d-flex align-items-center w20 justify-content-end m-r15">0</div>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
            </Grid> 





                    {/* Table content */}

            <div className='table'>
                {/* total keywords */}
                <Typography className='vijay mb-0'>Total Keywords
                    <span>(8)</span>
                </Typography>


                {/* search, column, list, grid */}
            <div className='header m-t20 m-b20'>
                <div className='left'>
                    <div style={{padding:'0px'}}>
                     <TextField placeholder='Search' InputProps={{endAdornment:(<Search/>)}}/>                       
                    </div>
                    <div style={{padding:'0px'}}>
                        <Box className='aticon border' sx={{padding:'8px',borderRadius:'5px'}}>
                            <Button>
                                <span class="d-flex m-r10 undefined"><svg class="" xmlns="http://www.w3.org/2000/svg" width="14" height="13.3" viewBox="0 0 14 13.3"><path id="Path_452" data-name="Path 452" d="M9.9,10.4l-.2.21V8.8a.7.7,0,1,0-1.4,0v1.813l-.2-.21A.7.7,0,0,0,7.1,11.4l1.4,1.4a.7.7,0,0,0,.231.147.658.658,0,0,0,.532,0A.7.7,0,0,0,9.5,12.8l1.4-1.4A.7.7,0,0,0,9.9,10.4Zm4-5.8H9.5L9.28,3.9A2.1,2.1,0,0,0,7.292,2.5H4.1A2.1,2.1,0,0,0,2,4.6v9.1a2.1,2.1,0,0,0,2.1,2.1h9.8A2.1,2.1,0,0,0,16,13.7v-7A2.1,2.1,0,0,0,13.9,4.6Zm.7,9.1a.7.7,0,0,1-.7.7H4.1a.7.7,0,0,1-.7-.7V4.6a.7.7,0,0,1,.7-.7H7.292a.7.7,0,0,1,.665.476l.378,1.148A.7.7,0,0,0,9,6h4.9a.7.7,0,0,1,.7.7Z" transform="translate(-2 -2.5)" fill="#81798f"></path></svg></span>
                                <span style={{textTransform:'capitalize',color:'#81798f'}}>Export</span>
                            </Button>
                        </Box>
                    </div>
                </div>
                <div className='right'>
                    <div className='d-flex'>
                        <Button variant='outlined' tabIndex='0'>
                            <svg class="MuiCircularProgress-svg css-13o7eu2" viewBox="22 22 44 44"><circle class="MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate css-14891ef" cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6"></circle></svg>
                        </Button>
                    </div>
                </div>
            </div>

            </div>



        </Grid>
    </div>

</div>

        </>
    )
}
export default Keywords;