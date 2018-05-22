import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from '../../tabOne.js';
import Tab2 from '../../tabTwo.js';
import Tab3 from '../../tabTwo.js';
import { Button, Text, Footer, FooterTab, StyleProvider, Icon  } from "native-base";


export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs initialPage={0} tabBarPosition="bottom">
          <Tab heading="Tab1">
            <Tab1 />
          </Tab>
          <Tab heading="Tab2">
            <Tab2 />
          </Tab>
          <Tab heading="Tab3">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}