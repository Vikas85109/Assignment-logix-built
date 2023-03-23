import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'

const Data = () => {

    const [fetchData, setFetchData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [currentPage, setCurrentPage] = useState(1);

    const [postsPerPage, setPostsPerPage] = useState(5);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = fetchData.slice(firstPostIndex, lastPostIndex);

    const getdataFromApi = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
            console.log(response.data)
            setFetchData(response.data)
        })

    }
    useEffect(() => {
        getdataFromApi()
    }, [])

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }



    return (
        <div className='mt-4 text-center'>
            <div className='input_Part mb-4'>
                <input className='rounded p-2' type="text" name="" id="" onChange={handleChange} placeholder="search name and email" />

            </div>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentPosts?.filter((curVal) => {
                            if (searchTerm == '') {
                                return curVal
                            } else if (curVal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                curVal.email.toLowerCase().includes(searchTerm.toLowerCase())

                            ) {
                                return curVal
                            }
                        })
                            .map((curVal, i) => {
                                return <tr>
                                    <th scope="row">{i + 1}</th>
                                    <td>{curVal.name}</td>
                                    <td>{curVal.username}</td>
                                    <td>{curVal.email}</td>
                                </tr>
                            })
                    }


                </tbody>
            </table>

            <Pagination
                totalPosts={fetchData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </div>
    )
}

export default Data