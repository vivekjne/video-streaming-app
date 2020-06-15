import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity, Linking } from "react-native";
import {
  View,
  Text,
  Button,
  Container,
  Content,
  Footer,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Item,
  Input,
  ListItem,
  CheckBox,
} from "native-base";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [focus, setFocus] = useState(null);
  return (
    <Container style={{ backgroundColor: "#333" }}>
      <Header
        androidStatusBarColor="#000"
        style={{
          backgroundColor: "#333",
          borderBottomWidth: 1,
          borderBottomColor: "#000",
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            Login
          </Text>
        </View>
      </Header>
      <Content padder contentContainerStyle={{ paddingTop: 32 }}>
        <Text style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }}>
          Sign-In
        </Text>
        <TouchableOpacity
          transparent
          style={{ alignSelf: "flex-end", marginBottom: 16 }}
        >
          <Text style={{ color: "rgb(0,150,220)" }}>Forgot Password?</Text>
        </TouchableOpacity>

        <Item
          regular
          style={{
            borderColor: focus === "email" ? "orange" : "#ccc",
            borderWidth: focus === "email" ? 10 : 1,
          }}
        >
          <Input
            onFocus={() => setFocus("email")}
            onBlur={() => setFocus(null)}
            onChangeText={(email) => setEmail(email)}
            style={{ color: "white" }}
            placeholder="Email"
            keyboardType="email-address"
          />
        </Item>
        <Item
          regular
          style={{
            borderColor: focus === "password" ? "orange" : "#ccc",
            borderWidth: focus === "password" ? 10 : 1,
          }}
        >
          <Input
            onFocus={() => setFocus("password")}
            onBlur={() => setFocus(null)}
            onChangeText={(password) => setPassword(password)}
            style={{ color: "white" }}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry
          />
        </Item>

        {showPassword && (
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
              paddingHorizontal: 8,
              paddingVertical: 4,
            }}
          >
            {password}
          </Text>
        )}

        <ListItem
          style={{ borderBottomWidth: 0, marginLeft: 0, marginBottom: 16 }}
        >
          <CheckBox
            checked={showPassword}
            onPress={() => setShowPassword(!showPassword)}
            color="orange"
          />
          <Body>
            <Text style={{ color: "#fff" }}>Show Password</Text>
          </Body>
        </ListItem>

        <Button block warning>
          <Text>Sign in</Text>
        </Button>

        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            marginTop: 8,
            fontSize: 14,
          }}
        >
          By continuing,you agree to{" "}
          <Text
            onPress={() => Linking.openURL("https://www.wikipedia.com")}
            style={{ color: "rgb(0,150,220)" }}
          >
            Conditions
          </Text>
        </Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 16,
          }}
        >
          <View style={{ height: 1, flex: 1, backgroundColor: "#ccc" }}></View>
          <Text style={{ color: "#ccc", marginHorizontal: 8, fontSize: 14 }}>
            New to amazon
          </Text>
          <View style={{ height: 1, flex: 1, backgroundColor: "#ccc" }}></View>
        </View>

        <Button
          block
          style={{ backgroundColor: "#555", borderRadius: 4, elevation: 4 }}
        >
          <Text style={{ color: "#ccc" }}>Creat a new Amazon Account</Text>
        </Button>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 32,
          }}
        >
          <Text
            onPress={() => Linking.openURL("https://www.wikipedia.com")}
            style={{ color: "rgb(0,150,220)" }}
          >
            Conditions of Use
          </Text>
          <Text
            onPress={() => Linking.openURL("https://www.wikipedia.com")}
            style={{ color: "rgb(0,150,220)" }}
          >
            Privacy Notice
          </Text>
          <Text
            onPress={() => Linking.openURL("https://www.wikipedia.com")}
            style={{ color: "rgb(0,150,220)" }}
          >
            Help
          </Text>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  image: { width: 100, height: 100, marginTop: 20 },
});

export default Login;
