import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup';
import './Display.css'
import { Link } from 'react-router-dom';

const Index = () => {

  const [data, setData]=useState([])

  const getData = ()=>{
    axios.get('https://reqres.in/api/users').then((res)=>{
      console.log(res.data.data)
      setData(res.data.data)
    }).catch((err)=>{
      console.log(err)
    })  
  }

  useEffect(
    ()=>{
      getData()
    },[]
  )
  

  return (
    <div>

    <CardGroup>
      {
        data.map((item,index)=>{
        return(
          <>
          <Link to={`/profile/${item.id}`}>
          <Card key={item.id} className="full-card">
            <Card.Img variant="top" src={item.avatar} />
            <Card.Body>
              <Card.Title>
              <h2>{item.first_name}</h2>
              </Card.Title>
            </Card.Body>
          </Card>
          </Link>
          </>
        )

      })
      }
     
      </CardGroup>
    </div>
  )
}

export default Index
