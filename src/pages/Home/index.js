import { View, Text, TouchableOpacity, Image,ScrollView, ImageBackground, Modal, Pressable} from 'react-native';
import cabecalho from './stylecabecalho'
import margens from './stylemargens'
import textos from './styletextos'
import styles from '../Home/style'
import React, {useState} from 'react';

const fundo = require ('../images/Papel/fundo.jpg');
const papei = require ('../images/PapeisInicio/inicio.jpg');
const m = require ('../images/M/masculino.jpg');
const m1 = require ('../images/M/masc.webp');
const m2 = require ('../images/M/mas.jpg');
const f = require ('../images/F/fe.jpeg');
const f1 = require ('../images/F/mi.jpg');
const f2 = require ('../images/F/no.jpg');
const a = require ('../images/A/acesso(1).jpg');
const a1 = require ('../images/A/acesso(2).jpg');
const a2 = require ('../images/A/acesso(3).jpg');
function Home() {
  const [modalVisible, setModalVisible] = useState(false);
    return (
      <ScrollView>
<View>
  <ImageBackground source={fundo} resizeMode="cover" style={margens.fundo}>
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
        source={papei}
      />
    <Text style={textos.textao}>Masculino</Text>
    <View style={{flexDirection:'row'}}>
    <TouchableOpacity onPress={() => setModalVisible(true)} >
      <Image
      style={margens.margemdeprodutos}
        source={m}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={m1}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={m2}
      />
      </TouchableOpacity>
    </View>
    <Text style={textos.textao}> Feminino</Text>
    
    <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={f}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={f1}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={f2}
      />
      </TouchableOpacity>
      
      </View>
      <Text style={textos.textao}> Acessorios </Text>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={a}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
       style={margens.margemdeprodutos}
        source={a1}
      />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
      <Image
        style={margens.margemdeprodutos}
        source={a2}
      />
      </TouchableOpacity>
      
      </View>

      <Text style={textos.textao}>MELHOR LOJA DO BRASIL</Text>
      </ImageBackground>
 
    </View>
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Fecha Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>  
    </ScrollView>
     
    );
}

    export default Home;