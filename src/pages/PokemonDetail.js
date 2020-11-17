import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setToCage,
  fetPokemonDetail,
} from "../store/actions/pokemonAction";
import { useParams, Route, useRouteMatch, useHistory } from "react-router-dom";
import Layout from "../template/Layout";
import { Row, Col, Typography, Image, Button, List, Modal, Input } from "antd";
import catchGif from "../assets/images/pokemon-gif.gif";
import pokeBall from "../assets/images/pokemon-ball.png";
import pokeBallEmp from "../assets/images/pokemon-ball-emphty.png";

const PokemonDetail = (props) => {
  const { Text, Title } = Typography;
  let history = useHistory();

  const [modalVideo, setModalVideo] = useState(false);
  const [modalName, setModalName] = useState(false);
  const [huntStatus, setHuntStatus] = useState("");
  const [newPoke, setNewPoke] = useState("");

  const dispatch = useDispatch();
  const pokemonDetail = useSelector((state) => state.pokemonDetail);
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(fetPokemonDetail(match.params.id));
  }, []);

  const handleCatch = () => {
    setModalVideo(true);
    setTimeout(() => {
      const result = Math.random() < 0.5;
      console.log(result);
      if (result === false) {
        setModalVideo(false);
        setHuntStatus("failed");
      } else {
        setModalVideo(false);
        setHuntStatus("succeed");
      }
      setTimeout(() => {
        setModalName(true);
      }, 30);
    }, 2000);
  };

  const handleCancel = (param) => {
    setModalName(false);
    setHuntStatus("");
  };

  const handleSetToCage = async () => {
    let data = {
      newName: newPoke,
      image: pokemonDetail.image,
      name: match.params.id,
    };

    await dispatch(setToCage(data))
    await history.push('/my-pokemon')
  };

  // console.log(pokemonDetail)

  return (
    <Layout>
      <Row>
        <Col>
          <Title>{match.params.id}</Title>
          <Image src={pokemonDetail.image} />
          <Button onClick={handleCatch}>CATCH NOW</Button>
        </Col>
        <Col>
          <Title level={3}>INFO</Title>
          <List>Name: {match.params.id}</List>
          <List>type:</List>
          {pokemonDetail.types.map((type) => (
            <Text>{type.type.name} </Text>
          ))}
          <Title level={3}>Moves</Title>
          {pokemonDetail.moves.map((move) => (
            <List>{move.move.name}</List>
          ))}
        </Col>
        {!!modalVideo && (
          <Modal
            closable={false}
            onCancel="false"
            footer={false}
            visible={modalVideo}
          >
            <Image src={catchGif} />
          </Modal>
        )}
        {!!modalName && (
          <Modal closable={false} footer={false} visible={modalName}>
            {huntStatus === "failed" ? (
              <React.Fragment>
                <Image src={pokeBallEmp} />
                <Text>Coba lagi</Text>
                <Button onClick={handleCancel} type="danger">
                  close
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Image src={pokeBall} />
                <Text>Berhasil, beri nama pokemonmu</Text>
                <Input
                  value={newPoke}
                  onChange={(e) => setNewPoke(e.target.value)}
                />
                <Button onClick={handleSetToCage} type="primary">
                  masukan ke kandang
                </Button>
              </React.Fragment>
            )}
          </Modal>
        )}
      </Row>
    </Layout>
  );
};

export default PokemonDetail;
