import React from 'react';
import { Image, View } from 'react-native';
import { styles } from './styles';
import Logo from '../../assets/favicon.png';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} />
    </View>
  );
};

export default Header;
