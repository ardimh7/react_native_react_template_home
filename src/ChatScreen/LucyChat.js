import React, { Component } from 'react';
import { StyleSheet, AppRegistry, View, Image, Dimensions, ImageBackground } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Text, Badge, Left, Right, Body, List, ListItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';

const slideAnimation = new SlideAnimation({
  slideFrom: 'bottom',
});

export default class FooterTabsBadgeExample extends Component {
  render() {
    return (
      <Container>
      <Grid>
          <Row size={30}>
            <Content>

              <ImageBackground
                style={{flex:1, width: Dimensions.get('window').width, height:160}}
                source={require('./cover.png')}
              >
                <Header style={{ backgroundColor: 'transparent' }}>
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


              </ImageBackground>
                
            </Content>
          </Row>
          <Row size={7}>
            <Grid style={{ alignItems: 'center', zIndex:1 }}>
              <Col size={45}>
                <Button iconLeft block light style={{ borderRightWidth: 0.5, borderColor: '#999', borderRadius:0 }}>
                  <Icon name="account-circle" style={{color:"#666", fontSize:25}} />
                  <Text>Faisal</Text>
                </Button>
              </Col>
              <Col size={45}>
                <Button iconLeft block light style={{ borderLeftWidth: 0.5, borderColor: '#999', borderRadius:0 }}>
                  <Icon name="adjust" style={{color:"#666", fontSize:25}} />
                  <Text>0 Points</Text>
                </Button>
              </Col>
            </Grid>
          </Row>
          <Row size={63}>
            <Content padder style={{backgroundColor:"#e0e0e0"}}>
              <Grid>
                <Row style={{marginBottom:15}}>
                  <Col size={33}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='airplanemode-active' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Flights</Text>
                    </Button>
                  </Col>
                  <Col size={33} style={{marginRight:5, marginLeft:5}}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='location-city' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Hotels</Text>
                    </Button>
                  </Col>
                  <Col size={33}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='directions-railway' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Train</Text>
                    </Button>
                  </Col>
                </Row>
                <Row style={{marginBottom:15, height: 130}}>
                  <Col size={33}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='card-travel' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Flight + Hotel</Text>
                    </Button>
                  </Col>
                  <Col size={33} style={{marginRight:5, marginLeft:5}}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='shopping-cart' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Top-Up & Data Packages</Text>
                    </Button>
                  </Col>
                  <Col size={33}>
                    <Button vertical block light style={{height: 100}}>
                      <Icon name='local-activity' style={{fontSize:40}} />
                      <Text style={{fontSize:11, textAlign: 'center'}}>Attractions & Activities</Text>
                    </Button>
                  </Col>
                </Row>
                <Row style={{marginBottom:25}}>
                  <Grid>
                    <Row size={10}>
                      <Content style={{marginBottom:10}}>
                        <Text>Highlighted Features</Text>
                      </Content>
                    </Row>
                    <Row size={90}>
                      <Col size={33}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='wifi' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>International Data Plans</Text>
                        </Button>
                      </Col>
                      <Col size={33} style={{marginRight:5, marginLeft:5}}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='train' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>Airport Train</Text>
                        </Button>
                      </Col>
                      <Col size={33}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='flight-takeoff' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>International Flight</Text>
                        </Button>
                      </Col>
                    </Row>
                  </Grid>

                </Row>

                <Row style={{marginBottom:25}}>
                  <Grid>
                    <Row size={10}>
                      <Content style={{marginBottom:10}}>
                        <Text>Travel for Less</Text>
                      </Content>
                    </Row>
                    <Row size={90}>
                      <Col size={33}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='directions-run' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>lorem ipsum</Text>
                        </Button>
                      </Col>
                      <Col size={33} style={{marginRight:5, marginLeft:5}}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='event-seat' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>dolor sit</Text>
                        </Button>
                      </Col>
                      <Col size={33}>
                        <Button vertical block light style={{height: 100}}>
                          <Icon name='free-breakfast' style={{fontSize:40}} />
                          <Text style={{fontSize:11, textAlign: 'center'}}>amet</Text>
                        </Button>
                      </Col>
                    </Row>
                  </Grid>

                </Row>

              </Grid>
            </Content>
          </Row>
      </Grid>
        

          <PopupDialog
            ref={(popupDialog) => { this.popupDialog = popupDialog; }}
            style={{borderWidth: 5, borderColor: '#ff0000'}}
            dialogAnimation={slideAnimation}
            width={0.9}
          >
            <View style={{padding: 10}}>
              
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
    borderWidth: 1.5,
    borderColor: '#ff0000',
    zIndex: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});