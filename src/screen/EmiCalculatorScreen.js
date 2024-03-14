/* eslint-disable prettier/prettier */
/* eslint-disable radix */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
// import {
//   heightPercentageToDP as hp,
//   widthPercentageToDP as wp,
// } from 'react-native-responsive-screen';
// import {SafeAreaView} from 'react-native-safe-area-context';

// IMAGES & ICONS...
// import BackArrow from '../assets/Icon/BackArrow.png';

const EMICalculator = props => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEMI] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [emiList, setEMIList] = useState([]);
  const headers = ['Month', 'Principal', 'Interest', 'Total'];

  const calculateEMI = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / (12 * 100); // Monthly interest rate
    const n = parseInt(tenure); // Total number of payments

    if (p > 0 && r > 0 && n > 0) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEMI(emiValue.toFixed(2));

      const totalPaymentValue = emiValue * n;
      setTotalPayment(totalPaymentValue.toFixed(2));

      const totalInterestValue = totalPaymentValue - p;
      setTotalInterest(totalInterestValue.toFixed(2));

      // Calculate EMI List
      const emiData = [];

      let remainingPrincipal = p;
      for (let i = 1; i <= n; i++) {
        const interestPayment = remainingPrincipal * r;
        const principalPayment = emiValue - interestPayment;
        remainingPrincipal -= principalPayment;
        emiData.push({
          month: i,
          principalPayment: principalPayment.toFixed(2),
          interestPayment: interestPayment.toFixed(2),
          totalPayment: emiValue.toFixed(2),
        });
      }

      setEMIList(emiData);
    } else {
      setEMI(null);
      setTotalInterest(null);
      setTotalPayment(null);
      setEMIList([]);
    }
  };

  const handleBack = () => {
    props.navigation.pop();
  };

  const renderItem = ({item}) => (
    <View
      style={{
        borderColor: '#ccc',
        flexDirection: 'column',
        // borderRadius: wp(2),
        alignSelf: 'center',
        width: '100%', // Set the width to 90% of the screen width
        marginHorizontal: '5%', // Add horizontal margin to center the table
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={[styles.cell, styles.monthCell]}>
          {/* Apply monthCell styles */}
          <Text style={styles.cellText}>{item.month}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellText}>{item.principalPayment}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellText}>{item.interestPayment}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.cellText}>{item.totalPayment}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* HEADER... */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack}>
          {/* <Image source={BackArrow} style={styles.headerImage} /> */}
        </TouchableOpacity>
        <Text style={styles.headerText}>EMI Calculator</Text>
      </View>

      {/* MAIN WHITE BOX CONTAINER... */}
      <View style={styles.homeContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Principal Amount:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Amount"
            keyboardType="numeric"
            value={principal}
            onChangeText={text => setPrincipal(text)}
          />
          <Text style={styles.text}>Interest Rate (Annual %):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter value"
            keyboardType="numeric"
            value={interestRate}
            onChangeText={text => setInterestRate(text)}
          />
          <Text style={styles.text}>Tenure (in Month):</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter"
            keyboardType="numeric"
            value={tenure}
            onChangeText={text => setTenure(text)}
          />
          {/* LOG OUT BUTTON... */}
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={calculateEMI}>
            <Text style={styles.buttonText}>Calculate EMI</Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: wp(8),
            }}>
            <View>
              {emi !== null && <Text style={styles.emiText}>EMI</Text>}
              {emi !== null && <Text style={styles.outputValue}>{emi}</Text>}
            </View>

            <View>
              {totalInterest !== null && (
                <Text style={styles.emiText}>Interest</Text>
              )}
              {totalInterest !== null && (
                <Text style={styles.outputValue}>{totalInterest}</Text>
              )}
            </View>

            <View>
              {totalPayment !== null && (
                <Text style={styles.emiText}>Total Payment</Text>
              )}
              {totalPayment !== null && (
                <Text style={styles.outputValue}>{totalPayment}</Text>
              )}
            </View>
          </View>
          {emi !== null && (
            <Text
              style={{
                // fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
                fontSize: 18,
                marginVertical: hp(3),
                marginHorizontal: wp(8),
                color: '#23416E',
              }}>
              EMI Details:
            </Text>
          )}
          {emiList.length > 0 && (
            <View
              style={{
                // marginBottom: hp(2),
                paddingBottom: hp(4),
                backgroundColor: '#fff',
                // paddingHorizontal: wp(3),
                borderTopLeftRadius: hp(5),
                borderTopRightRadius: hp(5),
                elevation: 10,
              }}>
              <View style={styles.table}>
                <View style={styles.headerRow}>
                  {headers.map((header, index) => (
                    <View style={styles.headerCell} key={index}>
                      <Text style={styles.headerText1}>{header}</Text>
                    </View>
                  ))}
                </View>
              </View>

              <FlatList
                data={emiList}
                renderItem={renderItem}
                keyExtractor={item => item.month.toString()}
              />
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default EMICalculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23416E',
  },
  header: {
    backgroundColor: '#23416E',
    // height: hp(12),
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    // height: hp(3.6),
    // width: wp(6.5),
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
    // fontWeight: 'bold',
    // marginLeft: wp(5),
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#eee',
    // paddingTop: hp(6),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  buttonContainer: {
    // paddingHorizontal: wp(4),
    // paddingVertical: hp(1),
    backgroundColor: '#FC5A0A',
    justifyContent: 'center',
    // borderRadius: hp(4),
    // marginBottom: hp(3),
    alignSelf: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    // fontWeight: '500',
  },
  // input: {
  //   marginBottom: hp(3),
  //   marginHorizontal: wp(8),
  //   paddingHorizontal: wp(2),
  //   flexDirection: 'row',
  //   borderColor: '#23416E',
  //   borderWidth: wp(0.5),
  //   borderRadius: 10,
  // },
  text: {
    color: '#23416E',
    justifyContent: 'flex-start',
    // marginBottom: hp(1),
    // marginHorizontal: wp(8),
    fontFamily: 'Roboto-Medium',
    // fontWeight: '500',
  },
  emiText: {
    color: '#23416E',
    justifyContent: 'flex-start',
    // marginVertical: hp(1),
    // alignSelf: 'center',
  },
  outputValue: {
    // marginLeft: wp(2),
    // marginBottom: hp(1),
    // fontWeight: '500',
    fontFamily: 'Roboto-Medium',
    color: '#23416E',
    // borderBottomWidth: wp(0.5),
    borderColor: '#23416E',
    alignSelf: 'center',
  },
  table: {
    // borderWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'column',
    // borderRadius: wp(2),
    alignSelf: 'center',
    width: '100%', // Set the width to 90% of the screen width
    marginHorizontal: '5%', // Add horizontal margin to center the table
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 71, 171, 0.25)',
    // borderTopRightRadius: wp(10),
    // borderTopLeftRadius: wp(10),
  },
  headerCell: {
    flex: 1,
    padding: 10,
  },
  headerText1: {
    // fontSize: wp(4),
    fontFamily: 'Roboto-Bold',
    color: 'rgba(0, 71, 171, 1)',
    textAlign: 'center',
  },
  cell: {
    flex: 1, // Match the flex property with header cells
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderRightWidth: 1,
    borderRightColor: 'black',
    // Add any additional styles you need for data cells here
  },
  cellText: {
    alignSelf: 'center',
    color: '#23416E',
    // Add any additional styles you need for text in data cells here
  },
  monthCell: {
    // width: wp(20),
    // borderWidth: 1,
    // marginLeft: wp(-2), // Set a fixed width for the "Month" column
  },
});
