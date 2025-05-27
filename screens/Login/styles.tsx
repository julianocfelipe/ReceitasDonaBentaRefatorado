import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingViewProps,
  ViewProps,
  TextProps,
  TextInputProps,
  TouchableOpacityProps,
} from 'react-native';

// Estilos usando StyleSheet
const styles = StyleSheet.create({
  buttonSubmit: {
    alignItems: 'center',
    backgroundColor: '#BF2C62',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '50%',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 30,
    width: '90%',
  },
  input: {
    borderColor: '#000',
    borderRadius: 10,
    borderWidth: 1,
    color: '#fff',
    fontSize: 20,
    marginBottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '90%',
  },
  keyboardView: {
    alignItems: 'center',
    backgroundColor: '#ffbb89',
    flex: 1,
    justifyContent: 'center',
  },
  textSubmit: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 30,
  },
});

// Componentes estilizados com TypeScript
export const KeyboardView: React.FC<KeyboardAvoidingViewProps> = ({
  children,
  ...props
}) => (
  <KeyboardAvoidingView style={styles.keyboardView} {...props}>
    {children}
  </KeyboardAvoidingView>
);

export const Container: React.FC<ViewProps> = ({ children, ...props }) => (
  <View style={styles.container} {...props}>
    {children}
  </View>
);

export const Title: React.FC<TextProps> = ({ children, ...props }) => (
  <Text style={styles.title} {...props}>
    {children}
  </Text>
);

export const Input: React.FC<TextInputProps> = ({ style, ...props }) => (
  <TextInput
    style={[styles.input, style]}
    placeholderTextColor="#ccc"
    {...props}
  />
);

export const ButtonSubmit: React.FC<TouchableOpacityProps> = ({
  children,
  style,
  ...props
}) => (
  <TouchableOpacity style={[styles.buttonSubmit, style]} {...props}>
    {children}
  </TouchableOpacity>
);

export const TextSubmit: React.FC<TextProps> = ({ children, ...props }) => (
  <Text style={styles.textSubmit} {...props}>
    {children}
  </Text>
);
