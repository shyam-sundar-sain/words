// // import {View, Text} from 'react-native';
// // import React from 'react';

// // const Shyam = () => {
// //   return (
// //     <View>
// //       <Text>Shyam</Text>
// //     </View>
// //   );
// // };

// // export default Shyam;

// /* eslint-disable prettier/prettier */
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Alert,
// } from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import {SafeAreaView} from 'react-native-safe-area-context';

// // Component
// import ProcessingLoader from '../component/ProcessingLoader';
// import {showToast} from '../component/CustomToast';

// // Icon
// import ic_show from '../assets/icon/ic_show.png';
// import ic_hide from '../assets/icon/ic_hide.png';
// import logo from '../assets/image/logo.png';

// // API Info
// import {BASE_URL, makeRequest} from '../api/ApiInfo';

// // Validation
// import {isMobileNumber} from '../validation/FormValidator';

// const SignUpScreen = props => {
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [password, setPassword] = useState('');
//   const [hidePassword, setHidePassword] = useState(true);
//   const [pin, setPin] = useState('');
//   const [hidePin, setHidePin] = useState(true);
//   const [showProcessingLoader, setShowProcessingLoader] = useState(false);

//   const handleNameChange = name => {
//     setName(name);
//   };

//   const handleMobileNumberChange = mobile => {
//     setMobile(mobile);
//   };

//   const handlePasswordChange = password => {
//     setPassword(password);
//   };

//   const handlePinChange = pin => {
//     setPin(pin);
//   };

//   const setPasswordVisibility = () => {
//     setHidePassword(!hidePassword);
//   };

//   const setPinVisibility = () => {
//     setHidePin(!hidePin);
//   };

//   const handleSingUp = async () => {
//     // Validation
//     if (name.trim() === '') {
//       Alert.alert('', 'Please enter name!', [{text: 'OK'}], {
//         cancelable: false,
//       });
//       return;
//     }

//     // if (name.trim() === '') {
//     //   Alert.alert('', 'Please enter name!');
//     //   return;
//     // }

//     if (!isMobileNumber(mobile)) {
//       Alert.alert('', 'Please enter  valid number!', [{text: 'OK'}], {
//         cancelable: false,
//       });
//       return;
//     }

//     if (password.trim() === '') {
//       Alert.alert('', 'Please enter password!', [{text: 'OK'}], {
//         cancelable: false,
//       });
//       return;
//     }

//     if (pin.trim() === '') {
//       Alert.alert('', 'Please enter  valid pin!', [{text: 'OK'}], {
//         cancelable: false,
//       });
//       return;
//     }

//     try {
//       const params = {
//         name: name,
//         mobile: mobile,
//         password: password,
//         pin_number: pin,
//       };

//       const response = await makeRequest(
//         BASE_URL + 'user_register',
//         params,
//         true,
//       );

//       if (response) {
//         const {ResponseCode, Message} = response;

//         if (ResponseCode === 200) {
//           setShowProcessingLoader(false);

//           showToast(Message);

//           props.navigation.navigate('Login');
//         } else {
//           setShowProcessingLoader(false);
//           alert(Message);
//         }
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.homeContainer}>
//         <Image source={logo} resizeMode="cover" style={styles.logo} />

//         <Text style={styles.titleText}>Register</Text>

//         <View style={styles.inputContainer}>
//           <FontAwesome5
//             name="user-alt"
//             size={20}
//             color={'#1e9de0'}
//             style={styles.inputIcon}
//           />

//           <TextInput
//             placeholder="Enter Your Name"
//             placeholderTextColor={'#757575'}
//             style={styles.formText}
//             value={name}
//             onChangeText={handleNameChange}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <FontAwesome5
//             name="mobile-alt"
//             size={20}
//             color={'#1e9de0'}
//             style={styles.inputIcon}
//           />

//           <TextInput
//             placeholder="Enter Your Mobile Number"
//             placeholderTextColor={'#757575'}
//             style={styles.formText}
//             value={mobile}
//             maxLength={10}
//             keyboardType="decimal-pad"
//             onChangeText={handleMobileNumberChange}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <FontAwesome
//             name="lock"
//             size={22}
//             color={'#1e9de0'}
//             style={styles.inputIcon}
//           />

//           <TextInput
//             placeholder="Password"
//             placeholderTextColor={'#757575'}
//             style={styles.formText}
//             value={password}
//             secureTextEntry={hidePassword}
//             onChangeText={handlePasswordChange}
//           />

//           <TouchableOpacity
//             activeOpacity={0.8}
//             style={styles.touchAbleButton}
//             onPress={setPasswordVisibility}>
//             <Image
//               source={hidePassword ? ic_hide : ic_show}
//               style={styles.buttonImage}
//             />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.inputContainer}>
//           <FontAwesome
//             name="lock"
//             size={22}
//             color={'#1e9de0'}
//             style={styles.inputIcon}
//           />

//           <TextInput
//             placeholder="Enter Your Pin"
//             placeholderTextColor={'#757575'}
//             style={styles.formText}
//             value={pin}
//             secureTextEntry={hidePin}
//             maxLength={4}
//             keyboardType="decimal-pad"
//             onChangeText={handlePinChange}
//           />

//           <TouchableOpacity
//             activeOpacity={0.8}
//             style={styles.touchAbleButton}
//             onPress={setPinVisibility}>
//             <Image
//               source={hidePin ? ic_hide : ic_show}
//               style={styles.buttonImage}
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.buttonContainer} onPress={handleSingUp}>
//           <Text style={styles.signUpText}>Sign Up</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.buttonContainer1}
//           onPress={() => {
//             props.navigation.navigate('Login');
//           }}>
//           <Text style={styles.signUpText}>Already Registered? LOGIN</Text>
//         </TouchableOpacity>
//       </View>

//       {showProcessingLoader && <ProcessingLoader />}
//     </SafeAreaView>
//   );
// };

// export default SignUpScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e9de0',
//   },
//   homeContainer: {
//     flex: 1,
//   },
//   logo: {
//     height: hp(20),
//     aspectRatio: 205 / 196,
//     alignSelf: 'center',
//     marginTop: hp(10),
//   },
//   titleText: {
//     fontSize: wp(5.5),
//     fontFamily: 'Roboto-Bold',
//     // color: '#bcbcc7',
//     color: '#fff',
//     marginLeft: wp(4),
//     marginVertical: hp(2),
//   },
//   inputContainer: {
//     height: hp(7),
//     borderWidth: 1.5,
//     borderColor: '#bcbcc7',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: wp(4),
//     borderRadius: wp(2),
//     marginVertical: hp(1.5),
//     backgroundColor: '#f2f2f2',
//   },
//   inputIcon: {
//     marginLeft: wp(4),
//   },

//   formText: {
//     flex: 1,
//     fontSize: wp(3.5),
//     fontFamily: 'Roboto-Bold',
//     color: '#000',
//     marginLeft: wp(2),
//     // backgroundColor: '#f1f1f1',
//   },

//   touchAbleButton: {
//     position: 'absolute',
//     right: 6,
//     height: hp(6),
//     width: wp(7),
//     padding: 2,
//   },
//   buttonImage: {
//     resizeMode: 'contain',
//     height: '100%',
//     width: '100%',
//   },
//   buttonContainer: {
//     height: hp(7),
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: wp(4),
//     marginVertical: hp(2),
//     borderRadius: wp(2),
//     // backgroundColor: '#63627c',
//     backgroundColor: '#f1f1f1',
//   },
//   signUpText: {
//     fontSize: wp(4),
//     fontFamily: 'Roboto-Bold',
//     // color: '#fff',
//     color: '#1e9de1',
//   },
//   buttonContainer1: {
//     height: hp(6),
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginHorizontal: wp(4),
//     marginVertical: hp(2),
//     borderRadius: wp(2),
//     // backgroundColor: '#63627c',
//     backgroundColor: '#f1f1f1',
//   },
// });
