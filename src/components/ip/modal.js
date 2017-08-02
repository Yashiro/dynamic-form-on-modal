/**
 * Created by kyle on 17-8-2.
 */
import React, {PropTypes} from "react";
import {Form, Input, Modal, Select, Button, Spin} from "antd";
import IP from './ip'
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}
const modal = ({
  currentRelationships,
  permitRelationships,
  entity = {},
  groups = [],
  entities = [],
  visible,
  type,
  values = {},
  onOk,
  onCancel,
  onSubjectChanged,
  onPreview,
  form,
  update,
  userGroups = [],
  processTypes,
  currentProcessType,
  formulaVisible,
  controlStrategy,
  rowControlStrategyTab,
  colHasValue,
}) => {
  const {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  } =form;


  const modalOpts = {
    title: `${type === 'create' ? '新建' : '修改'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
    width: 800,

  }

  function handleOk() {

  }


  return (

    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem {...formItemLayout}
          label={'服务器'}
        >
          {getFieldDecorator('service', {
            initialValue:  undefined,
            rules: [
              {
                required: true,
                message: '不能为空',
              },
            ],
          })(<Input/>)}
        </FormItem>
        <IP/>
      </Form>
    </Modal>

  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Form.create()(modal)
/*
 <Button key="preview" type="primary" size="large" onClick={onCancel}>预览</Button>,

 */
