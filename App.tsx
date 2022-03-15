import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./navigations/HomeNavigation";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import blogReducer from "./store/reducers/blogs";

const rootReducer = combineReducers({
  Blogs: blogReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <HomeNavigation />
      </Provider>
      <StatusBar />
    </NavigationContainer>
  );
}
