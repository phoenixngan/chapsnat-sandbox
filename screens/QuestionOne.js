import React, { useState, useCallback, useEffect } from "react";
import { Image, Platform, View, Button, StatusBar, StyleSheet, Text, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { GiftedChat, Actions } from "react-native-gifted-chat";
import db from "../firebase";
import firebase from "@firebase/app";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native";
import QuestionTwo from "../screens/QuestionTwo";

import MultiSlider from '@ptomasroos/react-native-multi-slider';


const bitmojiMeditate = require("../assets/bitmojiMeditate.png");
const orangeEllipse = require("../assets/orangeEllipse.png");
const scaleBar = require("../assets/scaleBar.png");
const scaleCircle = require("../assets/scaleCircle.png");
const card = require("../assets/card.png");
const nextCard = require("../assets/nextCard.png");
const previousCard = require("../assets/previousCard.png");
const cardHeader = require("../assets/cardHeader.png");

export default function QuestionOne({navigation, route, QuestionTwo: QuestionTwo}){
  return(

    <View style={styles.container}>
      <Image source={card} style={styles.card}></Image>
      <Image source={nextCard} style={styles.nextCard}></Image>
      <Image source={previousCard} style={styles.previousCard}></Image>
      <Image source={cardHeader} style={styles.cardHeader}></Image>
      <Image source={bitmojiMeditate} style={styles.bitmojiMeditate}></Image>
      <Image source={scaleBar} style={styles.scaleBar1}></Image>
      <View style={styles.sliders}>
        <Text> HEREHEREREREHREHRHE </Text>
        <MultiSlider
          selectedStyle={{
            backgroundColor: 'gold',
          }}
          unselectedStyle={{
            backgroundColor: 'silver',
          }}
          values={[5]}
          containerStyle={{
            height: 40,
          }}
          trackStyle={{
            height: 10,
            backgroundColor: 'red',
          }}
          touchDimensions={{
            height: 40,
            width: 40,
            borderRadius: 20,
            slipDisplacement: 40,
          }}
          sliderLength={280}
        />
      </View>
      <Image source={scaleCircle} style={styles.scaleCircle1}></Image>
      <Image source={scaleBar} style={styles.scaleBar2}></Image>
      <Image source={scaleCircle} style={styles.scaleCircle2}></Image>
      <Image source={scaleBar} style={styles.scaleBar3}></Image>
      <Image source={scaleCircle} style={styles.scaleCircle3}></Image>
      <View style={styles.blackRect}></View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("QuestionTwo");
        }}
      >
        <ImageBackground source={orangeEllipse} style={styles.orangeEllipse}>
        <Text style={styles.continue}>
          Continue
        </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text style={styles.MoodScale}>
        Mood Scale
      </Text>
      <Text style={styles.Energy}>
        Rate your energy level for today
      </Text>
      <Text style={styles.lowEnergy}>
        Low energy
      </Text>
      <Text style={styles.highEnergy}>
        High Energy
      </Text>
      <Text style={styles.Focus}>
        Rate your focus for today
      </Text>
      <Text style={styles.lowFocus}>
        Low Focus
      </Text>
      <Text style={styles.highFocus}>
        High Focus
      </Text>
      <Text style={styles.Peace}>
        Rate your peace for today
      </Text>
      <Text style={styles.lowPeace}>
        Low Peace
      </Text>
      <Text style={styles.highPeace}>
        High Peace
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0F60",
    paddingTop: StatusBar.currentHeight,
  },
  Energy: {
    position: "absolute",
    width: 224,
    height: 23,
    left: 71,
    top: 177,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "white",
  },
  lowEnergy: {
    position: "absolute",
    width: 91,
    height: 20,
    left: 64,
    top: 248,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "white",
  },
  highEnergy: {
    position: "absolute",
    width: 100,
    height: 20,
    left: 260,
    top: 248,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "white",
  },
  Focus: {
    position: "absolute",
    width: 224,
    height: 23,
    left: 71,
    top: 305,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  lowFocus: {
    position: "absolute",
    width: 91,
    height: 20,
    left: 64,
    top: 377,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  highFocus: {
    position: "absolute",
    width: 100,
    height: 20,
    left: 260,
    top: 378,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  Peace: {
    position: "absolute",
    width: 224,
    height: 23,
    left: 71,
    top: 433,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  lowPeace: {
    position: "absolute",
    width: 91,
    height: 20,
    left: 64,
    top: 505,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  highPeace: {
    position: "absolute",
    width: 100,
    height: 20,
    left: 260,
    top: 505,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 15,
    color: "#FFFFFF",
  },
  MoodScale: {
    position: "absolute",
    width: 257,
    height: 55,
    left: 129,
    top: 104,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 33,
    color: "#FFFFFF",
  },
  continue: {
    position: "absolute",
    width: 114,
    height: 41,
    left: 64,
    top: 12.5,
    fontFamily: "Graphik",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 15,
    lineHeight: 17,
    color: "#FFFFFF",
  },
  card:{
    position:"absolute",
    width: 345,
    height: 670,
    left: 40,
    top: 30,
    borderRadius: 20,
  },
  nextCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: 410,
    top: 30,
    borderRadius: 20,
  },
  previousCard:{
    position:"absolute",
    width: 15,
    height: 670,
    left: 0,
    top: 30,
    borderRadius: 20,
  },
  cardHeader:{
    position:"absolute",
    width: 115,
    height: 15,
    left: 150,
    top: 50,
  },
  bitmojiMeditate: {
    position: "absolute",
    width: 144,
    height: 144,
    left: 145,
    top: 517,
  },
  orangeEllipse: {
    position: "absolute",
    width: 180,
    height: 45,
    left: 118,
    top: 730,
    borderRadius: 57,
  },
  scaleBar1: {
    position: "absolute",
    width: 269,
    height: 15,
    left: 76,
    top: 217,
  },
  scaleBar2: {
    position: "absolute",
    width: 269,
    height: 15,
    left: 76,
    top: 345,
  },
  scaleBar3: {
    position: "absolute",
    width: 269,
    height: 15,
    left: 76,
    top: 473,
  },
  scaleCircle1: {
    position: "absolute",
    width: 36,
    height: 36,
    left: 70,
    top: 206,
  },
  scaleCircle2: {
    position: "absolute",
    width: 36,
    height: 36,
    left: 70,
    top: 334,
  },
  scaleCircle3: {
    position: "absolute",
    width: 36,
    height: 36,
    left: 70,
    top: 462,
  },
  blackRect: {
    position: "absolute",
    width: 500,
    height: 40,
    left: 0,
    top: 0,
    backgroundColor: "black",
  },
  sliders: {
    margin: 20,
    width: 280,
  },
});
