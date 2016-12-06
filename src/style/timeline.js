import { StyleSheet } from 'react-native';

module.exports = {
  styles: StyleSheet.create({
    content: {
      backgroundColor: '#383f44',
      paddingTop: 60
    },

    bar: {
      backgroundColor: '#27292b'
    },

    bar_text: { padding: 15, color: '#626e77' },

    page1: { backgroundColor: '#383f44' },
    page2: { backgroundColor: 'black' },

    timeline_item: {
      backgroundColor: 'white',
      minWidth: 150,
      minHeight: 150,
      marginTop: 10,
      marginHorizontal: 10,
      // alignItems: 'flex-end' // float
      // flexDirection: 'row'
    },

    timeline_img: {
      width: 50,
      height: 50,
      marginTop: 10,
      marginLeft: 10,
      borderRadius: 25
    },

    timeline_txt: {
      marginTop: 20,
      marginLeft: 10
    },

    timeline_btn: {
      height: 30,
      backgroundColor: '#7f6a94',
      color: 'white',
      padding: 5,
      margin: 5
    },

    timeline_header: { flexDirection: 'row' },

    timeline_bottom: {
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 20
    }
  })
}
