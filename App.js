import { StyleSheet, Text, View, Image} from 'react-native';
import Counter from './src/components/Counter';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

      <Text style={styles.Text}>Livro da noite</Text>
      
      <Image style={styles.image}
      source={require("https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Ffotos-gratis%2Fp3%2F2098203-gato-malhado-prateado-sentado-no-fundo-verde-gratis-foto.jpg&tbnid=62-0p8gyVJLCaM&vet=12ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fpt.vecteezy.com%2Ffotos-gratis%2Fgato&docid=tO5wsNTIBAkVnM&w=6016&h=4016&q=gatinhos%20imagens&ved=2ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ")}/>

      <Counter limite={100}/>

      </View>

      <View style={styles.card}>
        <Text style={styles.Text}>Não somente pelas escrituras</Text>

        <Image style={styles.image}
        source={require("https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Ffotos-gratis%2Fp3%2F2098203-gato-malhado-prateado-sentado-no-fundo-verde-gratis-foto.jpg&tbnid=62-0p8gyVJLCaM&vet=12ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fpt.vecteezy.com%2Ffotos-gratis%2Fgato&docid=tO5wsNTIBAkVnM&w=6016&h=4016&q=gatinhos%20imagens&ved=2ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ")}/>

        <Counter limite={100}/>
      </View>

      <View style={styles.card}>
        <Text style={styles.Text}>The Witcher Espada do Destino</Text>

        <Image style={styles.image}
        source={require("https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fti%2Ffotos-gratis%2Fp3%2F2098203-gato-malhado-prateado-sentado-no-fundo-verde-gratis-foto.jpg&tbnid=62-0p8gyVJLCaM&vet=12ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fpt.vecteezy.com%2Ffotos-gratis%2Fgato&docid=tO5wsNTIBAkVnM&w=6016&h=4016&q=gatinhos%20imagens&ved=2ahUKEwiooPXykPD9AhUdHLkGHcBuAmoQMygBegUIARDjAQ")}/>

        <Counter limite={100}/> 

      </View>

      

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection:'row',
    flexWrap:'wrap',
    width: 500
  },
  image: {
    width: 200,
    height:200,
    resizeMode: "contain",
  },
  Text:{
    fontFamily: 'Yatra-One',
    fontSize: 27,
  },
  card:{
    flexDirection:"column",
    alignItems: 'center',
  },
});