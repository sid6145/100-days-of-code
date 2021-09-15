import React from 'react'
import { Appbar, Badge } from 'react-native-paper'
import { StyleSheet } from 'react-native'

function Header() {
    return (
        <Appbar.Header style={styles.header}>
       <Appbar.Content title="News"  />
        </Appbar.Header>
        
    )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#89b0ae',
    },

   
})


export default Header
