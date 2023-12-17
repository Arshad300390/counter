// Core
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Divider, Statistic, Row, Col } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

// Actions
import {
  incrementFirst,
  incrementSecond,
  incrementThird,
} from "../store/counterSlice";

// Selectors
import {
  selectFirstScore,
  selectSecondScore,
  selectThirdScore,
} from "./selector";

// Custom styles
import styles from "./style.css";

export const Counter = () => {
  const dispatch = useDispatch();

  const firstScore = useSelector(selectFirstScore);
  const secondScore = useSelector(selectSecondScore);
  const thirdScore = useSelector(selectThirdScore);

  return (
    <Row gutter={12} justify="space-around">
      <h1 className={styles.title}>Counters: </h1>
      <Divider />
      <Col className={styles.column} span={4}>
        <Statistic title="First counter:" value={firstScore} />
        <PlusCircleTwoTone
          className={styles.button}
          onClick={() => dispatch(incrementFirst())}
        />
      </Col>
      <Col className={styles.column} span={4}>
        <Statistic title="Second counter:" value={secondScore} />
        <PlusCircleTwoTone
          className={styles.button}
          onClick={() => dispatch(incrementSecond())}
        />
      </Col>
      <Col className={styles.column} span={4}>
        <Statistic title="Third counter:" value={thirdScore} />
        <PlusCircleTwoTone
          className={styles.button}
          onClick={() => dispatch(incrementThird())}
        />
      </Col>
    </Row>
  );
};