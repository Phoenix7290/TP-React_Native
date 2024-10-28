import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 20,
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  itemList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  containerAdd: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerAddSelect: {
    marginLeft: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  containerAddInput: {
    padding: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  containerToggle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#000',
    color: '#fff',
    borderWidth: 0,
    borderRadius: 5,
    cursor: 'pointer',
    marginBottom: 100,
  },
  containerListUl: {
    width: '60%',
  },
  containerListUlLi: {
    marginBottom: '3%',
    backgroundColor: 'white',
  },
  light: {
    backgroundColor: '#fff',
    color: '#000',
  },
  dark: {
    backgroundColor: '#555',
    color: '#fff',
  },
  containerListUlLarge: {
    textAlign: 'center',
    width: '30%',
  },
});

export default styles;
