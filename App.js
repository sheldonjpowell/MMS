import React from "react";
import SearchBar from "./SearchBar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableHighlight,
  Button,
} from "react-native";
import Home from "./Home";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Home />
        <Button title="Click Me" onPress={() => console.log("Been pressed")} />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  searchbar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
