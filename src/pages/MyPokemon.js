import React, { useEffect } from "react";
import Layout from "../template/Layout";
import { useSelector, useDispatch } from "react-redux";
import { fetchMyPokemon, removePokemon } from "../store/actions/pokemonAction";
import {
  Button,
  Card,
  Col,
  Row,
  Skeleton,
  Typography,
  Image,
  List,
  Avatar,
} from "antd";

const MyPokemon = () => {
  const { Text, Title } = Typography;

  const dispatch = useDispatch();
  const myPokemons = useSelector((state) => state.myPokemons);

  useEffect(() => {
    dispatch(fetchMyPokemon());
  }, []);

  const handleRelease = (param) => {
    // console.log(key)
    dispatch(removePokemon(param))
    
  }

  const render = () => {
    if (myPokemons == null) {
      return <Skeleton paragraph={{ rows: 10 }} />;
    }
    if (!myPokemons.length) {
      return <Title>You haven't caught any pokemon</Title>;
    } else {
      return myPokemons.map((pokemon, key) => (
        <Card key={key}>
          <Row align="middle">
            <Col xs={{ span: 5 }} lg={{ span: 1 }}>
              <Avatar
                style={{ backgroundColor: "#fde3cf" }}
                size={50}
                src={pokemon.image}
              />
            </Col>
            <Col xs={{ span: 5 }} lg={{ span: 1 }}>
              <Text>{pokemon.newName}</Text>
            </Col>
            <Col>
              <Button onClick={()=>handleRelease(key)}>Release</Button>
            </Col>
          </Row>
        </Card>
      ));
    }
  };

  console.log(myPokemons);
  return <Layout>{render()}</Layout>;
};

export default MyPokemon;
