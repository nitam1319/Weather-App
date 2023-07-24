import React,{useEffect,useState} from 'react'
import { DivBackground, DivLeft, DivRight, DivShow, Image, SearchDiv , H,H1, P, DivData, Icon} from '../styledComponenet/StyledComponents'
import IconButton from '@mui/material/IconButton';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CloseIcon from '@mui/icons-material/Close';
import TextField  from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import axios from 'axios';import { Alert, Collapse } from '@mui/material';


export default function WeatherApp() {
    const [api, setApi] = useState<any>()
    const [nameCity, setNameCity] = useState('')
    const [loading, setLoading] = useState(true)
    const [day , setDay]=useState('')
    const [bg , setBg]=useState('')
    const [error , setError]=useState('')
    
    useEffect(() => {
     axios.get('http://api.weatherapi.com/v1/current.json?key=238620c8dc7e469c848160957230607&q=London&aqi=yes')
    .then(response => {
        

        setApi(response.data)
        if(response.data.current.is_day){
            setDay('light')
        }else{setDay('night')}
        axios.get(`https://api.unsplash.com/photos/random?client_id=wKzXFQtKQAmOI5_Ted1Wq1dsLDBuj6ps6pPmR1FzYBA&query=${response.data.location.name}+${day}+city&image_type=photo&limit=1&category=travel&colors=${day}`)
        .then(response => {
            
            setBg(response.data.urls.regular)
            setLoading(false);
        })
        .catch(err => {setError(err.message);console.log(err);setLoading(false)})
    })
    .catch(err => {setError(err.message);console.log(err);setLoading(false)});
    }, [])
  
    function findCity (){
        setLoading(true)
        axios.get(`http://api.weatherapi.com/v1/current.json?key=238620c8dc7e469c848160957230607&q=${nameCity}&aqi=yes`)
        .then(response => {
            setLoading(false);
        
            setApi(response.data)
            if(response.data.current.is_day){
                setDay('light')
            }else{setDay('night')}
            axios.get(`https://api.unsplash.com/photos/random?client_id=wKzXFQtKQAmOI5_Ted1Wq1dsLDBuj6ps6pPmR1FzYBA&query=${response.data.location.name}+${day}+city&image_type=photo&limit=1&category=travel&colors=${day}`)
            .then(response => {
                setBg(response.data.urls.regular)
                ;setLoading(false)
            })
            .catch(err =>{setError(err.message);console.log(err);setLoading(false)})
        })
        .catch(err => {setError(err.message);console.log(err);setLoading(false)});
    }

  return (
    <>
    <Collapse in={error? true : false} sx={{display:error? 'flex':'none'}}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="error"
              size="small"
              onClick={() => {
                setError('');
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
          sx={{position: " absolute ", zIndex: 10,backgroundColor: "rgba(255, 255, 255, 0.427)"}}
        >
          {error?error:''}
        </Alert>
      </Collapse>
    <DivBackground>
    
        <Image src={bg? bg:'/img/city2.jpg'} />
        <DivShow style={{backgroundImage: `url(${bg})`}}>
            <DivLeft>
                <DivData>
                    <H>{api? `${Math.floor(api.current.feelslike_c)}°`:''}</H>
                    <div>
                    <H1>{api? api.location.name:''}</H1>
                    <h3>{api? `${new Date().toLocaleString()}`:''}</h3>
                    </div>
                    <Icon src={api?api.current.condition.icon:''} style={{display:api?'':'none'}}></Icon>
                </DivData>
            </DivLeft>
            <DivRight>
                <SearchDiv>
       
                    <TextField
                        color='error'
                        label='Location'
                        type="search"
                        value={nameCity}
                        onChange={e=>{setNameCity(e.target.value);}}
                        sx={{color: 'red',
                        '& .css-2h2wxa-MuiFormLabel-root-MuiInputLabel-root  ': {
                            color: '#fff',
                          },
                          '& .css-q2yjqg-MuiInputBase-root-MuiInput-root:before ': {
                            borderBottom: '1px solid #fff',
                          },
                          '& .css-c63i49-MuiInputBase-input-MuiInput-input' : {
                            color: '#fff',
                          },
                          width: '60%',
                        }}
                        variant="standard"
                    >
                    </TextField>
                    <IconButton  color='error' sx={{mt:3}} onClick={()=>{findCity()}}>
                        <LocationSearchingIcon/>
                    </IconButton>
                </SearchDiv>
                    <Divider  sx={{ borderColor: '#fffdfd5d' , mt:2,width:'80%'}}/>
                <SearchDiv>
                    <P>{api? 'Weather' : ''}</P>
                    <p>{api ? `${api.current.condition.text}` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'Cloud' : ''}</P>
                    <p>{api ? `${api.current.cloud}%` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'Humidity' : ''}</P>
                    <p>{api ? `${api.current.humidity}%` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'Wind' : ''}</P>
                    <p>{api ? `${api.current.wind_kph}km/h` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'wind direction' : ''}</P>
                    <p>{api ? `${api.current.wind_dir}` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'Feeling' : ''}</P>
                    <p>{api ? `${Math.floor (api.current.feelslike_c)}°` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? 'Real temp' : ''}</P>
                    <p>{api ? `${Math.floor (api.current.temp_c)}°` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? ' UV ' : ''}</P>
                    <p>{api ? `${api.current.uv}` :''}</p>
                </SearchDiv>
                <SearchDiv>
                    <P>{api? ' Pressure ' : ''}</P>
                    <p>{api ? `${api.current.pressure_in}pa` :''}</p>
                </SearchDiv>
            </DivRight>
        </DivShow>
    </DivBackground>
    </>
  )
}
