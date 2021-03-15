import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid'


const UserForm = ({ userList, saveUser, setShowForm }) => {
  
  
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    age: '',
    dateOfBirth: '',
    phone: ''
  });
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (event) => {
    const options = { year: "numeric", month: "2-digit", day: "numeric" };
    handleChangeText(event.toLocaleDateString("en-GB", options), 'dateOfBirth');
    hideDatePicker();
  };

  const handleChangeText = (value, name) => {
    console.log(user);
    setUser({ ...user, [name]: value });
  }


  const showAlert = () => {
    Alert.alert(
      "Error", //title
      "All fields are required", //mesagge
      [{ text: "Ok" }] //Buttons Array
    );
  };

  const addNewUser = () => {
      const {age,dateOfBirth,lastname,name,phone} = user;
    if(
        age.trim() === '' ||
        name.trim() === '' ||
        phone.trim() === '' ||
        dateOfBirth.trim() === '' ||
        lastname.trim() === ''

        ){
    showAlert();
    return;
  }
  //Create new User
    user.id = shortid.generate();
    const newUsers = [...userList, user];
    console.log(newUsers);
    saveUser(newUsers);

    //Hide Form
    setShowForm(false);
  
}
  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'name')}
          />
        </View>
        <View>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'lastname')}
          />
        </View>
        <View>
          <Text style={styles.label}>Age</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'age')}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            onChangeText={(value) => handleChangeText(value, 'phone')}
          />
        </View>
        <View>
          <Text style={styles.label}>Date of Birth</Text>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text>{date}</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => addNewUser()}
            style={styles.btnAddUser}
          >
            <Text style={styles.textAddUser}>Save User +</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: "2.5%",
    borderRadius: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: "#e1e1e1",
    borderWidth: 1,
    borderStyle: "solid",
  },
  btnAddUser: {
    padding: 10,
    backgroundColor: "#008039",
    marginVertical: 20,
    width: "50%",
    borderColor: "#008039",
    borderStyle: "solid",
    borderRadius: 50,
    alignSelf: "center",
  },
  textAddUser: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});

export default UserForm;
