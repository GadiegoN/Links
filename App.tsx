import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { GithubLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react-native';
import * as WebBrowser from 'expo-web-browser';

const ImageUrl = 'https://picsum.photos/id/237/200/300'

const githubUrl = "https://github.com/gadiegon";
const linkedinUrl = "https://www.linkedin.com/in/gadiego-nogueira";
const emailUrl = "mailto:ngadiego@gmail.com";
const instagramUrl = "https://www.instagram.com/gadiego_front/";
const designSystem = "https://gadiegon.github.io/05-design-system/";
const cvPDF = "https://www.gadiego.com.br/curriculo.pdf";

export default function App() {

  const openUrl = async (url: string) => {
    let result = await WebBrowser.openBrowserAsync(url);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source="https://picsum.photos/seed/696/3000/2000"
        placeholder={ImageUrl}
        contentFit="cover"
        transition={1000}
      />
      <StatusBar style="light" />

      <View style={{ width: '100%', marginTop: 70, alignItems: 'center' }}>
        <Image
          source="https://github.com/gadiegon.png"
          style={{ width: 150, height: 150, borderRadius: 999 }}
        />

      <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFF' }}>Gadiego Nogueira</Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#e21212' }}>Desenvolvedor Front-end</Text>
      </View>

      

      <View style={{ height: 50, flexDirection: 'row', justifyContent: 'space-around', marginTop: 35 }}>
        <Pressable style={styles.icon} onPress={() => openUrl(instagramUrl)}>
          <InstagramLogo size={32} />
        </Pressable>

        <Pressable style={styles.icon} onPress={() => openUrl(linkedinUrl)}>
          <LinkedinLogo size={32} />
        </Pressable>

        <Pressable style={styles.icon} onPress={() => openUrl(githubUrl)}>
          <GithubLogo size={32} />
        </Pressable>
      </View>

      <View style={{ paddingHorizontal: 20, gap: 20 }}>
        <Pressable style={styles.button}  onPress={() => openUrl(emailUrl)}>
          <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>E-mail</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => openUrl(designSystem)}>
          <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>Design System</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => openUrl(cvPDF)}>
          <Text style={{ fontSize: 18, color: '#FFF', fontWeight: 'bold' }}>Currículo</Text>
        </Pressable>
      </View>

      <View style={{ width: '100%', marginTop: 70, alignItems: 'center' }}>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFF' }}>
        "O que não te desafia, não te transforma."
      </Text>
      </View>

      <View style={{ gap: 4, position: 'absolute', bottom: 0, height: 100, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, color: '#FFF' }}>Feito com ❤ por Gadiego Nogueira</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#0553',
  },
  icon: {
    width: 15,
    height: 15,
    color: '#000',
  },
  button: {
    backgroundColor: '#e21212',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12
  },
});
