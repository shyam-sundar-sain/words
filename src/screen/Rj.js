// /* eslint-disable prettier/prettier */
// import React, {useState} from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ActivityIndicatorBase,
//   Alert,
// } from 'react-native';

// // import ansh from '../asserts/Image/Ansh.png';
// // import user from '../asserts/Image/user.png';
// // import phone from '../asserts/Image/phone.png';
// // import email from '../asserts/Image/email.png';
// // import password from '../asserts/Image/password.png';
// // import hide from '../asserts/Image/hide.png';
// // import show from '../asserts/Image/show.png';
// // import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// // import second from 'react-nativ';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
// const Rj = ({navigation}) => {
//   const [fullName, setFullName] = useState('');
//   const handleFullName = a => {
//     setFullName(a);
//   };
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const handlePhone = b => {
//     setPhoneNumber(b.replace(/[^0-9]/g), '');
//   };
//   const [emailid, setEmail] = useState('');
//   const handleEmail = c => {
//     setEmail(c);
//   };
//   const [newPassword, setNewPassword] = useState('');
//   const handleNewPassword = d => {
//     setNewPassword(d);
//   };
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const handleConfirmPassword = f => {
//     setConfirmPassword(f);
//   };

//   // validation
//   const hendleSignup = async () => {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (fullName.trim === '') {
//       Alert.alert('please eter F');
//       return true;
//     }

//     if (phoneNumber.trim() === '') {
//       Alert.alert(' Please enter Pho');
//       return true;
//     }
//     if (phoneNumber.length < 10 === '') {
//       Alert.alert(' Please enter Pho');
//       return true;
//     }

//     if (emailid.trim() === '') {
//       Alert.alert(' Please enter Em');
//       return true;
//     }

//     if (!regex.test(emailid)) {
//       Alert.alert('Please enter valid email id');
//       return true;
//     }

//     if (confirmPassword.trim() === '') {
//       Alert.alert(' Please enter Con');
//       return true;
//     }
//   };

//   try {
//     const params = {
//       full_name: fullName,
//       phone_number: phoneNumber,
//       email_address: emailid,
//       new_password: newPassword,
//     };

//     var formdata = new FormData();
//     for (let key in params) {
//       formdata.append(key, params[key]);
//     }

//     var info = {};
//     info.method = 'POST';
//     info.body = formdata;

//     console.log('info =>>>>>>>>>', info);

//     // const response = await fetch('https://staging.premad.in/ansh_app/api/createUser', info)
//     const response = fetch(
//       'https://staging.premad.in/ansh_app/api/createUser',
//       info,
//     );

//     if (response) {
//       const newResponse = response.json();
//     }
//   } catch (error) {
//     console.log(error);
//   }

//   return (
//     <View style={styles.container}>
//       {/* <KeyboardAwareScrollView> */}
//       <View style={styles.homeContainer}>
//         {/* <Image source={ansh} style={styles.anshImage} /> */}
//         <View style={styles.hibox}>
//           <Text style={styles.hitext}>
//             Hi, Welcome to
//             <Text style={styles.anshtext}> Ansh</Text>
//           </Text>
//           <Text style={styles.createtext}>
//             Create account, Please fill the details below
//           </Text>
//         </View>

//         <View style={styles.fullnamehomebox}>
//           {/* <Image source={user} style={styles.userImage} /> */}
//           <TextInput
//             style={styles.fullnametext}
//             value={fullName}
//             placeholder="FULL NAME*"
//             placeholderTextColor={'#613b1699'}
//             onChangeText={handleFullName}
//           />
//         </View>

//         <View style={styles.fullnamehomebox}>
//           {/* <Image source={phone} style={styles.userImage} /> */}
//           <TextInput
//             keyboardType="phone-pad"
//             style={styles.fullnametext}
//             value={phoneNumber}
//             maxLength={10}
//             placeholder="PHONE NUMBER*"
//             placeholderTextColor={'#613b1699'}
//             onChangeText={handlePhone}
//           />
//         </View>
//         <View style={styles.fullnamehomebox}>
//           {/* <Image source={email} style={styles.userImage} /> */}
//           <TextInput
//             style={styles.fullnametext}
//             placeholder="EMAIL ADDRESS*"
//             keyboardType="email-address"
//             placeholderTextColor={'#613b1699'}
//             onChangeText={handleEmail}
//             value={emailid}
//           />
//         </View>

//         <View style={styles.fullnamehomebox}>
//           {/* <Image source={password} style={styles.userImage} /> */}
//           <TextInput
//             style={styles.fullnametext}
//             placeholder="NEW PASSWORD*"
//             placeholderTextColor={'#613b1699'}
//             // secureTextEntry={hideVisible}
//             onChangeText={handleNewPassword}
//             value={newPassword}
//           />

//           <TouchableOpacity
//           // onPress={() => sethideVisible(!hideVisible)}
//           >
//             {/* <Image
//                 source={hideVisible ? hide : show}
//                 style={styles.hideImage2}
//               /> */}
//           </TouchableOpacity>
//         </View>
//         <View style={styles.fullnamehomebox}>
//           {/* <Image source={password} style={styles.userImage} /> */}

//           <TextInput
//             style={styles.fullnametext}
//             keyboardType="default"
//             placeholder="CONFIRM PASSWORD*"
//             placeholderTextColor={'#613b1699'}
//             // secureTextEntry={hidePassword}
//             onChangeText={handleConfirmPassword}
//             value={confirmPassword}
//           />
//           <TouchableOpacity
//           // onPress={() => setHidePassword(!hidePassword)}
//           >
//             {/* <Image
//                 source={hidePassword ? hide : show}
//                 style={styles.hideImage2}
//               /> */}
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.Signupbox} onPress={hendleSignup}>
//           <Text style={styles.Signuptext}>Sign Up</Text>
//         </TouchableOpacity>

//         <View style={styles.alreadyhavebox}>
//           <Text style={styles.alreadyhavetext}>
//             Already have an account?
//             <Text
//               style={styles.signintext}
//               onPress={() => navigation.navigate('SignIn')}>
//               Sign In
//             </Text>
//           </Text>
//         </View>

//         <View style={styles.privacyhomebox}>
//           <Text style={styles.tourntext}>Term of Uses,</Text>
//           <TouchableOpacity>
//             <Text style={styles.privacytext}> Privacy Policy</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {/* </KeyboardAwareScrollView> */}
//     </View>
//   );
// };
// export default Rj;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   homeContainer: {
//     flex: 1,
//     height: hp(100),
//   },
//   shirttext: {
//     fontSize: wp(4),
//   },
//   anshImage: {
//     height: hp(20),
//     width: wp(40),
//     marginTop: hp(2),
//     alignSelf: 'center',
//   },
//   hitext: {
//     fontSize: wp(6),
//     fontWeight: 'bold',
//     marginTop: hp(2),
//     color: '#7f6042',
//   },
//   anshtext: {
//     fontSize: wp(5),
//     color: '#0cae5b',
//   },
//   createtext: {
//     fontSize: wp(4),
//     color: '#7f6042',
//     marginVertical: hp(2),
//   },
//   hibox: {
//     alignSelf: 'center',
//   },
//   fullnamehomebox: {
//     height: hp(6),
//     marginHorizontal: wp(10),
//     borderRadius: wp(1),
//     backgroundColor: '#fff',
//     elevation: 5,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: hp(1),
//   },
//   userImage: {
//     height: hp(2.5),
//     width: wp(5),
//     marginLeft: wp(4),
//   },
//   fullnametext: {
//     fontSize: wp(3.5),
//     width: wp(50),
//     marginLeft: wp(2),
//     color: '#613b16',
//     fontWeight: '600',
//   },
//   hideImage: {
//     height: hp(3),
//     width: wp(6),
//     marginLeft: wp(30),
//   },
//   hideImage2: {
//     height: hp(2.5),
//     width: wp(5),
//     marginLeft: wp(10),
//   },
//   Signupbutton: {
//     height: hp(5),
//     borderWidth: 1,
//   },
//   signinbox: {
//     fontSize: wp(4),
//     marginTop: hp(2),
//   },
//   Signupbox: {
//     height: hp(6),
//     marginHorizontal: wp(14),
//     borderRadius: wp(1),
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: hp(2),
//     backgroundColor: '#0cae5b',
//   },
//   Signuptext: {
//     fontSize: wp(4),
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   alreadyhavetext: {
//     fontSize: wp(3.5),
//     fontWeight: '500',
//     color: '#7f6042',
//   },
//   signintext: {
//     fontSize: wp(3.5),
//     color: '#5fbff4',
//     fontWeight: 'bold',
//   },
//   alreadyhavebox: {
//     alignSelf: 'center',
//     alignItems: 'center',
//   },
//   tourntext: {
//     fontSize: wp(3.5),
//     fontWeight: '500',
//     color: '#7f6042',
//   },
//   privacytext: {
//     fontSize: wp(3.5),
//     color: '#5fbff4',
//   },
//   placeholderTextColor: {
//     color: '#613b16',
//   },
//   privacyhomebox: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: hp(9),
//   },
// });
