import React, { useState } from 'react';
import { Modal, Layout, Button, Text, Icon } from '@ui-kitten/components';
import styled from 'styled-components';

const ModalStyled = styled(Modal)`
    width: 100%;
    height: 100%;
`;

const Container = styled(Layout)`

`;

const ButtonOpenModal = styled(Button)`
    margin: 0 0 12px 0;
`;

const PlusIcon = (props) => (
    <Icon {...props} name='plus'/>
);

const ItemModal = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <ButtonOpenModal
                appearance='outline'
                status='info'
                accessoryLeft={PlusIcon}
                onPress={() => setVisible(true)}
            />
            <ModalStyled
                visible={visible}
                onBackdropPress={() => setVisible(false)}
            >
                <Container>
                    {/* <Avatar source={require('../../assets/icon.png')}/> */}
                    <Text>
                        Welcome
                    </Text>
                </Container>
            </ModalStyled>
        </>
    );
};

export default ItemModal;