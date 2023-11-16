import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerInfosTop: {
    backgroundColor: '#424c61',
    flexDirection: 'row',
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignItems: "center"
  },
  containerTextAccountname: {
    backgroundColor: 'black',
    padding: 5,
    marginLeft: -6
  },
  textAccountname: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  },
  textlevel: {
    color: '#a5b36f',
    fontSize: 10,
    fontWeight: 'bold'
  },
  containerResourcesComponent: {
    gap: 10,
    flexDirection: 'row'
  },
  containerAccountInfos: {
    backgroundColor: '#424c61',
    flexDirection: 'row',
    width: "40%",
    gap: 5
  },
  containerAccountInfosIcon: {
    width: 30,
    height: 30,
    zIndex: 99
  },
  levelBar: {
    backgroundColor: '#000',
    width: 65,
    height: 9,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
})