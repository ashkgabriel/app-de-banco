import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import React, { Component } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      sexo: 1,
      sexos: [
        { key: 1, sexo: "Masculino" },
        { key: 2, sexo: "Feminino" },
        { key: 3, sexo: "Não informar" },
      ],
      nome: "",
      input: "",
      valor: 0,
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    if (this.state.input === "") {
      alert("Digite seu nome.");
      return;
    }

    this.setState({
      nome: "Conta Criada com sucesso, bem vindo " + this.state.input + ".",
    });
    alert(`Conta Criada Com Sucesso. \n\nNome: ${this.state.input}
      \nValor Limite: ${this.state.valor}`);
  }

  render() {
    let sexoEscolhido = this.state.sexos.map((v) => {
      return <Picker.Item key={v.key} label={v.sexo} value={v.key} />;
    });

    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          style={styles.input}
          onChangeText={(texto) => this.setState({ input: texto })}
        />
        <Text style={{ marginLeft: "auto", marginRight: "auto", fontSize: 20 }}>
          Informe seu Sexo:
        </Text>
        <Picker
          selectedValue={this.state.sexo}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexo: itemValue })
          }
        >
          {sexoEscolhido}
        </Picker>
        <Text style={{ marginLeft: "auto", marginRight: "auto", fontSize: 20 }}>
          Escolha seu Limite:
        </Text>
        <Slider
          minimunValue={0}
          maximumValue={10000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valor: valorSelecionado })
          }
          value={this.state.valor}
          minimumTrackTintColor="#00FF00"
          maximumTrackTintColor="#FF0000"
        />
        <Text style={{ textAlign: "center" }}>
          {this.state.valor.toFixed(2)} R$
        </Text>
        <Switch
          value={this.state.status}
          onValueChange={(valorSwitch) =>
            this.setState({ status: valorSwitch })
          }
          thumbColor="#FF0000"
        />
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {this.state.status ? "Casado" : "Solteiro"}
        </Text>
        <Button title="Criar Conta" onPress={this.entrar}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-evenly"
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    fontSize: 20,
    padding: 10,
    width: "80%",
  },
});

export default App;
