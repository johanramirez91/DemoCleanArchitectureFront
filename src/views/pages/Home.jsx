import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container text-center'>
        <div className="row">
            <div className="col-md-3">
                <br />
                <h1 className="cover-heading">Home ToDos</h1>
                <Link to={'/dashboard'} className="btn btn-dark mt-5">Ingresar</Link>
            </div>
        </div>
        </div>
  )
}

export default Home
