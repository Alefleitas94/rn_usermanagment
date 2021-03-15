import React from "react";
import { Text, StyleSheet, View, TouchableHighlight } from "react-native";

const User = ({ user, deleteUser }) => {


const quitUser = (id) => {
    deleteUser(id)
}

  return (
    <View style={styles.user}>

      <View>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.text}>{user.name}</Text>
      </View>
      <View>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.text}>{user.lastname}</Text>
      </View>
      <View>
        <Text style={styles.label}>Age:</Text>
        <Text style={styles.text}>{user.age}</Text>
      </View>
      <View>
        <Text style={styles.label}>Phone:</Text>
        <Text style={styles.text}>{user.phone}</Text>
      </View>
      <View>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.text}>{user.dateOfBirth}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={() => quitUser(user.id)} style={styles.btnDelete}>
          <Text style={styles.textDelete}>Delete &times;</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  user: {
    backgroundColor: "#fff",
    borderBottomColor: "#e1e1e1",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
  btnDelete: {
    padding: 10,
    backgroundColor: "red",
    marginVertical: 10,
    width: '50%',
    borderColor: '#000',
    borderStyle: "solid",
    borderRadius: 50,
    alignSelf: 'center'
  },
  textDelete:{
      fontSize: 18,
      textAlign:'center',
      fontWeight:'bold',
      color: '#fff'
  }
});

export default User;
