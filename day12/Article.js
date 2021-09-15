import React from "react";
import { Card, Title, Paragraph } from "react-native-paper";

function Article({title, image, url, content}) {

  return (
    <Card style={{marginBottom:'10px', backgroundColor:"#eaf4f4", borderRadius:"30px"}}>
      <Card.Content>
       <a style={{textDecoration:'none'}} href={url}><Title>{title}</Title></a>
      </Card.Content>
      <Card.Cover source={{ uri: image }} />
      <Card.Actions>
    </Card.Actions>
    </Card>
  );
}

export default Article;
