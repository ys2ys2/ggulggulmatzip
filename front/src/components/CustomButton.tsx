import React from "react";
import { Pressable, StyleSheet, Text, PressableProps, Dimensions, View } from "react-native";
import { colors } from '../constants/';

interface CustomButtonProps extends PressableProps {
  label: string;
  variant?: 'filled' | 'outlined';   //filled인지 outlined인지에 따라 다른 스타일 적용
  size?: 'large' | 'medium';
  inValid?: boolean
}

const deviceHeight = Dimensions.get('screen').height //ios에서는 차이없지만, 안드로이드에서는 차이가 있다 (screen,window) 안드로이드는 screen이 상태 표시줄까지 포함하는 길이


function CustomButton ({
  label, variant = 'filled',
  size = 'large',
  inValid = false,
  ...props
  }: CustomButtonProps) {
  return (
    <Pressable
      disabled={inValid}
      style={({pressed})=> [
        styles.container,
        styles[variant],
        styles[size],
        pressed ? styles[`${variant}Pressed`] : styles[variant],
      inValid && styles.inValid,
      ]}
      {...props}>
        <View style={styles[size]}>
          <Text style={[styles.test, styles[`${variant}Text`]]}>{label}</Text>
        </View>
    </Pressable>
  );
}  
  const styles = StyleSheet.create({
    container: {
      borderRadius: 3,
      justifyContent: 'center',
      flexDirection: 'row',
    },
  inValid: {
    opacity: 0.5,
  },

  filled: {
    backgroundColor: colors.PINK_700,
  },

  outlined: {
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },

  filledPressed: {
    backgroundColor: colors.PINK_500,
  },

  outlinedPressed: {
    borderWidth: 1,
    opacity: 0.5,
  },

  large: {
    width: '100%',
    paddingVertical: deviceHeight > 700 ? 15 : 12, 
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  medium: {
    width: '50%',
    paddingVertical: deviceHeight > 700 ? 12 : 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
  filledText: {
    color: colors.WHITE,
  },
  outlinedText: {
    color: colors.PINK_700,
  },

  });

export default CustomButton;
