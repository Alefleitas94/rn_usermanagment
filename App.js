import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard,
  Touchable,
} from "react-native";
import User from "./components/User";
import UserForm from "./components/UserForm";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Alejandro",
      lastname: "Fleitas",
      age: "26",
      dateOfBirth: "07/09/1994",
      phone: "543794669394",
    },
    {
      id: "2",
      name: "Romina",
      lastname: "Malaspina",
      age: "25",
      dateOfBirth: "01/02/1993",
      phone: "540111122334",
    },
    {
      id: "3",
      name: "Sofia",
      lastname: "Jujuy",
      age: "29",
      dateOfBirth: "03/11/1991",
      phone: "54111234569",
    },
    {
      id: "4",
      name: "Roberto",
      lastname: "Galati",
      age: "31",
      dateOfBirth: "03/11/1989",
      phone: "543725464652",
    },
  ]);

  const [showForm, setShowForm] = useState(false);

  //delete users
  const deleteUser = (id) => {
    setUsers((currentUsers) => {
      return currentUsers.filter((user) => user.id !== id);
    });
  };
// hide keyboard
const hideKeyboard = () => {
  Keyboard.dismiss();
}

  return (
    <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.title}>User Managment</Text>
        <View>
          <TouchableHighlight
            onPress={() => setShowForm(!showForm)}
            style={styles.btnShowForm}
          >
            <Text style={styles.textShowForm}>
              {showForm ? "View User List" : "New User +"}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {showForm ? (
            <UserForm
              saveUser={setUsers}
              userList={users}
              setShowForm={setShowForm}
            />
          ) : (
            <>
              <Text style={styles.title}>
                {users.length > 0 ? "User List" : "There aren´t users"}
              </Text>
              <FlatList
                style={styles.flatList}
                data={users}
                renderItem={({ item }) => (
                  <User user={item} deleteUser={deleteUser} />
                )}
                keyExtractor={(user) => user.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(23, 14, 104, 0.603)",
  },
  title: {
    color: "yellow",
    fontSize: 25,
    marginTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 10,
  },
  content: {
    flex: 1,
    marginHorizontal: "2.5%",
  },
  flatList: {
    flex: 1,
  },
  btnShowForm: {
    padding: 10,
    backgroundColor: "#008039",
    marginVertical: 20,
    width: "50%",
    borderColor: "#008039",
    borderStyle: "solid",
    borderRadius: 50,
    alignSelf: "center",
  },
  textShowForm: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
