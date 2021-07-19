import React from 'react';
import { useEffect, useState } from "react"
import qs from 'qs'
import { Search } from "./search"
import { Table } from "./table"
import {cleanObjProWithoutVal} from '../../utils/type'
import { useDebounce, useMount } from '../../utils/hook';
const BASE_URL = process.env.REACT_APP_DEV_URL
export const ProjectIndex = () => {
    const [param,setParam] = useState({name:'',personId:''})
    const [user,setUser] =useState([])
    const [list,setList] =useState([])
    // 将param 转为 debounceParam
    const debounceParam = useDebounce(param,1000)
    useEffect(() => {
        fetch(`${BASE_URL}/projects?${qs.stringify( cleanObjProWithoutVal(debounceParam))}`).then(async res => {
            if (res.ok) {
                setList( await res.json())
            }
        })
    },[debounceParam])
    useMount(() => {
        fetch(`${BASE_URL}/users`).then(async res => {
            if (res.ok) {
                setUser( await res.json())
            }
        })
    })
    return (
        <div>
            <Search user={user} param={param} setParam={setParam}/>,
            <Table list={list} user={user}/>,
        </div>
    )
}