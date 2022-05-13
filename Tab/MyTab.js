import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const MyTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileView}>
        <EvilIcons name="user" size={75} color="#888888" />
        <Text style={{fontSize: 20}}>user</Text>
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>공지사항</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>이벤트</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>고객센터</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
      <View style={styles.etcView}>
        <Text style={styles.etcTxt}>환경설정</Text>
        <Entypo name="chevron-small-right" size={24} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    paddingHorizontal: 30
  },
  profileView: {
    flexDirection: "row",
    alignItems: 'center',
    alignContent: 'center',
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
    marginBottom: 5
  },
  etcView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C3C3C3",
    paddingVertical: 20
  },
  etcTxt: {
    fontSize: 20
  }
});

export default MyTab;