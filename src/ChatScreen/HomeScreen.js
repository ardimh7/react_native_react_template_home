import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Left, Right, Body, Title, Text, List, ListItem, StyleProvider } from 'native-base';
import { View, StyleSheet, TextInput } from "react-native";
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class FloatingLabelExample extends Component {
  render() {
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
    return (
      <Container>
      <StyleProvider style={getTheme(material)}>
        <Header>
          <Left />
            
          <Body />
            
          <Right>
            <Button
              transparent
              onPress={() => {
              this.popupDialog.show();
            }} >
              <Icon
                name='more-vert'
                size={24}
                color={'white'} />
            </Button>
          </Right>
        </Header>
        </StyleProvider>
        <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry={true} />
            </Item>
            <Item floatingLabel last>
              
            </Item>
            <Button block success>
              <Text>Login</Text>
            </Button>
          </Form>
        </Content>

          <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            style={styles.container}
          >
            <View style={{padding: 20}}>
              
                <List>
                  <ListItem>
                    <Text>Action 1</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Action 2</Text>
                  </ListItem>
                  <ListItem>
                    <Text>Action 3</Text>
                  </ListItem>
                </List>

            </View>
          </PopupDialog>

      </Container>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});