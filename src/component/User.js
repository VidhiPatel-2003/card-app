import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams();
  return (
    <div>
       hello i am user {params.username}
    </div>
  )
}

export default User
