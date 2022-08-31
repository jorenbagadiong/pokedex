import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
  Stack,
} from "react-bootstrap";

import classes from "./Pokemon.module.css";

export default function Pokemon() {
  const params = useParams();
  const [data, setData] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;

  useEffect(() => {
    async function getStoredData() {
      const res = await axios.get(url);
      setData(res.data);
    }
    getStoredData();
  }, [url, setData]);

  console.log("pokemon: ", data);
  // console.log("types: ", data?.types);
  // console.log("abilities: ", data?.abilities);

  return (
    <Container fluid className={classes.container}>
      <Row>
        <Col lg={1}></Col>
        <Col lg={10}>
          <Row className={classes.rows}>
            <Col className={classes.cols}>
              <Container fluid className={classes.image}>
                <Image
                  src={data?.sprites?.other?.dream_world?.front_default}
                  width={400}
                  height={400}
                />
              </Container>
            </Col>
            <Col className={classes.cols}>
              <Container fluid className={classes.details}>
                <Container fluid>
                  <h1>
                    Name: &nbsp; <span>{data?.name}</span>
                  </h1>
                </Container>
                <Container fluid>
                  <h3>Types</h3>
                  <h3 className={classes.indent}>
                    {data?.types?.map((item, index) => (
                      <span key={index}>{item?.type?.name}, &nbsp;</span>
                    ))}
                  </h3>
                </Container>
                <Container fluid>
                  <h3>Ability</h3>
                  <h3 className={classes.indent}>
                    {data?.abilities?.map((item, index) => (
                      <span key={index}>{item?.ability?.name}, &nbsp;</span>
                    ))}
                  </h3>
                </Container>
              </Container>
            </Col>
          </Row>
          <Row className={classes.rows}>
            <Col className={classes.cols}>
              <Container fluid>
                <Row>
                  <Col lg={1}></Col>
                  <Col lg={10}>
                    <Container fluid className={classes.stats}>
                      <Stack gap={3}>
                        <h3>Stats</h3>
                        {data?.stats?.map((item, index) => (
                          <>
                            <h4 key={index}>
                              {item?.base_stat}&nbsp;{" "}
                              {item?.stat?.name?.toUpperCase()}
                            </h4>
                            <ProgressBar
                              now={item?.base_stat}
                              label={item?.base_stat}
                            />
                          </>
                        ))}
                      </Stack>
                    </Container>
                  </Col>
                  <Col lg={1}></Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
}
