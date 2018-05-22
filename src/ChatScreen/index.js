import React, { Component } from "react";
import LucyChat from "./LucyChat.js";
import JadeChat from "./JadeChat.js";
import NineChat from "./NineChat.js";
import HomeScreen from "./HomeScreen.js";
import { TabNavigator } from "react-navigation";
import { View } from 'react-native';
import { Button, Text, Footer, FooterTab, StyleProvider, Icon  } from "native-base"; // klo pake icon dari native base, active tab nya work.
//import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

export default (MainScreenNavigator = TabNavigator(
  {
    LucyChat: { screen: LucyChat },
    JadeChat: { screen: JadeChat },
    NineChat: { screen: NineChat },
    HomeScreen: { screen: HomeScreen }
  },
  {
    swipeEnabled : false,
    tabBarPosition: "bottom",
    tabBarComponent: props => {
      return (
        <View>
        <StyleProvider style={getTheme(material)}>
        <Footer style={{ zIndex:1 }}>
          <FooterTab>
            <Button vertical
             active={props.navigationState.index === 0}
             onPress={() => props.navigation.navigate("LucyChat")}>
              <Icon name='home' style={{fontSize:25}} />
              <Text style={{fontSize:9}}>Home</Text>
            </Button>
            <Button vertical
             active={props.navigationState.index === 1}
             onPress={() => props.navigation.navigate("JadeChat")}>
              <Icon name="map" style={{fontSize:25}} />
              <Text style={{fontSize:9}}>My Booking</Text>
            </Button>
            <Button vertical
             active={props.navigationState.index === 2}
             onPress={() => props.navigation.navigate("NineChat")}>
              <Icon name="mail" style={{fontSize:25}} />
              <Text style={{fontSize:9}}>My Inbox</Text>
            </Button>
            <Button vertical
             active={props.navigationState.index === 3}
             onPress={() => props.navigation.navigate("HomeScreen")}>
              <Icon name="account-circle" type="MaterialIcons" style={{fontSize:25}} />
              <Text style={{fontSize:9}} >My Account</Text>
            </Button>
          </FooterTab>
        </Footer>
        </StyleProvider>
        </View>
      );
    }
  }
));
