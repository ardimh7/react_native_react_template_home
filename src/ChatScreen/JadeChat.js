import React from "react";
import { AppRegistry, View, StatusBar } from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text, Separator, List, ListItem } from "native-base";
import HomeScreen from "../HomeScreen";
import { NavigationActions } from "react-navigation";


export default class JadeChat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>My Booking</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Separator bordered>
            <Text>FOREIGN TRIP</Text>
          </Separator>
          <ListItem >
            <Text>GCK -> SIN</Text>
          </ListItem>
          <Separator bordered>
            <Text>DOMESTIC TRIP</Text>
          </Separator>
          <ListItem>
            <Text>GCK -> DEN</Text>
          </ListItem>
          <ListItem>
            <Text>DEN -> CGK</Text>
          </ListItem>
          <ListItem>
            <Text>CGK -> PDG</Text>
          </ListItem>
        </Content>
      </Container>
    );
  }
}
