import React, { Component } from "react";
import { Alert, ScrollView, Text, TextInput, View, StyleSheet, Image, Dimensions } from "react-native";
import { Button, Card, Form, Item, Input, H1, H2, CardItem, Body, Icon } from "native-base";
import colors from "./../ColorPalette.js";
import { Actions } from "react-native-router-flux";
import TopBar from "./TopBar.js";
import BottomBar from "./BottomBar.js";

const ProfileView = () =>
  <View style={styles.container}>
    <TopBar />
    {/* <View style={styles.userContainer}>
      <Image source={require("./../Assets/dp.jpg")} style={styles.profileImage} />

      <Text style={styles.usernameText}>dppedersen</Text>
      <Text style={styles.infoText}>{`23 Lifts, 230 Friends`}</Text>
    </View> */}
    <View style={styles.allButtonContainer}>
      <Button light block onPress={() => Actions.friends()} style={StyleSheet.flatten(styles.button)}>
        <Text style={styles.buttonText}>Friends</Text>
      </Button>
      <Button light block onPress={() => Actions.friends()} style={StyleSheet.flatten(styles.button)}>
        <Text style={styles.buttonText}>Saved Photos</Text>
      </Button>
      {/* <Button light block onPress={() => Actions.settings()} style={StyleSheet.flatten(styles.button)}>
        <Text style={styles.buttonText}>Statistics</Text>
      </Button> */}
      <Button light block onPress={() => Actions.settings()} style={StyleSheet.flatten(styles.button)}>
        <Text style={styles.buttonText}>Settings</Text>
      </Button>
    </View>
    <BottomBar />
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryDark,
    justifyContent: "space-around"
  },
  userContainer: {
    backgroundColor: colors.primaryLight,
    alignItems: "center",
    alignSelf: "stretch",
    padding: 15,
    marginTop: -80
    // marginBottom: 10
    // flex: 1
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40
  },
  usernameText: {
    fontWeight: "bold",
    fontSize: 20,
    color: colors.secondaryText
  },
  infoText: {
    fontStyle: "italic"
  },
  allButtonContainer: {
    backgroundColor: colors.secondaryDark
    // flex: 1
    // marginBottom: -40
    // marginTop: -200
  },
  button: {
    margin: 15
    // marginBottom: -10
  },
  buttonText: {
    fontSize: 18
    // color: "red"
  },
  blueScreen: {
    // marginTop: -
    // flex: 1,
    // justifyContent: "space-around"
    // flexGrow: 1
  }
});

export default ProfileView;
