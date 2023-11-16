import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerResources: {
    backgroundColor: "black",
    alignItems: 'center',
    paddingHorizontal: 10,
    height: 14,
    marginLeft: -6
  },
  textResources: {
    color: "white",
    fontSize: 10,
    fontWeight: 'bold',
  },
  imgSmall: {
    width: 18,
    height: 18,
    zIndex: 999
  },
})