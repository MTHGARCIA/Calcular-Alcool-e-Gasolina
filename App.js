import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Modal, TextInput, TouchableOpacity, FlatList, Button, Keyboard, Alert} from 'react-native';






class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: '',
      gasolina: '',
      modalVisible: false,
      recomendado: '',

      

    };

    this.calcular = this.calcular.bind(this);

    this.calcularNovamente = this.calcularNovamente.bind(this);

  }
  calcular() {
    if(this.state.alcool === ''){
      Alert.alert('Atenção', 'Preencha o campo alcool');
      return;
    }
    if(this.state.gasolina == ''){
      Alert.alert('Atenção', 'Preencha o campo gasolina');
      return;
    }

    this.setState({ modalVisible: true })

    const alcool = parseFloat(this.state.alcool)
    const gasolina = parseFloat(this.state.gasolina)
    const  result = alcool / gasolina;
    


    if (result < 0.7)
      {this.setState({recomendado : 'alcool'})
    }else{
      (this.setState({recomendado: 'gasolina'}))
    }
  

    

    }

  calcularNovamente(visible) {
    this.setState({ modalVisible: visible });
  }


  





  render() {
    return (
      <View style={styles.container}>


        <View style={styles.header}>
          
          <Image source={require('./src/img/logo.png')} />
          <Text style = {styles.textHeader}>
            Qual a melhor opção?
          </Text>
        </View>


        <View style={styles.input}>
          <Text style={styles.texto}>
            Álcool(Preço por litro):
          </Text>

          <TextInput
            backgroundColor='#fff'
            borderWidth={1}
            borderRadius={55}
            margin={5}
            textAlign='center'
            placeholder='Digite o valor do Álcool'
            keyboardType="number-pad"
            onChangeText={(texto) => this.setState({ alcool: texto })}>
          </TextInput>



          <Text style={styles.texto}>
            Gasolina(Preço por litro):
          </Text>
          <TextInput
            backgroundColor='#fff'
            borderWidth={1}
            borderRadius={55}
            textAlign='center'
            margin={5}
            placeholder='Digite o valor do Gasolina'
            keyboardType="number-pad"
            onChangeText={(texto) => this.setState({ gasolina: texto })} >
          </TextInput>
        </View>


        <View>

          <View style ={{padding: '15'}}>
            <Button title ='Calcular'
              color = "#FF512E"
              onPress={this.calcular}
              />
            
            
          </View>

          
            <Modal  transparent={false} animationType='slide' visible={this.state.modalVisible}>
              <View style={styles.modalView}>
              <View style={styles.modalImg}>
                <Image source={require('./src/img/gas.png')} />
              </View>
              <View style = {styles.viewCompensa}>
                <Text style ={styles.compensa}>  Compensa usar {this.state.recomendado} </Text>
              </View>
              <View style = {styles.centerView}>
                <Text style={styles.comPreco}>Com os preços:</Text>
                <Text style = {styles.alcoolPreco}>Alcool: R${parseFloat(this.state.alcool).toFixed(2)}</Text>
                <Text style = {styles.gasolinaPreco}>Gasolina: R${parseFloat(this.state.gasolina).toFixed(2)}</Text>
              </View>
              <TouchableOpacity style={styles.btnTouch} onPress={() => this.calcularNovamente(false)}>
                <Text style={{ color: '#FF512E', fontWeight: 'bold', fontSize: 15 }}>Calcular novamente!</Text>
              </TouchableOpacity>
              </View>
            </Modal>
          
        </View>





      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#212121'

  },
  textHeader:{
    textAlign:'center',
    fontSize: 25,
    color:'#ffff',
    padding: 5,
    fontWeight:'bold',
    marginTop: 20,
  },
  input: {
    color: 'white'
  },
  texto: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'italic',
    marginHorizontal:120,
  },
  header: {
    marginTop: 135,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },

  modalView: {
    flex: 1,
    backgroundColor: '#212121'

  },
  modalImg: {
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 115,

  },
  btnTouch: {
    borderColor: '#FF512E',
    backgroundColor: '#212121',
    alignItems: 'center',
    borderWidth: 3,
    justifyContent: 'center',
    marginHorizontal: 75,
    width: 275,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    margin: 5,
    marginTop: 15,
  },
  modalBtn: {

    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 125,
    width: 150,
    height: 25,
    borderRadius: 25,
    alignItems: 'center',
    margin: 5,
  },
  centerView:{
    fontSize: 15,
    color: '#fff'
  },
  comPreco:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    padding:5,
    textAlign: 'center',
    marginTop: 15,

  },
  alcoolPreco:{
    color:'#fff',
    fontSize: 14,
    padding:5,
    textAlign: 'center',
    },
    gasolinaPreco: {
    color:'#fff',
    fontSize: 14,
    padding:5,
    textAlign: 'center',
    marginBottom: 15,
    },
    compensa:{
      marginTop: 50,
      textAlign: 'center',
      fontSize: 28,
      color:'#34c360',
      fontWeight: 'bold',

    }

});

export default App;
