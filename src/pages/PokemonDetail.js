import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToCage, fetPokemonDetail } from "../store/actions/pokemonAction";
import { useRouteMatch, useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Typography,
  Image,
  Button,
  Modal,
  Input,
  Avatar,
} from "antd";
import Layout from "../template/Layout";
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
  const [emptPoke, setEmptPoke] = useState("")

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
    setEmptPoke('')
    if(!!newPoke.length){
        let data = {
            newName: newPoke,
            image: pokemonDetail.image,
            name: match.params.id,
          };
      
          await dispatch(setToCage(data));
          await history.push("/my-pokemon");
    }else{
        setEmptPoke('Rename before you see the cage')
    }
   
  };

  return (
    <Layout>
      <Row>
        <Title className="pd-20" level={2}>
          Pokemon Detail
        </Title>
      </Row>
      <Row justify="center">
        <Col lg={4} xs={24}>
          <Row style={{ flexFlow: "column" }} justify="center" align="middle">
            <Avatar
              style={{ backgroundColor: "#fde3cf" }}
              size={200}
              src={pokemonDetail.image}
            />
            <Button
              style={{ marginTop: "16px" }}
              type="primary"
              onClick={handleCatch}
            >
              CATCH NOW
            </Button>
          </Row>
        </Col>
        <Col className="pd-20" lg={8}>
          <Title level={3}>Info</Title>
          <Row>
            <Text>Name: {match.params.id} </Text>
          </Row>
          <Row>
            <Text>
              Types:{" "}
              {pokemonDetail.types.map((type) => (
                <span>{type.type.name} </span>
              ))}{" "}
            </Text>
          </Row>
          <Title style={{ marginTop: "24px" }} level={3}>
            Moves
          </Title>
          {pokemonDetail.moves.map((move) => (
            <Text>{move.move.name} </Text>
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
                <Image className="mlr-10" src={pokeBallEmp} />
                <Text className="mlr-10">Try Again</Text>
                <Button className="mlr-10" onClick={handleCancel} type="danger">
                  Close
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Image src={pokeBall} />
                {!!emptPoke.length ? <Text style={{color:'red'}}>{emptPoke}</Text>: <Text className="mg-10">Awesome.., rename your Pokemon</Text>}
                <Input
                  className="mg-10"
                  value={newPoke}
                  onChange={(e) => setNewPoke(e.target.value)}
                />
                
                <Button
                  className="mg-10"
                  onClick={handleSetToCage}
                  type="primary"
                >
                  See the cage
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
