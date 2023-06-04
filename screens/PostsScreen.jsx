import { View, StyleSheet, Text, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const PostScreen = () => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <MaterialIcons name="logout" size={24} color="#BDBDBD" />
      </View>
      <View style={styles.user}>
        <Image
          style={styles.upload}
          source={require("../assets/images/User.jpg")}
        />
        <View style={styles.info}>
          <Text style={styles.name}>Natali Romanova</Text>
          <Text style={styles.email}>email@example.com</Text>
        </View>
      </View>
      <View style={styles.bottomMenu}>
        <Octicons name="apps" size={24} color="rgba(33, 33, 33, 0.8)" />
        <View style={styles.add}>
          <MaterialCommunityIcons
            name="plus"
            size={13}
            color="white"
            style={styles.plus}
          />
        </View>
        <AntDesign name="user" size={24} color="rgba(33, 33, 33, 0.8)" />
      </View>
    </View>
  );
};
export default PostScreen;

const styles = StyleSheet.create({
  header: {
    paddingTop: 55,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    paddingBottom: 11,
  },
  title: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 17,
    lineHeight: 22,
    alignContent: "center",
    letterSpacing: -0.408,
    color: "#212121",
    width: 175,
    marginLeft: 100,
  },
  img: {
    width: 60,
    height: 60,
  },
  user: {
    marginTop: 32,
    marginLeft: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    height: 600,
  },
  name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
    display: "flex",
    alignItems: "center",
    color: "#212121",
  },
  email: {
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
    display: "flex",
    alignItems: "center",
    color: "rgba(33, 33, 33, 0.8)",
  },
  add: {
    width: 70,
    height: 40,
    backgroundColor: "#FF6C00",
    borderRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomMenu: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    paddingTop: 11,
  },
});
