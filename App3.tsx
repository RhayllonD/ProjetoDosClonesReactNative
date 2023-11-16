import React from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground  } from 'react-native';
import Foto from './assets/favicon.png';
import FotoChapter from './assets/chapterImage.png';
import FotoBackground from './assets/backgroundYellowIcons.jpeg';
import Header from "./src/components/Header";
import MenuIcon from './assets/menuIcon.png';
import ShopDailyIcon from './assets/shopDailyIcon.png';
import ClanIcon from './assets/clanIcon.png';
import MontlyCardIcon from './assets/montlyCardIcon.png';
import ChestIcon from './assets/chestIcon.png';
import BottomBarPic from './assets/bottomBar.png';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={FotoBackground} resizeMode="cover" style={styles.backgroundImage}>
        <Header/>
        <View style={styles.containerMidleALl}>
          <View style={[styles.containerRowSpaceBetween, styles.conatinerPassLine]}>
            <TouchableOpacity style={styles.buttonLeftTop}>
              <Image style={styles.imgSmall} source={MenuIcon}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerButtonPass}>
              <View style={styles.containerButtonPassInside}>
                <View style={styles.CircleShapeView}>
                  <View style={styles.CircleShapeViewInside}>
                    <Text style={styles.textPassLevel}>26</Text>
                  </View>
                </View>
                <View style={styles.levelBarPass}>
                  <Text style={styles.textPassLevelObtained}>2190/3000</Text>
                </View>
                <Text style={styles.textPassTemp}>Temporada 12</Text>
                <Image style={styles.imgSmall} source={Foto}></Image>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonLeftTop}>
              <Image style={styles.imgSmall} source={Foto}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.containerRowSpaceBetween}>
            <View style={styles.containerImgsLowOpacity}>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={MontlyCardIcon}></Image>
              </TouchableOpacity> 
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={MontlyCardIcon}></Image>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={ShopDailyIcon}></Image>
              </TouchableOpacity>
            </View>
            <View style={styles.containerChapterInfos}>
              <Text style={styles.titleChapter}>52. Capitulo Perdido</Text>
              <Text style={styles.titleChapterStatus}>Concluiu</Text>
              <Image style={styles.imgChapter} source={FotoChapter}></Image>
            </View>
            <View style={styles.containerImgsLowOpacity}>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={ClanIcon}></Image>
                <Text style={styles.textClanSmall}>Clan</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={ClanIcon}></Image>
                <Text style={styles.textClanSmall}>Clan</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={ClanIcon}></Image>
                <Text style={styles.textClanSmall}>Clan</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.imgsBarSide} source={ClanIcon}></Image>
                <Text style={styles.textClanSmall}>Clan</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.containerImgsLowOpacityRow}>
            <Image style={styles.imgSmall} source={ChestIcon}></Image>
            <Image style={styles.imgSmall} source={ChestIcon}></Image>
          </View>
        </View>
        <View style={styles.containerRowSpaceBetween}>
          <View style={styles.containerImgsLowOpacitySquareCut}>
            <Image style={styles.imgschallengers} source={Foto}></Image>
            <Text style={styles.textSquareCut}>Challanger</Text>
          </View>
          <TouchableOpacity style={styles.containerStartChapter}>
            <Text style={styles.textStartChapter}>Começar</Text>
            <View style={styles.containerStartChapterEnergy}>
              <Image style={styles.imgSmall} source={Foto}></Image>
              <Text style={styles.textStartChapterEnergy}>X</Text>
              <Text style={styles.textStartChapterEnergy}>5</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.containerImgsLowOpacitySquareCut}>
            <Image style={styles.imgschallengers} source={Foto}></Image>
            <Text style={styles.textSquareCut}>Challanger</Text>
          </View>
        </View>
        <View style={styles.containerAcelerationBattle}>
          <View style={styles.containerAcelerationBattleText}>
            <Text style={styles.textAcelerationBattle}>Aceleraçao de</Text>
            <Text style={styles.textAcelerationBattle}>batalha</Text>
          </View>
          <View style={styles.blackSquareAceleration}></View>
        </View>
        <Image style={styles.imgBottomBar} source={BottomBarPic}></Image>
      </ImageBackground>
    </View>
  );
}


// Fiz os styles das pages no proprio arquivo, pois nao criei a estrutura
// de screens, esses styles, estariam na pasta da page, da mesma 
// maneira que fiz nos components...


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#aaa',
  },
  backgroundImage: {
    flex: 1,
  },
  imgSmall: {
    width: 26,
    height: 26,
  },
  imgsBarSide: {
    width: 36,
    height: 36,
  },
  textClanSmall: {
    fontSize: 8,
    color: 'white',
    alignSelf: "center"
  },
  imgChapter: {
    width: 170,
    height: 170,
  },
  containerResources: {
    flexDirection: 'row',
  },
  buttonLeftTop: {
    backgroundColor: "#59616f",
    alignSelf: "flex-start",
    padding: 7,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'black',
  },
  conatinerPassLine: {
    marginBottom: 20
  },
  containerImgsLowOpacity : {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: "column",
    padding: 8,
    alignSelf: "flex-start",
    borderRadius: 4
  },
  containerImgsLowOpacityRow : {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: "row",
    padding: 8,
    alignSelf: "center",
    borderRadius: 4,
    gap: 8,
    marginBottom: 20
  },
  containerMidleALl : {
    marginTop: 16,
    marginLeft: 6,
    marginRight: 6
  },
  imgschallengers : {
    width: 45,
    height: 45
  },
  imgBottomBar : {
    width: "100%",
    justifyContent: "center"
  },
  containerButtonPass: {
    backgroundColor: "white",
    alignSelf: "flex-start",
    padding: 2,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 6
  },
  containerButtonPassInside: {
    backgroundColor: "#2eb3ff",
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#59616f',
    padding: 5,
    gap: 3,
  },
  levelBarPass: {
    backgroundColor: '#ffd306',
    width: 60,
    height: 14,
    borderWidth: 2,
    borderColor: "black",
    alignItems: "center",
    marginLeft: -5
  },
  textPassTemp: {
    color: "white",
    fontSize: 8,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textPassLevel: {
    fontSize: 12,
    color: "black",
    fontWeight: "bold",
  },
  textPassLevelObtained: {
    fontSize: 8,
    color: "black",
    fontWeight: "bold",
  },
  titleChapter: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 1, 
    shadowRadius: 0, 
  },
  titleChapterStatus: {
    fontSize: 12,
    color: "#4cff49",
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 5,
    marginBottom: 30
  },
  containerRowSpaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  containerChapterInfos: {
    alignItems: "center",
    marginBottom: 40
  },
  containerImgsLowOpacitySquareCut : {
    backgroundColor: "#59616f",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    borderRadius: 4,
  },
  textSquareCut : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  textAcelerationBattle : {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  blackSquareAceleration : {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 3,
    width: 24,
    height: 24
  },
  containerAcelerationBattle : {
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  containerAcelerationBattleText : {
    alignItems: "center",
    justifyContent: "center"
  },
  CircleShapeView: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    backgroundColor: '#ff8312',
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  CircleShapeViewInside: {
    width: 18,
    height: 18,
    borderRadius: 18 / 2,
    backgroundColor: '#ffd306',
    alignItems: "center",
    justifyContent: "center",
  },
  containerStartChapter: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: '#ffd306',
    padding: 4,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: "center"
  },
  containerStartChapterEnergy: {
    flexDirection: "row",
    gap: 3
  },
  textStartChapter: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    shadowColor: 'black', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 1, 
    shadowRadius: 0, 
  },
  textStartChapterEnergy: {
    fontSize: 14,
    color: "white",
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1.5 },
    textShadowRadius: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});
