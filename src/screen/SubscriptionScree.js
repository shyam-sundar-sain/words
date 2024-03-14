import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ic_rightArrow from '../image/rightArrow.png';

const SubscriptionScree = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sloteText}>Slote</Text>
      <TouchableOpacity style={styles.subscriberBox}>
        <View style={{flexDirection: 'row', marginTop: hp(1.5)}}>
          <Text style={styles.subscriberText}>Subscriber Id</Text>
          <Text style={styles.idText}>MYMANUJ01</Text>
          <Image source={ic_rightArrow} style={styles.righIma} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.subscriberBox}>
        <View style={{flexDirection: 'row', marginTop: hp(1.5)}}>
          <Text style={styles.subscriberText}>Subscriber Id</Text>
          <Text style={styles.idText}>MYMANUJ01</Text>
          <Image source={ic_rightArrow} style={styles.righIma} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SubscriptionScree;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  sloteText: {
    fontSize: wp(5),
    color: 'rgba(237, 128, 43, 1)',
    fontWeight: '700',
    marginLeft: wp(4),
    marginTop: hp(3),
  },

  subscriberBox: {
    height: hp(6),
    backgroundColor: '#fff',
    marginHorizontal: wp(4),
    borderRadius: wp(2),
    elevation: 5,
    marginTop: hp(2),
  },

  subscriberText: {
    fontSize: wp(4),
    color: 'rgba(237, 128, 43, 1)',
    marginLeft: wp(4),
    fontWeight: '700',
  },

  idText: {
    fontSize: wp(4),
    color: 'rgba(0, 0, 0, 1)',
    marginLeft: wp(4),
    fontWeight: '400',
  },
  righIma: {
    height: hp(2),
    width: wp(4.2),
    marginTop: hp(0.3),
    marginLeft: wp(26),
  },
});
