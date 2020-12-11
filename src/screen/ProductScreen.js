import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    Text
  } from 'react-native';

import BASEURL from '../api/endpoint';
import Header from '../component/Header';
import Spacer from '../component/Spacer';

class ProductScreen extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            dataSource:{},
            errorMessage:""
        }
    }//end constructor

    async componentDidMount(){
        try{
         
            await BASEURL.get('/api/product/all-products')
           .then(response => {
                
                 this.setState({dataSource: response.data.responseObject})
                
                })
           .catch(err => {
            console.log('Fetch Error1:', err)
             this.setState({errorMessage:"Fetch Error1"+err});
           });
        } catch(error){
            console.log('Fetch Error:', error)
            this.setState({errorMessage:"Fetch Error"+error});
        }
       
     }

    render(){
    
        return(
            <View style={styles.containerStyle}>
            
    <Header url="../assert/images/logo.jpg" heading="" isHome={true}/>
            
     <Spacer/>
     <Text style={{fontSize:20}}>{this.state.errorMessage.length>0?this.state.errorMessage:""}</Text>
    <FlatList
     
     data={this.state.dataSource}
     renderItem={({item}) => (
        
       <View style={styles.viewStyle}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductDetail',{
             prodURL:item.displayImage,
             prodName:item.prodName,
             prodDesc:item.prodDesc,
             prodPrice:item.prodPrice

             })}>
         
         <Image style={styles.imageThumbnail} source={{uri: `data:image/png;base64,${item.displayImage}`}}/>
         
         </TouchableOpacity>
         <Text style={styles.textStyle}>{item.prodName}</Text>
   
       </View>
      
     )}
    
     numColumns={2}
     keyExtractor={(item, index) => index}
   />

</View>
   
        )
    }

}

export default ProductScreen;



const styles = StyleSheet.create({
 
    imageThumbnail: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
      borderRadius:10,
      borderColor:'#5f9ea0',
      borderWidth:2
    },
    viewStyle:{
      paddingLeft:10,
      paddingTop:10,
        flex: 1,
        flexDirection: 'column',
        margin: 1
      
    },
    textStyle:{
    flex:1,
    justifyContent: 'center',
    flexDirection: 'column',
    fontSize:15,
    


    }
    , containerStyle:{
        
        
      },
  });
  
  