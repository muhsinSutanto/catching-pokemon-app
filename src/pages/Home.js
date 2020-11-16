import React, { useEffect } from 'react';
import Layout from '../template/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Col, Row, Skeleton, Typography, Image, List, Avatar } from 'antd'
import { fetchPokemonList } from '../store/actions/pokemonAction';
import { imageUrl } from '../helpers/utils'
import { Link } from 'react-router-dom';


const Home = () => {

    const { Text, Title } = Typography;

    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.pokemonList)
    const pokemonDetail = useSelector(state => state.pokemonDetail)

    useEffect(() => {
        dispatch(fetchPokemonList())
    }, [])

    console.log(pokemonDetail)

    return (<Layout>
        <Row>
            <Col>
                <Title level={2}>Showing</Title>
            </Col>
        </Row>
        {!pokemonList.data.length ? <Skeleton paragraph={{ rows: 10 }} /> :
            <Col span={24}>
                {pokemonList.data.map((pokemon, key) => {
                    return (
                        <Link to={`/pokemon/${pokemon.name}`}>
                        <Card key={key} hoverable='true'>
                            <Row align='middle'>
                                <Col xs={{ span: 5 }} lg={{ span: 1}}>
                                    <Avatar style={{backgroundColor: '#fde3cf' }}  size={50} src={imageUrl(pokemon)} />
                                </Col>
                                <Col>
                                    <Text>{pokemon.name}</Text>
                                </Col>
                            </Row>
                        </Card>
                        </Link>
                    )
                }
                )}
            </Col>
        }
    </Layout>);
}

export default Home;