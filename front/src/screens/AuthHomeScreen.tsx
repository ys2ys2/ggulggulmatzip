import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View, Button, SafeAreaView, Dimensions, Image} from 'react-native';
import {AuthStackParamList} from '../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../constants/navigations';
import CustomButton from '../components/CustomButton';
type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../assets/appLogo.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton                   //CustomButton으로 바꾸고
          label="로그인하기"  //label로 변경
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    alignItems: 'center',
  },

  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  buttonContainer: {
    flex: 1,
    gap: 15,
  },
});

export default AuthHomeScreen;
