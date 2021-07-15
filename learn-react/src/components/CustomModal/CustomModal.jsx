import React, { useState } from "react";
import { Modal, Button, Row, Input } from "antd";
// import Counter from "../Counter/Counter";

export default function CustomModal() {
  const [value, setValue] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = (value) => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCounter = () => {
    setValue(value + 1);
  };

  const handleReset = () => {
    setValue(0);
  };

  return (
    <div>
      <Row justify="center">Value:</Row>
      <br />
      <Row justify="center">
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
      </Row>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input disabled value={value} size="middle" /> <br /> <br />
        <Button type="primary" onClick={handleCounter} danger>
          Count
        </Button>
        <span> </span>
        <Button type="primary" onClick={handleReset} danger>
          Reset
        </Button>
      </Modal>
    </div>
  );
}
