import React from 'react';
import {View,Image,StyleSheet,Text} from 'react-native';


const HomeHeader=({url})=>{

  return(
 
     <View style={styles.containerStyle}>
      
      <Image source={require('../assert/images/logo.jpg')} style={styles.tinyLogo}/>
      <Text style={styles.headingText}>Restaurant </Text>


  </View>

  )
  }//HomeHeader


const Header=({url,heading,isHome})=>{

 
  return <HomeHeader url={url}/>

}

const styles=StyleSheet.create({
  containerStyle:{
  
    
     
flex:1,
flexDirection:'row',
borderWidth:0,
borderRadius:2,
borderColor:'red', //#ddd
alignItems:'center',
marginLeft:5,
marginRight:5,
marginTop:20
    


},
    
     tinyLogo:{
        width:50,
        height:80,
        borderRadius:50,
        borderColor:'#5f9ea0',
        paddingTop:10
      
    },
    headingText:{
      fontSize:30,
      paddingLeft:60,
      paddingTop:10,
      color:'#5f9ea0'
     
     
      



    }

});



export default Header;
