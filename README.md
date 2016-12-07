# React-Native StudyApp
An App to test react-native platform and features

using [react-native-maps](https://github.com/airbnb/react-native-maps)

to build:
```
  react-native init TestProject
  npm install react-native-maps --save
  react-native link
```
copy the files to project folder and add an android maps [API_KEY](https://console.developers.google.com/apis/credentials) on your manifest.
```
  react-native run-android
```
  
if you have problems to build on Android (*like I did*) try [this](https://github.com/airbnb/react-native-maps/issues/845)
