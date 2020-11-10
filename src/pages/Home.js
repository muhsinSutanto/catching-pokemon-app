import React from 'react';
import Layout from '../template/Layout'
import {useSelector, useDispatch} from 'react-redux'
import { Button } from 'antd';


const Home = () => {

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const handleAdd = () => {
        dispatch({
            type: 'INCREMENT'
        })
    }

    return (<Layout>
        <h1>hai</h1>
        {counter}
        <Button onClick={handleAdd}>add</Button>
    </Layout>);
}

export default Home;