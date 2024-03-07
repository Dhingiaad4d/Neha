import React from 'react'
import { useState} from 'react'
import { getdata } from '../api/dataApi'
import { deletedata } from '../api/dataApi'
import { createData } from '../api/dataApi'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PaginationPage from '../pages/PaginationPage'
import { Formik,useFormik  } from 'formik'


 const initialValues = {
        name: '',
        email: '',
        phone: '',
        city: '',
    }

const CrudPage = () => {


    const [data, setdata] = useState([])

    const [itemsPerPage, setItemsPerPage] = useState(10)


    const [currentPage, setcurrentPage] = useState(0);
    const offset = currentPage * itemsPerPage;

    const paginatedata = data.slice(offset, offset + itemsPerPage)


    const handlePageChange = ({ selected }) => {
        setcurrentPage(selected);
    };



    const { handleChange, handleSubmit, handleBlur, values } = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {

            console.log("form ka data", values)
            //creating data 
            try {
                await createData(values)
                alert("Data has been Created")
                const updateddata = await getdata();
                console.log(updateddata, "updated data//////////")
                setdata(updateddata)
            }
            catch (error) { }
        }
    })



    useEffect(() => {
        const fecthdata = async () => {
            try {
                debugger
                const result = await getdata();
                console.log(result,"get api data ")
                setdata(result)
            }
            catch (error) {
                console.log(error)
            }
        }
        fecthdata();
        return () => {

        };

    }, [])

    const deleteData = async (id) => {
        const confirm = window.confirm();
        if (confirm) {
            const response = await deletedata(id);
            console.log(response, "////response")
            alert("data has been deleted")
            const updatedapiData = await getdata();
            setdata(updatedapiData)
        }

    }
        return (
            <div>
                <div>
                    <div className='form-div p-5'>
                        <form onSubmit={handleSubmit} className='form' >
                            <div className='input-box' style={{ marginBottom: "5px" }} >
                                {/* <label className='text-left' htmlFor="username">Name</label> */}
                                <input type="text" name='name' id='username' className='form-control' placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className='input-box' style={{ marginBottom: "10px" }}>
                                <input type="email" name='email' className='form-control' placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className='input-box' style={{ marginBottom: "10px" }}>
                                <input type="number" name='phone' className='form-control' placeholder='Phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div className='input-box' style={{ marginBottom: "10px" }}>
                                <input type="city" name='city' className='form-control' placeholder='City' value={values.city} onChange={handleChange} onBlur={handleBlur} />
                            </div>
                            <div  >
                                <button  className='btn btn-primary'  type='submit' >Submit</button>
                            </div>
                        </form>
                    </div>


                    <h1 className='text-left mt-20'>User Data</h1>
                    <div className='table-div'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Phone</td>
                                    <td>City</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedata?.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.city}</td>
                                        <td><span><Link to={`/edit/${item.id}`} ><button className='btn' type='button'>Edit</button></Link><button type='button' className='btn' onClick={() => { deleteData(item.id) }}>Delete</button></span></td>
                                    </tr>
                                )
                                )}
                            </tbody>
                        </table>
                    </div>


                    <PaginationPage
                        pageCount={Math.ceil(data.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                    />
                    <input type="file" className='form-control mt-20' />
                </div>

            </div>
        )
    }
    export default CrudPage
    // export default CrudPage
    // import { useFormik } from 'formik'
    // import React, { useEffect, useState } from 'react'
    // import { createData, getdata, deletedata } from '../Services/Api_file'
    // import { Link } from 'react-router-dom'
    // import Pagination from './Pagination'



    // const initialValues = {
    //     name: '',
    //     email: '',
    //     phone: '',
    //     city: '',
    // }

    // const Crud = () => {

    //     const [data, setdata] = useState([])

    //     const [itemsPerPage, setItemsPerPage] = useState(15)


    //     const [currentPage, setcurrentPage] = useState(0);
    //     const offset = currentPage * itemsPerPage;

    //     const paginatedata = data.slice(offset, offset + itemsPerPage)


    //     const handlePageChange = ({ selected }) => {
    //         setcurrentPage(selected);
    //     };



    //     const { handleChange, handleSubmit, handleBlur, values } = useFormik({
    //         initialValues: initialValues,
    //         onSubmit: async (values) => {

    //             console.log("form ka data", values)
    //             //creating data 
    //             try {
    //                 debugger
    //                 await createData(values)
    //                 alert("Data has been Created")
    //                 const updateddata = await getdata();
    //                 console.log(updateddata, "updated data//////////")
    //                 setdata(updateddata)
    //             }
    //             catch (error) { }
    //         }
    //     })



    //     useEffect(() => {
    //         const fecthdata = async () => {
    //             try {

    //                 const result = await getdata();
    //                 console.log(result)
    //                 setdata(result)

    //             }
    //             catch (error) {
    //                 console.log(error)
    //             }
    //         }
    //         fecthdata();
    //         return () => {

    //         };

    //     }, [])

    //     const deleteData = async (id) => {
    //         const confirm = window.confirm();
    //         if (confirm) {
    //             const response = await deletedata(id);
    //             console.log(response, "////response")
    //             alert("data has been deleted")
    //             const updatedapiData = await getdata();
    //             setdata(updatedapiData)
    //         }

    //     }

    //     return (
    //         <div>
    //             <div className='form-div'>
    //                 <form onSubmit={handleSubmit} className='form' >
    //                     <div className='input-box' style={{ marginBottom: "5px" }} >
    //                         {/* <label className='text-left' htmlFor="username">Name</label> */}
    //                         <input type="text" name='name' id='username' className='form-control' placeholder='Name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
    //                     </div>
    //                     <div className='input-box' style={{ marginBottom: "10px" }}>
    //                         <input type="email" name='email' className='form-control' placeholder='Email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
    //                     </div>
    //                     <div className='input-box' style={{ marginBottom: "10px" }}>
    //                         <input type="number" name='phone' className='form-control' placeholder='Phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} />
    //                     </div>
    //                     <div className='input-box' style={{ marginBottom: "10px" }}>
    //                         <input type="city" name='city' className='form-control' placeholder='City' value={values.city} onChange={handleChange} onBlur={handleBlur} />
    //                     </div>
    //                     <div className='btn btn-primary' style={{ marginBottom: "10px" }}>
    //                         <button type='submit' >Submit</button>
    //                     </div>
    //                 </form>
    //             </div>


    //             <h1 className='text-left mt-20'>User Data</h1>
    //             <div className='table-div'>
    //                 <table className='table'>
    //                     <thead>
    //                         <tr>
    //                             <td>Name</td>
    //                             <td>Email</td>
    //                             <td>Phone</td>
    //                             <td>City</td>
    //                             <td>Action</td>
    //                         </tr>
    //                     </thead>
    //                     <tbody>
    //                         {paginatedata?.map((item, index) => (
    //                             <tr key={item.id}>
    //                                 <td>{item.name}</td>
    //                                 <td>{item.email}</td>
    //                                 <td>{item.phone}</td>
    //                                 <td>{item.city}</td>
    //                                 <td><Link to={`/edit/${item.id}`} ><button type='button'>Edit</button></Link><button onClick={() => { deleteData(item.id) }}>Delete</button></td>
    //                             </tr>
    //                         )
    //                         )}
    //                     </tbody>
    //                 </table>
    //             </div>


    //             <Pagination
    //                 pageCount={Math.ceil(data.length / itemsPerPage)}
    //                 onPageChange={handlePageChange}
    //             />


    //             <input type="file" className='form-control mt-20' />
    //         </div>
    //     )
    // }

    // export default Crud;
