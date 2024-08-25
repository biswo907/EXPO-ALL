import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

const Root = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "blue", opacity: 0.34 }}>
      <SafeAreaView>
        <Link href={"/(tabs)"}>
          <Text style={{ fontSize: 25, padding: 10, margin: 10 }}>TABS</Text>
        </Link>
        <Link href={"/(drawers)"}>
          <Text style={{ fontSize: 25, padding: 10, margin: 10 }}>drawers</Text>
        </Link>
        <Link href={"/profile"}>
          <Text style={{ fontSize: 25, padding: 10, margin: 10 }}>Stack</Text>
        </Link>
      </SafeAreaView>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({});
