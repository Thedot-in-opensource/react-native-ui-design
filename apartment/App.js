
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';
import IconNotification from 'react-native-vector-icons/dist/Ionicons';
import IconNavigation from 'react-native-vector-icons/dist/MaterialIcons';;
import IconSettings from 'react-native-vector-icons/dist/Ionicons';
import IconUser from 'react-native-vector-icons/dist/Feather';
import IconSearch from 'react-native-vector-icons/dist/Feather';
import IconBookmark from 'react-native-vector-icons/dist/Feather';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var {width, height} = Dimensions.get('window')


const App = () => {


 
  return (
 <SafeAreaView>
    <LinearGradient
    colors={['#141A28', '#141A28', '#4a596e']}
    style={styles.whereCard}
    >
      <Text
      style={{
        fontSize:26,
        fontStyle:'normal',
        fontWeight:'700',
        fontFamily:'Poppins',
        color:'#fff',
        marginLeft:25,
        marginTop:80
      }}
      >
      Where do{"\n"}you want to go ?
      </Text>
      <View>
      <View
            style={{
              width: 320,
              height: 52,
              backgroundColor: '#fff',
              alignSelf:'center',
              borderRadius:8,
              marginTop:20
            }}
            >
              <View
              style={{
                flexDirection: 'row'
              }}
              >
                <View>
                  
                </View>
  <View
              style={{
                width:150,
                height: 170,
                backgroundColor: '#fff',
                elevation:1,
              marginTop:240,
              borderRadius:12
              }}
              >
                <Image style={{width:132,height:115, alignSelf: 'center',borderRadius:8}} source={{uri: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'}}/>
              <View
              style={{
                marginLeft:8,
                marginTop:2,
             
              }}
              >
                <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight:'700',
                  color: '#000',
                  marginTop:7
                }}
                >
                  Captown
                </Text>
                <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight:'300',
                      color: '#000',
                      fontSize:10
                    }}
                >
                  Apartment
                </Text>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: '#fff',
                    marginLeft:98,
                    marginTop:-25,
                    borderRadius:5,
                    justifyContent: 'center'
                  }}
                >
        <IconBookmark name="bookmark" style={[styles.iconBottom, {alignSelf: 'center'}]}  size={18} color="#EDAB7E"/>

                </View>
              </View>
              </View>
              <View
              style={{
                width:150,
                height: 170,
                backgroundColor: '#fff',
                elevation:1,
              marginTop:240,
              borderRadius:12,
              marginLeft:12
              }}
              >
                <Image style={{width:132,height:115, alignSelf: 'center',borderRadius:8}} source={{uri: 'https://images.unsplash.com/photo-1561501878-aabd62634533?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format'}}/>
              <View
              style={{
                marginLeft:8,
                marginTop:2,
             
              }}
              >
                <Text
                style={{
                  fontFamily: 'Poppins',
                  fontWeight:'700',
                  color: '#000',
                  marginTop:7
                }}
                >
                  Carol Tower
                </Text>
                <Text
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight:'300',
                      color: '#000',
                      fontSize:10
                    }}
                >
                  Apartment
                </Text>
                <View
                  style={{
                    width: 25,
                    height: 25,
                    backgroundColor: '#fff',
                    marginLeft:98,
                    marginTop:-25,
                    borderRadius:5,
                    justifyContent: 'center'
                  }}
                >
        <IconBookmark name="bookmark" style={[styles.iconBottom, {alignSelf: 'center'}]}  size={18} color="#EDAB7E"/>

                </View>
              </View>
              </View>
              </View>
            
            </View>
      </View>
    </LinearGradient>
    <View
    style={styles.travelBox}
    >
      <Text
      style={{
        fontSize:20,
        fontWeight:'700',
        fontFamily:'Poppins',
        fontStyle:'normal',
        color:'#000',
        marginLeft:25
      }}
      >
        Travel Category
      </Text>
      <View
      style={{
        flexDirection:'row'
      }}
      >
            <View
            style={
              styles.travelCate
            }
            > 
              <Text style={{alignSelf:'center',fontFamily: 'Poppins',color:'#000000',fontWeight:'600'}}>
              Trip
              </Text>
            </View>

            <View
            style={
              styles.travelCates
            }
            > 
              <Text style={{alignSelf:'center',fontFamily: 'Poppins',color:'#C1C1C1',fontWeight:'600'}}>
              Staycation
              </Text>
            </View>
            <View
            style={
              styles.travelCates
            }
            > 
              <Text style={{alignSelf:'center',fontFamily: 'Poppins',color:'#C1C1C1',fontWeight:'600'}}>
              Staylow
              </Text>
            </View>
      </View>
    </View>

    <View
    style={{
      marginTop:25
    }}
    >
      <Text
      style={{
        fontSize:20,
        fontWeight:'700',
        fontStyle:'normal',
        fontFamily:'Poppins',
        color:'#000',
        marginLeft:25
      }}
      >
        Top Trips
      </Text>
    </View>
    <View
    style={styles.bottomNavigationBox}
    >
      <IconNotification
      name="notifications-outline" style={[styles.iconBottom, {marginLeft:45}]}  size={28} color="#000000"
      />
      <IconNavigation name="assistant-navigation" style={[styles.iconBottom, {transform:  [{ rotate: '45deg'}], marginLeft: 25}]}  size={25} color="#000000"/>
      <LinearGradient
      colors={['#F8943C', '#F25A07', '#F25A07']}
      style={styles.linearGradient}
      >
<IconSearch name="search" style={[styles.iconBottom, {marginTop:15,alignSelf: 'center',marginRight:10}]}  size={25} color="#ffffff"/>
      </LinearGradient>
      <IconSettings name="settings-sharp" style={[styles.iconBottom, {transform:  [{ rotate: '45deg'}], marginBottom:10,marginLeft:25}]}  size={25} color="#000000"/>
        <IconUser name="user" style={[styles.iconBottom, {marginLeft: 45}]}  size={28} color="#000000"/>
    </View>
 </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomNavigationBox: {
    flexDirection:'row',
    marginTop: height - 500
    
  },
  travelBox: {
    marginTop:25
  },

  travelCate: {
      width: 106,
      height: 43,
      elevation:2,
      backgroundColor:'#fff',
      borderRadius:13,
      justifyContent: 'center',
      marginLeft:25,
      marginTop:15
  },
  travelCates: {
      width: 106,
      height: 43,
      elevation:2,
      backgroundColor:'#F9F9F9',
      justifyContent: 'center',
      marginLeft:25,
      marginTop:15
  },

  iconBottom: {
    fontWeight:'700',
    marginLeft:10
  
  },

  linearGradient: {
    height: 60,
    width: 60,
    borderRadius: 50,
    bottom:12,
    marginLeft:45
  },

  whereCard: {
    width: width - 30,
    height:240,
    backgroundColor:'#141A28',
    alignSelf:'center',
    marginTop:25,
    borderRadius:27
  },  

});

export default App;
