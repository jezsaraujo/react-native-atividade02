import React from "react"; // Importação da biblioteca "React"
import { StatusBar } from 'expo-status-bar';
import styled from "styled-components/native";
import { StyleSheet, Text, View, Image} from 'react-native';

const Header = styled.View`
  flex-direction: row;
  background-color:#000;  
  height:200px;
  flex-wrap:wrap;
  justify-content:center;
`;
// criando um componente de texto
const Quadrado = styled.View`
  background-color:${props => props.cor};
  width:250px;
  height:200px;
`;


const Pagina = styled.View`
  flex:1;
`;

const styles = StyleSheet.create({
container: {
  backgroundColor: '#000',
  flex: 1,
 
},

title: {
  color:'#ffff',
  textAlign: 'center',
  marginTop:15,
  fontSize:20,
},

});

 

function App() { // Função principal
  return ( // Exibe na tela
    // Estilizando um componente "View" externamente
   <Pagina> 
      
    <View style = {styles.container}>
    <Text style = {styles.title}> Galeria de imagem da</Text>
    <Text style = {styles.title}> Jessika Mendes Araujo</Text>
    <Text style = {styles.title}> Galeria de fotos das galaxias</Text>
    <StatusBar style="auto" />
    
     
    <Header> 
      <Quadrado cor="#845EC2">
      <Image source={{uri: 'https://ae01.alicdn.com/kf/HTB1euQnmH1YBuNjSszeq6yblFXaM/Gal-xia-estrelas-espa-o-foto-fundo-fotografia-pano-de-fundo-qualidade-vinil.jpg_Q90.jpg_.webp'}} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
      <Quadrado cor="#C197FF">
      <Image source={require('./src/imagens/image galaxy1.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>

      <Quadrado cor="#C197FF">
      <Image source={require('./src/imagens/imagegalaxy2.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
        </Quadrado>

      <Quadrado cor="#C197FF">
      <Image source={require('./src/imagens/imagegalaxy3.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
      
      <Quadrado cor="#C197FF">
      <Image source={{uri: 'https://elements-video-cover-images-0.imgix.net/files/251788797/1920+nebula+5_07_2018_00151.jpg?auto=compress%2Cformat&fit=min&h=394&w=700&s=76ddab61a6d5355635c18dcf8c7da8da'}}  
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
      
      <Quadrado cor="#C197FF">
      <Image source={{uri: 'http://www.ccvalg.pt/astronomia/galaxias/galaxias_irregulares/pequena_nuvem_magalhaes.jpg'}}  
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
      
      <Quadrado cor="#C197FF">
      <Image source={require('./src/imagens/imagegalaxy4.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
      
      <Quadrado cor="#000">
      <Image source={require('./src/imagens/imagegalaxy5.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>

      <Quadrado cor="#000">
      <Image source={require('./src/imagens/imagegalaxy6.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado> <Quadrado cor="#000">
      <Image source={require('./src/imagens/imagegalaxy7.jpg')} 
          style={{width: 250, height: 200, backgroundColor: '#000'}}
          resizeMode='cover'
          />
      </Quadrado>
    
      </Header> 
      </View>
    </Pagina> 
  );
}

export default App;