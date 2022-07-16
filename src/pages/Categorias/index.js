import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import textos from '../Home/styletextos'
import margens from '../Home/stylemargens'
import cabecalho from '../Home/stylecabecalho';
const image = require ('../images/Papel/fundo.jpg');
function Categorias() {
      return (
        <ImageBackground source={image} style={margens.fundo}>
          <View >
            
              <View>
              <Text style={cabecalho.cabelhaop}>Categorias</Text>
              <Text style={textos.textopag}>MASCULINO</Text>
              <Text style={textos.textopag}>FEMININO</Text>
              <Text style={textos.textopag}> ACESSORIOS</Text>
              </View>
            
              
          </View>
          </ImageBackground>
      );
  }

export default Categorias;