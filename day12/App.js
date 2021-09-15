import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import Header from './Header';
import Article from './Article';

export default function App() {

  const [text, setText] = useState('Technology')
  const [news, setNews] = useState([])

  useEffect(() => {
        fetch(`https://gnews.io/api/v4/search?q=${text}&lang=en&token=88deee6b0d631e3f0862ee827fed5510`)
        .then((res) => res.json())
        .then((json) => setNews(json.articles))
  },[text])


  console.log(news)
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={true} style={styles.category}>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Technology</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Health</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Lifestyle</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Education</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Entertainment</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Headlines</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>politics</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Sports</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Science</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Space</Chip>
      <Chip style={styles.chip} onPress={(e) => setText(e.target.textContent)}>Tourism</Chip>
      </ScrollView>


    <View style={styles.newsView}>
      {
        news.map((item) => (
          <Article url={item.url} content={item.content} title={item.title} image={item.image}/>
        ))
        
      }
    </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefae0',
  },

  category:{
    height: '90px',
    padding:'20px',
  },

  chip:{
    marginRight: '5px',
    height: '35px'
  },

  newsView:{
    padding: '10px'
  }
});
