import { View, Text, TouchableOpacity, Image,ScrollView, ImageBackground, Modal, Pressable} from 'react-native';
import cabecalho from './stylecabecalho';
import margens from './stylemargens';
import textos from './styletextos';
import React from 'react';
const image = { uri: "https://media.istockphoto.com/photos/vintage-retro-grungy-background-design-and-pattern-texture-picture-id656453072?k=20&m=656453072&s=612x612&w=0&h=txuUmEpOZqegdZuQw8ibPeopn3oHW6kmpKZZAChvZjY=" };
function Home() {
    return (
      <ScrollView>
<View>
  <ImageBackground source={image} resizeMode="cover" style={margens.fundo}>
      <TouchableOpacity>
        <Text style={cabecalho.cabelhaof}>Strizz</Text>
      </TouchableOpacity>
    <View>
      <TouchableOpacity>
        <Text style={cabecalho.cabelhodepedidos}>Pedidos</Text>
      </TouchableOpacity>
    </View>
    <Image
        style={{height:150, width:500}}
        source={{
          uri: 'https://highclass.com.py/wp-content/uploads/2020/10/Imagen-horizontal-Moda.jpg',
        }}
      />
    <Text style={textos.textao}>Masculino</Text>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => setModalVisible(true)} >
      <Image
      style={margens.margemdeprodutos}
        source={{
          uri: 'https://i0.wp.com/www.canalmasculino.com.br/wp-content/uploads/2019/05/moda-masculina-destaque-usa-se-quiser.jpg?resize=564%2C705',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={{
          uri: 'https://i.pinimg.com/736x/03/5f/ef/035fef209007b7ab6db305e546c0a2b6.jpg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={{
          uri: 'https://i.pinimg.com/736x/d4/aa/52/d4aa522493ff781bb84308676c10e7e5.jpg',
        }}
      />
      </TouchableOpacity>
    </View>
    <Text style={textos.textao}> Feminino</Text>
    
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={{
          uri: 'https://www.todamulher.com.br/wp-content/uploads/2019/06/WhatsApp-Image-2019-06-12-at-15.06.02.jpeg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={{
          uri: 'https://img.olx.com.br/images/21/215905006453769.jpg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIR-3hGvh4m6gtOfNjLkaO2D0Cv17Uuzz1VYO8kygWrlocN25mymKl4-uT1sWIOqdSp7g&usqp=CAU',
        }}
      />
      </TouchableOpacity>
      
      </View>
      <Text style={textos.textao}> Acessorios </Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={{
          uri: 'https://www.seuloza.com.br/wp-content/uploads/2020/03/Bone-tem-que-ser-hoje-amanha-eu-nao-venho-05.jpg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={{
          uri: 'https://ffw.uol.com.br/app/uploads/noticias/2021/03/img-4775-copiar.jpg',
        }}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={{
          uri: 'https://modaeluxo.com/wp-content/uploads/2012/01/acessorios-para-verao.jpg',
        }}
      />
      </TouchableOpacity>
      
      </View>

      <Text style={textos.textao}>MELHOR LOJA DO BRASIL</Text>
      </ImageBackground>
 
    </View>
    </ScrollView>
     
    );
}

    export default Home;