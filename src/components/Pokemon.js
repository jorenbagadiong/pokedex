import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function Pokemon() {
  const params = useParams();
  const [data, setData] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;
  console.log(url);
  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     setData(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    async function getStoredData() {
      const res = await axios.get(url);
      setData(res.data);
    }
    getStoredData();
  }, [setData]);
  console.log("pokemon: ", data);
  console.log("types: ", data?.types);
  console.log("abilities: ", data?.abilities);
  return (
    <Container fluid>
      <Row>
        <Col>
          <img src={data?.sprites?.front_default} />
        </Col>
        <Col>
          <div>
            <p>Name:&nbsp; {data?.name}</p>
            <div>
              <p>Types</p>
              {data?.types?.map((item, index) => (
                <p key={index}>{item?.type?.name}</p>
              ))}
            </div>
            <br />
            <div>
              <p>Ability</p>
              {data?.abilities?.map((item, index) => (
                <p key={index}>{item?.ability?.name}</p>
              ))}
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <p>Stats</p>
            {data?.stats?.map((item, index) => (
              <p key={index}>
                {item?.base_stat}&nbsp; {item?.stat?.name}
              </p>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
