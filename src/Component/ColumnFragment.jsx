import React from 'react'

const ColumnFragment = () => {
    const items =[
        {title:"vishal",id:2},
        {title:"Raju",id:5}
    ]
  return (
      <React.Fragment >
        {items.map((m)=>(
            <React.Fragment key={items.id}>
                <h1>{m.id}</h1>
                <p>{m.title}</p>
            </React.Fragment>
        ))}
        <td>Name</td>
        <td>Vishal</td>
      </React.Fragment>
  )
}
export default ColumnFragment
