import React, { useState } from 'react';

import { Modal, Button, Form, Input } from '@gio-design/components';

const { Item, useForm } = Form;

export default () => {
  const [visible, setVisible] = useState(false);
  const [form] = useForm();

  return (
    <div>
      <Button onClick={() => setVisible(true)}>click me</Button>

      <Modal
        visible={visible}
        title="新建账号"
        onOk={() => {
          console.log(form.getFieldsValue());
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        afterClose={() => {
          form.resetFields();
        }}
      >
        <Form name="modal" form={form} layout="horizontal">
          <Item label="用户名" name="username">
            <Input />
          </Item>
          <Item label="密码" name="password">
            <Input type="password" />
          </Item>
        </Form>
      </Modal>
    </div>
  );
};
