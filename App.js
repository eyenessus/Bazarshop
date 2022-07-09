import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Modal, Pressable} from 'react-native';
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/Screens/Home';
import Sobre from './src/Screens/Sobre';

const Tab = createBottomTabNavigator();


const icons = {
  Home: {
    name: 'ios-home'
  },
  Sobre: {
    name: 'ios-people'
  }
};

export default function App() {
  const papeldeparede = {uri: 'https://www.publicdomainpictures.net/pictures/200000/nahled/plain-blue-background.jpg'};
  const [modalVisible, setModalVisible] = useState(false);
  return (
    
    <View style={styles.cabecalhof}>
    <ImageBackground source={papeldeparede} style={{width:500, height:905, opacity:0.9}}>
    <TouchableOpacity>
    <View>
      <Text style={cabecalho.cabelhaof}>Strizz</Text>
      </View>
    </TouchableOpacity>
      
      
      <TouchableOpacity>
      <View>
      <Text style={cabecalho.cabelhodepedidos}>Pedidos</Text>
      </View>
      </TouchableOpacity>
      <Image
        style={{height:150, width:500}}
        source={{
          uri: 'https://highclass.com.py/wp-content/uploads/2020/10/Imagen-horizontal-Moda.jpg',
        }}
      />
     
      <Text style={textos.textao}> Masculino </Text>
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
      <Text style={textos.textao}> Feminino </Text>
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
    <StatusBar style="auto" />
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
      <NavigationContainer>
        {/* Insere a navegação Tab dentro container */}
        <Tab.Navigator 
          screenOptions={ ({route}) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <Icon name={name} color={color} size={size} />
            }
          })  }
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} 
          options={{headerShown: false}}/>
          <Tab.Screen name="Sobre" component={Sobre}
          options={{headerShown: false}}
           />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
const cabecalho = StyleSheet.create({
  cabelhaof: {
    fontSize: 50,
    textTransform:'uppercase',
    marginTop:50,
    color:'white',
  },
  cabelhodepedidos: {
    fontSize: 50,
    color:'white',
    textAlign:'right',
    
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
},
});
const margens = StyleSheet.create({
  margemdeprodutos: {
    marginTop:20,
    margin:10,
    height:120,
     width:150,
  },
});
const textos = StyleSheet.create({
  textao: {
    fontWeight:'bold',
    color:'white',
    textTransform:'uppercase',
  }
})
