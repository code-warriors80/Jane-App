import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import tailwind from 'twrnc';

const OTPScreen: React.FC = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']); // Array to store OTP digits
  const [timer, setTimer] = useState(60); // Timer in seconds
  const [timerActive, setTimerActive] = useState(true); // Control timer activation

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive) {
      interval = setInterval(() => {
        if (timer > 0) {
          setTimer((prevTimer) => prevTimer - 1);
        } else {
          setTimerActive(false);
          clearInterval(interval);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer, timerActive]);

  const handleOTPChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move to the next input after entering a digit
    if (index < 5 && value !== '') {
      const nextInput = index + 1;
      const nextInputRef = `otpInput${nextInput}`;
      if (this[nextInputRef]) {
        this[nextInputRef].focus();
      }
    }
  };

  const handleResend = () => {
    // Logic for resending OTP
    setTimer(60);
    setTimerActive(true);
    // Implement OTP resend functionality here
  };

  return (
    <View style={tailwind`mt-15 justify-center p-4 items-center`}>
      <Image
        source={require('../../assets/logo/logo1.png')}
        style={tailwind`w-60 h-60 `}
        resizeMode="contain"
      />

      <Text style={tailwind`text-2xl mb-2`}>Verification</Text>
      <Text style={tailwind`text-sm mb-8 `}>Confirmation code has been sent to your phone number</Text>
      <View style={tailwind`flex-row justify-evenly items-center w-full mb-4`}>
        {[...Array(5)].map((_, index) => (
          <TextInput
            key={index.toString()}
            ref={(input) => {
              this[`otpInput${index}`] = input;
            }}
            style={tailwind`w-12 h-12 border rounded-2 border-pink-600 text-center`}
            value={otp[index]}
            onChangeText={(value) => handleOTPChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
          />
        ))}
      </View>
      <Text style={tailwind`text-lg mb-2`}>Resend in {timer} seconds</Text>
      {/* Timer display */}
      <TouchableOpacity style={tailwind`bg-[#ec589c] py-3 px-6 rounded-md`} onPress={() => console.log(otp)}>
        <Text style={tailwind`text-white text-lg font-semibold`}>Verify OTP</Text>
      </TouchableOpacity>

      <TouchableOpacity style={tailwind`py-3 px-6 rounded-md mb-4`} onPress={handleResend}>
        <Text style={tailwind`text-lg font-semibold`}>Resend</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;
