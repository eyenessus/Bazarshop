import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
const fundo = require ('../images/Papel/fundo.jpg');
import textos from '../Home/styletextos'
import margens from '../Home/stylemargens'
import cabecalho from '../Home/stylecabecalho';
function Sobre() {
      return (
        <ImageBackground source={fundo} resizeMode="cover" style={margens.fundo}>
          <View>
              <Text style={cabecalho.cabelhaof} >Strizz</Text>
                <Text style={textos.textao}>Strizz é uma rede de lojas de departamento brasileira pertencente ao Grupo Guararapes Confecções. É a terceira maior rede de lojas de departamento no Brasil </Text>
          </View>
          </ImageBackground>
      );
  }

export default Sobre;