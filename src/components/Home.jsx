import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function Home({ isServerInfo }) {
  const { Moralis } = useMoralis();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            📝 <Text strong>BigFish To-Do List</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
        <Timeline.Item dot="🚀">
            <Text delete={isServerInfo} style={styles.text}>Alpha version is Ready!</Text>
          </Timeline.Item>
          <Timeline.Item dot="🚀">
              <Text style={styles.text}>This is alpha build of the project.
            </Text>
            <Text style={styles.text}>
            </Text>
            <Text code style={{ display: "block" }}>
              Contract deployment = https://remix.ethereum.org/ - for testing purpose.
            </Text>
            <Text code style={{ display: "block" }}>
              Marketplace functionality = Basic functionality is ready, need to complete and run tests.
            </Text>
          </Timeline.Item>
          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Testing Ready!</Text>
          </Timeline.Item>
          <Timeline.Item dot="🚀">
            <Text style={styles.text}>Production Ready!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
    </div>
  );
}
