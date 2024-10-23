import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <ImageBackground
        source={require("../assets/images/ecommerce-splash.jpg")}
        style={{ flex: 1 }}
        resizeMode="cover"
      />
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          colors={[
            "rgba(255,255,255,0.9)",
            "rgba(255,255,255,1)",
            "transparent",
          ]}
          style={styles.background}
        />
        <Text>Welcome Screen</Text>
        <Link href={"/signin"} asChild>
          <TouchableOpacity>
            <Text>Go to SignIn Screen</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/signup"} asChild>
          <TouchableOpacity>
            <Text>Go to SignUp Screen.....</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    opacity: 0.5,
  },
  background: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
