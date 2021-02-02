import React from 'react';
import styled from 'styled-components';
import { Button } from './button';
import { Modal } from './modal';

const Container = styled.div`
  width: 240px;
  border-radius: 10px;
  padding: 24px 36px;
  background: white;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`

export class FormModal extends React.Component {
  render() {
    const { cancel,  confirm } = this.props;
    return (
      <Modal>
        <Container>
          <div>本当に作成しますか</div>
          <ButtonWrapper>
            <Button onClick={cancel}>Cancel</Button>
            <Button onClick={confirm}>OK</Button>
          </ButtonWrapper>
        </Container>
      </Modal>
    )
  }
}
