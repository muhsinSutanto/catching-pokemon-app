import React, { useEffect } from 'react';
import Layout from '../template/Layout'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card, Col, Row, Skeleton, Typography, Image, List, Avatar } from 'antd'
import { fetchPokemonList } from '../store/actions/pokemonAction';
import { imageUrl } from '../helpers/utils'


const Home = () => {

    const { Text, Title } = Typography;

    const dispatch = useDispatch()
    const pokemonList = useSelector(state => state.pokemonList)

    useEffect(() => {
        dispatch(fetchPokemonList())
    }, [])

    console.log(pokemonList)

    return (<Layout>
        {!pokemonList.data.length ? <Skeleton paragraph={{ rows: 10 }} /> :
            <Col span={24}>
                {pokemonList.data.map((pokemon, key) => {
                    return (
                        <Card>
                            <Row>
                                <Text> {key + 1}. {pokemon.name}</Text>
                                <Card>
                                    <Image width={50} src={imageUrl(pokemon)} />
                                    <Button type="primary">{pokemon.name}</Button>
                                </Card>
                            </Row>
                        </Card>
                    )
                }
                )}
            </Col>

        }
    </Layout>);
}

export default Home;