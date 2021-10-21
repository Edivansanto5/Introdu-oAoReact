import React from "react";
import { View ,Text,StyleSheet} from "react-native";
import estilos from "./estilo";

const muitosEstilos =() =>{
  return(
    <View style={estilos.conteiner}>
      <Text style={estilos.vermelho}>Meu Primeiro Teste com Vermelho-pequeno</Text>
      <Text style={estilos.azulGrande}>Meu Segundo teste com a cor Azul-Grande</Text>
      <Text style={estilos.AzulPequeno}>Meu Terceiro Teste com a cor Azul-Pequeno</Text>
      <Text style={estilos.vermelhoGrande}>Meu Quarto Teste com a cor Vermelho-Grande</Text>
    </View>

  );
}
export default muitosEstilos;
// toda vez em que fizer uma funcão desse jeito acima vc deve importar ela mesma como default


// agora vamos fazer os estilo para cada tag <Text> ou para todos
// pode ser em um arquivo aqui mesmo ou em arquivo separado
// vamos estilizar em arquivo separado



