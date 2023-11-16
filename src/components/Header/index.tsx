import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import ResourcesComponent from '../ResourcesComponent';
import Foto from '../../../assets/favicon.png';
import IconPerfil from '../../../assets/iconPerfil.png';
import {styles} from './styles'

const Header = () => {
  return (
    <View style={styles.containerInfosTop}>
          <View style={styles.containerAccountInfos}>
            <Image style={styles.containerAccountInfosIcon} source={IconPerfil}></Image>
            <View>
              <View style={styles.containerTextAccountname}>
                <Text style={styles.textAccountname}>Nome Account</Text>
              </View>
              <View style={styles.levelContainer}>
                <Text style={styles.textlevel}>102</Text>
                <View style={styles.levelBar}></View>
              </View>
            </View>
          </View>
          <View style={styles.containerResourcesComponent}>
            <ResourcesComponent img={Foto} text="15/20" />
            <ResourcesComponent img={Foto} text="97000" />
            <ResourcesComponent img={Foto} text="100.5M" />       
          </View>
        </View>
  )
}

export default Header