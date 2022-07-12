import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import textos from '../Home/styletextos'
import margens from '../Home/stylemargens'
const image = { uri: "https://media.istockphoto.com/photos/vintage-retro-grungy-background-design-and-pattern-texture-picture-id656453072?k=20&m=656453072&s=612x612&w=0&h=txuUmEpOZqegdZuQw8ibPeopn3oHW6kmpKZZAChvZjY=" };
function Categorias() {
      return (
        <ImageBackground source={image} style={margens.fundo}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            
              <View>
              <Text >Categorias</Text>
              <Text style={textos.textao}>MASCULINO</Text>
              <Text style={textos.textao}>FEMININO</Text>
              <Text style={textos.textao}> ACESSORIOS</Text>
              </View>
            
              
          </View>
          </ImageBackground>
      );
  }

export default Categorias;