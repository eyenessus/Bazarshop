import React from 'react';
import { View, Text, ImageBackground, Image} from 'react-native';
import textos from '../Home/styletextos'
import margens from '../Home/stylemargens'
import cabecalho from '../Home/stylecabecalho';
const image = require ('../images/Papel/fundo.jpg');
const a2 = require ('./pay.png');
function Pagamento() {
      return (
        <ImageBackground source={image} style={margens.fundo}>
          <View>
            <View>
            <Text style={cabecalho.cabelhaop}>pagamentos</Text>
            <Text style={textos.textopag}>CREDITO</Text>
            <Text style={textos.textopag}>DEBITO</Text>
            <Text style={textos.textopag}>PIX</Text>
            <Text style={textos.textopag}>Mastercard</Text>
            <Text style={textos.textopag}>Visa</Text>
            <Text style={textos.textopag}>PIX</Text>
            <Image
        style={margens.margemdeprodutos1}
        source={a2}
      />
            </View>
             </View>
              </ImageBackground>
      );
  }
export default Pagamento;