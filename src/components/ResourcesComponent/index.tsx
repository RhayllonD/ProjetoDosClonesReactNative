import React from 'react'
import { Text, View, Image} from 'react-native';
import { styles } from './styles';


const ResourcesComponent = ({text, img}) => {
  return (
      <View style={styles.container}>
        <Image style={styles.imgSmall} source={img}></Image>
        <View style={styles.containerResources}>
          <Text style={styles.textResources}>{text}</Text>
        </View>
      </View>
  )
}



export default ResourcesComponent