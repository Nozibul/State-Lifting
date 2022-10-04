import { useState } from "react"

// table component
const Table = ({contacts}) =>{
    
 const [filter, setFilter] = useState('all');
//  console.log(filter); // all none home office
const [searchTerm, setSearchTerm] = useState('')
console.log(searchTerm)
// const searchCb =(contact)=>contact.name.includes(searchTerm) || contact.email.includes(searchTerm)


 const handlerChange = (e) =>{
    // console.log('filter',e.target.value) ;// home office all none
    setFilter(e.target.value) ;
 }

 let filteredContact = [] ;
 if(filter === 'all'){
    filteredContact = searchTerm ? contacts.filter((contact)=>contact.name.includes(searchTerm) || contact.email.includes(searchTerm)) : contacts ;
 }else{
    filteredContact = contacts.filter((contact)=> contact.group === filter && (contact.name.includes(searchTerm) || contact.email.includes(searchTerm)))
 };

 

    return (
        <>
         <div>
           <br />
           Filters:
           <select value={filter} onChange={handlerChange} >
              <option value="">None</option>
              <option value="all">All</option>
              <option value='home' >Home</option >
              <option value='office'>Office</option >
           </select>
           <input onChange={(e)=>setSearchTerm(e.target.value)} type="search" placeholder="search" />
         </div>
         <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>email</th>
                    <th>group</th>
                </tr>
            </thead>
            <tbody>
                {
                  filteredContact.map((contact, index)=>(
                    <tr key={index}>
                         <td>{contact.name}</td>
                         <td>{contact.email}</td>
                         <td>{contact.group}</td>
                    </tr>
                  ))
                }
            </tbody>
         </table>
        </>
    )
}

export default Table