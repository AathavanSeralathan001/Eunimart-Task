import React, { useEffect, useState } from 'react'
import Navbar from '../Main/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup';


const Profile = () => {
 
const[details, setDetails] = useState([])    
const id = useParams().id
const getDetails=()=>{
    axios.get(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
        setDetails(res.data.data)
    }).catch((err)=>{
        console.log(err)
    })

}

    useEffect(()=>{
        getDetails()
    })
  return (
    <div>
      <Navbar/>
      
        <CardGroup>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" className='card-img' src={details.avatar} />
            <Card.Body>
                <Card.Title><h2>{details.first_name} {details.last_name}</h2></Card.Title>
                <Card.Text>
                    <h4>
                        Contact : <a style={{color:'#3BB19B'}} href={`mailto:${details.email}`}>{details.email}</a> 
                    </h4>
                </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
      
      
    </div>
  )
}

export default Profile
