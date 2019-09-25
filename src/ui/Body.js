import React, { useEffect, useState, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import api from '../service/api';
// import openSocket from 'socket.io-client';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import CardActionArea from '@material-ui/core/CardActionArea';

// const socket = openSocket('http://localhost:1234');

const useStyle = makeStyles(theme => ({
    button : {
        margin : theme.spacing(6)
    },
    textfield : {
        margin : theme.spacing(6)
    },
    images : {
        width : '10%',
        height : '10%'
    }
}));

export default function Body () {

    const classes = useStyle();
    
    const [name, setname] = useState('in');
    const [country, setcountry] = useState([]);
    
    const handleClick = (e) => {
        e.preventDefault();
        api.get(name).then(res => {
            console.log('done',res);
        })
        // socket.emit('test',e.target.country.value);
        console.log(e.target.country.value);
    }
    
    const handleChange = (e) => {
        setname(e.target.value);
    }

    const createUser = () => {
        var data = {
            name : 'h',
            email : 'ads',
            password : '3123'
        }
    }

    // socket.on('received', (data) => {
    //     setname(data);
    // });

    // Whenever the name hook changes this block is executed, you can add additional 
    useEffect(() => {
        if(name !== '') {

        }
    },[name]);
    
    return (
        <Fragment>
            <form onSubmit={handleClick}>
                <TextField name="country" id="country" onChange={handleChange} placeholder='Enter the Placename' margin='normal' className={classes.textfield}/>
                <Button type='submit' variant='contained' color='primary' className={classes.button}> Search </Button>
            </form>
            {/* <Countrydetails data={country} name={name} style={classes.images}/> */}
            <Button onClick={createUser} variant='contained' color='primary' > Create User</Button>
        </Fragment>
    );
}

function Countrydetails(props) {
    console.log(props);
    return (
        <Fragment>
            {props.data.map((names, i) =>  <li key={i}> {names.name} </li> )}
            {/* <img src={props.data.flag} className={props.style} alt={props.name}/> */}
        </Fragment>
    );
}

// function Products () {
//     return (
//         <Card>
//             <CardActionArea>
//                 <CardContent></CardContent>
//             </CardActionArea>
//             <CardActions>
//                 <Button></Button>
//                 <Button></Button>
//             </CardActions>
//         </Card>
//     );
// }